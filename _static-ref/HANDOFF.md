# Handoff — CrossFit Alkmaar redesign → Next.js (App Router)

Doel: de nieuwe site (statische referentie in `_static-ref/`) overzetten naar onze **bestaande Next.js-repo**, met behoud van **alle bestaande SEO/AEO**.

## Plak dit in Claude Code

> In `/_static-ref/` staat een complete, werkende statische versie van onze nieuwe site (HTML + `site.css` + `colors_and_type.css` + `site.js` + `assets/`). Port deze **1-op-1** naar onze Next.js App Router.
>
> **Pagina's / routes (zelfde slugs, niet wijzigen):**
> - `index.html` → `/`
> - `free-intro.html` → `/free-intro`
> - `meer-info.html` → `/meer-info` (ankers `#rooster`, `#tarieven`)
> - `onze-leden.html` → `/onze-leden`
> - `kickstart.html` → `/kickstart`
> - `groepslessen.html` → `/groepslessen`
> - `personal-training.html` → `/personal-training`
> - `small-group-training.html` → `/small-group-training`
> - `voedingsadvies.html` → `/voedingsadvies`
> - `tieners.html` → `/tieners`
> - `hyrox-simulatie-22-augustus.html` → `/hyrox-simulatie-alkmaar` (event 22 aug) en `hyrox-simulatie-24-oktober.html` → tweede event-route
> - `blog.html` → `/blog` (overzicht; artikelen blijven de bestaande `/blog/[slug]`)
> - `vacatures.html` → `/vacatures`
> - `privacy.html` → `/privacy`
> - `en/index.html` → `/en` (Engelse homepage)
>
> **Markup & stijl:** gebruik exact dezelfde HTML-structuur, classes en teksten. Zet `colors_and_type.css` + `site.css` als global stylesheet (of CSS-module). Niets visueel veranderen.
>
> **Gedeelde onderdelen uit `site.js` → React-componenten:**
> - Header (met dropdowns, mobiel menu, NL/EN-wissel — schakelaar alleen op home).
> - Footer (openingstijden, contact, socials).
> - **Lead-pop-up-formulier** met velden Naam / E-mail / Telefoonnummer. Behoud de **GHL-webhook POST** (`https://services.leadconnectorhq.com/hooks/elOOWDMoCEHJO4WhphRj/webhook-trigger/0b254396-9523-44b0-a59c-5c79dadd41b1`, **form-urlencoded**) en de drie varianten **`kennismaking` / `tarieven` / `kickstart`** exact (incl. meegestuurde velden `cta`, `cta_sectie`, `formulier`, `page`, `url`, `first_name`, `last_name`, `full_name`). Na succes redirect naar `/free-intro`. NL-telefoonvalidatie (10 cijfers of +31 = 11).
> - Kickstart-variant toont de twee eerstvolgende startdata met "plekken vrij" (logica in `site.js`: elke 28 dagen vanaf ma 8 juni 2026).
>
> **Embeds behouden:** GHL-boekingswidget (`/widget/booking/h9ZPe6IvVFloL7y9V5Rx`) op free-intro, GHL reviews-widget, Sportbit-rooster op meer-info, GHL-survey op vacatures, GHL-form op HYROX. YouTube click-to-play (youtube-nocookie).
>
> **SEO/AEO — VERPLICHT behouden (uit de huidige repo, niet uit de statische versie):**
> - Per route de bestaande `metadata` / `generateMetadata`: title, description, canonical, OpenGraph, Twitter.
> - Álle bestaande **JSON-LD** structured data: `FAQPage`, `ServiceSchema`, `HealthClub` + `AggregateRating`, `VideoObject`, `SportsEvent` (HYROX), `ArticleSchema` + `BreadcrumbSchema` (blog).
> - `sitemap.xml`, `robots.txt`, en de `/en` hreflang/canonical-structuur.
> - De FAQ-secties in het nieuwe design moeten **exact dezelfde vraag/antwoord-teksten** gebruiken als de `FAQPage`-schema (AEO-consistentie).
> - **Geen URL-slugs wijzigen.**
>
> Verwijder `/_static-ref/` zodra alles werkt.

## Checklist na de port
- [ ] Alle routes renderen identiek aan de statische referentie
- [ ] Pop-up + webhook werken (testlead in GHL)
- [ ] Alle embeds laden (boeking, reviews, rooster, survey, HYROX-form)
- [ ] JSON-LD aanwezig op elke relevante pagina (check met Rich Results Test)
- [ ] metadata/canonical/OG per route
- [ ] sitemap.xml + robots.txt actueel
- [ ] Lighthouse/PageSpeed groen
