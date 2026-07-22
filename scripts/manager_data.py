"""Datamerger voor de manager-agent: legt de histories van de SEO-, Meta- en
leden-agent naast elkaar per ISO-week en print het resultaat als JSON.

Leest alleen bestanden uit de repo (reports/*/history.json), dus geen
credentials of netwerk nodig. De manager-agent gebruikt deze tabel om
verbanden te leggen in de maandagbriefing.
"""
import io
import json
import sys
from pathlib import Path

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

REPO_ROOT = Path(__file__).resolve().parent.parent
REPORTS = REPO_ROOT / "reports"


def load(agent):
    p = REPORTS / agent / "history.json"
    if not p.exists():
        return {}
    return json.loads(p.read_text(encoding="utf-8"))


def latest_report(agent):
    d = REPORTS / agent
    if not d.exists():
        return None
    files = sorted(f.name for f in d.glob("*-w*.md"))
    return files[-1] if files else None


def main():
    gsc = load("gsc")
    meta = load("meta")
    ghl = load("ghl")

    weeks = {}

    def wk(key):
        return weeks.setdefault(key, {"week": key})

    for w in gsc.get("weeks", []):
        wk(w["week"]).update({
            "seo_klikken": w.get("clicks"),
            "seo_vertoningen": w.get("impressions"),
            "seo_geindexeerd": w.get("indexed"),
        })
    for w in meta.get("weeks", []):
        wk(w["week"]).update({
            "ads_besteding": w.get("spend"),
            "ads_aankopen": w.get("purchases"),
            "ads_leads": w.get("leads"),
            "ads_kliks": w.get("clicks"),
        })
    for w in ghl.get("weeks", []):
        wk(w["week"]).update({
            "leads_binnen": w.get("leads"),
            "leads_set": w.get("afspraken"),
            "leads_show": w.get("shows"),
            "leads_close": w.get("sales"),
            "ledental": w.get("members"),
        })

    out = {
        "wekenNaastElkaar": [weeks[k] for k in sorted(weeks)],
        "laatsteRapporten": {
            "seo": latest_report("gsc"),
            "meta": latest_report("meta"),
            "leden": latest_report("ghl"),
        },
        "ledenTotaalNu": ghl.get("memberCount"),
        "leadsPerDag": ghl.get("days", [])[-14:],
        "toelichting": (
            "Weken zijn ISO-weken; niet elke bron heeft elke week data "
            "(agents zijn op verschillende datums live gegaan). Weinig "
            "meetweken = voorzichtig zijn met harde conclusies."
        ),
    }
    print(json.dumps(out, ensure_ascii=False, indent=1))


if __name__ == "__main__":
    main()
