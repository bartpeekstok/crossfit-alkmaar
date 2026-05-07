# /start, Meta ad landing page

Conversie-geoptimaliseerde landingspagina voor Meta-advertenties. Eén doel: bezoeker laat gegevens achter via het GHL "Landingspagina form". Na submit redirect GHL naar `/free-intro?from=start` (waar de booking-agenda staat).

## Bestanden

- `app/start/page.tsx`: de pagina met popup-formulier, inline-formulier in finale CTA, Inside-the-Box video, Google Reviews widget
- `app/start/layout.tsx`: metadata + `noindex` zodat Google de pagina niet opneemt
- `app/components/ConditionalChrome.tsx`: verbergt globale Header/Footer/popups op `/start`

## Lokale dev

```bash
npm run dev
```

Bekijk op http://localhost:3000/start

## Tracking, hoe het werkt

Geen JavaScript-magie, geen iframe-postMessage, geen sendBeacon. URL-based conversion:

1. **PageView (browser)**: `MetaPixel.tsx` in de root layout fired automatisch `PageView` op elke page-load van de site, dus ook op /start en /free-intro.
2. **Lead conversion**: in Meta Events Manager staat een **Custom Conversion** ingesteld die een `PageView` op URL met `?from=start` als Lead-conversie classificeert. Dat is /free-intro waar GHL naartoe redirect na form-submit. Geen iframe-Pixel firing nodig.

## GoHighLevel form-instellingen

Form `z8t7r0Jf0MGmJanbVsXB` ("Landingspagina form"), tab Settings:

| Veld | Waarde |
|---|---|
| Redirect URL | `https://www.crossfitalkmaar.com/free-intro?from=start` |
| Facebook Pixel ID | leeg laten |
| On Page View | None |
| On Form Submission | None |

## Meta Events Manager: Custom Conversion

Eenmalig opzetten:

1. Events Manager → kies Pixel `1745951116381755` → tab **Custom Conversions** → **Create**
2. Naam: `Lead - Intake aanvraag`
3. Source: PageView (standard event)
4. Rule: URL **contains** `from=start`
5. Category: **Lead**
6. Save

Vanaf dan telt elke landing op `/free-intro?from=start` als een Lead-conversie. Gebruik dit als conversion-doel in je Meta Ads campagnes.

## Content aanpassen

Alle teksten staan inline in `app/start/page.tsx`. Wat je waarschijnlijk wilt vervangen:

| Wat | Waar | Hoe |
|---|---|---|
| Hero-foto | `Image src="/images/CFA-juni-03-community.jpg"` | Vervang pad of leg nieuwe foto in `public/images/` |
| Testimonials (3 cards) | array `[{ name, age, videoId, quote, result }]` in sectie "Anderen lukte het ook" | Tekst aanpassen of `videoId` wijzigen |
| Telefoonnummer | `tel:+31722340560` | Search & replace |
| FAQ-vragen | array van 6 items in FAQ-sectie | Tekst aanpassen of items toevoegen |
| Form ID | `GHL_FORM_ID` bovenaan `page.tsx` | Wijzig hier als je een ander GHL-form gebruikt |
| Google Maps | `iframe src` in locatie-sectie | Vervang met de exacte iframe `src` van Google Maps (Share → Embed) |

## Deploy

Push naar `main`. Vercel deployt automatisch.

In Meta Ads Manager:
- Conversie-doel: kies de Custom Conversion `Lead - Intake aanvraag`
- Bestemmings-URL: `https://www.crossfitalkmaar.com/start`
- Retargeting-uitsluiting: voeg `/free-intro` toe aan een exclusion audience zodat ingevulde leads geen ads meer zien
