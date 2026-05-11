"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Image from "next/image";
import Link from "next/link";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";
import Script from "next/script";

export default function SportschoolAlkmaarPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="Sportschool Alkmaar - CrossFit Alkmaar"
        description="Persoonlijke coaching in kleine groepen van max 12 personen. Voor alle niveaus, ook beginners en 50+."
        url="https://crossfitalkmaar.com/sportschool-alkmaar"
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
                name: "Wat maakt CrossFit Alkmaar anders dan een gewone sportschool?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bij ons train je nooit alleen. Elke les wordt begeleid door een coach, in kleine groepen van max 12. Geen losse machines, maar gevarieerde training die werkt.",
                },
              },
              {
                "@type": "Question",
                name: "Is CrossFit Alkmaar geschikt voor beginners?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja. Iedereen start met een 28 Day Kickstart waarin je de basis leert in kleine groepen van max 6 personen.",
                },
              },
              {
                "@type": "Question",
                name: "Wat kost een lidmaatschap?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Onze abonnementen starten vanaf €99,95 per maand. Het exacte pakket dat bij jou past, bespreken we tijdens je gratis kennismaking.",
                },
              },
              {
                "@type": "Question",
                name: "Waar zit CrossFit Alkmaar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Aan de Phoenixstraat 33 in Alkmaar, met ruime parkeergelegenheid.",
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
              ratingCount: "273",
              reviewCount: "273",
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
            name: "Simone — lid bij CrossFit Alkmaar",
            description: "Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar. - Lid bij CrossFit Alkmaar deelt haar ervaring",
            thumbnailUrl: `https://img.youtube.com/vi/14v6cnGlI7g/maxresdefault.jpg`,
            uploadDate: "2025-01-01",
            contentUrl: `https://www.youtube.com/watch?v=14v6cnGlI7g`,
            embedUrl: `https://www.youtube.com/embed/14v6cnGlI7g`,
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="Sportschool Alkmaar - CrossFit Alkmaar groepstraining met coach"
      >
        <Image
          src="/images/CFA-november-lowres-73.jpg"
          alt="Sportschool Alkmaar - CrossFit Alkmaar groepstraining met coach"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sportschool Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Geen grote onpersoonlijke gym, maar persoonlijke coaching in kleine groepen waar iedereen je naam kent.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_sportschool_hero", "sportschool-alkmaar"); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Waarom geen gewone sportschool */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Waarom CrossFit Alkmaar anders is dan een gewone sportschool
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Bij de meeste sportscholen in Alkmaar krijg je een rondje langs de apparaten en wordt je vervolgens aan je lot overgelaten. Bij CrossFit Alkmaar is dat anders. Elke training wordt begeleid door een professionele coach, in groepen van maximaal 12 personen.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Je hoeft niet zelf te bedenken wat je gaat doen. Wij schrijven de trainingen, coachen je door elke sessie, en passen oefeningen aan op jouw niveau. Of je nu een complete beginner bent of al jarenlang sport.
          </p>
          <p className="text-lg text-gray-700">
            Het resultaat? Je wordt sterker, fitter en gezonder. Zonder eindeloos te zwoegen op een loopband zonder doel.
          </p>
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

      {/* Wat je kunt verwachten */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Wat je kunt verwachten
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Kleine groepen (max 12)
              </h3>
              <p className="text-gray-700">
                Je bent geen nummer. Onze coaches kennen je naam, je doelen en waar je aan werkt. Persoonlijke aandacht is de standaard.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Professionele coaching
              </h3>
              <p className="text-gray-700">
                Elke les wordt begeleid door een gecertificeerde coach. Geen scherm met instructies, maar een coach die naast je staat.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Gevarieerde training
              </h3>
              <p className="text-gray-700">
                CrossFit, strength, conditie - elke dag een andere workout. Bekijk ons <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">lesrooster</Link> voor alle lessen. Je traint je hele lichaam en het wordt nooit saai.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Community
              </h3>
              <p className="text-gray-700">
                Je traint niet alleen, maar met een vaste groep. Mensen die je aanmoedigen, op je wachten en je motiveren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Voor wie is CrossFit Alkmaar?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Onze leden zijn 20 tot 70+ jaar. Sommigen hebben nooit gesport, anderen komen van een andere sportschool omdat ze meer begeleiding willen. Of je nu kiest voor <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">groepslessen</Link> of <Link href="/personal-training" className="text-blue-900 font-semibold hover:underline">personal training</Link> — je krijgt coaching die bij je past.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Iedereen start met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> - een persoonlijk traject waarin je de basis leert in semi personal training. Zo sta je nooit onvoorbereid in een groepsles.
          </p>
        </div>
      </section>

      {/* AEO Content */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Hoe kies je de juiste sportschool?</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoe kies je de juiste sportschool in Alkmaar?</h3>
              <p className="text-gray-600">Let op drie dingen: krijg je persoonlijke begeleiding, zijn de groepen klein genoeg voor aandacht, en is er een duidelijk programma? Bij CrossFit Alkmaar train je altijd onder coaching in groepen van max 12, met een programma dat voor je geschreven wordt.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat is het verschil tussen een sportschool en CrossFit?</h3>
              <p className="text-gray-600">Bij een gewone sportschool bepaal je zelf wat je doet op losse apparaten. Bij CrossFit krijg je elke les een andere workout — krachttraining, conditie en functionele bewegingen — altijd begeleid door een coach die je techniek bewaakt en oefeningen aanpast aan jouw niveau.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Waarom is begeleiding bij sporten belangrijk?</h3>
              <p className="text-gray-600">Zonder begeleiding maak je sneller fouten in techniek, train je niet efficiënt, en haak je eerder af. Met een coach naast je leer je sneller, train je veiliger, en blijf je gemotiveerd door de structuur en de groep om je heen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lid aan het woord */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Simone — lid bij CrossFit Alkmaar</h2>
          <p className="text-gray-600 text-center mb-8">&quot;Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar.&quot;</p>
          <div className="relative w-full rounded-lg shadow-sm overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <div className="absolute top-0 left-0 w-full h-full">
              <TrackedYouTubeEmbed videoId="14v6cnGlI7g" title="Simone — lid bij CrossFit Alkmaar" />
            </div>
          </div>
          <p className="text-center mt-6">
            <Link href="/onze-leden" className="text-blue-900 font-semibold hover:underline">Bekijk meer verhalen van onze leden →</Link>
          </p>
        </div>
      </section>

      {/* Veelgestelde vragen */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde vragen</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat maakt CrossFit Alkmaar anders dan een gewone sportschool?</h3>
              <p className="text-gray-600">Bij ons train je nooit alleen. Elke les wordt begeleid door een coach, in kleine groepen van max 12. Geen losse machines, maar gevarieerde training die werkt.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is CrossFit Alkmaar geschikt voor beginners?</h3>
              <p className="text-gray-600">Ja. Iedereen start met een <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">28 Day Kickstart</Link> waarin je de basis leert in kleine groepen van max 6 personen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat kost een lidmaatschap?</h3>
              <p className="text-gray-600">Onze abonnementen starten vanaf €99,95 per maand. Het exacte pakket dat bij jou past, bespreken we tijdens je gratis kennismaking.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Waar zit CrossFit Alkmaar?</h3>
              <p className="text-gray-600">Aan de Phoenixstraat 33 in Alkmaar, met ruime parkeergelegenheid.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Kom langs voor een gratis kennismaking
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Plan een vrijblijvend gesprek en ontdek of CrossFit Alkmaar bij je past.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_sportschool_footer", "sportschool-alkmaar"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
