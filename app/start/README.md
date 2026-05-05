# /start — Meta ad landing page

Conversie-geoptimaliseerde landingspagina voor Meta-advertenties. Eén doel: bezoeker laten doorklikken naar het GHL-formulier ("Landingspagina form") → na submit redirect GHL naar `/free-intro` waar een booking-agenda staat.

## Bestanden

- `app/start/page.tsx` — de pagina zelf (10 secties)
- `app/start/layout.tsx` — metadata + `noindex` zodat Google de pagina niet opneemt
- `app/components/ConditionalChrome.tsx` — verbergt globale Header/Footer/popups op `/start`
- `app/components/FormSubmissionTracker.tsx` — vuurt Meta Pixel `Lead`-event af bij form submit
- `app/api/meta-lead/route.ts` — server-side Conversion API endpoint (backup voor ad-blockers)

## Lokale dev

```bash
npm run dev
```

Bekijk op http://localhost:3000/start

## Env-variabelen

Voeg toe aan `.env.local`:

```env
# Bestaand (gebruikt in MetaPixel.tsx)
META_PIXEL_ID=1745951116381755

# Nieuw — voor server-side Conversion API
META_CAPI_ACCESS_TOKEN=    # System User token uit Events Manager
META_LEAD_WEBHOOK_SECRET=  # Random sterke string (min. 32 chars). GHL stuurt dit mee in `x-webhook-secret` header.
META_CAPI_TEST_EVENT_CODE= # Optioneel — test event code voor debugging in Events Manager → Test Events
```

**Hoe genereer je `META_CAPI_ACCESS_TOKEN`**: Meta Business Manager → Events Manager → kies de pixel → Settings → Conversions API → "Generate access token".

**Hoe genereer je `META_LEAD_WEBHOOK_SECRET`**: een willekeurige sterke string, bijv:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

In Vercel zet je deze drie ook in Project Settings → Environment Variables (Production + Preview).

## GoHighLevel-instellingen

### Form: "Landingspagina form" (`z8t7r0Jf0MGmJanbVsXB`)

Settings → controleer:

- **Redirect URL**: `https://www.crossfitalkmaar.com/free-intro` ✅ (al ingesteld)
- **Facebook Pixel ID**: leeg laten (de site-Pixel doet de tracking)
- **On Form Submission event**: zet op **Lead** (niet "Submit Application"). Dat is consistent met onze eigen client-side `Lead`-fire en met server-side CAPI — Meta kan dan dedupliceren via `event_id`.

### Webhook → CAPI (server-side firing)

Voor reliability bij ad-blockers: laat GHL bij elke form-submission ook een webhook naar onze CAPI endpoint sturen.

1. Ga naar GHL → **Automation → Workflows** → New workflow
2. Trigger: **Form Submitted** → kies "Landingspagina form"
3. Action: **Webhook**
   - Method: `POST`
   - URL: `https://www.crossfitalkmaar.com/api/meta-lead`
   - Headers:
     - `Content-Type: application/json`
     - `x-webhook-secret: <waarde van META_LEAD_WEBHOOK_SECRET>`
   - Body (custom JSON):
     ```json
     {
       "email": "{{contact.email}}",
       "phone": "{{contact.phone}}",
       "first_name": "{{contact.first_name}}",
       "last_name": "{{contact.last_name}}",
       "source_url": "https://www.crossfitalkmaar.com/start"
     }
     ```
4. Save & Publish

Ter verificatie zie je in Meta Events Manager → "Test events" inkomende `Lead` events met source `server` (CAPI) en `browser` (Pixel).

## Content aanpassen

Alle teksten staan inline in `app/start/page.tsx`. Wat je waarschijnlijk wilt vervangen:

| Wat | Waar | Hoe |
|---|---|---|
| Hero-foto | `Image src="/images/CFA-juni-03-community.jpg"` | Vervang pad of leg nieuwe foto in `public/images/` |
| Testimonials (3 cards) | array `[{ name, age, quote, result }]` in sectie 4 | Vervang text + zet echte foto's in plaats van `bg-gray-300` placeholder div |
| Coach-grid | sectie 6, `Array.from({ length: 7 })` | Vervang door `<Image>` per coach met echte foto's |
| Telefoonnummer | `tel:+31722340560` (header + footer) | Search & replace |
| FAQ-vragen | array van 6 items in sectie 7 | Tekst aanpassen of items toevoegen |
| Form ID | `GHL_FORM_ID = "z8t7r0Jf0MGmJanbVsXB"` bovenaan `page.tsx` | Wijzig hier als je een ander GHL-form gebruikt; voeg dan ook toe aan `LEAD_FIRING_FORM_IDS` in `FormSubmissionTracker.tsx` |

## Placeholders die je nog moet invullen

- [ ] **3 testimonial-foto's** (sectie 4) — nu placeholder div met initiaal
- [ ] **7 coach-foto's** (sectie 6) — nu lege grijze tegels met "Coach 1..7"
- [ ] **Echte testimonial-quotes verifiëren** — huidige quotes zijn redelijk realistisch maar pas ze aan op de echte verhalen
- [ ] **Google Maps embed** — werkt met geschatte coördinaten; voor exact pin: ga naar google.com/maps, zoek Phoenixstraat 33, klik "Embed" en plak de iframe `src` URL in plaats van de huidige

## Deploy

Push naar `main`. Vercel deployt automatisch.

```bash
git add app/start app/components/FormSubmissionTracker.tsx app/components/ConditionalChrome.tsx app/api/meta-lead app/layout.tsx app/robots.ts
git commit -m "Add /start Meta ad landing page met server-side CAPI"
git push
```

Daarna in Meta Ads Manager:
- Conversie-doel: **Lead** (custom conversion of standard event)
- Bestemmings-URL: `https://www.crossfitalkmaar.com/start`
- Retargeting-uitsluiting: voeg `/free-intro` toe aan ene exclusion audience zodat ingevulde leads geen ads meer zien

## Meta Pixel deduplicatie

Hoe het werkt:
1. Bezoeker submitteert form in iframe.
2. GHL stuurt `form_submitted` postMessage → `FormSubmissionTracker` vuurt `fbq('track', 'Lead', {}, { eventID })` af. Pixel-call met dit event_id gaat naar Meta.
3. GHL workflow stuurt webhook naar `/api/meta-lead` → server vuurt CAPI `Lead`-event af met user_data (gehashed email/phone).
4. Meta dedupliceert via combinatie van `event_id` + matched user_data binnen ~48u.

Resultaat: ook bij ad-blockers/iOS tracking-prevention wordt de conversie geteld.

## Troubleshooting

- **Form laadt niet**: controleer in browser console dat `https://ghl.crossfitalkmaar.com/js/form_embed.js` geen 404 geeft.
- **Lead-event vuurt niet client-side**: open DevTools → Network → filter "facebook.com/tr". Submit het form. Je moet een `Lead` request zien met `eventID=lead_...` parameter.
- **CAPI faalt**: check Vercel function logs (`/api/meta-lead`). 401 = secret klopt niet. 500 = env var ontbreekt. 502 = Meta wijst event af (check response body voor reden).
- **Header/Footer zijn nog zichtbaar**: hard refresh — `ConditionalChrome` checkt pathname en moet `/start` herkennen.
