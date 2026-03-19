"use client";

import { trackCTAClick } from "../lib/analytics";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function HyroxSimulatieAlkmaarPage() {
  return (
    <div className="min-h-screen bg-gray-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            name: "HYROX Simulatie Alkmaar",
            description: "Volledige HYROX race simulatie bij CrossFit Alkmaar. 8x 1km hardlopen afgewisseld met 8 functionele workouts.",
            startDate: "2026-05-30T09:00:00+02:00",
            endDate: "2026-05-30T15:00:00+02:00",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            location: {
              "@type": "Place",
              name: "CrossFit Alkmaar",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Phoenixstraat 33",
                addressLocality: "Alkmaar",
                postalCode: "1812 PD",
                addressCountry: "NL",
              },
            },
            organizer: {
              "@type": "Organization",
              name: "CrossFit Alkmaar",
              url: "https://crossfitalkmaar.com",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
              url: "https://crossfitalkmaar.com/hyrox-simulatie-alkmaar",
            },
            image: "https://crossfitalkmaar.com/images/blog/Blog%20hyrox.jpg",
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
                name: "Wat is een HYROX Simulatie?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Een volledige nabootsing van een HYROX race: 8 rondes van 1 kilometer hardlopen, elk gevolgd door een functionele workout. Dezelfde opzet als een officiële HYROX wedstrijd.",
                },
              },
              {
                "@type": "Question",
                name: "Moet ik al ervaring hebben met HYROX?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nee, de simulatie is geschikt voor zowel beginners als ervaren HYROX-atleten. Onze coaches begeleiden je bij elk station.",
                },
              },
              {
                "@type": "Question",
                name: "Kan ik als Doubles meedoen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, je kunt je inschrijven als individual of als Doubles team. Beide formats worden aangeboden.",
                },
              },
              {
                "@type": "Question",
                name: "Moet ik lid zijn van CrossFit Alkmaar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nee, de HYROX Simulatie is open voor iedereen. Ook niet-leden zijn welkom om mee te doen.",
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
        aria-label="HYROX Simulatie bij CrossFit Alkmaar op 30 mei"
      >
        <Image
          src="/images/blog/Blog hyrox.jpg"
          alt="HYROX Simulatie bij CrossFit Alkmaar op 30 mei"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-blue-300 font-semibold text-lg mb-2">Zaterdag 30 mei 2026</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            HYROX Simulatie Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Een volledige HYROX race bij CrossFit Alkmaar. 8 rondes, 8 stations, 1 finish. Voor beginners én ervaren atleten.
          </p>
          <a
            href="#inschrijven"
            onClick={() => trackCTAClick("hyrox_sim_hero", "hyrox-simulatie-alkmaar")}
            className="bg-blue-900 hover:bg-blue-950 text-white font-bold text-xl py-5 px-12 rounded-lg transition cursor-pointer inline-block"
          >
            Inschrijving opent binnenkort
          </a>
        </div>
      </section>

      {/* Wat is de Simulatie */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Een echte HYROX race, bij CrossFit Alkmaar
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Op zaterdag 30 mei organiseren we bij CrossFit Alkmaar een volledige HYROX Simulatie. Dezelfde opzet als een officiële HYROX wedstrijd: 8 rondes van 1 kilometer hardlopen, elk gevolgd door een functioneel station.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Bereid je voor op je eerste HYROX, test je race-strategie of verbeter je tijd. De simulatie is de perfecte manier om te ervaren wat een HYROX-race inhoudt — zonder naar een officieel evenement te hoeven reizen.
          </p>
          <p className="text-lg text-gray-700">
            Heb je de <Link href="/hyrox-pft-alkmaar" className="text-blue-900 font-semibold hover:underline">HYROX PFT op 9 mei</Link> gedaan? Dan weet je precies waar je staat en kun je de simulatie gebruiken om je niveau te testen in een echte race-setting.
          </p>
        </div>
      </section>

      {/* De 8 stations */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">De 8 HYROX-stations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-1">1. SkiErg</h3>
              <p className="text-gray-700">1000m</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-1">2. Sled Push</h3>
              <p className="text-gray-700">50m</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-1">3. Sled Pull</h3>
              <p className="text-gray-700">50m</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-1">4. Burpee Broad Jumps</h3>
              <p className="text-gray-700">80m</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-1">5. Rowing</h3>
              <p className="text-gray-700">1000m</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-1">6. Farmers Carry</h3>
              <p className="text-gray-700">200m</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-1">7. Sandbag Lunges</h3>
              <p className="text-gray-700">100m</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-1">8. Wall Balls</h3>
              <p className="text-gray-700">100 reps</p>
            </div>
          </div>
          <p className="text-gray-600 mt-6 text-center">Elk station wordt voorafgegaan door 1 kilometer hardlopen — totaal 8 km.</p>
        </div>
      </section>

      {/* Praktische info */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Praktische informatie</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Datum & tijd</h3>
              <p className="text-gray-700">Zaterdag 30 mei 2026<br />09:00 – 15:00 uur</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Locatie</h3>
              <p className="text-gray-700">CrossFit Alkmaar<br />Phoenixstraat 33, Alkmaar</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Kosten</h3>
              <p className="text-gray-700">CFA-leden: € XX,-<br />Niet-leden: € XX,-</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Voor wie</h3>
              <p className="text-gray-700">Iedereen welkom. Individual of Doubles.<br />Beginners én ervaren atleten.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <Script src="https://ghl.crossfitalkmaar.com/reputation/assets/review-widget.js" strategy="lazyOnload" />
          <iframe
            className="lc_reviews_widget"
            src="https://ghl.crossfitalkmaar.com/reputation/widgets/review_widget/elOOWDMoCEHJO4WhphRj"
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: '100%', width: '100%' }}
            title="Google Reviews"
          ></iframe>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde vragen</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat is een HYROX Simulatie?</h3>
              <p className="text-gray-600">Een volledige nabootsing van een HYROX race: 8 rondes van 1 kilometer hardlopen, elk gevolgd door een functionele workout. Dezelfde opzet als een officiële HYROX wedstrijd.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Moet ik al ervaring hebben met HYROX?</h3>
              <p className="text-gray-600">Nee, de simulatie is geschikt voor zowel beginners als ervaren HYROX-atleten. Onze coaches begeleiden je bij elk station.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Kan ik als Doubles meedoen?</h3>
              <p className="text-gray-600">Ja, je kunt je inschrijven als individual of als Doubles team. Beide formats worden aangeboden.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Moet ik lid zijn van CrossFit Alkmaar?</h3>
              <p className="text-gray-600">Nee, de HYROX Simulatie is open voor iedereen. Ook niet-leden zijn welkom om mee te doen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="inschrijven" className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Doe mee op 30 mei
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            De inschrijving opent binnenkort. Houd onze kanalen in de gaten!
          </p>
          <a
            href="#inschrijven"
            onClick={() => trackCTAClick("hyrox_sim_footer", "hyrox-simulatie-alkmaar")}
            className="bg-white text-blue-900 font-bold text-xl py-5 px-12 rounded-lg hover:bg-gray-100 transition cursor-pointer inline-block"
          >
            Inschrijving opent binnenkort
          </a>
        </div>
      </section>
    </div>
  );
}
