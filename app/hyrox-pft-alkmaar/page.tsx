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
                  text: "De HYROX PFT is een officiële fitnesstest van HYROX. Je doet één doorlopende workout: 1000m run, 50 burpee broad jumps, 100 stationary lunges, 1000m roeien, 30 hand-release push-ups en 100 wall balls. Op basis van je tijd krijg je advies voor welke divisie je je het beste kunt inschrijven.",
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
          src="/images/hyrox-pft-header.jpg"
          alt="HYROX race materiaal - sleds en touwen op de HYROX baan"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Image
            src="/images/hyrox-pft-logo.png"
            alt="HYROX PFT Global Tour logo"
            width={180}
            height={180}
            className="mx-auto mb-6"
          />
          <p className="text-blue-300 font-bold text-2xl mb-4">Vrijdag 9 mei 2026 • Gratis</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            HYROX Physical Fitness Test
          </h1>
          <p className="text-xl text-gray-200 mb-4">
            Ontdek je HYROX-niveau en krijg advies voor je eerste race. Gratis, bij CrossFit Alkmaar.
          </p>
          <p className="text-gray-300 mb-8">In samenwerking met HYROX HQ</p>
          <a
            href="https://pft.hyrox.com/event/e2ef2440-04ea-4d8c-ace0-63834fed4f42"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCTAClick("hyrox_pft_hero", "hyrox-pft-alkmaar")}
            className="bg-blue-900 hover:bg-blue-950 text-white font-bold text-xl py-5 px-12 rounded-lg transition cursor-pointer inline-block"
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
            De HYROX PFT is een officiële fitnesstest ontworpen door HYROX HQ. Het is één doorlopende workout die je fitnessniveau meet en je laat ervaren wat HYROX inhoudt — zonder de volledige 8 km hardlopen.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Na afloop krijg je een persoonlijke score en advies over welke divisie het beste bij je past voor je eerste HYROX race.
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
            <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4 items-start">
              <svg className="w-6 h-6 text-blue-900 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Datum & tijd</h3>
                <p className="text-gray-700">Vrijdag 9 mei 2026<br />09:00 – 11:00 uur</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4 items-start">
              <svg className="w-6 h-6 text-blue-900 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Locatie</h3>
                <p className="text-gray-700">CrossFit Alkmaar<br />Phoenixstraat 33<br />1812 PP Alkmaar</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4 items-start">
              <svg className="w-6 h-6 text-blue-900 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Kosten</h3>
                <p className="text-gray-700">Gratis — voor iedereen toegankelijk</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4 items-start">
              <svg className="w-6 h-6 text-blue-900 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Voor wie</h3>
                <p className="text-gray-700">Iedereen, ook niet-leden. Geen ervaring nodig.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat kun je verwachten */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">De workout</h2>
          <p className="text-lg text-gray-700 mb-6">De PFT is één doorlopende workout met de volgende oefeningen:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-bold text-gray-900">1. Run</p>
              <p className="text-gray-700">1000 meter</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-bold text-gray-900">2. Burpee Broad Jumps</p>
              <p className="text-gray-700">50 reps</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-bold text-gray-900">3. Stationary Lunges</p>
              <p className="text-gray-700">100 reps</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-bold text-gray-900">4. Rowing</p>
              <p className="text-gray-700">1000 meter</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-bold text-gray-900">5. Hand-Release Push-Ups</p>
              <p className="text-gray-700">30 reps</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-bold text-gray-900">6. Wall Balls</p>
              <p className="text-gray-700">100 reps</p>
            </div>
          </div>
          <p className="text-gray-600 mt-6 text-center">Geen complexe bewegingen. Iedereen kan het afmaken — de vraag is alleen hoe snel.</p>
        </div>
      </section>

      {/* HYROX Official Gym */}
      <section className="relative py-24 px-6">
        <Image
          src="/images/blog/Blog hyrox.jpg"
          alt="CrossFit Alkmaar is officiële HYROX gym"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">CrossFit Alkmaar is officiële HYROX gym</h2>
          <p className="text-lg text-gray-200">Deze PFT organiseren we in samenwerking met HYROX HQ als aftrap van ons HYROX-programma.</p>
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
              <p className="text-gray-600">De HYROX PFT is een officiële fitnesstest van HYROX. Je doet één doorlopende workout: 1000m run, 50 burpee broad jumps, 100 stationary lunges, 1000m roeien, 30 hand-release push-ups en 100 wall balls. Op basis van je tijd krijg je advies voor welke divisie je je het beste kunt inschrijven.</p>
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
            className="bg-white text-blue-900 font-bold text-xl py-5 px-12 rounded-lg hover:bg-gray-100 transition cursor-pointer inline-block"
          >
            Schrijf je gratis in
          </a>
        </div>
      </section>
    </div>
  );
}
