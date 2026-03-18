"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Image from "next/image";
import Link from "next/link";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";
import Script from "next/script";

export default function HyroxAlkmaarPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="HYROX Alkmaar - CrossFit Alkmaar"
        description="Officiële HYROX gym in Alkmaar. Training, events en alles wat je nodig hebt voor HYROX bij CrossFit Alkmaar."
        url="https://crossfitalkmaar.com/hyrox-alkmaar"
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
                name: "Wat is HYROX?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "HYROX is een fitness race waarbij je 8 rondes van 1 kilometer hardlopen afwisselt met 8 functionele workoutstations. Het is geschikt voor alle niveaus en je kunt solo of als duo (Doubles) meedoen.",
                },
              },
              {
                "@type": "Question",
                name: "Is CrossFit Alkmaar een officiële HYROX gym?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, CrossFit Alkmaar is een officiële HYROX gym met alle benodigde apparatuur, specifieke HYROX-lessen en ervaren coaches.",
                },
              },
              {
                "@type": "Question",
                name: "Kan ik bij CrossFit Alkmaar trainen voor HYROX als beginner?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absoluut. Onze HYROX-trainingen zijn geschikt voor alle niveaus. Start met de Kickstart en bouw in je eigen tempo op naar je eerste HYROX race.",
                },
              },
              {
                "@type": "Question",
                name: "Welke HYROX events organiseert CrossFit Alkmaar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We organiseren regelmatig HYROX Physical Fitness Tests (PFT) en HYROX Simulaties. De eerstvolgende PFT is op 9 mei en de eerste Simulatie op 30 mei 2026.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Malou — lid bij CrossFit Alkmaar",
            description: "Meer gaan beseffen hoe fijn het is om lekker in je vel te zitten - Lid bij CrossFit Alkmaar deelt haar ervaring",
            thumbnailUrl: "https://img.youtube.com/vi/G9HkOnSsKg8/maxresdefault.jpg",
            uploadDate: "2025-01-01",
            contentUrl: "https://www.youtube.com/watch?v=G9HkOnSsKg8",
            embedUrl: "https://www.youtube.com/embed/G9HkOnSsKg8",
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="HYROX Alkmaar - officiële HYROX gym bij CrossFit Alkmaar"
      >
        <Image
          src="/images/hyrox-alkmaar-header.jpg"
          alt="HYROX Alkmaar - officiële HYROX gym bij CrossFit Alkmaar"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            HYROX Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Officiële HYROX gym. Training, events en de beste voorbereiding op jouw eerste (of snelste) HYROX race.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_hyrox_hero", "hyrox-alkmaar"); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Aankomende HYROX events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/hyrox-pft-alkmaar" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition block">
              <p className="text-blue-900 font-semibold text-sm mb-2">Vrijdag 9 mei • Gratis</p>
              <h3 className="font-bold text-xl text-gray-900 mb-2">HYROX Physical Fitness Test</h3>
              <p className="text-gray-700 mb-4">Ontdek je HYROX-niveau en krijg advies voor je eerste race. Open voor iedereen.</p>
              <span className="text-blue-900 font-semibold hover:underline">Meer info & inschrijven →</span>
            </Link>
            <Link href="/hyrox-simulatie-alkmaar" className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition block">
              <p className="text-blue-900 font-semibold text-sm mb-2">Zaterdag 30 mei</p>
              <h3 className="font-bold text-xl text-gray-900 mb-2">HYROX Simulatie</h3>
              <p className="text-gray-700 mb-4">Volledige HYROX race: 8x 1km run + 8 stations. Voor beginners én ervaren atleten.</p>
              <span className="text-blue-900 font-semibold hover:underline">Meer info →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Waarom CFA voor HYROX */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Waarom CrossFit Alkmaar voor HYROX?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            CrossFit Alkmaar is een <Link href="/hyrox-gym-alkmaar" className="text-blue-900 font-semibold hover:underline">officiële HYROX gym</Link>. We hebben alle apparatuur die je op racedag tegenkomt: sleds, SkiErg, roeiers, sandbags, wall balls en kettlebells.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Maar het verschil zit in de coaching. Onze trainers kennen de HYROX-race en helpen je met pacing, strategie en techniek. Niet alleen voor de stations, maar ook voor de 8 kilometer hardlopen ertussen.
          </p>
          <p className="text-lg text-gray-700">
            En je traint niet alleen. Meerdere leden bereiden zich voor op HYROX — als singles, doubles en relay teams. Samen trainen maakt de <Link href="/hyrox-voorbereiding-alkmaar" className="text-blue-900 font-semibold hover:underline">HYROX-voorbereiding</Link> leuker én effectiever.
          </p>
        </div>
      </section>

      {/* HYROX pagina's hub */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meer over HYROX bij CrossFit Alkmaar</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/hyrox-training-alkmaar" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition block">
              <h3 className="font-bold text-lg text-gray-900 mb-2">HYROX Training</h3>
              <p className="text-gray-700">Specifieke HYROX-lessen en trainingsopbouw</p>
            </Link>
            <Link href="/hyrox-voorbereiding-alkmaar" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition block">
              <h3 className="font-bold text-lg text-gray-900 mb-2">HYROX Voorbereiding</h3>
              <p className="text-gray-700">Bereid je optimaal voor op je HYROX race</p>
            </Link>
            <Link href="/hyrox-gym-alkmaar" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition block">
              <h3 className="font-bold text-lg text-gray-900 mb-2">HYROX Gym</h3>
              <p className="text-gray-700">Alle apparatuur en faciliteiten op een rij</p>
            </Link>
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

      {/* Lid aan het woord */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Malou — lid bij CrossFit Alkmaar</h2>
          <p className="text-gray-600 text-center mb-8">&quot;Meer gaan beseffen hoe fijn het is om lekker in je vel te zitten&quot;</p>
          <div className="relative w-full rounded-lg shadow-sm overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <div className="absolute top-0 left-0 w-full h-full">
              <TrackedYouTubeEmbed videoId="G9HkOnSsKg8" title="Malou — lid bij CrossFit Alkmaar" />
            </div>
          </div>
          <p className="text-center mt-6">
            <Link href="/onze-leden" className="text-blue-900 font-semibold hover:underline">Bekijk meer verhalen van onze leden →</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde vragen</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat is HYROX?</h3>
              <p className="text-gray-600">HYROX is een fitness race waarbij je 8 rondes van 1 kilometer hardlopen afwisselt met 8 functionele workoutstations. Het is geschikt voor alle niveaus en je kunt solo of als duo (Doubles) meedoen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is CrossFit Alkmaar een officiële HYROX gym?</h3>
              <p className="text-gray-600">Ja, CrossFit Alkmaar is een officiële HYROX gym met alle benodigde apparatuur, specifieke HYROX-lessen en ervaren coaches.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Kan ik als beginner trainen voor HYROX?</h3>
              <p className="text-gray-600">Absoluut. Start met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> en bouw in je eigen tempo op naar je eerste HYROX race.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Welke HYROX events organiseert CrossFit Alkmaar?</h3>
              <p className="text-gray-600">We organiseren regelmatig HYROX Physical Fitness Tests en Simulaties. De eerstvolgende PFT is op 9 mei en de eerste Simulatie op 30 mei 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start met HYROX bij CrossFit Alkmaar
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Plan een gratis kennismakingsgesprek en ontdek hoe wij je kunnen helpen met je HYROX-doelen.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_hyrox_footer", "hyrox-alkmaar"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
