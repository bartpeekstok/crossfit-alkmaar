"""Kansenanalyse voor de blog-agent: welke zoekvragen hebben vraag maar geen content?

Leest 90 dagen zoekdata uit Google Search Console en print JSON met:
  - queries: zoekwoorden met vertoningen, gesorteerd op potentie
  - existingPages: alle paden op de site (uit app/sitemap.ts + blogData.ts)
  - existingBlogSlugs: bestaande blogslugs

Credentials via env vars GSC_CLIENT_ID / GSC_CLIENT_SECRET / GSC_REFRESH_TOKEN
(zelfde als gsc_weekly_report.py). Alleen Python-stdlib.
"""
import io
import json
import os
import re
import sys
import urllib.parse
import urllib.request
from datetime import date, timedelta
from pathlib import Path

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

SITE = "sc-domain:crossfitalkmaar.com"
REPO_ROOT = Path(__file__).resolve().parent.parent

BRAND_TERMS = ("crossfit alkmaar", "cf alkmaar", "cfa ", "peekstok",
               "malou", "absoluut fit", "hylas")


def get_access_token():
    for var in ("GSC_CLIENT_ID", "GSC_CLIENT_SECRET", "GSC_REFRESH_TOKEN"):
        if not os.environ.get(var):
            sys.exit(f"FOUT: environment variable {var} ontbreekt.")
    body = urllib.parse.urlencode({
        "client_id": os.environ["GSC_CLIENT_ID"],
        "client_secret": os.environ["GSC_CLIENT_SECRET"],
        "refresh_token": os.environ["GSC_REFRESH_TOKEN"],
        "grant_type": "refresh_token",
    }).encode()
    req = urllib.request.Request("https://oauth2.googleapis.com/token", data=body)
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)["access_token"]


def main():
    token = get_access_token()
    end = date.today() - timedelta(days=3)
    start = end - timedelta(days=90)
    url = ("https://searchconsole.googleapis.com/webmasters/v3/sites/"
           + urllib.parse.quote(SITE, safe="") + "/searchAnalytics/query")
    req = urllib.request.Request(url, data=json.dumps({
        "startDate": start.isoformat(), "endDate": end.isoformat(),
        "dimensions": ["query"], "rowLimit": 1000,
    }).encode(), headers={"Authorization": f"Bearer {token}",
                          "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=60) as r:
        rows = json.load(r).get("rows", [])

    queries = []
    for row in rows:
        q = row["keys"][0]
        if any(b in q for b in BRAND_TERMS):
            continue
        if row["impressions"] < 10:
            continue
        queries.append({
            "query": q,
            "impressions": row["impressions"],
            "clicks": row["clicks"],
            "position": round(row["position"], 1),
        })
    # potentie: veel vertoningen, weinig klikken, matige positie eerst
    queries.sort(key=lambda x: (-(x["impressions"] * (1 if x["clicks"] == 0 else 0.3)),
                                x["position"]))

    paths = {"/"}
    sitemap_ts = (REPO_ROOT / "app" / "sitemap.ts").read_text(encoding="utf-8")
    for m in re.finditer(r"\$\{baseUrl\}(/[A-Za-z0-9\-/]*)`", sitemap_ts):
        if "${" not in m.group(1):
            paths.add(m.group(1))
    blog_ts = (REPO_ROOT / "app" / "blog" / "[slug]" / "blogData.ts").read_text(encoding="utf-8")
    slugs = re.findall(r'(?m)^\s{0,2}"([a-z0-9\-]+)":\s*\{', blog_ts)
    for s in slugs:
        paths.add(f"/blog/{s}")

    print(json.dumps({
        "periode": f"{start} t/m {end}",
        "queries": queries[:60],
        "existingPages": sorted(paths),
        "existingBlogSlugs": sorted(set(slugs)),
    }, ensure_ascii=False, indent=1))


if __name__ == "__main__":
    main()
