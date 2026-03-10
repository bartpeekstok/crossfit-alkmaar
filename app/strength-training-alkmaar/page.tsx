"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Image from "next/image";
import Link from "next/link";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";
import Script from "next/script";

export default function StrengthTrainingAlkmaarPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="Strength Training Alkmaar - CrossFit Alkmaar"
        description="Strength training met professionele coaching in Alkmaar. Squats, deadlifts, presses en compound lifts onder begeleiding."
        url="https://crossfitalkmaar.com/strength-training-alkmaar"
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
                name: "Wat is strength training?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Strength training is gericht trainen op kracht met compound oefeningen zoals squats, deadlifts en presses. Het doel is progressief sterker worden door systematisch meer gewicht of volume toe te voegen.",
                },
              },
              {
                "@type": "Question",
                name: "Is strength training geschikt voor beginners?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, strength training is juist ideaal voor beginners. Je leert de basisbewegingen onder professionele coaching en bouwt stap voor stap kracht op. Onze Kickstart bereidt je volledig voor.",
                },
              },
              {
                "@type": "Question",
                name: "Hoe vaak moet ik strength trainen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "2 tot 4 keer per week is ideaal. Onze programmering zorgt voor de juiste balans tussen belasting en herstel, zodat je consistent sterker wordt zonder overtraining.",
                },
              },
              {
                "@type": "Question",
                name: "Wat is het verschil tussen strength training en bodybuilding?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Strength training richt zich op het opbouwen van functionele kracht met compound lifts. Bodybuilding focust op spiergroei en uiterlijk. Bij strength training train je bewegingen, niet individuele spieren.",
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
            thumbnailUrl: "https://img.youtube.com/vi/14v6cnGlI7g/maxresdefault.jpg",
            uploadDate: "2025-01-01",
            contentUrl: "https://www.youtube.com/watch?v=14v6cnGlI7g",
            embedUrl: "https://www.youtube.com/embed/14v6cnGlI7g",
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="Strength Training Alkmaar - word sterker bij CrossFit Alkmaar"
      >
        <Image
          src="/images/strength-training-header.jpg"
          alt="Strength Training Alkmaar - word sterker bij CrossFit Alkmaar"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Strength Training Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Word sterker met squats, deadlifts en presses onder professionele coaching. Voor beginners en gevorderden.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_strength_hero", "strength-training-alkmaar"); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Wat is strength training */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Wat is strength training?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Strength training draait om het systematisch opbouwen van kracht met compound lifts — oefeningen die meerdere spiergroepen tegelijk aanspreken. Denk aan squats, deadlifts, overhead presses en bench presses. Dit zijn de meest effectieve bewegingen om sterker te worden.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Het principe is eenvoudig: progressive overload. Elke week voeg je een klein beetje gewicht toe, zodat je lichaam zich aanpast en sterker wordt. Bij CrossFit Alkmaar volgen we een geprogrammeerde aanpak zodat je consistent progressie maakt, zonder blessures.
          </p>
          <p className="text-lg text-gray-700">
            De voordelen gaan verder dan alleen kracht. Strength training verhoogt je stofwisseling, versterkt je botten en gewrichten, verbetert je houding en geeft je meer energie in het dagelijks leven. Het is de basis van elke goede fitnesstroutine. Lees ook onze pagina over <Link href="/krachttraining-alkmaar" className="text-blue-900 font-semibold hover:underline">krachttraining in Alkmaar</Link> voor meer informatie.
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
            Wat je kunt verwachten
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Compound liften
              </h3>
              <p className="text-gray-700">
                Squat, deadlift, bench press en overhead press. De meest effectieve oefeningen voor het opbouwen van totale lichaamskracht, altijd met coaching op techniek.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Progressief sterker worden
              </h3>
              <p className="text-gray-700">
                Onze programmering volgt een periodisering. Je bouwt systematisch kracht op over weken en maanden met progressive overload — niet willekeurig, maar doelgericht.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Techniekcoaching bij elke rep
              </h3>
              <p className="text-gray-700">
                Geen solo-sessies aan machines. Bij elke training staat een coach naast je die je techniek bewaakt, corrigeert en optimaliseert voor veiligheid en resultaat.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Geschikt voor elk niveau
              </h3>
              <p className="text-gray-700">
                Of je nu voor het eerst een barbell oppakt of al jaren traint — het gewicht wordt aangepast aan jouw niveau. Iedereen traint samen, op eigen kracht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Onze Strength lessen */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Onze Strength lessen
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Strength training is een vast onderdeel van onze dagelijkse programmering. Elke les begint met een krachtcomponent: squats, deadlifts, presses of Olympic lifts. Daarna volgt een workout die kracht combineert met conditie.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Onze coaches programmeren in cycli zodat je alle grote lifts regelmatig traint en meetbaar sterker wordt. Je hoeft zelf niets te plannen — stap binnen en volg het programma.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Nieuw bij strength training? Start met onze <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> om de basisbewegingen te leren. Daarna sluit je aan bij de reguliere <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">groepslessen</Link> waar je het rooster en de lestijden vindt.
          </p>
          <p className="text-lg text-gray-700">
            Bekijk onze <Link href="/tarieven" className="text-blue-900 font-semibold hover:underline">tarieven</Link> om te zien welk abonnement bij je past.
          </p>
        </div>
      </section>

      {/* AEO Content */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Wat is strength training?</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat is strength training en hoe verschilt het van fitness?</h3>
              <p className="text-gray-600">Strength training focust op compound liften: squat, deadlift, bench press en overhead press. In plaats van machines gebruik je barbells en vrije gewichten, waardoor je hele lichaam samenwerkt. Bij CrossFit Alkmaar heb je specifieke Strength-lessen gericht op progressief sterker worden.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoe vaak moet je strength trainen per week?</h3>
              <p className="text-gray-600">Twee tot drie keer is optimaal voor de meeste mensen. Je spieren hebben 48 uur herstel nodig na een zware sessie. Bij CrossFit Alkmaar kun je Strength combineren met CrossFit-lessen voor een uitgebalanceerd programma.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is strength training veilig zonder ervaring?</h3>
              <p className="text-gray-600">Ja, mits je begeleiding hebt. Bij CrossFit Alkmaar start je met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> waar je alle liften leert in een groep van max 6. Onze coaches bewaken je techniek bij elke rep, ook in de groepslessen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video testimonial */}
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
              <h3 className="text-xl font-semibold mb-2">Wat is strength training?</h3>
              <p className="text-gray-600">Strength training is gericht trainen op kracht met compound oefeningen zoals squats, deadlifts en presses. Het doel is progressief sterker worden door systematisch meer gewicht of volume toe te voegen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is strength training geschikt voor beginners?</h3>
              <p className="text-gray-600">Ja, strength training is juist ideaal voor beginners. Je leert de basisbewegingen onder professionele coaching en bouwt stap voor stap kracht op. Onze <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> bereidt je volledig voor.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoe vaak moet ik strength trainen?</h3>
              <p className="text-gray-600">2 tot 4 keer per week is ideaal. Onze programmering zorgt voor de juiste balans tussen belasting en herstel, zodat je consistent sterker wordt zonder overtraining.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat is het verschil tussen strength training en bodybuilding?</h3>
              <p className="text-gray-600">Strength training richt zich op het opbouwen van functionele kracht met compound lifts. Bodybuilding focust op spiergroei en uiterlijk. Bij strength training train je bewegingen, niet individuele spieren.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start met strength training
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Plan een gratis kennismakingsgesprek en ontdek hoe je sterker wordt bij CrossFit Alkmaar.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_strength_footer", "strength-training-alkmaar"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
