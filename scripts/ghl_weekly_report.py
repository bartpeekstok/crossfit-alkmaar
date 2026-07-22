"""Wekelijks leden/leads-rapport uit GoHighLevel voor CrossFit Alkmaar.

Rapporteert:
  1. de leads-funnel (binnen -> set -> show -> close) voor de afgelopen
     4 weken, per cohort van aanmaakweek;
  2. nieuwe leads per dag (laatste 28 dagen);
  3. het actuele ledenaantal (contacten met type "customer"), dat als
     wekelijks meetpunt in de historie wordt vastgelegd zodat er een
     groeigrafiek ontstaat.

Schrijft reports/ghl/<jaar>-w<week>.md en reports/ghl/history.json.

Credentials via environment variables (zelfde als het dashboard):
  GHL_API_TOKEN, GHL_LOCATION_ID, GHL_PIPELINE_ID

Alleen Python-stdlib. De cloud-omgeving moet services.leadconnectorhq.com
in de egress-allowlist hebben.
"""
import io
import json
import os
import sys
import urllib.error
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


def fetch_member_count():
    """Telt contacten met type 'customer' (= leden) en het totaal."""
    customers = 0
    total = 0
    start_after = None
    start_after_id = None
    for _ in range(200):
        url = f"/contacts/?locationId={LOCATION}&limit=100"
        if start_after and start_after_id:
            url += f"&startAfter={start_after}&startAfterId={start_after_id}"
        data = api(url)
        contacts = data.get("contacts", [])
        for c in contacts:
            total += 1
            if (c.get("type") or "").lower() == "customer":
                customers += 1
        meta = data.get("meta", {})
        if not meta.get("nextPageUrl") and not meta.get("nextPage"):
            break
        prev = (start_after, start_after_id)
        start_after, start_after_id = meta.get("startAfter"), meta.get("startAfterId")
        if (start_after, start_after_id) == prev or not contacts:
            break
    return customers, total


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
    iso_year, iso_week, _ = today.isocalendar()

    opps = fetch_all_opportunities()
    print(f"{len(opps)} opportunities in de Fitness Pipeline")
    members, total_contacts = fetch_member_count()
    print(f"{members} leden (type customer) van {total_contacts} contacten")

    # Funnel per week, deze week + de 3 ervoor
    week_funnels = []
    for i in range(4):
        w_end = cur_end - timedelta(days=7 * i)
        w_start = w_end - timedelta(days=6)
        f = funnel(opps, w_start, w_end)
        y, w, _ = w_end.isocalendar()
        week_funnels.append({"week": f"{y}-W{w:02d}", "start": w_start.isoformat(),
                             "end": w_end.isoformat(), **f})

    cur = week_funnels[0]
    prev = week_funnels[1]

    # Nieuwe leads per dag, laatste 28 dagen
    day_counts = {}
    for i in range(28):
        d = cur_end - timedelta(days=27 - i)
        day_counts[d.isoformat()] = 0
    for o in opps:
        d = created_on(o)
        if d and d.isoformat() in day_counts:
            day_counts[d.isoformat()] += 1
    days = [{"date": k, "leads": v} for k, v in day_counts.items()]

    out = []
    out.append(f"# Leden/leads-weekrapport {iso_year}, week {iso_week}")
    out.append(f"\n*Cohorten per aanmaakweek, t/m {cur_end}. Verse cohorten kunnen nog "
               f"doorschuiven: een lead van gisteren kan volgende week alsnog boeken.*\n")

    out.append("## Funnel per week (binnen -> set -> show -> close)\n")
    out.append("| Week | Binnen | Set | Show | Close | Set-rate | Show-rate | Close-rate |")
    out.append("|---|---|---|---|---|---|---|---|")
    for f in week_funnels:
        wk = f["week"].split("-W")[1]
        out.append(f"| w{wk} ({f['start'][5:]} t/m {f['end'][5:]}) | {f['leads']} | {f['afspraken']} "
                   f"| {f['shows']} | {f['sales']} | {pct(f['afspraken'], f['leads'])} "
                   f"| {pct(f['shows'], f['afspraken'])} | {pct(f['sales'], f['shows'])} |")

    out.append("\n## Nieuwe leads per dag (laatste 14 dagen)\n")
    for entry in days[-14:]:
        d = date.fromisoformat(entry["date"])
        dagnaam = ["ma", "di", "wo", "do", "vr", "za", "zo"][d.weekday()]
        blok = "#" * entry["leads"] if entry["leads"] else "."
        out.append(f"- {dagnaam} {d.strftime('%d-%m')}: {entry['leads']} {blok}")

    out.append("\n## Leden\n")
    out.append(f"- **Actuele leden (contacttype 'customer'): {members}** "
               f"(van {total_contacts} contacten in GHL)")
    out.append("- Elk weekrapport legt dit aantal vast; de groeitrend bouwt zich "
               "vanzelf op in het dashboard.")

    out.append("\n## Signalen\n")
    signals = []
    if prev["leads"] >= 5 and cur["leads"] < prev["leads"] * 0.6:
        signals.append(f"- Nieuwe leads flink gedaald: {prev['leads']} -> {cur['leads']}.")
    if cur["leads"] >= 5 and cur["afspraken"] == 0:
        signals.append(f"- {cur['leads']} nieuwe leads maar nog 0 afspraken: check de opvolging.")
    month = funnel(opps, today - timedelta(days=30), cur_end)
    if month["afspraken"] >= 5 and month["shows"] / max(month["afspraken"], 1) < 0.5:
        signals.append(f"- Show-rate laatste 30 dagen onder 50% ({pct(month['shows'], month['afspraken'])}): veel no-shows/annuleringen.")
    out.extend(signals if signals else ["- Geen opvallende afwijkingen."])

    report_dir = REPO_ROOT / "reports" / "ghl"
    report_dir.mkdir(parents=True, exist_ok=True)
    report_path = report_dir / f"{iso_year}-w{iso_week:02d}.md"
    report_path.write_text("\n".join(out) + "\n", encoding="utf-8")
    print(f"Rapport geschreven: {report_path}")

    # history.json: funnel-weken (upsert, incl. terugwerkend de 4 cohorten
    # omdat verse cohorten nog doorschuiven) + ledenaantal + dagdata
    history_path = report_dir / "history.json"
    weeks = {}
    if history_path.exists():
        for w in json.loads(history_path.read_text(encoding="utf-8")).get("weeks", []):
            weeks[w["week"]] = w
    for f in week_funnels:
        existing = weeks.get(f["week"], {})
        weeks[f["week"]] = {**existing, "week": f["week"], "start": f["start"],
                            "leads": f["leads"], "afspraken": f["afspraken"],
                            "shows": f["shows"], "sales": f["sales"]}
    weeks[cur["week"]]["members"] = members

    history = {"updatedAt": today.isoformat(), "lastReport": report_path.name,
               "memberCount": members, "totalContacts": total_contacts,
               "days": days,
               "weeks": [weeks[k] for k in sorted(weeks)]}
    history_path.write_text(json.dumps(history, indent=1) + "\n", encoding="utf-8")
    print(f"Historie bijgewerkt: {history_path} ({len(weeks)} weken)")
    print(f"Funnel deze week: {cur['leads']} binnen, {cur['afspraken']} set, "
          f"{cur['shows']} show, {cur['sales']} close; {members} leden")


if __name__ == "__main__":
    main()
