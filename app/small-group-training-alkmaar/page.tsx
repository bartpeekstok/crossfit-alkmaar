"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Image from "next/image";
import Link from "next/link";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";
import Script from "next/script";

export default function SmallGroupTrainingAlkmaarPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="Small Group Training Alkmaar - CrossFit Alkmaar"
        description="Small group training in Alkmaar bij CrossFit Alkmaar. Train in kleine groepen van max 12 personen met persoonlijke coaching en groepsenergie."
        url="https://crossfitalkmaar.com/small-group-training-alkmaar"
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
                name: "Hoe groot zijn de groepen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bij CrossFit Alkmaar trainen we in kleine groepen van maximaal 12 personen. Zo krijgt iedereen persoonlijke aandacht en coaching tijdens de training.",
                },
              },
              {
                "@type": "Question",
                name: "Wat is het verschil met personal training?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bij personal training krijg je 1-op-1 begeleiding met een volledig gepersonaliseerd programma. Bij small group training train je in een kleine groep met persoonlijke coaching, maar deel je de energie en motivatie van de groep — tegen een lagere prijs.",
                },
              },
              {
                "@type": "Question",
                name: "Is small group training geschikt voor beginners?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absoluut. Onze coaches passen elke oefening aan op jouw niveau. Via het Kickstart-programma leer je de basis in 3 persoonlijke sessies voordat je aan de groepstrainingen begint.",
                },
              },
              {
                "@type": "Question",
                name: "Hoeveel kost small group training?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bekijk onze tarievenpagina voor actuele prijzen. Small group training is aanzienlijk voordeliger dan personal training, terwijl je toch persoonlijke coaching krijgt.",
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
            name: "Steven — lid bij CrossFit Alkmaar",
            description: "Houding en techniek, daar zijn de trainers hier ongelooflijk goed in - Lid bij CrossFit Alkmaar deelt zijn ervaring",
            thumbnailUrl: "https://img.youtube.com/vi/esc-52ZNdPY/maxresdefault.jpg",
            uploadDate: "2025-01-01",
            contentUrl: "https://www.youtube.com/watch?v=esc-52ZNdPY",
            embedUrl: "https://www.youtube.com/embed/esc-52ZNdPY",
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="Small group training Alkmaar - trainen in kleine groepen bij CrossFit Alkmaar"
      >
        <Image
          src="/images/CFA-sept-lowres-46.jpg"
          alt="Small group training Alkmaar - trainen in kleine groepen bij CrossFit Alkmaar"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Small Group Training Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Persoonlijke aandacht van een coach, gecombineerd met de energie en motivatie van een kleine groep.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_sgt_hero", "small-group-training-alkmaar"); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Het beste van twee werelden */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Het beste van twee werelden
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Small group training combineert de persoonlijke aandacht van <Link href="/personal-training" className="text-blue-900 font-semibold hover:underline">personal training</Link> met de energie en motivatie van trainen in een groep — tegen een veel voordeliger tarief.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Bij CrossFit Alkmaar train je in groepen van maximaal 12 personen. Dat betekent dat je coach je kent, je bewegingen corrigeert en je training aanpast waar nodig. Geen anonieme sportschool, maar échte begeleiding.
          </p>
          <p className="text-lg text-gray-700">
            Elke training wordt geprogrammeerd door onze coaches en is afgestemd op functionele fitness: bewegen zoals je lichaam bedoeld is. Kracht, conditie, mobiliteit en coördinatie — alles komt aan bod.
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

      {/* Features grid */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Waarom small group training?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Max 12 per groep
              </h3>
              <p className="text-gray-700">
                Kleine groepen zodat je coach iedereen persoonlijk kan begeleiden. Je bent geen nummer, maar een naam.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Persoonlijke coaching
              </h3>
              <p className="text-gray-700">
                Gecertificeerde coaches die je techniek bewaken, bewegingen aanpassen en je helpen groeien — elke training opnieuw.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Betaalbaar alternatief voor PT
              </h3>
              <p className="text-gray-700">
                Profiteer van professionele coaching zonder het prijskaartje van 1-op-1 personal training. Bekijk onze <Link href="/tarieven" className="text-blue-900 font-semibold hover:underline">tarieven</Link>.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Motivatie van de groep
              </h3>
              <p className="text-gray-700">
                De groepsenergie tilt je training naar een hoger niveau. Samen trainen motiveert en maakt het leuker om vol te houden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Small Group vs Personal Training */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Small Group vs Personal Training
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Beide opties bieden persoonlijke begeleiding, maar op een andere manier. Welke past het beste bij jou?
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-4">
                Small Group Training
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Groepen van max 12 personen</li>
                <li>✓ Persoonlijke coaching tijdens de les</li>
                <li>✓ Groepsenergie en sociale motivatie</li>
                <li>✓ Voordeliger tarief</li>
                <li>✓ Vaste lestijden met veel keuze</li>
              </ul>
              <p className="mt-4">
                <Link href="/small-group-training" className="text-blue-900 font-semibold hover:underline">Meer over small group training →</Link>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-4">
                Personal Training
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 1-op-1 begeleiding</li>
                <li>✓ Volledig gepersonaliseerd programma</li>
                <li>✓ Flexibel inplannen</li>
                <li>✓ Ideaal voor specifieke doelen of revalidatie</li>
                <li>✓ Maximale aandacht en focus</li>
              </ul>
              <p className="mt-4">
                <Link href="/personal-training" className="text-blue-900 font-semibold hover:underline">Meer over personal training →</Link>
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-700 mt-6">
            Twijfel je? Start met een <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">gratis Kickstart</Link> en ontdek welke vorm het beste bij je past.
          </p>
        </div>
      </section>

      {/* AEO Content */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Wat is small group training?</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat is small group training en hoe verschilt het van personal training?</h3>
              <p className="text-gray-600">Small group training is trainen in een groep van max 6 personen met een coach die iedereen persoonlijk begeleidt. Je krijgt bijna dezelfde aandacht als bij 1-op-1 <Link href="/personal-training" className="text-blue-900 font-semibold hover:underline">personal training</Link>, maar deelt de kosten en profiteert van groepsmotivatie.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Voor wie is small group training bedoeld?</h3>
              <p className="text-gray-600">Voor iedereen die meer persoonlijke aandacht wil dan in een groepsles van 12, maar niet de prijs van personal training wil betalen. Bij CrossFit Alkmaar is onze BUILD-les een voorbeeld: max 6 personen, gericht op spiermassa opbouwen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat kost small group training vergeleken met personal training?</h3>
              <p className="text-gray-600">Small group training is aanzienlijk goedkoper dan 1-op-1 personal training, terwijl je nog steeds persoonlijke coaching krijgt. Bij CrossFit Alkmaar is BUILD inbegrepen in je abonnement vanaf 3x per week.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video testimonial */}
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
              <h3 className="text-xl font-semibold mb-2">Hoe groot zijn de groepen?</h3>
              <p className="text-gray-600">Bij CrossFit Alkmaar trainen we in kleine groepen van maximaal 12 personen. Zo krijgt iedereen persoonlijke aandacht en coaching tijdens de training.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat is het verschil met personal training?</h3>
              <p className="text-gray-600">Bij <Link href="/personal-training" className="text-blue-900 font-semibold hover:underline">personal training</Link> krijg je 1-op-1 begeleiding met een volledig gepersonaliseerd programma. Bij small group training train je in een kleine groep met persoonlijke coaching, maar deel je de energie en motivatie van de groep — tegen een lagere prijs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is small group training geschikt voor beginners?</h3>
              <p className="text-gray-600">Absoluut. Onze coaches passen elke oefening aan op jouw niveau. Via het <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart-programma</Link> leer je de basis in 3 persoonlijke sessies voordat je aan de groepstrainingen begint.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoeveel kost small group training?</h3>
              <p className="text-gray-600">Bekijk onze <Link href="/tarieven" className="text-blue-900 font-semibold hover:underline">tarievenpagina</Link> voor actuele prijzen. Small group training is aanzienlijk voordeliger dan personal training, terwijl je toch persoonlijke coaching krijgt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ervaar small group training zelf
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Plan een gratis kennismakingsgesprek en ontdek waarom onze leden zo enthousiast zijn.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_sgt_footer", "small-group-training-alkmaar"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
