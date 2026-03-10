"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Image from "next/image";
import Link from "next/link";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";

export default function KrachttrainingAlkmaarPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="Krachttraining Alkmaar - CrossFit Alkmaar"
        description="Krachttraining met professionele coaching in Alkmaar. Squats, deadlifts en Olympic lifting in kleine groepen."
        url="https://crossfitalkmaar.com/krachttraining-alkmaar"
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
                name: "Is krachttraining geschikt voor beginners?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absoluut. In onze Strength Classes leer je de basistechnieken zoals squats, deadlifts en presses onder begeleiding van een coach. We bouwen stap voor stap op.",
                },
              },
              {
                "@type": "Question",
                name: "Wat is het verschil met een gewone sportschool?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bij ons train je altijd met coaching. Geen solo-sessies aan machines, maar geprogrammeerde trainingen in kleine groepen met focus op techniek en progressie.",
                },
              },
              {
                "@type": "Question",
                name: "Hoe vaak per week krachttraining?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "2 tot 3 keer per week is ideaal voor krachtopbouw. Onze programmering zorgt voor de juiste balans tussen belasting en herstel.",
                },
              },
              {
                "@type": "Question",
                name: "Kan ik ook Olympic lifting leren?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja. Onze coaches zijn opgeleid in Olympic weightlifting. Snatch en clean & jerk komen regelmatig terug in onze programmering.",
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
        aria-label="Krachttraining Alkmaar - sterker worden bij CrossFit Alkmaar"
      >
        <Image
          src="/images/krachttraining-alkmaar-header.jpg"
          alt="Krachttraining Alkmaar - sterker worden bij CrossFit Alkmaar"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Krachttraining Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Sterker worden met begeleiding. Squats, deadlifts en meer — altijd met een coach die op je techniek let.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_kracht_hero", "krachttraining-alkmaar"); openPopup(); }}
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

      {/* Waarom krachttraining bij CFA */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Krachttraining met coaching, niet alleen met gewichten
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            In de meeste sportscholen pak je een halter en hoop je dat je techniek klopt. Bij CrossFit Alkmaar staat er altijd een coach naast je. Of je nu voor het eerst een barbell oppakt of al jaren squats — je krijgt feedback op elke rep.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Onze krachtsessies zijn onderdeel van het dagelijkse CrossFit-programma. Bekijk onze <Link href="/programmas" className="text-blue-900 font-semibold hover:underline">programma&apos;s</Link> voor meer details. Elke training begint met een krachtcomponent: squats, deadlifts, presses, Olympic lifts. Daarna volgt een workout die kracht combineert met conditie.
          </p>
          <p className="text-lg text-gray-700">
            Het resultaat: je wordt niet alleen sterker, maar ook functioneel fitter. Kracht die je in het dagelijks leven gebruikt.
          </p>
        </div>
      </section>

      {/* Wat je traint */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Wat je kunt verwachten
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Compound lifts
              </h3>
              <p className="text-gray-700">
                Back squat, front squat, deadlift, bench press, overhead press. De basis van elke goede krachttraining, met coaching op techniek.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Olympic lifting
              </h3>
              <p className="text-gray-700">
                Clean & jerk en snatch. Explosieve lifts die kracht, coördinatie en mobiliteit trainen. Altijd onder begeleiding van een coach.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Gymnastics & bodyweight
              </h3>
              <p className="text-gray-700">
                Pull-ups, muscle-ups, handstand push-ups. Functionele kracht met je eigen lichaamsgewicht, opgebouwd in progressies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Geprogrammeerd voor resultaat
              </h3>
              <p className="text-gray-700">
                Onze programmering volgt een periodisering. Je bouwt systematisch kracht op over weken en maanden, niet willekeurig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Voor elk niveau
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Je hoeft geen ervaring te hebben met krachttraining. Onze <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> leert je de basis van alle bewegingen. Daarna train je in <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">groepslessen</Link> waar de coach het gewicht en de bewegingen aanpast aan jouw niveau.
          </p>
          <p className="text-lg text-gray-700">
            Onze leden variëren van complete beginners tot mensen die al jaren trainen. Iedereen volgt dezelfde les, maar op een niveau dat bij hen past.
          </p>
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
              <h3 className="text-xl font-semibold mb-2">Is krachttraining geschikt voor beginners?</h3>
              <p className="text-gray-600">Absoluut. In onze Strength Classes leer je de basistechnieken zoals squats, deadlifts en presses onder begeleiding van een coach. Start met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> en bouw stap voor stap op.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat is het verschil met een gewone sportschool?</h3>
              <p className="text-gray-600">Bij ons train je altijd met coaching. Geen solo-sessies aan machines, maar geprogrammeerde trainingen in kleine groepen met focus op techniek en progressie. Bekijk onze <Link href="/tarieven" className="text-blue-900 font-semibold hover:underline">tarieven</Link>.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoe vaak per week krachttraining?</h3>
              <p className="text-gray-600">2 tot 3 keer per week is ideaal voor krachtopbouw. Onze programmering zorgt voor de juiste balans tussen belasting en herstel.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Kan ik ook Olympic lifting leren?</h3>
              <p className="text-gray-600">Ja. Onze coaches zijn opgeleid in Olympic weightlifting. Snatch en clean & jerk komen regelmatig terug in onze programmering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Begin met krachttraining
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Plan een gratis kennismakingsgesprek en ontdek hoe je sterker wordt bij CrossFit Alkmaar.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_kracht_footer", "krachttraining-alkmaar"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
