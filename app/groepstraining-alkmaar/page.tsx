"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Image from "next/image";
import Link from "next/link";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";

export default function GroepstrainingAlkmaarPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="Groepstraining Alkmaar - CrossFit Alkmaar"
        description="Groepstraining in Alkmaar bij CrossFit Alkmaar. Train in kleine groepen van max 12 personen met professionele coaching en gevarieerde workouts."
        url="https://crossfitalkmaar.com/groepstraining-alkmaar"
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
                name: "Wat is groepstraining bij CrossFit Alkmaar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Groepstraining bij CrossFit Alkmaar betekent samen trainen in kleine groepen van maximaal 12 personen, onder begeleiding van een professionele coach. Elke training is gevarieerd en wordt aangepast aan jouw niveau.",
                },
              },
              {
                "@type": "Question",
                name: "Is groepstraining geschikt voor beginners?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, absoluut. Je start met onze 28 Day Kickstart waarin je alle basisbewegingen leert. Daarna sluit je aan bij de groep, op jouw eigen niveau.",
                },
              },
              {
                "@type": "Question",
                name: "Hoeveel mensen trainen er in een groep?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Maximaal 12 personen per training. Zo krijgt iedereen persoonlijke aandacht en feedback van de coach op techniek en uitvoering.",
                },
              },
              {
                "@type": "Question",
                name: "Wat kost groepstraining bij CrossFit Alkmaar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bekijk onze tarieven op de website. We bieden verschillende abonnementen aan, van 2x per week tot onbeperkt trainen. Je eerste kennismaking is altijd gratis.",
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
            description: "Houding en techniek, daar zijn de trainers hier ongelooflijk goed in - Lid bij CrossFit Alkmaar deelt zijn ervaring",
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
        aria-label="Groepstraining Alkmaar - samen trainen bij CrossFit Alkmaar"
      >
        <Image
          src="/images/hero.jpg"
          alt="Groepstraining Alkmaar - samen trainen bij CrossFit Alkmaar"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Groepstraining Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Train samen in kleine groepen, word sterker met professionele coaching. Voor elk niveau, elke dag anders.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_groepstraining_hero", "groepstraining-alkmaar"); openPopup(); }}
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

      {/* Waarom groepstraining werkt */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Waarom groepstraining werkt
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Alleen trainen is lastig vol te houden. Je mist motivatie, stelt uit, of weet niet of je het goed doet. Groepstraining lost dat op. Je traint samen met anderen, op een vast tijdstip, onder begeleiding van een coach die je kent.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Onderzoek laat keer op keer zien: mensen die in een groep trainen, houden het langer vol en behalen betere resultaten. Bij CrossFit Alkmaar combineren we die groepsdynamiek met persoonlijke aandacht. Maximaal 12 personen per training, zodat je coach je naam kent, je doelen weet en je techniek kan bijsturen.
          </p>
          <p className="text-lg text-gray-700">
            Het resultaat: je wordt sterker, fitter en je hebt er plezier in. Niet voor een paar weken, maar voor de lange termijn.
          </p>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Wat maakt onze groepstraining anders?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Motivatie van de groep
              </h3>
              <p className="text-gray-700">
                Samen trainen geeft energie. Je groepsgenoten moedigen je aan, houden je scherp en maken elke training leuker dan alleen sporten.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Professionele coaching
              </h3>
              <p className="text-gray-700">
                Elke training wordt begeleid door een gecertificeerde coach. Je krijgt feedback op techniek, hulp bij het kiezen van gewichten en aanpassingen waar nodig.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Gevarieerde workouts
              </h3>
              <p className="text-gray-700">
                Geen dag is hetzelfde. Kracht, conditie, gymnastics en functionele bewegingen wisselen elkaar af. Zo blijf je gemotiveerd en voorkom je plateaus.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Community & support
              </h3>
              <p className="text-gray-700">
                Bij CrossFit Alkmaar ben je geen nummertje. Je wordt onderdeel van een hechte community die elkaar motiveert, binnen en buiten de box.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe ziet een groepstraining eruit? */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Hoe ziet een groepstraining eruit?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Elke training duurt 60 minuten en volgt een vaste structuur: een warming-up, een techniek- of krachtdeel en een workout. De coach legt alles uit, demonstreert de bewegingen en past aan waar nodig. Beginners krijgen een lichtere variant, gevorderden worden extra uitgedaagd.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Je kiest zelf hoe vaak je traint. Bekijk het <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">lesrooster</Link> voor alle beschikbare lessen en tijden. Van CrossFit en Strength tot HYROX en BUILD — er is altijd een training die bij je past.
          </p>
          <p className="text-lg text-gray-700">
            Nog nooit getraind? Geen probleem. Je start met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">28 Day Kickstart</Link> — een persoonlijk introductietraject waarin je alle basisbewegingen leert en klaargestoomd wordt voor de groep.
          </p>
        </div>
      </section>

      {/* AEO Content */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Waarom is groepstraining effectief?</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Waarom is groepstraining effectiever dan alleen trainen?</h3>
              <p className="text-gray-600">Onderzoek toont aan dat je harder traint in een groep. De sociale druk, aanmoediging en vaste afspraken zorgen voor meer consistentie en betere resultaten dan solo trainen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoe groot zijn de groepen bij CrossFit Alkmaar?</h3>
              <p className="text-gray-600">Maximaal 12 personen per les, en bij BUILD zelfs max 6. Zo krijg je de energie van een groep mét de persoonlijke aandacht van een coach die je naam kent en je techniek bewaakt.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is groepstraining geschikt als je nog nooit hebt gesport?</h3>
              <p className="text-gray-600">Ja. Bij CrossFit Alkmaar start je met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> in een groep van max 6 beginners. Je leert de basis samen met andere starters, zodat je niet alleen staat en op je gemak bent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lid aan het woord */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Steven — lid bij CrossFit Alkmaar</h2>
          <p className="text-gray-600 text-center mb-8">&quot;Houding en techniek, daar zijn de trainers hier ongelooflijk goed in&quot;</p>
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
              <h3 className="text-xl font-semibold mb-2">Wat is groepstraining bij CrossFit Alkmaar?</h3>
              <p className="text-gray-600">Groepstraining bij CrossFit Alkmaar betekent samen trainen in kleine groepen van maximaal 12 personen, onder begeleiding van een professionele coach. Elke training is gevarieerd en wordt aangepast aan jouw niveau.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is groepstraining geschikt voor beginners?</h3>
              <p className="text-gray-600">Ja, absoluut. Je start met onze <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">28 Day Kickstart</Link> waarin je alle basisbewegingen leert. Daarna sluit je aan bij de groep, op jouw eigen niveau.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoeveel mensen trainen er in een groep?</h3>
              <p className="text-gray-600">Maximaal 12 personen per training. Zo krijgt iedereen persoonlijke aandacht en feedback van de coach op techniek en uitvoering.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat kost groepstraining bij CrossFit Alkmaar?</h3>
              <p className="text-gray-600">Bekijk onze <Link href="/tarieven" className="text-blue-900 font-semibold hover:underline">tarieven</Link> op de website. We bieden verschillende abonnementen aan, van 2x per week tot onbeperkt trainen. Je eerste kennismaking is altijd gratis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ervaar de kracht van groepstraining
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Plan een gratis kennismakingsgesprek en ontdek waarom samen trainen beter werkt.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_groepstraining_footer", "groepstraining-alkmaar"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
