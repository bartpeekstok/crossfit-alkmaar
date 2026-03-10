"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Link from "next/link";

export default function GroepslessenAlkmaarPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="Groepslessen Alkmaar - CrossFit Alkmaar"
        description="Groepslessen met professionele coaching in kleine groepen van max 12 personen. CrossFit, strength en conditie bij CrossFit Alkmaar."
        url="https://crossfitalkmaar.com/groepslessen-alkmaar"
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
                  text: "Maximaal 12 personen per les. Zo krijgt iedereen persoonlijke aandacht van de coach.",
                },
              },
              {
                "@type": "Question",
                name: "Welke lessen bieden jullie aan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "CrossFit, Strength, HYROX en Build. Elke les duurt 60 minuten en wordt begeleid door een professionele coach.",
                },
              },
              {
                "@type": "Question",
                name: "Moet ik van tevoren reserveren?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, je reserveert via onze app. Zo weten we wie er komt en houden we de groepen klein.",
                },
              },
              {
                "@type": "Question",
                name: "Kan ik als beginner meedoen met groepslessen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, na het afronden van onze 28 Day Kickstart. Daarin leer je alle basisbewegingen zodat je veilig kunt meedoen.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="Groepslessen Alkmaar - samen trainen bij CrossFit Alkmaar"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/groepslessen-alkmaar-header.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src="/images/groepslessen-alkmaar-header.jpg" alt="Groepslessen Alkmaar - samen trainen bij CrossFit Alkmaar" className="sr-only" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Groepslessen in Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Samen trainen in kleine groepen met een coach die je kent. Geen massale lessen, maar persoonlijke aandacht.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_groepslessen_hero", "groepslessen-alkmaar"); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Waarom groepslessen bij CFA */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Groepslessen die écht werken
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Groepslessen bij een sportschool betekent vaak: 30 mensen in een zaal, een instructeur op een podium, en hopen dat je het goed doet. Bij CrossFit Alkmaar is dat compleet anders.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Onze groepen zijn maximaal 12 personen. Je coach kent je naam, je doelen en je beperkingen. Elke oefening wordt aangepast aan jouw niveau. Beginners trainen naast gevorderden — iedereen doet dezelfde workout, maar op een manier die bij hen past.
          </p>
          <p className="text-lg text-gray-700">
            Het resultaat: de motivatie van een groep, met de aandacht van personal training.
          </p>
        </div>
      </section>

      {/* Lesaanbod */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ons lesaanbod
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                CrossFit Classes
              </h3>
              <p className="text-gray-700">
                Onze kern: gevarieerde workouts die kracht en conditie combineren. Elke dag anders, altijd uitdagend en altijd begeleid.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Strength Classes
              </h3>
              <p className="text-gray-700">
                Focus op krachtopbouw met barbell-werk. Squats, deadlifts, presses — gestructureerd en geprogrammeerd voor progressie.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                HYROX
              </h3>
              <p className="text-gray-700">
                Specifieke voorbereiding op HYROX-wedstrijden. Hardlopen, roeien, sled push/pull en functionele oefeningen in wedstrijdformat.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Build
              </h3>
              <p className="text-gray-700">
                Gericht op spieropbouw en lichaamsvorm. Gestructureerde trainingen met focus op hypertrofie en aesthetics. <Link href="/programmas" className="text-blue-900 font-semibold hover:underline">Meer over Build →</Link>
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-700 mt-6">
            Bekijk het volledige <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">lesrooster</Link> voor alle tijden en lessen.
          </p>
        </div>
      </section>

      {/* Voor wie */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Voor iedereen, van beginner tot gevorderd
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Onze leden zijn 20 tot 70+ jaar. Sommigen hebben nooit gesport, anderen zijn doorgewinterde atleten. Wat ze delen: ze willen beter worden, samen met anderen, onder begeleiding van een coach.
          </p>
          <p className="text-lg text-gray-700">
            Nieuw? Je start altijd met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> — een persoonlijk introductietraject zodat je voorbereid in je eerste groepsles staat.
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
              <p className="text-gray-600">Maximaal 12 personen per les. Zo krijgt iedereen persoonlijke aandacht van de coach.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Welke lessen bieden jullie aan?</h3>
              <p className="text-gray-600">CrossFit, Strength, HYROX en Build. Elke les duurt 60 minuten en wordt begeleid door een professionele coach.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Moet ik van tevoren reserveren?</h3>
              <p className="text-gray-600">Ja, je reserveert via onze app. Zo weten we wie er komt en houden we de groepen klein.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Kan ik als beginner meedoen met groepslessen?</h3>
              <p className="text-gray-600">Ja, na het afronden van onze 28 Day Kickstart. Daarin leer je alle basisbewegingen zodat je veilig kunt meedoen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Probeer een groepsles
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Plan een gratis kennismakingsgesprek en ervaar zelf het verschil.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_groepslessen_footer", "groepslessen-alkmaar"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
