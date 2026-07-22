"""Wekelijks leden/leads-rapport uit GoHighLevel voor CrossFit Alkmaar.

Leest de Fitness Pipeline (opportunities) en rapporteert de funnel:
nieuwe leads -> afspraak gezet -> geshowd -> sales, per cohort van
aanmaakweek, vergeleken met de week ervoor. Schrijft
reports/ghl/<jaar>-w<week>.md en reports/ghl/history.json.

Credentials via environment variables (zelfde als het dashboard):
  GHL_API_TOKEN, GHL_LOCATION_ID, GHL_PIPELINE_ID

Alleen Python-stdlib. De cloud-omgeving moet services.leadconnectorhq.com
in de egress-allowlist hebben.
"""
import io
import json
import os
import sys
import urllib.parse
import urllib.request
from datetime import date, datetime, timedelta
from pathlib import Path

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

BASE = "https://services.leadconnectorhq.com"
REPO_ROOT = Path(__file__).resolve().parent.parent

for var in ("GHL_API_TOKEN", "GHL_LOCATION_ID", "GHL_PIPELINE_ID"):
    if not os.environ.get(var):
        sys.exit(f"FOUT: environment variable {var} ontbreekt.")

TOKEN = os.environ["GHL_API_TOKEN"]
LOCATION = os.environ["GHL_LOCATION_ID"]
PIPELINE = os.environ["GHL_PIPELINE_ID"]

# Stage-ID's van de Fitness Pipeline (identiek aan het dashboard, src/lib/ghl.ts)
STAGES = {
    "NEW_LEAD": "d06513e5-ada3-4fee-bce5-f1d52f317a25",
    "APPOINTMENT_BOOKED": "18108db3-d65d-4bf1-ad74-127e292d9695",
    "APPOINTMENT_SHOWED": "a77b61b6-d8c5-4250-87cd-bf29b56d8e45",
    "APPOINTMENT_NO_SHOW": "7d66cbea-7d0b-4345-a645-d7bf00d5d76e",
    "APPOINTMENT_CANCELLATION": "e33433d1-9559-4264-a5fc-9109f74621d6",
    "SALES": "393501ae-af32-4dc3-bd09-a64b716d8a31",
}
FITNESS_STAGE_IDS = set(STAGES.values())
SET_STAGES = {STAGES["APPOINTMENT_BOOKED"], STAGES["APPOINTMENT_SHOWED"],
              STAGES["APPOINTMENT_NO_SHOW"], STAGES["APPOINTMENT_CANCELLATION"],
              STAGES["SALES"]}
SHOWED_STAGES = {STAGES["APPOINTMENT_SHOWED"], STAGES["SALES"]}


def api(path):
    req = urllib.request.Request(f"{BASE}{path}", headers={
        "Authorization": f"Bearer {TOKEN}",
        "Version": "2021-07-28",
        "Accept": "application/json",
        # GHL zit achter Cloudflare, dat kale python-urllib requests weigert
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) cfa-leden-agent",
    })
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        body = e.read().decode(errors="replace")[:300]
        sys.exit(f"FOUT: GHL API {e.code} op {path}: {body}")


def fetch_all_opportunities():
    by_id = {}
    start_after = None
    start_after_id = None
    for _ in range(50):
        url = (f"/opportunities/search?location_id={LOCATION}"
               f"&pipeline_id={PIPELINE}&limit=100")
        if start_after and start_after_id:
            url += f"&startAfter={start_after}&startAfterId={start_after_id}"
        data = api(url)
        for opp in data.get("opportunities", []):
            if opp.get("pipelineStageId") in FITNESS_STAGE_IDS:
                by_id[opp["id"]] = opp
        meta = data.get("meta", {})
        if not meta.get("nextPage"):
            break
        prev = (start_after, start_after_id)
        start_after, start_after_id = meta.get("startAfter"), meta.get("startAfterId")
        if (start_after, start_after_id) == prev:
            break
    return list(by_id.values())


def created_on(opp):
    raw = opp.get("createdAt", "")
    try:
        return datetime.fromisoformat(raw.replace("Z", "+00:00")).date()
    except ValueError:
        return None


def funnel(opps, start, end):
    cohort = [o for o in opps if (d := created_on(o)) and start <= d <= end]
    leads = len(cohort)
    afspraken = sum(1 for o in cohort if o.get("pipelineStageId") in SET_STAGES)
    shows = sum(1 for o in cohort if o.get("pipelineStageId") in SHOWED_STAGES)
    sales = sum(1 for o in cohort if o.get("pipelineStageId") == STAGES["SALES"])
    return {"leads": leads, "afspraken": afspraken, "shows": shows, "sales": sales}


def pct(n, d):
    return f"{n / d * 100:.0f}%" if d else "-"


def main():
    today = date.today()
    cur_end = today - timedelta(days=1)
    cur_start = cur_end - timedelta(days=6)
    prev_end = cur_start - timedelta(days=1)
    prev_start = prev_end - timedelta(days=6)
    iso_year, iso_week, _ = today.isocalendar()

    opps = fetch_all_opportunities()
    print(f"{len(opps)} opportunities in de Fitness Pipeline")

    cur = funnel(opps, cur_start, cur_end)
    prev = funnel(opps, prev_start, prev_end)
    d30 = funnel(opps, today - timedelta(days=30), cur_end)

    out = []
    out.append(f"# Leden/leads-weekrapport {iso_year}, week {iso_week}")
    out.append(f"\n*Nieuwe leads per aanmaakweek: {cur_start} t/m {cur_end}, "
               f"vergeleken met {prev_start} t/m {prev_end}. Let op: verse cohorten "
               f"kunnen nog doorschuiven (een lead van gisteren kan volgende week "
               f"alsnog een afspraak boeken).*\n")
    out.append("## Funnel deze week vs vorige week\n")
    out.append("| Stap | Deze week | Vorige week | Conversie deze week |")
    out.append("|---|---|---|---|")
    out.append(f"| Nieuwe leads | {cur['leads']} | {prev['leads']} | - |")
    out.append(f"| Afspraak gezet | {cur['afspraken']} | {prev['afspraken']} | {pct(cur['afspraken'], cur['leads'])} van leads |")
    out.append(f"| Geshowd | {cur['shows']} | {prev['shows']} | {pct(cur['shows'], cur['afspraken'])} van afspraken |")
    out.append(f"| Sales | {cur['sales']} | {prev['sales']} | {pct(cur['sales'], cur['shows'])} van shows |")

    out.append("\n## Laatste 30 dagen\n")
    out.append(f"- {d30['leads']} leads -> {d30['afspraken']} afspraken ({pct(d30['afspraken'], d30['leads'])}) "
               f"-> {d30['shows']} shows ({pct(d30['shows'], d30['afspraken'])}) "
               f"-> {d30['sales']} sales ({pct(d30['sales'], d30['shows'])})")

    out.append("\n## Signalen\n")
    signals = []
    if prev["leads"] >= 5 and cur["leads"] < prev["leads"] * 0.6:
        signals.append(f"- Nieuwe leads flink gedaald: {prev['leads']} -> {cur['leads']}.")
    if cur["leads"] >= 5 and cur["afspraken"] == 0:
        signals.append(f"- {cur['leads']} nieuwe leads maar nog 0 afspraken: check de opvolging.")
    if d30["afspraken"] >= 5 and d30["shows"] / max(d30["afspraken"], 1) < 0.5:
        signals.append(f"- Show-rate laatste 30 dagen onder 50% ({pct(d30['shows'], d30['afspraken'])}): veel no-shows/annuleringen.")
    out.extend(signals if signals else ["- Geen opvallende afwijkingen."])

    report_dir = REPO_ROOT / "reports" / "ghl"
    report_dir.mkdir(parents=True, exist_ok=True)
    report_path = report_dir / f"{iso_year}-w{iso_week:02d}.md"
    report_path.write_text("\n".join(out) + "\n", encoding="utf-8")
    print(f"Rapport geschreven: {report_path}")

    history_path = report_dir / "history.json"
    weeks = {}
    if history_path.exists():
        for w in json.loads(history_path.read_text(encoding="utf-8")).get("weeks", []):
            weeks[w["week"]] = w
    y, w, _ = cur_end.isocalendar()
    key = f"{y}-W{w:02d}"
    weeks[key] = {"week": key, "start": cur_start.isoformat(), **cur}
    history = {"updatedAt": today.isoformat(), "lastReport": report_path.name,
               "weeks": [weeks[k] for k in sorted(weeks)]}
    history_path.write_text(json.dumps(history, indent=1) + "\n", encoding="utf-8")
    print(f"Historie bijgewerkt: {history_path} ({len(weeks)} weken)")
    print(f"Funnel: {cur['leads']} leads, {cur['afspraken']} afspraken, "
          f"{cur['shows']} shows, {cur['sales']} sales")


if __name__ == "__main__":
    main()
