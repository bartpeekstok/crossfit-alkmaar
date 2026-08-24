# SEO-wijzigingen

Logboek van doorgevoerde SEO-aanpassingen. De wekelijkse SEO-agent leest dit
bestand voordat hij iets voorstelt, en laat een pagina met rust die hier in de
afgelopen 6 weken al in voorkomt. Reden: een positieverandering wordt pas na
4 tot 8 weken zichtbaar, en wie ondertussen blijft sleutelen kan achteraf niet
meer zien wat het effect was.

Eén regel per wijziging, nieuwste bovenaan.

| Datum | Pagina | Wijziging | Aanleiding | Verwachting |
|---|---|---|---|---|
| 2026-08-24 | `/kickstart` | Title-tag aangepast van "28 Day Kickstart - In 4 Weken een Vast Trainingsritme" naar "28 Day CrossFit Kickstart - In 4 Weken een Vast Trainingsritme" | Grootste kansen (kwartaal): "kickstart crossfit" staat op positie 8.4 met 75 vertoningen maar 0 klikken (~11 gemiste klikken per kwartaal); de oude title bevatte het woord "CrossFit" niet, terwijl dat exact de zoekterm is | CTR voor "kickstart crossfit" stijgt doordat de title nu de zoekterm bevat; verwacht klikken > 0 en mogelijk een lichte positieverbetering |
| 2026-08-17 | `/meer-info` | "CrossFit Alkmaar" in de lesrooster-intro omgezet naar een link naar de homepage (`/`) | Kannibalisatie op `crossfit`: homepage 412 vertoningen/positie 9.7, `/meer-info` 8 vertoningen/positie 5.0; `crossfit` is tegelijk de grootste kans van het kwartaal (635 vertoningen, positie 8.8, ~80 gemiste klikken) | Interne linkwaarde voor "crossfit" bundelt zich op de homepage, wat de positie richting de top 3 moet duwen |
| 2026-08-08 | `app/layout.tsx` | geo.position en ICBM gelijkgetrokken met de coördinaten in JsonLd.tsx | Meta-tags wezen 1,7 km naast het adres in de JSON-LD | Consistenter lokaal signaal voor "sportschool alkmaar" en omgeving |
| 2026-08-08 | `app/components/redesign/SeoLanding.tsx` | Tweede HealthClub-blok met ratingCount 273 verwijderd | Conflict met het globale blok (308) onder dezelfde `@id`, op alle 27 landingspagina's | Google negeert de beoordelingen niet langer wegens tegenstrijdigheid |
| 2026-08-08 | `/sportschool-alkmaar` | Hero, intro en beschrijving herschreven: claimt de term nu in plaats van zich ervan af te zetten; locatie en openingstijden toegevoegd; links naar krachttraining, fitness en 50+ | Pagina stond op positie 55 terwijl de homepage op 18 stond voor "sportschool alkmaar" (171 vertoningen, 2 klikken per kwartaal) | Pagina neemt de term over van de homepage en stijgt richting pagina 1 |
| 2026-08-08 | `app/components/redesign/Footer.tsx` | Blok "Sporten in Alkmaar" toegevoegd met links naar sportschool-alkmaar, fitness-alkmaar, krachttraining-alkmaar, sportschool-50-plus-alkmaar, sportschool-begeleiding-alkmaar en small-group-training-alkmaar | 15 pagina's in de sitemap kregen nul interne links | Verweesde pagina's teruggebracht van 15 naar 10; deze pagina's kunnen nu ranken |
