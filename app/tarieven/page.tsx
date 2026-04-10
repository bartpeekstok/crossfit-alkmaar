"use client";

import { usePopup } from "../components/PopupContext";
import { usePricingPopup } from "../components/PricingPopupContext";
import { trackCTAClick } from "../lib/analytics";

export default function TarievenPage() {
  const { openPopup } = usePopup();
  const { openPopup: openPricingPopup } = usePricingPopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthClub",
            "@id": "https://crossfitalkmaar.com/#organization",
            name: "CrossFit Alkmaar",
            url: "https://crossfitalkmaar.com",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Tarieven CrossFit Alkmaar",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Groepslessen 2x per week",
                  price: "99.95",
                  priceCurrency: "EUR",
                  description: "Groepslessen 2x per week (10x per maand). Inclusief professionele coaching, max 12 deelnemers per les, 90 day check ins.",
                  eligibleDuration: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
                },
                {
                  "@type": "Offer",
                  name: "Groepslessen 3x per week",
                  price: "127.50",
                  priceCurrency: "EUR",
                  description: "Groepslessen 3x per week (15x per maand). Meest populaire abonnement. Inclusief professionele coaching en 90 day check ins.",
                  eligibleDuration: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
                },
                {
                  "@type": "Offer",
                  name: "Groepslessen Onbeperkt",
                  price: "159.95",
                  priceCurrency: "EUR",
                  description: "Onbeperkt groepslessen per maand. Inclusief professionele coaching en 90 day check ins.",
                  eligibleDuration: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
                },
                {
                  "@type": "Offer",
                  name: "BUILD Small Group Training 2x per week",
                  price: "245.00",
                  priceCurrency: "EUR",
                  description: "Semi personal training in een vaste groep van max 6 personen, 2x per week plus 1 groepsles.",
                  eligibleDuration: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
                },
                {
                  "@type": "Offer",
                  name: "BUILD Small Group Training 3x per week",
                  price: "367.50",
                  priceCurrency: "EUR",
                  description: "Semi personal training in een vaste groep van max 6 personen, 3x per week plus 2 groepslessen.",
                  eligibleDuration: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
                },
                {
                  "@type": "Offer",
                  name: "28 Day Kickstart",
                  price: "350.00",
                  priceCurrency: "EUR",
                  description: "Startprogramma: 12 trainingen in 4 weken in kleine groepen van max 6. Leer de juiste techniek en bouw een sterke basis.",
                },
              ],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Wat kosten groepslessen bij CrossFit Alkmaar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Groepslessen bij CrossFit Alkmaar kosten €99,95 per maand voor 2x per week, €127,50 voor 3x per week, of €159,95 voor onbeperkt. Alle abonnementen zijn maandelijks opzegbaar en inclusief professionele coaching in kleine groepen van max 12 personen.",
                },
              },
              {
                "@type": "Question",
                name: "Wat kost de 28 Day Kickstart bij CrossFit Alkmaar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "De 28 Day Kickstart kost €350 eenmalig. Je traint 12 keer in 4 weken in kleine groepen van max 6 personen. Iedereen start met de Kickstart om de juiste techniek te leren.",
                },
              },
              {
                "@type": "Question",
                name: "Wat kost BUILD Small Group Training bij CrossFit Alkmaar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "BUILD Small Group Training kost €245 per maand voor 2x per week of €367,50 voor 3x per week. Je traint in een vaste groep van maximaal 6 personen met een op maat gemaakt programma.",
                },
              },
              {
                "@type": "Question",
                name: "Staan de tarieven van CrossFit Alkmaar op de website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, alle tarieven staan op crossfitalkmaar.com/tarieven. Groepslessen vanaf €99,95/maand, BUILD Small Group Training vanaf €245/maand en de 28 Day Kickstart voor €350 eenmalig. Alle abonnementen zijn maandelijks opzegbaar.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="CrossFit Alkmaar tarieven - persoonlijke coaching in kleine groepen"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <img src="/images/hero.jpg" alt="CrossFit Alkmaar tarieven - persoonlijke coaching in kleine groepen" className="sr-only" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tarieven</h1>
          <p className="text-xl text-gray-300 mb-8">
            Geen zaalabonnement. Coaching, begeleiding en een community die je echt vooruithelpt.
          </p>
          <button
            onClick={() => { trackCTAClick('gratis_intake_tarieven_hero', 'tarieven'); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Waarom investeren */}
      <section className="py-12 px-6 bg-gray-200">
        <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed space-y-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Waarom investeren in coaching?</h2>
          <p>Bij een reguliere sportschool betaal je voor toegang tot een zaal. Bij CrossFit Alkmaar investeer je in begeleiding, resultaat en een community die je verder brengt.</p>
          <p>Elke training wordt gegeven door een professionele coach, in kleine groepen van maximaal 6 tot 12 personen. Je hoeft zelf geen programma te bedenken &mdash; dat doen wij. Onze coaches letten op jouw techniek, passen het programma aan op jouw niveau en houden je progressie bij met 90 day check ins.</p>
          <p>Daarnaast krijg je er iets bij wat geen sportschool kan bieden: een hechte community die je motiveert om te blijven komen. Geen ronddwalen in een drukke zaal, maar gerichte training met mensen die hetzelfde doel hebben. En als je er een tijdje niet bent geweest? Dan nemen we persoonlijk contact met je op &mdash; geen geautomatiseerd mailtje, maar een coach die even checkt hoe het gaat.</p>
          <p className="font-semibold text-gray-900">Dat is waar je in investeert. Niet in een pasje, maar in je gezondheid.</p>
        </div>
      </section>

      {/* Foto: coach begeleidt training */}
      <div className="w-full h-[440px] overflow-hidden">
        <img src="/images/CFA-juni-03-community.jpg" alt="Community bij CrossFit Alkmaar" className="w-full h-full object-cover object-[center_25%]" />
      </div>

      {/* Vergelijking: CFA vs gewone sportschool */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">CrossFit Alkmaar vs. een gewone sportschool</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl shadow-md p-8 border border-gray-300">
              <div className="bg-gray-200 rounded-lg px-4 py-2 mb-6 inline-block">
                <h3 className="text-lg font-bold text-gray-500">Gewone sportschool</h3>
              </div>
              <div className="space-y-4">
                <p className="flex items-center gap-3 text-gray-500"><svg className="w-5 h-5 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>Geen coach, je bent op jezelf aangewezen</p>
                <p className="flex items-center gap-3 text-gray-500"><svg className="w-5 h-5 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>Geen programma, zelf uitzoeken</p>
                <p className="flex items-center gap-3 text-gray-500"><svg className="w-5 h-5 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>Niemand die je techniek checkt</p>
                <p className="flex items-center gap-3 text-gray-500"><svg className="w-5 h-5 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>Anoniem, niemand kent je naam</p>
                <p className="flex items-center gap-3 text-gray-500"><svg className="w-5 h-5 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>Geen check-ins of voortgangsgesprekken</p>
                <p className="flex items-center gap-3 text-gray-500"><svg className="w-5 h-5 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>Motivatie moet van jezelf komen</p>
              </div>
            </div>
            <div className="bg-blue-900 rounded-xl shadow-lg p-8 text-white">
              <div className="bg-blue-800 rounded-lg px-4 py-2 mb-6 inline-block">
                <h3 className="text-lg font-bold text-white">CrossFit Alkmaar</h3>
              </div>
              <div className="space-y-4">
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Elke les begeleid door een coach</p>
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Programma staat voor je klaar</p>
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Coaches letten op je techniek en veiligheid</p>
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Iedereen kent je naam</p>
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>90 day check ins met je coach</p>
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Community die je motiveert</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 90 Day Check-in sectie */}
      <section className="py-12 px-6 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto flex items-start gap-6">
          <div className="shrink-0 hidden md:block">
            <svg className="w-12 h-12 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3">90 Day Check-in met je coach</h2>
            <p className="text-blue-100 leading-relaxed">
              Elke 90 dagen zit je samen met je coach om je voortgang te bespreken. Waar sta je nu, wat gaat goed en waar kun je nog verbeteren? Samen stellen jullie nieuwe doelen en passen het plan aan. Zo blijf je niet stilstaan en haal je het maximale uit je lidmaatschap.
            </p>
          </div>
        </div>
      </section>

      {/* Groepslessen */}
      <section className="py-12 px-6 bg-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Groepslessen</h2>
          <p className="text-center text-gray-600 mb-8">Inclusief 90 day check ins met een coach. Geschikt voor elk niveau.</p>

          {/* Perks gesplitst */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-blue-900 rounded-2xl shadow-lg p-8 text-white">
              <p className="font-bold text-lg mb-5">Coaching &amp; begeleiding</p>
              <div className="space-y-3">
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Professionele coaches</p>
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Max 12 deelnemers per les</p>
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Geschikt voor elk niveau</p>
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>CrossFit, Hyrox en Strength</p>
              </div>
            </div>
            <div className="bg-blue-900 rounded-2xl shadow-lg p-8 text-white">
              <p className="font-bold text-lg mb-5">Faciliteiten</p>
              <div className="space-y-3">
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Groot rooster, flexibel plannen</p>
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>SportBit app</p>
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Gratis koffie en thee</p>
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Kleedkamers en douches</p>
                <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Gratis parkeren</p>
              </div>
            </div>
          </div>

          {/* Prijskaarten */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-center border border-gray-200">
              <p className="text-gray-600 text-sm font-medium uppercase tracking-wide mb-3">2x per week</p>
              <p className="text-4xl font-bold text-blue-900">€99,95</p>
              <p className="text-gray-500 text-sm mt-1">per maand</p>
              <p className="text-gray-400 text-xs mt-2">10x per maand</p>
              <p className="text-green-700 text-sm font-semibold mt-3">€10,- per training</p>
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-center border-2 border-blue-900 relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-900 text-white text-xs font-semibold px-4 py-1.5 rounded-full">Populair</span>
              <p className="text-gray-600 text-sm font-medium uppercase tracking-wide mb-3">3x per week</p>
              <p className="text-4xl font-bold text-blue-900">€127,50</p>
              <p className="text-gray-500 text-sm mt-1">per maand</p>
              <p className="text-gray-400 text-xs mt-2">15x per maand</p>
              <p className="text-green-700 text-sm font-semibold mt-3">€8,50 per training</p>
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-center border border-gray-200">
              <p className="text-gray-600 text-sm font-medium uppercase tracking-wide mb-3">Onbeperkt</p>
              <p className="text-4xl font-bold text-blue-900">€159,95</p>
              <p className="text-gray-500 text-sm mt-1">per maand</p>
              <p className="text-green-700 text-sm font-semibold mt-3">Train zo vaak je wilt</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => { trackCTAClick('pricing_tarieven_groepslessen', 'tarieven'); openPricingPopup(); }}
              className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer text-lg"
            >
              Start met groepslessen
            </button>
          </div>
        </div>
      </section>

      {/* Social proof - reviews */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Wat onze leden zeggen</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">&quot;De coaching maakt het verschil. Bij mijn vorige sportschool deed ik maar wat, hier word ik echt begeleid en boek ik resultaat.&quot;</p>
              <div className="flex items-center gap-3 mt-4">
                <img src="https://i.pravatar.cc/80?img=12" alt="Erik" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-gray-900 font-semibold text-sm">Erik</p>
                  <p className="text-gray-400 text-xs">Lid sinds 2022</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">&quot;Ik was sceptisch over de prijs, maar het is elke cent waard. De persoonlijke aandacht en de community zijn onbetaalbaar.&quot;</p>
              <div className="flex items-center gap-3 mt-4">
                <img src="https://i.pravatar.cc/80?img=3" alt="Tim" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-gray-900 font-semibold text-sm">Tim</p>
                  <p className="text-gray-400 text-xs">Lid sinds 2016</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">&quot;Na jaren sportschoolabonnementen die ik niet gebruikte, ga ik hier al 3 jaar met plezier 3x per week. De coaches en de groep houden je gemotiveerd.&quot;</p>
              <div className="flex items-center gap-3 mt-4">
                <img src="https://i.pravatar.cc/80?img=5" alt="Linda" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-gray-900 font-semibold text-sm">Linda</p>
                  <p className="text-gray-400 text-xs">Lid sinds 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foto: groepsles */}
      <div className="w-full h-[525px] overflow-hidden">
        <img src="/images/CFA-november-lowres-96.jpg" alt="Groepsles bij CrossFit Alkmaar" className="w-full h-full object-cover object-[center_30%]" />
      </div>

      {/* BUILD Small Group */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">BUILD Small Group Training</h2>
          <p className="text-center text-gray-600 mb-8">Semi personal training in een vaste groep van maximaal 6 personen.</p>
          <div className="mb-10 bg-blue-900 rounded-2xl shadow-lg p-8 md:p-10 max-w-4xl mx-auto text-white">
            <p className="font-bold text-xl md:text-2xl mb-2 text-center">BUILD inclusief:</p>
            <p className="text-blue-200 text-base mb-6 text-center">Alles van groepslessen, plus:</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Max 6 deelnemers per training</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Programma op maat</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Vaste groep, vaste coaches</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Je plek is altijd gereserveerd</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Persoonlijke aandacht in een groep</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Voordeliger dan personal training</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-center border border-gray-200">
              <p className="text-gray-600 text-sm font-medium uppercase tracking-wide mb-3">2x per week</p>
              <p className="text-4xl font-bold text-blue-900">€245</p>
              <p className="text-gray-500 text-sm mt-1">per maand</p>
              <div className="mt-4 space-y-1 text-gray-700">
                <p className="text-sm"><span className="text-blue-900 font-bold">&#8226;</span> 2 BUILD trainingen</p>
                <p className="text-sm"><span className="text-blue-900 font-bold">&#8226;</span> 1 groepsles</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-center border border-gray-200">
              <p className="text-gray-600 text-sm font-medium uppercase tracking-wide mb-3">3x per week</p>
              <p className="text-4xl font-bold text-blue-900">€367,50</p>
              <p className="text-gray-500 text-sm mt-1">per maand</p>
              <div className="mt-4 space-y-1 text-gray-700">
                <p className="text-sm"><span className="text-blue-900 font-bold">&#8226;</span> 3 BUILD trainingen</p>
                <p className="text-sm"><span className="text-blue-900 font-bold">&#8226;</span> 2 groepslessen</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => { trackCTAClick('pricing_tarieven_build', 'tarieven'); openPricingPopup(); }}
              className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer text-lg"
            >
              Start met BUILD training
            </button>
          </div>
        </div>
      </section>

      {/* Kickstart */}
      <section className="py-12 px-6 bg-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">28 Day Kickstart</h2>
          <p className="text-center text-gray-600 mb-8">Iedereen start met semi personal training in de Kickstart.</p>
          <div className="mb-10 bg-blue-900 rounded-2xl shadow-lg p-8 md:p-10 max-w-4xl mx-auto text-white">
            <p className="font-bold text-xl md:text-2xl mb-6 text-center">Kickstart inclusief:</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>12 trainingen in 4 weken</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Max 6 deelnemers per groep</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Leer de juiste techniek</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Aandacht voor jouw doelen</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Een veilige start</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Geschikt voor beginners en gevorderden</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Eindgesprek met advies</p>
            </div>
          </div>
          <div className="max-w-sm mx-auto">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-center border border-gray-200">
              <p className="text-gray-600 text-sm font-medium uppercase tracking-wide mb-3">4 weken</p>
              <p className="text-4xl font-bold text-blue-900">€350</p>
              <p className="text-gray-500 text-sm mt-1">eenmalig</p>
              <p className="text-green-700 text-sm font-semibold mt-3">€29,- per training</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => { trackCTAClick('pricing_tarieven_kickstart', 'tarieven'); openPricingPopup(); }}
              className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer text-lg"
            >
              Start je Kickstart
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Benieuwd welk programma bij jou past?</h2>
          <p className="text-xl mb-8">Plan een gratis kennismaking. We bespreken je doelen en adviseren het beste programma.</p>
          <button
            onClick={() => { trackCTAClick('gratis_intake_tarieven', 'tarieven'); openPopup(); }}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
