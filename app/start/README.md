# /start, Meta ad landing page

Conversie-geoptimaliseerde landingspagina voor Meta-advertenties. Eén doel: bezoeker laat gegevens achter via het GHL "Landingspagina form". Na submit redirect GHL naar `/free-intro` (waar de booking-agenda staat).

## Bestanden

- `app/start/page.tsx`: de pagina met popup-formulier, inline-formulier in finale CTA, Inside-the-Box video, Google Reviews widget
- `app/start/layout.tsx`: metadata + `noindex` zodat Google de pagina niet opneemt
- `app/components/ConditionalChrome.tsx`: verbergt globale Header/Footer/popups op `/start`

## Lokale dev

```bash
npm run dev
```

Bekijk op http://localhost:3000/start

## Tracking

Geen extra code, geen env vars, geen webhook. Alles loopt via GHL:

1. **PageView (browser)**: `MetaPixel.tsx` in de root layout fired automatisch `PageView` zodra `/start` opent.
2. **Lead (browser)**: GHL fired het Pixel `Lead`-event vanuit het iframe bij form-submit (Pixel ID is in form-settings ingevuld).
3. **Lead (server)**: GHL's ingebouwde Meta CAPI integratie fired hetzelfde Lead-event server-side, met **dezelfde event_id** (auto-gegenereerd door GHL) zodat Meta de browser- en server-events dedupliceert.

## GoHighLevel form-instellingen

Form `z8t7r0Jf0MGmJanbVsXB` ("Landingspagina form"), tab Settings:

| Veld | Waarde |
|---|---|
| Redirect URL | `https://www.crossfitalkmaar.com/free-intro` |
| Facebook Pixel ID | `1745951116381755` |
| On Page View | `None` (parent fired al PageView, anders dubbel) |
| On Form Submission | `Lead` |

## Content aanpassen

Alle teksten staan inline in `app/start/page.tsx`. Wat je waarschijnlijk wilt vervangen:

| Wat | Waar | Hoe |
|---|---|---|
| Hero-foto | `Image src="/images/CFA-juni-03-community.jpg"` | Vervang pad of leg nieuwe foto in `public/images/` |
| Testimonials (3 cards) | array `[{ name, age, videoId, quote, result }]` in sectie "Anderen lukte het ook" | Tekst aanpassen of `videoId` wijzigen (de profielfoto wordt automatisch opgehaald als YouTube thumbnail) |
| Telefoonnummer | `tel:+31722340560` (header + footer) | Search & replace |
| FAQ-vragen | array van 6 items in FAQ-sectie | Tekst aanpassen of items toevoegen |
| Form ID | `GHL_FORM_ID` bovenaan `page.tsx` | Wijzig hier als je een ander GHL-form gebruikt |
| Google Maps | `iframe src` in locatie-sectie | Vervang met de exacte iframe `src` van Google Maps (via Share → Embed) als de huidige search-URL niet de juiste pin laat zien |

## Deploy

Push naar `main`. Vercel deployt automatisch.

In Meta Ads Manager:
- Conversie-doel: **Lead** (standard event)
- Bestemmings-URL: `https://www.crossfitalkmaar.com/start`
- Retargeting-uitsluiting: voeg `/free-intro` toe aan een exclusion audience zodat ingevulde leads geen ads meer zien

## Troubleshooting

- **Form laadt niet**: controleer in browser console dat `https://ghl.crossfitalkmaar.com/js/form_embed.js` geen 404 geeft.
- **Geen Lead-event in Meta**: check in GHL form Settings dat Pixel ID ingevuld staat én "On Form Submission" op `Lead` staat. Submit via /start, kijk in Meta Events Manager → Test Events of het event binnenkomt.
- **Dubbele PageView**: zet "On Page View" in GHL form-settings op `None`. De parent-pagina handelt PageView al af.
- **Header/Footer zijn nog zichtbaar**: hard refresh. `ConditionalChrome` checkt pathname en moet `/start` herkennen.
- **Google Maps wijst verkeerd op mobiel**: vervang de iframe `src` met de exacte URL die Google geeft via Share → Embed map (bevat `pb=` parameter).
