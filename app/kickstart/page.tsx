"use client";

import { useKickstartPopup } from "../components/KickstartPopupContext";
import ServiceSchema from "../components/ServiceSchema";
import { trackCTAClick } from "../lib/analytics";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";

export default function KickstartPage() {
  const { openPopup } = useKickstartPopup();

  const maanden = [
    "januari", "februari", "maart", "april", "mei", "juni",
    "juli", "augustus", "september", "oktober", "november", "december"
  ];
  
  const huidigeMaandIndex = new Date().getMonth();
  const volgendeMaand = maanden[(huidigeMaandIndex + 1) % 12];

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="28 Day Kickstart"
        description="4 weken introductieprogramma voor beginners. Bouw een sterke basis op met begeleide trainingen en voedingsadvies."
        url="https://crossfitalkmaar.com/kickstart"
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
                name: "Wat is de 28 Day Kickstart bij CrossFit Alkmaar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Een introductieprogramma van 4 weken waarin je 12 keer traint in kleine groepen van max 6 personen. Je leert de basis van kracht- en conditietraining onder professionele begeleiding.",
                },
              },
              {
                "@type": "Question",
                name: "Wat kost de 28 Day Kickstart?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "De 28 Day Kickstart kost €350 eenmalig voor 12 trainingen in 4 weken. Inclusief een eindgesprek met advies over doorstroming.",
                },
              },
              {
                "@type": "Question",
                name: "Is de Kickstart geschikt voor beginners?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, de Kickstart is speciaal ontworpen voor mensen die (weer) willen starten met trainen. Je leert alles vanaf de basis in een kleine groep van max 6 personen.",
                },
              },
              {
                "@type": "Question",
                name: "Wat gebeurt er na de Kickstart?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Na de Kickstart kun je doorstromen naar onze groepslessen (vanaf €99,95/maand) of BUILD Small Group Training (vanaf €245/maand). Tijdens een afsluitend adviesgesprek kijken we samen wat het beste bij je past.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthClub",
            "@id": "https://crossfitalkmaar.com/#organization",
            name: "CrossFit Alkmaar",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              bestRating: "5",
              worstRating: "1",
              ratingCount: "260",
              reviewCount: "260",
            },
          }),
        }}
      />
      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="28 day kickstart programma bij CrossFit Alkmaar - beginners trainen met coach"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/kickstart-header.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <img src="/images/kickstart-header.jpg" alt="28 day kickstart programma bij CrossFit Alkmaar - beginners trainen met coach" className="sr-only" width={1200} height={600} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            28 day kickstart
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            De perfecte start naar een fitter en sterker leven. In 4 weken bouw je een sterke basis op.
          </p>
          <button
            onClick={() => { trackCTAClick('claim_plek_hero', 'kickstart'); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Claim je plek voor {volgendeMaand}
          </button>
        </div>
      </section>

      {/* Wat is de Kickstart */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Wat is de 28 day Kickstart?</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              De Kickstart is speciaal ontworpen voor drukke mensen die (weer) willen starten met trainen maar niet weten waar te beginnen. Wij maken trainen leuk, veilig en effectief. Zo leggen we een goede basis om op verder te bouwen.
            </p>
            <p className="mb-4">
              Je traint in een kleine groep van maximaal 6 personen, zodat je persoonlijke aandacht krijgt. We nemen de tijd om alles goed uit te leggen en te oefenen.
            </p>
            <p>
              Na de Kickstart kun je met vertrouwen doorstromen naar ons BUILD programma of de groepslessen. Tijdens een afsluitend adviesgesprek kijken we samen wat het beste bij jou past.
            </p>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <TrackedYouTubeEmbed videoId="esc-52ZNdPY" title="Steven - Kickstart ervaring" />
          </div>
          <p className="text-center text-gray-900 mt-6 text-xl font-medium italic">
            Steven, deelnemer kickstart november 2024: 'Houding en techniek zijn heel belangrijk, en daar zijn de trainers hier ongelooflijk goed in.'
          </p>
        </div>
      </section>

      {/* Wat je krijgt */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Wat je krijgt</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ 12 trainingen in 4 weken</h3>
              <p className="text-gray-600">Drie trainingen per week op vaste tijden, zodat het in je schema past.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Kleine groepen (max 6)</h3>
              <p className="text-gray-600">Maximaal 6 personen per groep voor persoonlijke aandacht.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Een goede basis</h3>
              <p className="text-gray-600">Je leert de basis van kracht- en conditietraining en we laten je ervaren dat trainen leuk is!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Basisleefstijladvies</h3>
              <p className="text-gray-600">Naast training krijg je tips over voeding en herstel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde vragen</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Wat is de 28 Day Kickstart bij CrossFit Alkmaar?</h3>
              <p className="text-gray-600">Een introductieprogramma van 4 weken waarin je 12 keer traint in kleine groepen van max 6 personen. Je leert de basis van kracht- en conditietraining onder professionele begeleiding.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Wat kost de 28 Day Kickstart?</h3>
              <p className="text-gray-600">De 28 Day Kickstart kost €350 eenmalig voor 12 trainingen in 4 weken. Inclusief een eindgesprek met advies over doorstroming.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Is de Kickstart geschikt voor beginners?</h3>
              <p className="text-gray-600">Ja, de Kickstart is speciaal ontworpen voor mensen die (weer) willen starten met trainen. Je leert alles vanaf de basis in een kleine groep van max 6 personen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Wat gebeurt er na de Kickstart?</h3>
              <p className="text-gray-600">Na de Kickstart kun je doorstromen naar onze groepslessen (vanaf €99,95/maand) of BUILD Small Group Training (vanaf €245/maand). Tijdens een afsluitend adviesgesprek kijken we samen wat het beste bij je past.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start in {volgendeMaand}</h2>
          <p className="text-xl mb-8">
            De Kickstart van {volgendeMaand} heeft nog plekken beschikbaar.
          </p>
          <button
            onClick={() => { trackCTAClick('meld_je_aan_footer', 'kickstart'); openPopup(); }}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Meld je aan
          </button>
        </div>
      </section>
    </div>
  );
}