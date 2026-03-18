"use client";

import { trackCTAClick } from "../lib/analytics";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function HyroxPftAlkmaarPage() {
  return (
    <div className="min-h-screen bg-gray-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsEvent",
            name: "HYROX Physical Fitness Test Alkmaar",
            description: "Gratis HYROX Physical Fitness Test bij CrossFit Alkmaar. Ontdek je niveau en krijg advies voor je eerste HYROX race.",
            startDate: "2026-05-09T09:00:00+02:00",
            endDate: "2026-05-09T11:00:00+02:00",
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
              price: "0",
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
              url: "https://pft.hyrox.com/event/e2ef2440-04ea-4d8c-ace0-63834fed4f42",
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
                name: "Wat is de HYROX Physical Fitness Test?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "De HYROX PFT is een officiële test van HYROX waarmee je je fitnessniveau meet. Je doet verkorte versies van de 8 HYROX-stations en krijgt advies voor welke divisie je je het beste kunt inschrijven.",
                },
              },
              {
                "@type": "Question",
                name: "Is de HYROX PFT gratis?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, deelname aan de HYROX Physical Fitness Test bij CrossFit Alkmaar op 9 mei is volledig gratis.",
                },
              },
              {
                "@type": "Question",
                name: "Moet ik lid zijn van CrossFit Alkmaar om mee te doen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nee, iedereen is welkom. Of je nu lid bent of niet, je kunt je gratis inschrijven voor de HYROX PFT.",
                },
              },
              {
                "@type": "Question",
                name: "Heb ik HYROX-ervaring nodig?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nee, de PFT is juist bedoeld als introductie tot HYROX. Het is perfect voor beginners die willen ontdekken of HYROX iets voor hen is.",
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
        aria-label="HYROX Physical Fitness Test bij CrossFit Alkmaar op 9 mei"
      >
        <Image
          src="/images/blog/Blog hyrox.jpg"
          alt="HYROX Physical Fitness Test bij CrossFit Alkmaar op 9 mei"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-blue-300 font-semibold text-lg mb-2">Vrijdag 9 mei 2026 • Gratis</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            HYROX Physical Fitness Test
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Ontdek je HYROX-niveau en krijg advies voor je eerste race. Gratis, bij CrossFit Alkmaar.
          </p>
          <a
            href="https://pft.hyrox.com/event/e2ef2440-04ea-4d8c-ace0-63834fed4f42"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick("hyrox_pft_hero", "hyrox-pft-alkmaar")}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer inline-block"
          >
            Schrijf je gratis in
          </a>
        </div>
      </section>

      {/* Wat is de PFT */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Wat is de HYROX Physical Fitness Test?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            De HYROX PFT is speciaal ontworpen door HYROX HQ om jou de perfecte introductie te geven. Je doet verkorte versies van de 8 HYROX-stations en krijgt direct inzicht in je niveau.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Na afloop ontvang je persoonlijk advies over welke divisie het beste bij je past voor je eerste HYROX race. Of je nu een complete beginner bent of al ervaring hebt — de PFT geeft je een duidelijk startpunt.
          </p>
          <p className="text-lg text-gray-700">
            CrossFit Alkmaar organiseert deze officiële PFT in samenwerking met HYROX HQ als aftrap van onze nieuwe status als <Link href="/hyrox-gym-alkmaar" className="text-blue-900 font-semibold hover:underline">officiële HYROX gym</Link>.
          </p>
        </div>
      </section>

      {/* Praktische info */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Praktische informatie</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">📅 Datum & tijd</h3>
              <p className="text-gray-700">Vrijdag 9 mei 2026<br />09:00 – 11:00 uur</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">📍 Locatie</h3>
              <p className="text-gray-700">CrossFit Alkmaar<br />Phoenixstraat 33, Alkmaar</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">💰 Kosten</h3>
              <p className="text-gray-700">Gratis — voor iedereen toegankelijk</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">👥 Voor wie</h3>
              <p className="text-gray-700">Iedereen, ook niet-leden. Geen ervaring nodig.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wat kun je verwachten */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Wat kun je verwachten?</h2>
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              <strong>Verkorte HYROX-stations:</strong> Je doorloopt alle 8 stations in een aangepast format — van SkiErg en sled push tot wall balls en farmers carry.
            </p>
            <p className="text-lg text-gray-700">
              <strong>Persoonlijke score:</strong> Je krijgt een score die je niveau aangeeft en vergelijkt met andere HYROX-deelnemers.
            </p>
            <p className="text-lg text-gray-700">
              <strong>Divisie-advies:</strong> Op basis van je resultaten krijg je advies of je het beste kunt starten in Open, Pro of Doubles.
            </p>
            <p className="text-lg text-gray-700">
              <strong>Professionele begeleiding:</strong> Onze coaches begeleiden je bij elk station zodat je alles uit de test haalt.
            </p>
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
              <h3 className="text-xl font-semibold mb-2">Wat is de HYROX Physical Fitness Test?</h3>
              <p className="text-gray-600">De HYROX PFT is een officiële test van HYROX waarmee je je fitnessniveau meet. Je doet verkorte versies van de 8 HYROX-stations en krijgt advies voor welke divisie je je het beste kunt inschrijven.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is de HYROX PFT gratis?</h3>
              <p className="text-gray-600">Ja, deelname aan de HYROX Physical Fitness Test bij CrossFit Alkmaar op 9 mei is volledig gratis.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Moet ik lid zijn van CrossFit Alkmaar om mee te doen?</h3>
              <p className="text-gray-600">Nee, iedereen is welkom. Of je nu lid bent of niet, je kunt je gratis inschrijven voor de HYROX PFT.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Heb ik HYROX-ervaring nodig?</h3>
              <p className="text-gray-600">Nee, de PFT is juist bedoeld als introductie tot HYROX. Het is perfect voor beginners die willen ontdekken of HYROX iets voor hen is.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Doe gratis mee op 9 mei
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Schrijf je in voor de HYROX Physical Fitness Test en ontdek je niveau. Iedereen is welkom.
          </p>
          <a
            href="https://pft.hyrox.com/event/e2ef2440-04ea-4d8c-ace0-63834fed4f42"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick("hyrox_pft_footer", "hyrox-pft-alkmaar")}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer inline-block"
          >
            Schrijf je gratis in
          </a>
        </div>
      </section>
    </div>
  );
}
