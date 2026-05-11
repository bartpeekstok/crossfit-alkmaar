"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Image from "next/image";
import Link from "next/link";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";
import Script from "next/script";

export default function CrossFitVrouwenAlkmaarPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="CrossFit voor Vrouwen Alkmaar - CrossFit Alkmaar"
        description="CrossFit voor vrouwen in Alkmaar. Word sterker, fitter en zelfverzekerder met professionele coaching in kleine groepen."
        url="https://crossfitalkmaar.com/crossfit-vrouwen-alkmaar"
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
                name: "Word ik niet te gespierd van CrossFit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nee. Vrouwen hebben van nature veel minder testosteron dan mannen, waardoor je niet zomaar 'bulky' wordt. CrossFit maakt je strakker, sterker en fitter — niet groter. Je krijgt een atletisch, getraind lichaam.",
                },
              },
              {
                "@type": "Question",
                name: "Is CrossFit geschikt voor vrouwen die nog nooit hebben gesport?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absoluut. Via het Kickstart-traject leer je alle basisbewegingen met persoonlijke begeleiding. Alles wordt aangepast aan jouw niveau, dus je hoeft niet fit te zijn om te beginnen.",
                },
              },
              {
                "@type": "Question",
                name: "Kan ik afvallen met CrossFit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja. CrossFit combineert kracht- en conditietraining, waardoor je veel calorieën verbrandt en spiermassa opbouwt. Meer spiermassa verhoogt je stofwisseling, waardoor je ook in rust meer verbrandt. In combinatie met gezonde voeding is CrossFit zeer effectief voor gewichtsverlies.",
                },
              },
              {
                "@type": "Question",
                name: "Train ik samen met mannen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, onze groepslessen zijn gemengd. Maar iedereen traint op eigen niveau — de workout is hetzelfde, het gewicht en de intensiteit pas je aan. Veel vrouwen vinden dit juist motiverend. De sfeer is ondersteunend en inclusief.",
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
        aria-label="CrossFit voor vrouwen in Alkmaar - word sterker bij CrossFit Alkmaar"
      >
        <Image
          src="/images/CFA-november-lowres-12.jpg"
          alt="CrossFit voor vrouwen in Alkmaar - word sterker bij CrossFit Alkmaar"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            CrossFit voor Vrouwen in Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Word sterker, fitter en zelfverzekerder — zonder bodybuilder te worden. Bij CrossFit Alkmaar train je op jouw niveau, met professionele coaching in kleine groepen.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_vrouwen_hero", "crossfit-vrouwen-alkmaar"); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Waarom vrouwen kiezen voor CrossFit */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Waarom steeds meer vrouwen kiezen voor CrossFit
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Veel vrouwen denken bij CrossFit aan zware gewichten en gespierde lichamen. Maar de realiteit is anders. CrossFit maakt je sterk, niet groot. Vrouwen hebben van nature veel minder testosteron dan mannen — je wordt dus niet &quot;bulky&quot; van krachttraining. Wat je wél krijgt: een strak, atletisch lichaam en meer zelfvertrouwen.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Bij CrossFit Alkmaar zien we dagelijks wat krachttraining doet voor vrouwen. Meer energie, beter slapen, minder stress, en het gevoel dat je lichaam iets kán. Geen eindeloos cardio op een loopband, maar gevarieerde workouts die je uitdagen en leuk zijn om te doen.
          </p>
          <p className="text-lg text-gray-700">
            En het belangrijkste: alles wordt aangepast aan jouw niveau. Of je nu nooit hebt gesport of al jaren traint — je doet dezelfde workout, maar op jouw manier.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Wat CrossFit je als vrouw oplevert
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Sterker zonder bulky te worden
              </h3>
              <p className="text-gray-700">
                Krachttraining maakt je strakker en sterker, niet groter. Je bouwt functionele kracht op die je in het dagelijks leven merkt — van boodschappen tillen tot met je kinderen spelen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Afvallen op een gezonde manier
              </h3>
              <p className="text-gray-700">
                CrossFit combineert kracht en cardio in elke workout. Je verbrandt veel calorieën en bouwt spiermassa op, waardoor je stofwisseling omhoog gaat. Effectiever dan alleen cardio.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Meer energie en zelfvertrouwen
              </h3>
              <p className="text-gray-700">
                Onze leden vertellen ons keer op keer: ze voelen zich fitter, energieker en zekerder over zichzelf. CrossFit laat je zien waartoe je lichaam in staat is.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Trainingen aangepast aan jouw niveau
              </h3>
              <p className="text-gray-700">
                Elke oefening heeft variaties. Je coach past gewichten en bewegingen aan zodat jij veilig en effectief traint, of je nu beginner bent of gevorderd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meer dan alleen trainen */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Meer dan alleen trainen
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Bij CrossFit Alkmaar word je onderdeel van een hechte community. Veel vrouwen vinden het juist fijn om samen te trainen — je motiveert elkaar, lacht samen en viert elkaars successen. Het voelt niet als een sportschool, maar als een team.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Je start met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link>: persoonlijke sessies waarin je alle basisbewegingen leert. Daarna sluit je aan bij de <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">groepslessen</Link> met maximaal 12 personen per coach. Zo krijg je altijd de aandacht die je nodig hebt.
          </p>
          <p className="text-lg text-gray-700">
            Geen lange contracten, geen verkooppraatje. Gewoon goed sporten in een fijne omgeving.
          </p>
        </div>
      </section>

      {/* AEO Content */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">CrossFit voor vrouwen</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Word je gespierd van CrossFit als vrouw?</h3>
              <p className="text-gray-600">Nee, vrouwen hebben van nature veel minder testosteron dan mannen, waardoor je niet zomaar een bodybuilder wordt. Wat je wél krijgt: een strak, sterk en gezond lichaam. Onze vrouwelijke leden worden sterker, niet groter.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is CrossFit geschikt voor vrouwen die willen afvallen?</h3>
              <p className="text-gray-600">Ja. De combinatie van krachttraining en conditie bij CrossFit is ideaal om vet te verliezen en spiermassa te behouden. Je stofwisseling gaat omhoog en je verbrandt ook na de training door.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Voel ik me als vrouw op mijn gemak bij CrossFit?</h3>
              <p className="text-gray-600">Absoluut. Bij CrossFit Alkmaar is de sfeer ondersteunend, niet competitief. Je traint in een groep waar iedereen op zijn eigen niveau werkt. Veel van onze leden zijn vrouwen die hier zijn begonnen zonder sportervaring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video testimonial */}
      <section className="py-16 px-6 bg-gray-200">
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
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde vragen</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Word ik niet te gespierd van CrossFit?</h3>
              <p className="text-gray-600">Nee. Vrouwen hebben van nature veel minder testosteron dan mannen, waardoor je niet zomaar &quot;bulky&quot; wordt. CrossFit maakt je strakker, sterker en fitter — niet groter. Je krijgt een atletisch, getraind lichaam.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is CrossFit geschikt voor vrouwen die nog nooit hebben gesport?</h3>
              <p className="text-gray-600">Absoluut. Via het <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart-traject</Link> leer je alle basisbewegingen met persoonlijke begeleiding. Alles wordt aangepast aan jouw niveau, dus je hoeft niet fit te zijn om te beginnen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Kan ik afvallen met CrossFit?</h3>
              <p className="text-gray-600">Ja. CrossFit combineert kracht- en conditietraining, waardoor je veel calorieën verbrandt en spiermassa opbouwt. In combinatie met gezonde voeding is het zeer effectief voor gewichtsverlies. Bekijk ook onze <Link href="/meer-info#tarieven" className="text-blue-900 font-semibold hover:underline">tarieven</Link>.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Train ik samen met mannen?</h3>
              <p className="text-gray-600">Ja, onze <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">groepslessen</Link> zijn gemengd. Maar iedereen traint op eigen niveau — de workout is hetzelfde, het gewicht en de intensiteit pas je aan. Veel vrouwen vinden dit juist motiverend.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Klaar om sterker te worden?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Plan een gratis kennismakingsgesprek. We laten je de box zien, bespreken je doelen en leggen uit hoe je kunt starten. Geen verplichtingen.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_vrouwen_footer", "crossfit-vrouwen-alkmaar"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
