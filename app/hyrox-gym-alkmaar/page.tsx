"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Image from "next/image";
import Link from "next/link";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";
import Script from "next/script";

export default function HyroxGymAlkmaarPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="HYROX Gym Alkmaar - CrossFit Alkmaar"
        description="De beste gym voor HYROX training in Alkmaar. Alle apparatuur, professionele coaching en een community van HYROX-atleten."
        url="https://crossfitalkmaar.com/hyrox-gym-alkmaar"
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
                name: "Hebben jullie alle HYROX-apparatuur?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja. We hebben sleds, ski-ergs, roeiers, sandbags, wall balls en voldoende ruimte om alle wedstrijdonderdelen te trainen.",
                },
              },
              {
                "@type": "Question",
                name: "Kan ik ook buiten de lessen om HYROX trainen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Onze focus ligt op begeleide groepslessen zodat je techniek en intensiteit optimaal zijn. Neem contact op voor de mogelijkheden.",
                },
              },
              {
                "@type": "Question",
                name: "Wat maakt CrossFit Alkmaar de beste HYROX gym?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Alle apparatuur, ervaren coaches, specifieke HYROX-programmering en een community van gelijkgestemde atleten — alles onder één dak.",
                },
              },
              {
                "@type": "Question",
                name: "Bieden jullie ook HYROX Doubles training?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja. Je kunt samen met een trainingspartner trainen voor HYROX Doubles. Onze coaches helpen jullie met een strategie.",
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
        aria-label="HYROX gym Alkmaar - de beste plek om te trainen voor HYROX"
      >
        <Image
          src="/images/hyrox-alkmaar-header.jpg"
          alt="HYROX gym Alkmaar - de beste plek om te trainen voor HYROX"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            HYROX Gym Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Alle HYROX-apparatuur, professionele coaches en een team om mee te trainen. Alles op één plek.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_hyrox_gym_hero", "hyrox-gym-alkmaar"); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Waarom CFA als HYROX gym */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Waarom CrossFit Alkmaar dé HYROX gym is in de regio
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            HYROX trainen in een normale sportschool is lastig. Waar vind je een sled? Een SkiErg? Sandbags? Bij CrossFit Alkmaar staat alles klaar. Onze box is volledig uitgerust voor alle 8 HYROX-stations.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Maar apparatuur alleen is niet genoeg. Je hebt coaching nodig. Onze trainers kennen de HYROX-race en helpen je met strategie, pacing en techniek. Niet alleen voor de stations, maar ook voor de 8 km hardlopen ertussen.
          </p>
          <p className="text-lg text-gray-700">
            En je traint met een groep. Meerdere leden van CrossFit Alkmaar doen mee aan HYROX — als singles, doubles en relay teams. Samen trainen maakt de voorbereiding leuker én effectiever.
          </p>
        </div>
      </section>

      {/* Apparatuur */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Onze HYROX-uitrusting
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Sleds
              </h3>
              <p className="text-gray-700">
                Sled push en sled pull op een turf-baan. Train met de juiste gewichten en afstanden voor jouw HYROX-divisie.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Rowers & SkiErgs
              </h3>
              <p className="text-gray-700">
                Concept2 rowers en SkiErgs voor de exacte machines die je op racedag tegenkomt.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Wall Balls & Sandbags
              </h3>
              <p className="text-gray-700">
                Alle gewichten beschikbaar voor mannen en vrouwen. Train de stations tot ze routine zijn.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Farmers Carry & Lunges
              </h3>
              <p className="text-gray-700">
                Kettlebells en voldoende ruimte voor farmers carries en lunges op wedstrijdafstand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trainingsopties */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Hoe je bij ons kunt trainen voor HYROX
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Bij CrossFit Alkmaar kun je op verschillende manieren trainen voor HYROX. De dagelijkse <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">groepslessen</Link> bouwen de basis: kracht, conditie en alle functionele bewegingen die je nodig hebt.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Wil je specifiekere HYROX-voorbereiding? Combineer groepslessen met <Link href="/personal-training" className="text-blue-900 font-semibold hover:underline">personal training</Link> of gebruik de Open Gym uren om gericht aan je stations te werken.
          </p>
          <p className="text-lg text-gray-700">
            Nieuw bij CrossFit? Start met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> en bouw in je eigen tempo naar je eerste HYROX toe.
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

      {/* AEO Content */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Waar train je voor HYROX?</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat maakt een gym geschikt voor HYROX-training?</h3>
              <p className="text-gray-600">Je hebt specifieke apparatuur nodig: ski erg, roeier, sled, wall balls en een baan om te hardlopen. CrossFit Alkmaar heeft al deze apparatuur en biedt specifieke HYROX-lessen aan onder professionele begeleiding.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Kan ik voor HYROX trainen in een gewone sportschool?</h3>
              <p className="text-gray-600">In een gewone sportschool ontbreken meestal sled, ski erg en de ruimte voor functionele oefeningen. Bij CrossFit Alkmaar heb je alles onder één dak, inclusief coaches die wedstrijdervaring hebben.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoe combineer je HYROX met andere training?</h3>
              <p className="text-gray-600">Het beste resultaat behaal je door HYROX-lessen te combineren met krachttraining. Bij CrossFit Alkmaar kun je HYROX, CrossFit en Strength mixen in je weekschema voor een optimale voorbereiding.</p>
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
              <h3 className="text-xl font-semibold mb-2">Hebben jullie alle HYROX-apparatuur?</h3>
              <p className="text-gray-600">Ja. We hebben sleds, ski-ergs, roeiers, sandbags, wall balls en voldoende ruimte om alle wedstrijdonderdelen te trainen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Kan ik ook buiten de lessen om HYROX trainen?</h3>
              <p className="text-gray-600">Onze focus ligt op begeleide <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">groepslessen</Link> zodat je techniek en intensiteit optimaal zijn. Neem contact op voor de mogelijkheden.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat maakt CrossFit Alkmaar de beste HYROX gym?</h3>
              <p className="text-gray-600">Alle apparatuur, ervaren coaches, specifieke <Link href="/hyrox-training-alkmaar" className="text-blue-900 font-semibold hover:underline">HYROX-programmering</Link> en een community van gelijkgestemde atleten — alles onder een dak.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Bieden jullie ook HYROX Doubles training?</h3>
              <p className="text-gray-600">Ja. Je kunt samen met een trainingspartner trainen voor HYROX Doubles. Onze coaches helpen jullie met een strategie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Aankomende HYROX events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/hyrox-pft-alkmaar" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition block">
              <h3 className="font-bold text-lg text-gray-900 mb-2">HYROX Physical Fitness Test</h3>
              <p className="text-gray-600 mb-2">Zaterdag 9 mei 2026 • Gratis</p>
              <p className="text-blue-900 font-semibold">Meer info →</p>
            </Link>
            <Link href="/hyrox-simulatie-alkmaar" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition block">
              <h3 className="font-bold text-lg text-gray-900 mb-2">HYROX Simulatie</h3>
              <p className="text-gray-600 mb-2">Zaterdag 30 mei 2026</p>
              <p className="text-blue-900 font-semibold">Meer info →</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Kom de gym bekijken
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Plan een gratis kennismakingsgesprek, bekijk de apparatuur en bespreek je HYROX-plannen.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_hyrox_gym_footer", "hyrox-gym-alkmaar"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
