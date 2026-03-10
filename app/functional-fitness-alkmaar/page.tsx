"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Image from "next/image";
import Link from "next/link";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";
import Script from "next/script";

export default function FunctionalFitnessAlkmaarPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="Functional Fitness Alkmaar - CrossFit Alkmaar"
        description="Functional fitness met professionele coaching in kleine groepen. Train bewegingen die je dagelijks gebruikt: tillen, duwen, trekken en hurken."
        url="https://crossfitalkmaar.com/functional-fitness-alkmaar"
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
                name: "Wat is functional fitness precies?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Functional fitness richt zich op bewegingen die je in het dagelijks leven gebruikt: tillen, hurken, duwen, trekken en dragen. In plaats van losse spieren te trainen op machines, train je samengestelde bewegingspatronen die je sterker en fitter maken voor het echte leven.",
                },
              },
              {
                "@type": "Question",
                name: "Heb ik ervaring nodig om te starten met functional fitness?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nee, iedereen kan starten. Bij CrossFit Alkmaar begin je met een 28 Day Kickstart waarin je alle basisbewegingen leert in kleine groepen van max 6 personen. Onze coaches passen elke oefening aan op jouw niveau.",
                },
              },
              {
                "@type": "Question",
                name: "Wat is het verschil tussen functional fitness en gewoon fitnessen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bij gewoon fitnessen train je vaak geïsoleerde spieren op machines. Bij functional fitness train je complete bewegingspatronen met vrije gewichten en je eigen lichaamsgewicht. Dit geeft je meer kracht, mobiliteit en balans in het dagelijks leven.",
                },
              },
              {
                "@type": "Question",
                name: "Hoe ziet een functional fitness training eruit bij CrossFit Alkmaar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Elke training duurt 60 minuten en wordt begeleid door een coach. Je begint met een warming-up, gevolgd door een techniekdeel en een workout. Elke dag is anders: kracht, conditie, gymnastiek en meer. Alles in groepen van maximaal 12 personen.",
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
            name: "Steven — lid bij CrossFit Alkmaar",
            description: "Houding en techniek, daar zijn de trainers hier ongelooflijk goed in. - Lid bij CrossFit Alkmaar deelt zijn ervaring",
            thumbnailUrl: `https://img.youtube.com/vi/esc-52ZNdPY/maxresdefault.jpg`,
            uploadDate: "2025-01-01",
            contentUrl: `https://www.youtube.com/watch?v=esc-52ZNdPY`,
            embedUrl: `https://www.youtube.com/embed/esc-52ZNdPY`,
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="Functional Fitness Alkmaar - CrossFit Alkmaar functionele training met coach"
      >
        <Image
          src="/images/CFA-november-lowres-94.jpg"
          alt="Functional Fitness Alkmaar - CrossFit Alkmaar functionele training met coach"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Functional Fitness Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Train bewegingen die je dagelijks gebruikt. Word sterker, fitter en beweeglijker met professionele coaching in kleine groepen.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_functional_fitness_hero", "functional-fitness-alkmaar"); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Wat is functional fitness? */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Wat is functional fitness?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Functional fitness draait om bewegingen die je in het dagelijks leven gebruikt. Denk aan tillen, hurken, duwen, trekken en dragen. In plaats van losse spieren te isoleren op machines, train je complete bewegingspatronen met vrije gewichten, je eigen lichaamsgewicht en functionele hulpmiddelen.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Bij CrossFit Alkmaar combineren we functional fitness met professionele coaching. Elke training wordt begeleid door een gecertificeerde coach die je techniek bewaakt en oefeningen aanpast op jouw niveau. Zo train je veilig, effectief en met plezier.
          </p>
          <p className="text-lg text-gray-700">
            Het resultaat? Je wordt sterker in je dagelijks leven. Boodschappen tillen, met je kinderen spelen, traplopen of tuinieren — alles gaat makkelijker. Bekijk onze <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">groepslessen</Link> voor het volledige aanbod.
          </p>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Wat onze leden zeggen</h2>
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

      {/* Features grid */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Waarom functional fitness bij CrossFit Alkmaar?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Functionele bewegingen
              </h3>
              <p className="text-gray-700">
                Geen machines, maar natuurlijke bewegingspatronen. Squats, deadlifts, presses en pulls — bewegingen die je lichaam als geheel sterker maken.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Professionele coaching
              </h3>
              <p className="text-gray-700">
                Elke les wordt begeleid door een gecertificeerde coach. Je techniek wordt continu bewaakt zodat je veilig en effectief traint.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Kleine groepen (max 12)
              </h3>
              <p className="text-gray-700">
                Persoonlijke aandacht is de standaard. Onze coaches kennen je naam, je doelen en passen elke oefening aan op jouw niveau.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Progressie op jouw tempo
              </h3>
              <p className="text-gray-700">
                Of je nu begint of al ervaren bent — elke oefening wordt geschaald naar jouw niveau. Zo boek je continu vooruitgang zonder blessures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Voor wie is functional fitness?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Functional fitness is voor iedereen. Onze leden variëren van 20 tot 70+ jaar. Of je nu wilt afvallen, sterker wilt worden of gewoon fitter door het leven wilt gaan — functional fitness helpt je daarbij. Bekijk onze <Link href="/tarieven" className="text-blue-900 font-semibold hover:underline">tarieven</Link> voor alle mogelijkheden.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Iedereen start met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">28 Day Kickstart</Link> — een persoonlijk traject waarin je alle basisbewegingen leert in kleine groepen van max 6 personen. Zo bouw je een sterke basis op voordat je in de <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">groepslessen</Link> stapt.
          </p>
          <p className="text-lg text-gray-700">
            Liever nog meer individuele aandacht? Dan is <Link href="/personal-training" className="text-blue-900 font-semibold hover:underline">personal training</Link> een optie. Je coach stelt dan een programma samen dat volledig op jouw doelen is afgestemd.
          </p>
        </div>
      </section>

      {/* AEO Content */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Wat is functional fitness?</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat is functional fitness en waarom is het belangrijk?</h3>
              <p className="text-gray-600">Functional fitness traint bewegingen die je dagelijks gebruikt: tillen, duwen, trekken, hurken en dragen. In plaats van losse spiergroepen op machines, train je je hele lichaam om beter te bewegen in het echte leven.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat is het verschil tussen functional fitness en gewoon fitness?</h3>
              <p className="text-gray-600">Bij gewoon fitness isoleer je spiergroepen op machines. Bij functional fitness train je samengestelde bewegingen met vrije gewichten en je eigen lichaamsgewicht. Het resultaat: meer kracht, betere coördinatie en minder blessures in je dagelijks leven.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Voor wie is functional fitness geschikt?</h3>
              <p className="text-gray-600">Voor iedereen. Of je nu 25 of 65 bent, elke oefening is schaalbaar. Bij CrossFit Alkmaar trainen leden van alle leeftijden en niveaus samen, omdat de coach elke beweging aanpast aan jouw mogelijkheden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video testimonial */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Steven — lid bij CrossFit Alkmaar</h2>
          <p className="text-gray-600 text-center mb-8">&quot;Houding en techniek, daar zijn de trainers hier ongelooflijk goed in.&quot;</p>
          <div className="relative w-full rounded-lg shadow-sm overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <div className="absolute top-0 left-0 w-full h-full">
              <TrackedYouTubeEmbed videoId="esc-52ZNdPY" title="Steven — lid bij CrossFit Alkmaar" />
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
              <h3 className="text-xl font-semibold mb-2">Wat is functional fitness precies?</h3>
              <p className="text-gray-600">Functional fitness richt zich op bewegingen die je in het dagelijks leven gebruikt: tillen, hurken, duwen, trekken en dragen. In plaats van losse spieren te trainen op machines, train je samengestelde bewegingspatronen die je sterker en fitter maken voor het echte leven.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Heb ik ervaring nodig om te starten met functional fitness?</h3>
              <p className="text-gray-600">Nee, iedereen kan starten. Bij CrossFit Alkmaar begin je met een <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">28 Day Kickstart</Link> waarin je alle basisbewegingen leert in kleine groepen van max 6 personen. Onze coaches passen elke oefening aan op jouw niveau.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat is het verschil tussen functional fitness en gewoon fitnessen?</h3>
              <p className="text-gray-600">Bij gewoon fitnessen train je vaak geïsoleerde spieren op machines. Bij functional fitness train je complete bewegingspatronen met vrije gewichten en je eigen lichaamsgewicht. Dit geeft je meer kracht, mobiliteit en balans in het dagelijks leven.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoe ziet een functional fitness training eruit bij CrossFit Alkmaar?</h3>
              <p className="text-gray-600">Elke training duurt 60 minuten en wordt begeleid door een coach. Je begint met een warming-up, gevolgd door een techniekdeel en een workout. Elke dag is anders: kracht, conditie, gymnastiek en meer. Alles in groepen van maximaal 12 personen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ervaar functional fitness zelf
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Plan een vrijblijvende kennismaking en ontdek hoe functional fitness jouw leven sterker maakt.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_functional_fitness_footer", "functional-fitness-alkmaar"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
