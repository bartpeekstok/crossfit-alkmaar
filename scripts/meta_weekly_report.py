"""Wekelijks Meta Ads-rapport voor CrossFit Alkmaar.

Leest campagnedata uit de Meta Marketing API (alleen-lezen) en schrijft
reports/meta/<jaar>-w<week>.md plus reports/meta/history.json.

Credentials via environment variables:
  META_ACCESS_TOKEN   - system user token met ads_read
  META_AD_ACCOUNT_ID  - advertentie-account, bv. act_1234567890 (of alleen cijfers)

Meta-data is vrijwel realtime; het rapport pakt de afgelopen 7 volledige
dagen (t/m gisteren) en vergelijkt met de 7 dagen daarvoor.
"""
import io
import json
import os
import sys
import urllib.parse
import urllib.request
from datetime import date, timedelta
from pathlib import Path

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

GRAPH = "https://graph.facebook.com/v23.0"
REPO_ROOT = Path(__file__).resolve().parent.parent

for var in ("META_ACCESS_TOKEN", "META_AD_ACCOUNT_ID"):
    if not os.environ.get(var):
        sys.exit(f"FOUT: environment variable {var} ontbreekt.")

TOKEN = os.environ["META_ACCESS_TOKEN"]
ACCOUNT = os.environ["META_AD_ACCOUNT_ID"]
if not ACCOUNT.startswith("act_"):
    ACCOUNT = f"act_{ACCOUNT}"

# Meta rapporteert dezelfde conversie onder meerdere labels (totaal, pixel,
# omni); tel er dus precies EEN, in deze voorkeursvolgorde. Optellen zou
# dubbel of driedubbel tellen (dat gaf 24 "aankopen" waar het er 8 waren).
LEAD_ACTIONS = ("lead", "offsite_conversion.fb_pixel_lead", "leadgen",
                "onsite_conversion.lead_grouped")
# Ticketverkoop-campagnes (bv. HYROX-simulaties) sturen op aankopen, niet leads
PURCHASE_ACTIONS = ("omni_purchase", "purchase",
                    "offsite_conversion.fb_pixel_purchase",
                    "onsite_conversion.purchase")


def api(path, params):
    params = {**params, "access_token": TOKEN}
    url = f"{GRAPH}/{path}?{urllib.parse.urlencode(params)}"
    rows = []
    while url:
        try:
            with urllib.request.urlopen(url, timeout=60) as r:
                data = json.load(r)
        except urllib.error.HTTPError as e:
            body = e.read().decode(errors="replace")[:300]
            sys.exit(f"FOUT: Meta API {e.code} op {path}: {body}")
        rows.extend(data.get("data", []))
        url = data.get("paging", {}).get("next")
    return rows


def insights(since, until, level):
    return api(f"{ACCOUNT}/insights", {
        "level": level,
        "fields": "campaign_name,spend,impressions,clicks,ctr,cpm,actions",
        "time_range": json.dumps({"since": since.isoformat(), "until": until.isoformat()}),
        "limit": 200,
    })


def actions_from(row, action_types):
    by_type = {a.get("action_type"): a for a in row.get("actions", [])}
    for t in action_types:
        if t in by_type:
            return int(float(by_type[t]["value"]))
    return 0


def leads_from(row):
    return actions_from(row, LEAD_ACTIONS)


def purchases_from(row):
    return actions_from(row, PURCHASE_ACTIONS)


def summarize(rows):
    spend = sum(float(r.get("spend", 0)) for r in rows)
    clicks = sum(int(r.get("clicks", 0)) for r in rows)
    impressions = sum(int(r.get("impressions", 0)) for r in rows)
    leads = sum(leads_from(r) for r in rows)
    purchases = sum(purchases_from(r) for r in rows)
    return spend, clicks, impressions, leads, purchases


def eur(v):
    return f"€{v:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".")


def main():
    today = date.today()
    cur_end = today - timedelta(days=1)
    cur_start = cur_end - timedelta(days=6)
    prev_end = cur_start - timedelta(days=1)
    prev_start = prev_end - timedelta(days=6)
    iso_year, iso_week, _ = today.isocalendar()

    cur = insights(cur_start, cur_end, "campaign")
    prev = insights(prev_start, prev_end, "campaign")

    spend, clicks, impressions, leads, purchases = summarize(cur)
    p_spend, p_clicks, p_impressions, p_leads, p_purchases = summarize(prev)
    prev_by_name = {r.get("campaign_name", "?"): r for r in prev}

    out = []
    out.append(f"# Meta Ads-weekrapport {iso_year}, week {iso_week}")
    out.append(f"\n*Periode: {cur_start} t/m {cur_end}, vergeleken met {prev_start} t/m {prev_end}.*\n")
    out.append("## Totalen\n")
    out.append(f"- **Besteding:** {eur(spend)} (vorige week {eur(p_spend)})")
    out.append(f"- **Leads:** {leads} (vorige week {p_leads})")
    out.append(f"- **Aankopen (tickets e.d.):** {purchases} (vorige week {p_purchases})")
    cpl = eur(spend / leads) if leads else "-"
    p_cpl = eur(p_spend / p_leads) if p_leads else "-"
    out.append(f"- **Kosten per lead:** {cpl} (vorige week {p_cpl})")
    cpa = eur(spend / purchases) if purchases else "-"
    out.append(f"- **Kosten per aankoop:** {cpa}")
    out.append(f"- **Kliks:** {clicks} (vorige week {p_clicks})")
    out.append(f"- **Impressies:** {impressions:,} (vorige week {p_impressions:,})".replace(",", "."))

    out.append("\n## Per campagne\n")
    out.append("| Campagne | Besteding | Leads | Aankopen | Kosten/resultaat | Kliks | CTR |")
    out.append("|---|---|---|---|---|---|---|")
    for r in sorted(cur, key=lambda x: -float(x.get("spend", 0))):
        r_spend = float(r.get("spend", 0))
        r_leads = leads_from(r)
        r_purch = purchases_from(r)
        results = r_leads + r_purch
        r_cpr = eur(r_spend / results) if results else "-"
        ctr = f"{float(r.get('ctr', 0)):.2f}%"
        out.append(f"| {r.get('campaign_name', '?')} | {eur(r_spend)} | {r_leads} "
                   f"| {r_purch} | {r_cpr} | {r.get('clicks', 0)} | {ctr} |")

    out.append("\n## Signalen\n")
    signals = []
    if spend > 25 and leads == 0 and purchases == 0:
        signals.append(f"- {eur(spend)} besteed zonder gemeten leads of aankopen: check of de "
                       "Meta-pixel conversies registreert, of de campagnedoelen kloppen.")
    if p_leads and leads < p_leads * 0.6:
        signals.append(f"- Leads flink gedaald: {p_leads} -> {leads}.")
    if p_spend and spend > p_spend * 1.4:
        signals.append(f"- Besteding flink gestegen: {eur(p_spend)} -> {eur(spend)}.")
    for r in cur:
        name = r.get("campaign_name", "?")
        pr = prev_by_name.get(name)
        if pr:
            r_leads, pr_leads = leads_from(r), leads_from(pr)
            if pr_leads >= 3 and r_leads == 0:
                signals.append(f"- Campagne '{name}' leverde deze week 0 leads (vorige week {pr_leads}).")
    out.extend(signals if signals else ["- Geen opvallende afwijkingen."])

    report_dir = REPO_ROOT / "reports" / "meta"
    report_dir.mkdir(parents=True, exist_ok=True)
    report_path = report_dir / f"{iso_year}-w{iso_week:02d}.md"
    report_path.write_text("\n".join(out) + "\n", encoding="utf-8")
    print(f"Rapport geschreven: {report_path}")

    # history.json: totalen per ISO-week voor het dashboard
    history_path = report_dir / "history.json"
    weeks = {}
    if history_path.exists():
        for w in json.loads(history_path.read_text(encoding="utf-8")).get("weeks", []):
            weeks[w["week"]] = w
    y, w, _ = cur_end.isocalendar()
    key = f"{y}-W{w:02d}"
    weeks[key] = {"week": key, "start": cur_start.isoformat(),
                  "spend": round(spend, 2), "leads": leads, "purchases": purchases,
                  "clicks": clicks, "impressions": impressions}
    history = {"account": ACCOUNT, "updatedAt": today.isoformat(),
               "lastReport": report_path.name,
               "weeks": [weeks[k] for k in sorted(weeks)]}
    history_path.write_text(json.dumps(history, indent=1) + "\n", encoding="utf-8")
    print(f"Historie bijgewerkt: {history_path} ({len(weeks)} weken)")
    print(f"Besteding {eur(p_spend)} -> {eur(spend)}, leads {p_leads} -> {leads}")


if __name__ == "__main__":
    main()
