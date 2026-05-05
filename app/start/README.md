# /start — Meta ad landing page

Conversie-geoptimaliseerde landingspagina voor Meta-advertenties. Eén doel: bezoeker laat gegevens achter via het GHL "Landingspagina form" → na submit redirect GHL naar `/free-intro` (waar de booking-agenda staat).

## Bestanden

- `app/start/page.tsx` — de pagina (10 secties + popup-formulier + Google Reviews widget)
- `app/start/layout.tsx` — metadata + `noindex` zodat Google de pagina niet opneemt
- `app/components/ConditionalChrome.tsx` — verbergt globale Header/Footer/popups op `/start`
- `app/components/FormSubmissionTracker.tsx` — fired Meta Pixel `Lead`-event bij form submit (al globaal aanwezig, uitgebreid voor het landingspagina-form)

## Lokale dev

```bash
npm run dev
```

Bekijk op http://localhost:3000/start

## Tracking — hoe het werkt

Niets nieuws nodig in Vercel of de codebase. De bestaande setup dekt alles:

1. **Meta Pixel** (`MetaPixel.tsx`, ID `1745951116381755`) — laadt op elke pagina, fired automatisch `PageView` zodra `/start` opent.
2. **Pixel `Lead` event** — `FormSubmissionTracker.tsx` luistert naar GHL form-submission postMessages en fired `fbq('track', 'Lead', ..., { eventID })` met een uniek event_id zodra het landingspagina-form wordt verstuurd.
3. **Server-side CAPI** — de bestaande GHL workflows fired CAPI events naar Meta zodra een contact door de pipeline-stages beweegt (Lead, Booked, Sale, etc.). Geen webhook of endpoint nodig vanuit deze codebase.

Meta dedupliceert client-side Pixel en server-side CAPI events automatisch via gehashed user_data (email/phone) binnen ~48u.

## GoHighLevel — controle

Settings van form `z8t7r0Jf0MGmJanbVsXB` ("Landingspagina form"):

- **Redirect URL**: `https://www.crossfitalkmaar.com/free-intro` ✅
- **Facebook Pixel ID**: leeg (de site-Pixel doet de tracking)
- **On Form Submission event**: `Lead`

## Content aanpassen

Alle teksten staan inline in `app/start/page.tsx`. Wat je waarschijnlijk wilt vervangen:

| Wat | Waar | Hoe |
|---|---|---|
| Hero-foto | `Image src="/images/CFA-juni-03-community.jpg"` | Vervang pad of leg nieuwe foto in `public/images/` |
| Testimonials (3 cards) | array `[{ name, age, quote, result }]` in sectie "Anderen lukte het ook" | Vervang text + zet echte foto's in plaats van `bg-gray-300` placeholder div |
| Coach-grid (7 tegels) | sectie "7 coaches die je naam kennen" | Vervang `Array.from({ length: 7 })` door `<Image>` per coach |
| Telefoonnummer | `tel:+31722340560` (header + footer) | Search & replace |
| FAQ-vragen | array van 6 items in FAQ-sectie | Tekst aanpassen of items toevoegen |
| Form ID | `GHL_FORM_ID = "z8t7r0Jf0MGmJanbVsXB"` bovenaan `page.tsx` | Wijzig hier als je een ander GHL-form gebruikt; voeg het ID dan ook toe aan `LEAD_FIRING_FORM_IDS` in `FormSubmissionTracker.tsx` |

## Placeholders die je nog moet invullen

- [ ] **3 testimonial-foto's** (sectie "Anderen lukte het ook") — nu placeholder div met initiaal
- [ ] **7 coach-foto's** — nu lege grijze tegels met "Coach 1..7"
- [ ] **Echte testimonial-quotes verifiëren** — huidige quotes zijn realistisch maar pas aan als je echte verhalen wilt gebruiken
- [ ] **Google Maps embed** — werkt met geschatte coördinaten; voor exact pin: ga naar google.com/maps, zoek Phoenixstraat 33, klik "Embed" en plak de iframe `src` URL

## Deploy

Push naar `main`. Vercel deployt automatisch.

In Meta Ads Manager:
- Conversie-doel: **Lead** (standard event)
- Bestemmings-URL: `https://www.crossfitalkmaar.com/start`
- Retargeting-uitsluiting: voeg `/free-intro` toe aan een exclusion audience zodat ingevulde leads geen ads meer zien

## Troubleshooting

- **Form laadt niet**: controleer in browser console dat `https://ghl.crossfitalkmaar.com/js/form_embed.js` geen 404 geeft.
- **Lead-event vuurt niet client-side**: open DevTools → Network → filter "facebook.com/tr". Submit het form. Je moet een `Lead` request zien met `eventID=lead_...` parameter.
- **Header/Footer zijn nog zichtbaar**: hard refresh — `ConditionalChrome` checkt pathname en moet `/start` herkennen.
