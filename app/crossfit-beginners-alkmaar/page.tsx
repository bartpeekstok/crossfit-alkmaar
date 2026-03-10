"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Image from "next/image";
import Link from "next/link";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";

export default function CrossFitBeginnersAlkmaarPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="CrossFit voor Beginners Alkmaar - CrossFit Alkmaar"
        description="CrossFit voor beginners in Alkmaar. Start veilig met persoonlijke begeleiding via ons Kickstart-traject."
        url="https://crossfitalkmaar.com/crossfit-beginners-alkmaar"
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
                name: "Moet ik al een bepaald fitnessniveau hebben?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nee. Alles wordt aangepast aan jouw niveau. Onze leden variëren van 20 tot 70+ jaar, van nooit gesport tot ex-topsporters.",
                },
              },
              {
                "@type": "Question",
                name: "Is CrossFit niet gevaarlijk?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Niet met goede coaching. Bij CrossFit Alkmaar train je in groepen van max 12 met een gecertificeerde coach die op je techniek let. Je leert eerst de basis in de Kickstart voordat je in een groepsles stapt.",
                },
              },
              {
                "@type": "Question",
                name: "Hoeveel kost CrossFit voor beginners?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bekijk onze tarieven op crossfitalkmaar.com/tarieven voor alle opties. De kennismaking is altijd gratis en vrijblijvend.",
                },
              },
              {
                "@type": "Question",
                name: "Hoe vaak moet ik trainen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We raden 3 keer per week aan, maar 2 keer is ook prima om te beginnen. Je bouwt op in je eigen tempo.",
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
            name: "Lisette — lid bij CrossFit Alkmaar",
            description: "Ik voel me sindsdien een stuk fitter! - Lid bij CrossFit Alkmaar deelt haar ervaring",
            thumbnailUrl: `https://img.youtube.com/vi/WuOyAWYDeG0/maxresdefault.jpg`,
            uploadDate: "2025-01-01",
            contentUrl: `https://www.youtube.com/watch?v=WuOyAWYDeG0`,
            embedUrl: `https://www.youtube.com/embed/WuOyAWYDeG0`,
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="CrossFit voor beginners in Alkmaar - veilig starten bij CrossFit Alkmaar"
      >
        <Image
          src="/images/crossfit-beginners-header.jpg"
          alt="CrossFit voor beginners in Alkmaar - veilig starten bij CrossFit Alkmaar"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            CrossFit voor Beginners in Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Nog nooit aan CrossFit gedaan? Geen probleem. Bij ons start iedereen op dezelfde manier: met persoonlijke begeleiding.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_beginners_hero", "crossfit-beginners-alkmaar"); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Google Reviews */}
      <div className="bg-white py-3 text-center">
        <p className="text-gray-700 text-sm">
          <span className="text-yellow-500">★★★★★</span> <span className="font-semibold">5.0</span> — 260+ Google reviews
        </p>
      </div>

      {/* Drempelvrees wegnemen */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Je hoeft niet fit te zijn om te beginnen
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            De grootste misvatting over CrossFit? Dat je al fit moet zijn. Niets is minder waar. Meer dan de helft van onze leden had weinig tot geen sportervaring toen ze begonnen.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            CrossFit is schaalbaar. Dat betekent dat elke oefening wordt aangepast aan jouw niveau. Kun je nog geen pull-up? Dan beginnen we met een variant die je wél kunt. Zijn 60 kilo te zwaar? Dan pakken we een gewicht dat bij jou past. De workout is voor iedereen hetzelfde, maar de uitvoering is persoonlijk.
          </p>
          <p className="text-lg text-gray-700">
            En het mooiste: je hoeft het niet alleen uit te zoeken. Onze coaches staan naast je, elke training.
          </p>
        </div>
      </section>

      {/* Kickstart */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Zo werkt de start bij CrossFit Alkmaar
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Stap 1: Kennismaking
              </h3>
              <p className="text-gray-700">
                Een vrijblijvend <Link href="/meer-info" className="text-blue-900 font-semibold hover:underline">kennismakingsgesprek</Link> waarin we je doelen bespreken, de box laten zien en uitleggen hoe alles werkt. Geen verplichtingen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Stap 2: Kickstart
              </h3>
              <p className="text-gray-700">
                Je start met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> — persoonlijke sessies (semi personal training) waarin je alle basisbewegingen leert. In je eigen tempo.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Stap 3: Groepslessen
              </h3>
              <p className="text-gray-700">
                Na de Kickstart sluit je aan bij de reguliere <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">groepslessen</Link>. Je kent de bewegingen, de coaches kennen jou, en je voelt je op je plek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lid aan het woord */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Lisette — lid bij CrossFit Alkmaar</h2>
          <p className="text-gray-600 text-center mb-8">&quot;Ik voel me sindsdien een stuk fitter!&quot;</p>
          <div className="relative w-full rounded-lg shadow-sm overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <div className="absolute top-0 left-0 w-full h-full">
              <TrackedYouTubeEmbed videoId="WuOyAWYDeG0" title="Lisette — lid bij CrossFit Alkmaar" />
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
              <h3 className="text-xl font-semibold mb-2">Moet ik al een bepaald fitnessniveau hebben?</h3>
              <p className="text-gray-600">Nee. Alles wordt aangepast aan jouw niveau. Onze leden variëren van 20 tot 70+ jaar, van nooit gesport tot ex-topsporters.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is CrossFit niet gevaarlijk?</h3>
              <p className="text-gray-600">Niet met goede coaching. Bij CrossFit Alkmaar train je in groepen van max 12 met een gecertificeerde coach die op je techniek let. Je leert eerst de basis in de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> voordat je in een groepsles stapt.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoeveel kost CrossFit voor beginners?</h3>
              <p className="text-gray-600">Bekijk onze <Link href="/tarieven" className="text-blue-900 font-semibold hover:underline">tarieven</Link> voor alle opties. De kennismaking is altijd gratis en vrijblijvend.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoe vaak moet ik trainen?</h3>
              <p className="text-gray-600">We raden 3 keer per week aan, maar 2 keer is ook prima om te beginnen. Je bouwt op in je eigen tempo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Zet de eerste stap
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Plan een gratis kennismakingsgesprek. Geen verplichtingen, wel een goed gesprek over wat je wilt bereiken.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_beginners_footer", "crossfit-beginners-alkmaar"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
