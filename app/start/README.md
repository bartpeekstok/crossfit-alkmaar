# /start — Meta ad landing page

Conversie-geoptimaliseerde landingspagina voor Meta-advertenties. Eén doel: bezoeker laat gegevens achter via het GHL "Landingspagina form". Na submit redirect GHL naar `/free-intro` (waar de booking-agenda staat).

## Bestanden

- `app/start/page.tsx`: de pagina met popup-formulier en Google Reviews widget
- `app/start/layout.tsx`: metadata + `noindex` zodat Google de pagina niet opneemt
- `app/components/ConditionalChrome.tsx`: verbergt globale Header/Footer/popups op `/start`
- `app/components/FormSubmissionTracker.tsx`: fired Meta Pixel `Lead`-event bij form submit

## Lokale dev

```bash
npm run dev
```

Bekijk op http://localhost:3000/start

## Tracking, hoe het werkt

Niets nieuws nodig in Vercel of de codebase. De bestaande setup dekt alles:

1. **Meta Pixel** (`MetaPixel.tsx`, ID `1745951116381755`): laadt op elke pagina, fired automatisch `PageView` zodra `/start` opent.
2. **Pixel `Lead` event**: `FormSubmissionTracker.tsx` luistert naar GHL form-submission postMessages en fired `fbq('track', 'Lead', ..., { eventID })` met een uniek event_id zodra het landingspagina-form wordt verstuurd.
3. **Server-side CAPI**: de bestaande GHL workflows fired CAPI events naar Meta zodra een contact door de pipeline-stages beweegt (Lead, Booked, Sale, etc.). Geen webhook of endpoint nodig vanuit deze codebase.

Meta dedupliceert client-side Pixel en server-side CAPI events automatisch via gehashed user_data (email/phone) binnen ~48u.

## GoHighLevel, controle

Settings van form `z8t7r0Jf0MGmJanbVsXB` ("Landingspagina form"):

- **Redirect URL**: `https://www.crossfitalkmaar.com/free-intro` ✅
- **Facebook Pixel ID**: leeg (de site-Pixel doet de tracking)
- **On Form Submission event**: `Lead`

## Content aanpassen

Alle teksten staan inline in `app/start/page.tsx`. Wat je waarschijnlijk wilt vervangen:

| Wat | Waar | Hoe |
|---|---|---|
| Hero-foto | `Image src="/images/CFA-juni-03-community.jpg"` | Vervang pad of leg nieuwe foto in `public/images/` |
| Testimonials (3 cards) | array `[{ name, age, videoId, quote, result }]` in sectie "Anderen lukte het ook" | Tekst aanpassen of `videoId` wijzigen (de profielfoto wordt automatisch opgehaald als YouTube thumbnail) |
| Telefoonnummer | `tel:+31722340560` (header + footer) | Search & replace |
| FAQ-vragen | array van 6 items in FAQ-sectie | Tekst aanpassen of items toevoegen |
| Form ID | `GHL_FORM_ID = "z8t7r0Jf0MGmJanbVsXB"` bovenaan `page.tsx` | Wijzig hier als je een ander GHL-form gebruikt; voeg het ID dan ook toe aan `LEAD_FIRING_FORM_IDS` in `FormSubmissionTracker.tsx` |
| Google Maps | `iframe src` in locatie-sectie | Vervang met de exacte iframe `src` van Google Maps (via Share → Embed) als de huidige search-URL niet de juiste pin laat zien |

## Deploy

Push naar `main`. Vercel deployt automatisch.

In Meta Ads Manager:
- Conversie-doel: **Lead** (standard event)
- Bestemmings-URL: `https://www.crossfitalkmaar.com/start`
- Retargeting-uitsluiting: voeg `/free-intro` toe aan een exclusion audience zodat ingevulde leads geen ads meer zien

## Troubleshooting

- **Form laadt niet**: controleer in browser console dat `https://ghl.crossfitalkmaar.com/js/form_embed.js` geen 404 geeft.
- **Lead-event vuurt niet client-side**: open DevTools → Network → filter "facebook.com/tr". Submit het form. Je moet een `Lead` request zien met `eventID=lead_...` parameter.
- **Header/Footer zijn nog zichtbaar**: hard refresh. `ConditionalChrome` checkt pathname en moet `/start` herkennen.
- **Google Maps wijst verkeerd op mobiel**: vervang de iframe `src` met de exacte URL die Google geeft via Share → Embed map (bevat `pb=` parameter).
