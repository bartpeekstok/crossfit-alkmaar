"""Wekelijks SEO-rapport uit Google Search Console voor crossfitalkmaar.com.

Draait zonder externe dependencies (alleen Python-stdlib), zodat het zowel
lokaal als in een cloud-agent werkt. Credentials komen uit environment vars:

  GSC_CLIENT_ID, GSC_CLIENT_SECRET, GSC_REFRESH_TOKEN

Output: reports/gsc/<jaar>-w<weeknr>.md (aangemaakt vanaf de repo-root).

GSC-data loopt ~2-3 dagen achter; het rapport vergelijkt daarom de laatste
7 volledige dagen (t/m 3 dagen geleden) met de 7 dagen daarvoor.
"""
import io
import json
import os
import sys
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor
from datetime import date, timedelta
from pathlib import Path

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

SITE = "sc-domain:crossfitalkmaar.com"
BASE_URL = "https://www.crossfitalkmaar.com"
REPO_ROOT = Path(__file__).resolve().parent.parent


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


TOKEN = get_access_token()


def api(url, payload):
    req = urllib.request.Request(url, data=json.dumps(payload).encode(), headers={
        "Authorization": f"Bearer {TOKEN}",
        "Content-Type": "application/json",
    })
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.load(r)


def sa_query(body):
    url = ("https://searchconsole.googleapis.com/webmasters/v3/sites/"
           + urllib.parse.quote(SITE, safe="") + "/searchAnalytics/query")
    return api(url, body).get("rows", [])


def inspect(url):
    return api("https://searchconsole.googleapis.com/v1/urlInspection/index:inspect",
               {"inspectionUrl": url, "siteUrl": SITE})


def fetch_sitemap_urls():
    if not os.environ.get("GSC_SKIP_SITEMAP_HTTP"):
        try:
            with urllib.request.urlopen(f"{BASE_URL}/sitemap.xml", timeout=30) as r:
                xml_data = r.read()
            ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
            return [e.text for e in ET.fromstring(xml_data).findall(".//sm:loc", ns)]
        except Exception as e:
            print(f"sitemap.xml niet bereikbaar ({str(e)[:60]}); "
                  "lijst wordt uit de repo-bron gereconstrueerd.")
    import re
    paths = {"/"}  # de homepage staat als kale baseUrl in sitemap.ts
    sitemap_ts = (REPO_ROOT / "app" / "sitemap.ts").read_text(encoding="utf-8")
    for m in re.finditer(r"\$\{baseUrl\}(/[A-Za-z0-9\-/]*)`", sitemap_ts):
        if "${" not in m.group(1):
            paths.add(m.group(1))
    # blogPosts is een object met de slugs als keys ("mijn-slug": { ... })
    blog_ts = (REPO_ROOT / "app" / "blog" / "[slug]" / "blogData.ts").read_text(encoding="utf-8")
    for m in re.finditer(r'(?m)^\s{0,2}"([a-z0-9\-]+)":\s*\{', blog_ts):
        paths.add(f"/blog/{m.group(1)}")
    return [BASE_URL + (p if p != "/" else "") for p in sorted(paths)]


def totals(rows):
    return sum(r["clicks"] for r in rows), sum(r["impressions"] for r in rows)


def fmt_delta(cur, prev):
    d = cur - prev
    return f"{cur} ({'+' if d >= 0 else ''}{d} t.o.v. vorige week)"


def main():
    today = date.today()
    cur_end = today - timedelta(days=3)
    cur_start = cur_end - timedelta(days=6)
    prev_end = cur_start - timedelta(days=1)
    prev_start = prev_end - timedelta(days=6)
    iso_year, iso_week, _ = today.isocalendar()

    def rng(a, b):
        return {"startDate": a.isoformat(), "endDate": b.isoformat()}

    q_cur = sa_query({**rng(cur_start, cur_end), "dimensions": ["query"], "rowLimit": 250})
    q_prev = sa_query({**rng(prev_start, prev_end), "dimensions": ["query"], "rowLimit": 250})
    p_cur = sa_query({**rng(cur_start, cur_end), "dimensions": ["page"], "rowLimit": 250})
    p_prev = sa_query({**rng(prev_start, prev_end), "dimensions": ["page"], "rowLimit": 250})

    c_cur, i_cur = totals(q_cur)
    c_prev, i_prev = totals(q_prev)

    prev_by_q = {r["keys"][0]: r for r in q_prev}
    prev_by_p = {r["keys"][0]: r for r in p_prev}

    # Indexatie-audit over de sitemap. Live ophalen kan geblokkeerd zijn
    # (cloud-omgevingen laten alleen goedgekeurde domeinen door); dan
    # reconstrueren we de lijst uit de repo-bron (app/sitemap.ts + blogData).
    sitemap_urls = fetch_sitemap_urls()

    def inspect_one(u):
        try:
            res = inspect(u)["inspectionResult"]["indexStatusResult"]
            return u, res.get("coverageState", "onbekend")
        except Exception as e:
            return u, f"inspectie mislukt ({str(e)[:40]})"

    coverage = {}
    # Parallel: de inspectie-API doet er seconden per URL over; 8 tegelijk
    # blijft ruim onder Googles limiet van 600 inspecties per minuut.
    with ThreadPoolExecutor(max_workers=8) as pool:
        for u, state in pool.map(inspect_one, sitemap_urls):
            coverage.setdefault(state, []).append(u.replace(BASE_URL, "") or "/")

    indexed = sum(len(v) for k, v in coverage.items() if "indexed" in k.lower() and "not" not in k.lower())

    # Rapport opbouwen
    out = []
    out.append(f"# SEO-weekrapport {iso_year}, week {iso_week}")
    out.append(f"\n*Periode: {cur_start} t/m {cur_end}, vergeleken met {prev_start} t/m {prev_end}.*\n")
    out.append("## Totalen\n")
    out.append(f"- **Klikken:** {fmt_delta(c_cur, c_prev)}")
    out.append(f"- **Vertoningen:** {fmt_delta(i_cur, i_prev)}")
    out.append(f"- **Geindexeerd:** {indexed} van {len(sitemap_urls)} sitemap-URL's\n")

    out.append("## Top 15 zoekwoorden\n")
    out.append("| Zoekwoord | Klikken | Vorige week | Vertoningen | Positie |")
    out.append("|---|---|---|---|---|")
    for r in sorted(q_cur, key=lambda x: -x["clicks"])[:15]:
        pq = prev_by_q.get(r["keys"][0], {})
        out.append(f"| {r['keys'][0]} | {r['clicks']} | {pq.get('clicks', 0)} "
                   f"| {r['impressions']} | {r['position']:.1f} |")

    out.append("\n## Top 15 pagina's\n")
    out.append("| Pagina | Klikken | Vorige week | Vertoningen |")
    out.append("|---|---|---|---|")
    for r in sorted(p_cur, key=lambda x: -x["clicks"])[:15]:
        pp = prev_by_p.get(r["keys"][0], {})
        path = r["keys"][0].replace(BASE_URL, "") or "/"
        out.append(f"| {path} | {r['clicks']} | {pp.get('clicks', 0)} | {r['impressions']} |")

    out.append("\n## Grootste verschuivingen (klikken t.o.v. vorige week)\n")
    movers = []
    for r in q_cur:
        prev_clicks = prev_by_q.get(r["keys"][0], {}).get("clicks", 0)
        movers.append((r["clicks"] - prev_clicks, r["keys"][0], r["clicks"], prev_clicks))
    movers.sort()
    for d, q, c, p in list(reversed(movers[-5:])) + movers[:5]:
        if d != 0:
            out.append(f"- `{q}`: {p} -> {c} ({'+' if d > 0 else ''}{d})")

    out.append("\n## Indexatiestand per categorie\n")
    for state, paths in sorted(coverage.items(), key=lambda kv: -len(kv[1])):
        out.append(f"\n**{state}: {len(paths)}**")
        if "indexed" not in state.lower() or "not" in state.lower():
            for p in paths:
                out.append(f"- {p}")

    # Concreet actielijstje: nieuwe (onbekende) URL's kun je handmatig
    # aanvragen in GSC; wachtrij-URL's hoeven alleen gevolgd te worden.
    unknown = [p for s, ps in coverage.items() if "unknown" in s.lower() for p in ps]
    queued = [p for s, ps in coverage.items()
              if ("discovered" in s.lower() or "crawled" in s.lower()) and "not indexed" in s.lower()
              for p in ps]
    out.append("\n## Actiepunten indexatie\n")
    if unknown:
        out.append("**Nog onbekend bij Google — vraag handmatig indexering aan "
                   "(GSC > URL plakken in de inspectiebalk > Indexering aanvragen):**")
        for p in unknown:
            out.append(f"- https://www.crossfitalkmaar.com{p if p != '/' else ''}")
    if queued:
        out.append("\n**In Google's wachtrij — geen actie nodig, alleen volgen:**")
        for p in queued:
            out.append(f"- {p}")
    if not unknown and not queued:
        out.append("- Geen actie nodig: alle sitemap-URL's zijn bekend bij Google.")

    report_dir = REPO_ROOT / "reports" / "gsc"
    report_dir.mkdir(parents=True, exist_ok=True)
    report_path = report_dir / f"{iso_year}-w{iso_week:02d}.md"
    report_path.write_text("\n".join(out) + "\n", encoding="utf-8")
    print(f"Rapport geschreven: {report_path}")

    # history.json voor het dashboard: klikken/vertoningen per ISO-week
    # (laatste ~16 weken, elke run opnieuw opgebouwd zodat nagekomen
    # GSC-data zichzelf corrigeert), plus indexatiestand per run.
    daily = sa_query({"startDate": (today - timedelta(days=115)).isoformat(),
                      "endDate": cur_end.isoformat(), "dimensions": ["date"]})
    weeks = {}
    for r in daily:
        d = date.fromisoformat(r["keys"][0])
        y, w, _ = d.isocalendar()
        key = f"{y}-W{w:02d}"
        entry = weeks.setdefault(key, {
            "week": key,
            "start": (d - timedelta(days=d.isoweekday() - 1)).isoformat(),
            "clicks": 0, "impressions": 0,
            "indexed": None, "totalUrls": None,
        })
        entry["clicks"] += r["clicks"]
        entry["impressions"] += r["impressions"]

    history_path = report_dir / "history.json"
    if history_path.exists():
        for old in json.loads(history_path.read_text(encoding="utf-8")).get("weeks", []):
            if old["week"] in weeks and old.get("indexed") is not None:
                weeks[old["week"]]["indexed"] = old["indexed"]
                weeks[old["week"]]["totalUrls"] = old.get("totalUrls")

    run_week = f"{iso_year}-W{iso_week:02d}"
    if run_week in weeks:
        weeks[run_week]["indexed"] = indexed
        weeks[run_week]["totalUrls"] = len(sitemap_urls)

    history = {
        "site": SITE,
        "updatedAt": today.isoformat(),
        "lastReport": report_path.name,
        "weeks": [weeks[k] for k in sorted(weeks)],
    }
    history_path.write_text(json.dumps(history, indent=1) + "\n", encoding="utf-8")
    print(f"Historie bijgewerkt: {history_path} ({len(weeks)} weken)")
    print(f"Klikken {c_prev} -> {c_cur}, vertoningen {i_prev} -> {i_cur}, "
          f"geindexeerd {indexed}/{len(sitemap_urls)}")


if __name__ == "__main__":
    main()
