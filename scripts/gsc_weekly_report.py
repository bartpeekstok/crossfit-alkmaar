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
import re
import subprocess
import sys
import urllib.error
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


class _GeenRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


_OPENER = urllib.request.build_opener(_GeenRedirect)


def http_get(url, timeout=20):
    """Haal een URL op zonder redirects te volgen.

    Geeft (status, location, html). Bij een netwerkfout is status None en
    staat de reden in location. De html is leeg bij alles behalve een 200.
    """
    req = urllib.request.Request(url, headers={"User-Agent": "CFA-SEO-check/1.0"})
    try:
        with _OPENER.open(req, timeout=timeout) as r:
            return r.status, None, r.read(400_000).decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, e.headers.get("Location"), ""
    except Exception as e:
        return None, str(e)[:60], ""


# Alleen echte <a>-links tellen mee. Een kale href-match zou ook
# <link rel="canonical"> pakken, en dan lijkt elke pagina naar zichzelf te
# linken -- waardoor verweesde pagina's nooit opvallen.
INTERNE_LINK = re.compile(
    r'<a\b[^>]*?\bhref="(/[^"#?]*|' + re.escape(BASE_URL) + r'/?[^"#?]*)"',
    re.IGNORECASE)
# Next.js serveert zijn eigen assets onder /_next/; die horen niet in een
# linkcontrole thuis en leveren per definitie ruis op na elke nieuwe build.
NEGEER = re.compile(r"^/(_next/|api/)|\.(js|css|png|jpe?g|webp|svg|ico|xml|txt|pdf)$")


def crawl_en_check(sitemap_urls):
    """Loop de sitemap langs, controleer de HTTP-status en verzamel interne links.

    Geeft (kapotte_sitemap_urls, kapotte_interne_links, gelinkte_urls). De
    eerste lijst bevat sitemap-URL's die geen 200 geven -- dat is altijd fout,
    want je verwijst Google expliciet naar die pagina. De tweede bevat links
    die ergens op de site staan maar niet werken; dat is de bron van nieuwe
    404's. De derde is de set URL's waar ergens op de site naartoe gelinkt
    wordt, waarmee we verweesde pagina's kunnen opsporen.
    """
    statussen = {}
    links = set()

    def haal(u):
        return (u, *http_get(u))

    with ThreadPoolExecutor(max_workers=8) as pool:
        for u, status, loc, html in pool.map(haal, sitemap_urls):
            statussen[u] = (status, loc)
            for m in INTERNE_LINK.finditer(html):
                pad = m.group(1).replace(BASE_URL, "") or "/"
                if not NEGEER.search(pad):
                    links.add(BASE_URL + (pad if pad != "/" else ""))

    if all(s is None for s, _ in statussen.values()):
        print("Live-check overgeslagen: site niet bereikbaar vanuit deze omgeving "
              "(egress-allowlist?). Secties 'Kapotte URL's' en 'Verweesd' blijven leeg.")
        return None, None, None

    kapot_sitemap = [(u, s, l) for u, (s, l) in statussen.items() if s != 200]

    nieuw = sorted(links - set(statussen))
    kapot_link = []
    if nieuw:
        with ThreadPoolExecutor(max_workers=8) as pool:
            for u, status, loc, _ in pool.map(haal, nieuw):
                if status is not None and status != 200:
                    kapot_link.append((u, status, loc))
    return kapot_sitemap, sorted(kapot_link), links


def wees_urls(page_rows, sitemap_urls):
    """URL's die in Google's zoekresultaten verschijnen maar niet in de sitemap staan.

    Dit zijn de 'weeskinderen': oude of vergeten pagina's die nog vertoningen
    krijgen terwijl jij ze niet meer aanbiedt. Precies de categorie die een
    sitemap-only audit structureel mist.
    """
    bekend = {u.rstrip("/") for u in sitemap_urls}
    wees = []
    for r in page_rows:
        u = r["keys"][0]
        if not u.startswith(("http://", "https://")):
            continue
        # GSC rapporteert op een domain-property ook de http-variant van een
        # pagina apart; die normaliseren we weg, anders staat de homepage
        # elke week onterecht als 'niet in de sitemap' in het rapport.
        genormaliseerd = u.replace("http://", "https://", 1).rstrip("/")
        if genormaliseerd not in bekend and BASE_URL.split("//")[1] in u:
            wees.append((u, r["clicks"], r["impressions"]))
    return sorted(wees, key=lambda x: -x[2])


MERKTERMEN = ("crossfit alkmaar", "cf alkmaar", "cfa ", "peekstok", "malou",
              "absoluut fit", "hylas")


def kansen(rows, minimum=25):
    """Zoektermen waar je zichtbaar bent maar de klik niet pakt.

    Positie 4-30 betekent: Google vindt je relevant genoeg om te tonen, maar je
    staat onderaan pagina 1 of op pagina 2-3. Daar is de winst het grootst --
    een paar plaatsen stijgen levert daar meer op dan waar dan ook. Merktermen
    filteren we weg: daarop scoor je toch al, en ze vertellen niets nieuws.
    """
    uit = []
    for r in rows:
        q = r["keys"][0]
        if any(b in q for b in MERKTERMEN) or r["impressions"] < minimum:
            continue
        if not 3.5 < r["position"] < 30:
            continue
        # Gemiste klikken: wat je ongeveer laat liggen als je naar de top 3
        # zou stijgen (~15% CTR is een voorzichtige aanname voor positie 3).
        gemist = int(r["impressions"] * 0.15) - r["clicks"]
        uit.append({"query": q, "impressions": r["impressions"], "clicks": r["clicks"],
                    "position": r["position"], "ctr": r["ctr"] * 100,
                    "gemist": max(gemist, 0)})
    return sorted(uit, key=lambda x: -x["gemist"])


def kannibalisatie(sa, rng_kwartaal, top_queries):
    """Zoektermen waarop meerdere eigen pagina's tegen elkaar concurreren.

    Als twee pagina's op dezelfde term ranken, verdeelt Google je autoriteit
    over beide en wint meestal geen van beide. Dit is precies het patroon dat
    een losse landingspagina laat verliezen van de homepage.
    """
    uit = []
    for q in top_queries:
        rows = sa({**rng_kwartaal, "dimensions": ["page"], "rowLimit": 25,
                   "dimensionFilterGroups": [{"filters": [
                       {"dimension": "query", "operator": "equals", "expression": q}]}]})
        # Alleen het hoofddomein; subdomeinen (boekingswidget) tellen niet mee,
        # en pagina's met een handvol vertoningen zijn ruis.
        eigen = [(r["keys"][0], r["impressions"], r["position"]) for r in rows
                 if r["keys"][0].startswith(BASE_URL) and r["impressions"] >= 5]
        if len(eigen) > 1:
            uit.append((q, sorted(eigen, key=lambda x: -x[1])))
    return uit


def ga4_organic(start, end):
    """Organische landingspagina's uit GA4 (sessies, key events, engagement).

    Optioneel: draait alleen als GA4_REFRESH_TOKEN en GA4_PROPERTY_ID gezet
    zijn (hergebruikt GSC_CLIENT_ID/SECRET). Geeft (rows, tot_sessies,
    tot_keyevents) of None als GA4 niet geconfigureerd of onbereikbaar is.
    """
    ontbreekt = [v for v in ("GA4_REFRESH_TOKEN", "GA4_PROPERTY_ID") if not os.environ.get(v)]
    if ontbreekt:
        print(f"GA4-sectie overgeslagen: env var(s) niet gezet: {', '.join(ontbreekt)}")
        return None
    try:
        body = urllib.parse.urlencode({
            "client_id": os.environ["GSC_CLIENT_ID"],
            "client_secret": os.environ["GSC_CLIENT_SECRET"],
            "refresh_token": os.environ["GA4_REFRESH_TOKEN"],
            "grant_type": "refresh_token",
        }).encode()
        req = urllib.request.Request("https://oauth2.googleapis.com/token", data=body)
        with urllib.request.urlopen(req, timeout=30) as r:
            ga_token = json.load(r)["access_token"]
        prop = os.environ["GA4_PROPERTY_ID"]
        payload = {
            "dateRanges": [{"startDate": start.isoformat(), "endDate": end.isoformat()}],
            "dimensions": [{"name": "landingPagePlusQueryString"}],
            "metrics": [{"name": "sessions"}, {"name": "keyEvents"}, {"name": "engagementRate"}],
            "dimensionFilter": {"filter": {
                "fieldName": "sessionDefaultChannelGroup",
                "stringFilter": {"value": "Organic Search"}}},
            "orderBys": [{"metric": {"metricName": "sessions"}, "desc": True}],
            "limit": 100,
        }
        req = urllib.request.Request(
            f"https://analyticsdata.googleapis.com/v1beta/properties/{prop}:runReport",
            data=json.dumps(payload).encode(),
            headers={"Authorization": f"Bearer {ga_token}", "Content-Type": "application/json"})
        with urllib.request.urlopen(req, timeout=60) as r:
            rep = json.load(r)
        rows = []
        for row in rep.get("rows", []):
            page = row["dimensionValues"][0]["value"]
            sess = int(row["metricValues"][0]["value"])
            kev = int(float(row["metricValues"][1]["value"]))
            eng = float(row["metricValues"][2]["value"]) * 100
            rows.append((page, sess, kev, eng))
        return rows, sum(r[1] for r in rows), sum(r[2] for r in rows)
    except Exception as e:
        print(f"GA4-sectie overgeslagen: {str(e)[:80]}")
        return None


def totals(rows):
    return sum(r["clicks"] for r in rows), sum(r["impressions"] for r in rows)


def openstaande_voorstellen():
    """Nog niet gemergede seo/-branches, oudste eerst.

    Het logboek reports/seo/wijzigingen.md vult zich pas bij een merge, dus een
    voorstel dat blijft liggen is voor de agent onzichtbaar -- zo werd in week
    33 en week 36 twee keer dezelfde link op /personal-training voorgesteld.
    Puur git, geen gh of API-token nodig: een seo/-branch die nog niet in
    origin/main zit is per definitie een openstaand voorstel.
    """
    def git(*args):
        return subprocess.run(("git",) + args, cwd=REPO_ROOT, capture_output=True,
                              text=True, timeout=60, check=True).stdout
    try:
        git("fetch", "--quiet", "origin")
        uit = []
        for regel in git("branch", "-r", "--no-merged", "origin/main",
                         "--list", "origin/seo/*", "--format=%(refname:short)").split():
            naam = regel.replace("origin/", "", 1)
            datum = git("log", "-1", "--format=%ad", "--date=short", regel).strip()
            onderwerp = git("log", "-1", "--format=%s", regel).strip()
            uit.append((datum, naam, onderwerp))
        return sorted(uit)
    except (subprocess.SubprocessError, OSError):
        return None


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

    # Totalen NOOIT uit de query-dimensie optellen: Google verbergt zoektermen
    # met weinig volume, waardoor die som maar 45-65% van het echte aantal
    # klikken bevat -- en dat percentage wisselt per week, dus ook het verschil
    # met vorige week wordt ruis. De date-dimensie geeft wel het volledige
    # totaal, hetzelfde cijfer dat GSC zelf toont en dat in history.json staat.
    c_cur, i_cur = totals(sa_query({**rng(cur_start, cur_end), "dimensions": ["date"]}))
    c_prev, i_prev = totals(sa_query({**rng(prev_start, prev_end), "dimensions": ["date"]}))
    c_zichtbaar, _ = totals(q_cur)

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

    # Blinde vlek van een sitemap-only audit: kapotte URL's staan per definitie
    # niet in je eigen sitemap. Daarom apart: live-status van alles waar we
    # naartoe linken, plus URL's die Google wel kent maar wij niet aanbieden.
    kapot_sitemap, kapot_link, gelinkt = crawl_en_check(sitemap_urls)
    rng_kw = rng(today - timedelta(days=93), cur_end)
    p_kwartaal = sa_query({**rng_kw, "dimensions": ["page"], "rowLimit": 500})
    wees = wees_urls(p_kwartaal, sitemap_urls)

    # Verweesde pagina's: staan wel in de sitemap, maar nergens op de site
    # wordt ernaartoe gelinkt. Google leidt daaruit af dat ze onbelangrijk
    # zijn, dus ze ranken vrijwel nooit -- ongeacht hoe goed de tekst is.
    orphans = sorted(set(sitemap_urls) - gelinkt) if gelinkt is not None else []

    # Kansen en kannibalisatie over een kwartaal: een week is te weinig data
    # om een positie betrouwbaar te beoordelen.
    q_kwartaal = sa_query({**rng_kw, "dimensions": ["query"], "rowLimit": 1000})
    kans = kansen(q_kwartaal)
    kannib = kannibalisatie(sa_query, rng_kw, [k["query"] for k in kans[:12]])

    # Rapport opbouwen
    out = []
    out.append(f"# SEO-weekrapport {iso_year}, week {iso_week}")
    out.append(f"\n*Periode: {cur_start} t/m {cur_end}, vergeleken met {prev_start} t/m {prev_end}.*\n")
    out.append("## Totalen\n")
    out.append(f"- **Klikken:** {fmt_delta(c_cur, c_prev)}")
    out.append(f"- **Vertoningen:** {fmt_delta(i_cur, i_prev)}")
    out.append(f"- **Geindexeerd:** {indexed} van {len(sitemap_urls)} sitemap-URL's\n")
    pct = round(100 * c_zichtbaar / c_cur) if c_cur else 0
    out.append(f"*De zoekwoordtabel hieronder telt op tot {c_zichtbaar} klikken ({pct}% van "
               f"{c_cur}): Google verbergt zoektermen met te weinig volume. Pagina- en "
               f"totaalcijfers zijn wel compleet.*\n")

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

    ga4_cur = ga4_organic(cur_start, cur_end)
    ga4_prev = ga4_organic(prev_start, prev_end)
    if ga4_cur:
        rows4, tot_sess, tot_kev = ga4_cur
        out.append("\n## Organisch verkeer -> site-gedrag (GA4)\n")
        if ga4_prev:
            out.append(f"- **Organische sessies:** {fmt_delta(tot_sess, ga4_prev[1])}")
            out.append(f"- **Conversies (key events):** {fmt_delta(tot_kev, ga4_prev[2])}\n")
        out.append("| Landingspagina | Sessies | Conversies | Engagement |")
        out.append("|---|---|---|---|")
        for page, sess, kev, eng in rows4[:12]:
            out.append(f"| {page} | {sess} | {kev} | {eng:.0f}% |")
        if tot_kev == 0:
            out.append("\n*Nog geen key events geteld: markeer `free_intro_visit` en "
                       "`form_submit` als belangrijkste gebeurtenis in GA4 (Beheer > "
                       "Gebeurtenissen), dan vult deze kolom zich.*")

    out.append("\n## Indexatiestand per categorie\n")
    for state, paths in sorted(coverage.items(), key=lambda kv: -len(kv[1])):
        out.append(f"\n**{state}: {len(paths)}**")
        if "indexed" not in state.lower() or "not" in state.lower():
            for p in paths:
                out.append(f"- {p}")

    out.append("\n## Grootste kansen (kwartaal)\n")
    if not kans:
        out.append("- Geen zoektermen met duidelijke opwaartse ruimte gevonden.")
    else:
        out.append("*Zoektermen waarop je al zichtbaar bent maar niet geklikt wordt. "
                   "'Gemist' = klikken per kwartaal die je laat liggen als je naar "
                   "de top 3 zou stijgen.*\n")
        out.append("| Zoekterm | Vertoningen | Klikken | Positie | CTR | Gemist |")
        out.append("|---|---|---|---|---|---|")
        for k in kans[:15]:
            out.append(f"| {k['query']} | {k['impressions']} | {k['clicks']} "
                       f"| {k['position']:.1f} | {k['ctr']:.1f}% | ~{k['gemist']} |")

    if kannib:
        out.append("\n### Kannibalisatie: meerdere eigen pagina's op dezelfde term\n")
        out.append("*Je pagina's concurreren onderling; Google verdeelt de autoriteit "
                   "en meestal wint geen van beide. Kies per term één pagina en laat "
                   "de andere ernaar linken.*\n")
        for q, paginas in kannib:
            out.append(f"\n**`{q}`**")
            for u, imp, pos in paginas:
                out.append(f"- `{u.replace(BASE_URL, '') or '/'}` — "
                           f"{imp} vertoningen, positie {pos:.1f}")

    out.append("\n## Kapotte en verweesde URL's\n")
    if kapot_sitemap is None:
        out.append("*Live-check niet uitgevoerd: de site was niet bereikbaar vanuit "
                   "de agent-omgeving (egress-allowlist).*")
    elif not kapot_sitemap and not kapot_link:
        out.append("- Geen kapotte URL's: alle sitemap-pagina's en alle interne "
                   "links geven een 200.")
    else:
        if kapot_sitemap:
            out.append("**In de sitemap maar niet bereikbaar — dit stuur je actief "
                       "naar Google, dus altijd repareren:**")
            for u, s, l in kapot_sitemap:
                doel = f" -> {l}" if l else ""
                out.append(f"- `{u.replace(BASE_URL, '') or '/'}`: {s or 'onbereikbaar'}{doel}")
        if kapot_link:
            out.append("\n**Interne links die stukgaan — hier ontstaan nieuwe 404's:**")
            for u, s, l in kapot_link:
                doel = f" -> {l}" if l else ""
                out.append(f"- `{u.replace(BASE_URL, '') or '/'}`: {s}{doel}")

    if orphans:
        out.append("\n**Verweesd: staat in de sitemap maar krijgt nul interne links.** "
                   "Zonder interne links leest Google de pagina als onbelangrijk, "
                   "dus ranken lukt niet. Link ernaar vanuit de footer of een "
                   "verwante pagina:\n")
        for u in orphans:
            out.append(f"- `{u.replace(BASE_URL, '') or '/'}`")

    if wees:
        out.append("\n**Krijgt vertoningen maar staat niet in de sitemap** "
                   "(oude of vergeten pagina's; controleer of ze horen te bestaan):\n")
        out.append("| URL | Klikken | Vertoningen |")
        out.append("|---|---|---|")
        for u, c, i in wees[:15]:
            out.append(f"| {u.replace(BASE_URL, '') or '/'} | {c} | {i} |")

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

    open_prs = openstaande_voorstellen()
    if open_prs:
        out.append("\n## Openstaande voorstellen (nog niet gemerged)\n")
        out.append("*Deze wijzigingen wachten nog op Bart. Behandel de pagina's hieronder "
                   "als 'net aangepast': stel er deze week niets voor, ook al staan ze niet "
                   "in `wijzigingen.md` — dat logboek vult zich pas bij een merge.*\n")
        for datum, naam, onderwerp in open_prs:
            out.append(f"- `{naam}` ({datum}) — {onderwerp}")
    elif open_prs is None:
        out.append("\n## Openstaande voorstellen\n")
        out.append("*Niet gecontroleerd: git kon origin niet bereiken.*")

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
    # GA4-totalen horen bij de rapportweek (de week van cur_end)
    cw_year, cw_week, _ = cur_end.isocalendar()
    cur_week_key = f"{cw_year}-W{cw_week:02d}"
    if ga4_cur and cur_week_key in weeks:
        weeks[cur_week_key]["organicSessions"] = ga4_cur[1]
        weeks[cur_week_key]["organicKeyEvents"] = ga4_cur[2]

    history = {
        "site": SITE,
        "updatedAt": today.isoformat(),
        "lastReport": report_path.name,
        "weeks": [weeks[k] for k in sorted(weeks)],
    }
    history_path.write_text(json.dumps(history, indent=1) + "\n", encoding="utf-8")
    print(f"Historie bijgewerkt: {history_path} ({len(weeks)} weken)")
    n_kapot = (len(kapot_sitemap) + len(kapot_link)) if kapot_sitemap is not None else "n.v.t."
    top_kans = f"{kans[0]['query']} (pos {kans[0]['position']:.0f})" if kans else "geen"
    print(f"Klikken {c_prev} -> {c_cur}, vertoningen {i_prev} -> {i_cur}, "
          f"geindexeerd {indexed}/{len(sitemap_urls)}, "
          f"kapotte URL's {n_kapot}, verweesd {len(orphans)}, "
          f"kannibalisatie {len(kannib)}, grootste kans: {top_kans}")


if __name__ == "__main__":
    main()
