"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Image from "next/image";
import Link from "next/link";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";
import Script from "next/script";

export default function HyroxTrainingPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="HYROX Training Alkmaar - CrossFit Alkmaar"
        description="HYROX voorbereiding in Alkmaar met professionele coaching. Functionele fitness, running en strength training in kleine groepen."
        url="https://crossfitalkmaar.com/hyrox-training-alkmaar"
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
                  text: "HYROX is een indoor fitnesswedstrijd met 8 rondes van 1 km hardlopen, afgewisseld met functionele oefeningen zoals roeien, sled push, burpees en meer.",
                },
              },
              {
                "@type": "Question",
                name: "Moet ik al fit zijn voor HYROX training?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nee. Onze HYROX-lessen zijn schaalbaar. Of je nu voor je eerste race traint of een PR wilt neerzetten — de training past zich aan.",
                },
              },
              {
                "@type": "Question",
                name: "Hoe bereid ik me voor op een HYROX wedstrijd?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Door regelmatig onze HYROX- en CrossFit-lessen te volgen. We trainen alle onderdelen: hardlopen, roeien, sled work en functionele kracht.",
                },
              },
              {
                "@type": "Question",
                name: "Kan ik ook HYROX trainen zonder mee te doen aan een wedstrijd?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Natuurlijk. Veel leden volgen HYROX-lessen puur voor de training. Het is een geweldige manier om conditie en kracht te combineren.",
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
            thumbnailUrl: `https://img.youtube.com/vi/G9HkOnSsKg8/maxresdefault.jpg`,
            uploadDate: "2025-01-01",
            contentUrl: `https://www.youtube.com/watch?v=G9HkOnSsKg8`,
            embedUrl: `https://www.youtube.com/embed/G9HkOnSsKg8`,
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="HYROX training Alkmaar - functionele fitness bij CrossFit Alkmaar"
      >
        <Image
          src="/images/hyrox-alkmaar-header.jpg"
          alt="HYROX training Alkmaar - functionele fitness bij CrossFit Alkmaar"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            HYROX Training Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Train voor je eerste of volgende HYROX wedstrijd met professionele coaching en een groep die je pusht.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_hyrox_hero", "hyrox-training"); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Wat is HYROX */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Wat is HYROX?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            HYROX is een indoor fitnesswedstrijd die draait om functionele fitness en uithoudingsvermogen. Het format: 8 rondes van 1 kilometer hardlopen, afgewisseld met 8 functionele oefeningen zoals sled push, sled pull, burpee broad jumps, rowing, farmers carry, sandbag lunges, wall balls en ski erg.
          </p>
          <p className="text-lg text-gray-700">
            Het is de snelst groeiende fitnesswedstrijd ter wereld en trekt zowel beginners als ervaren atleten. Je hoeft niet super fit te zijn om mee te doen - je moet gewoon bereid zijn om te trainen.
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

      {/* Waarom CFA voor HYROX */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Waarom CrossFit Alkmaar de perfecte HYROX voorbereiding is
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Alle HYROX-oefeningen
              </h3>
              <p className="text-gray-700">
                We hebben alle equipment in huis: sleds, rowers, ski ergs, wall balls, sandbags en meer. Je traint precies de bewegingen die je nodig hebt.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Kracht + conditie
              </h3>
              <p className="text-gray-700">
                CrossFit combineert krachttraining met cardio - precies wat HYROX vraagt. Je bouwt zowel kracht als uithoudingsvermogen op.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Coaching op techniek
              </h3>
              <p className="text-gray-700">
                Efficiënte techniek scheelt minuten op je HYROX tijd. Onze coaches helpen je elke beweging perfectioneren voor maximale efficiëntie.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Mentale hardheid
              </h3>
              <p className="text-gray-700">
                HYROX is net zoveel mentaal als fysiek. De intensiteit van onze trainingen bereidt je voor op de momenten waarop je door wilt geven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe starten */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Beginnen met HYROX training
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Of je nu voor je eerste HYROX traint of je PR wilt verbeteren - onze training bereidt je voor. Je bouwt kracht, conditie en techniek op in een omgeving die je pusht.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Nieuwe leden starten met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> om de basis-bewegingen te leren. Daarna sluit je aan bij de <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">groepslessen</Link> waar je 10 tot 15 keer per maand kunt trainen.
          </p>
          <p className="text-lg text-gray-700">
            Wil je nog gerichter trainen? Bekijk onze <Link href="/personal-training" className="text-blue-900 font-semibold hover:underline">personal training</Link> of <Link href="/small-group-training" className="text-blue-900 font-semibold hover:underline">BUILD small group training</Link> voor extra focus op je HYROX doelen.
          </p>
        </div>
      </section>

      {/* AEO Content */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Hoe train je voor HYROX?</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat is HYROX en hoe bereid je je voor?</h3>
              <p className="text-gray-600">HYROX is een fitnesswedstrijd met 8 rondes hardlopen afgewisseld met functionele oefeningen zoals roeien, sled push en burpees. Bij CrossFit Alkmaar combineren we in onze HYROX-lessen specifieke wedstrijdoefeningen met conditie- en krachttraining.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoe vaak moet je trainen voor HYROX?</h3>
              <p className="text-gray-600">Twee tot drie HYROX-gerichte sessies per week, aangevuld met krachttraining, is ideaal. Bij CrossFit Alkmaar kun je HYROX-lessen combineren met CrossFit en Strength voor een compleet programma.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat is het verschil tussen HYROX en CrossFit training?</h3>
              <p className="text-gray-600">CrossFit is breed: kracht, conditie, gymnastiek en olympisch gewichtheffen. HYROX is specifieker: hardlopen gecombineerd met functionele oefeningen. Bij ons kun je beide doen en ze versterken elkaar.</p>
            </div>
          </div>
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

      {/* Veelgestelde vragen */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde vragen</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat is HYROX?</h3>
              <p className="text-gray-600">HYROX is een indoor fitnesswedstrijd met 8 rondes van 1 km hardlopen, afgewisseld met functionele oefeningen zoals roeien, sled push, burpees en meer.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Moet ik al fit zijn voor HYROX training?</h3>
              <p className="text-gray-600">Nee. Onze HYROX-lessen zijn schaalbaar. Of je nu voor je eerste race traint of een PR wilt neerzetten — de training past zich aan. Start met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> als je nieuw bent.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoe bereid ik me voor op een HYROX wedstrijd?</h3>
              <p className="text-gray-600">Door regelmatig onze HYROX- en CrossFit-lessen te volgen. We trainen alle onderdelen: hardlopen, roeien, sled work en functionele kracht.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Kan ik ook HYROX trainen zonder mee te doen aan een wedstrijd?</h3>
              <p className="text-gray-600">Natuurlijk. Veel leden volgen HYROX-lessen puur voor de training. Het is een geweldige manier om conditie en kracht te combineren. Bekijk onze <Link href="/tarieven" className="text-blue-900 font-semibold hover:underline">tarieven</Link> om te starten.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Klaar voor HYROX?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Plan een gratis kennismaking en ontdek hoe wij je voorbereiden op je beste HYROX resultaat.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_hyrox_footer", "hyrox-training"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
