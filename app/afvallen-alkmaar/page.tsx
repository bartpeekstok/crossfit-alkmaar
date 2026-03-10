"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Link from "next/link";

export default function AfvallenAlkmaarPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="Afvallen in Alkmaar - CrossFit Alkmaar"
        description="Gezond afvallen met professionele begeleiding. Effectieve training en voedingsadvies bij CrossFit Alkmaar."
        url="https://crossfitalkmaar.com/afvallen-alkmaar"
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="Afvallen in Alkmaar - effectief en gezond bij CrossFit Alkmaar"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src="/images/hero.jpg" alt="Afvallen in Alkmaar - effectief en gezond bij CrossFit Alkmaar" className="sr-only" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Afvallen in Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Geen crashdiëten of eindeloos cardio. Wél effectieve training en begeleiding die werkt.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_afvallen_hero", "afvallen-alkmaar"); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Waarom CrossFit voor afvallen */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Waarom CrossFit werkt als je wilt afvallen
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Veel mensen proberen af te vallen door alleen te cardio-en of minder te eten. Dat werkt even, maar niet lang. Bij CrossFit Alkmaar pak je het anders aan: je bouwt spiermassa op, verhoogt je stofwisseling en verbrandt calorieën — ook na de training.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Onze trainingen combineren kracht en conditie in gevarieerde workouts van een uur. Elke sessie wordt begeleid door een coach die je pusht én remt waar nodig. Zo train je effectief zonder blessures.
          </p>
          <p className="text-lg text-gray-700">
            En het belangrijkste: je traint in een groep die je motiveert. Geen eenzame uren op de loopband, maar energie van mensen die hetzelfde doel hebben.
          </p>
        </div>
      </section>

      {/* Aanpak */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Onze aanpak voor gezond afvallen
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Effectieve training
              </h3>
              <p className="text-gray-700">
                CrossFit combineert kracht en conditie. Je verbetert je lichaamsamenstelling: minder vet, meer spiermassa. Dat is duurzamer dan alleen gewicht verliezen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Voedingsbegeleiding
              </h3>
              <p className="text-gray-700">
                Training alleen is niet genoeg. Onze <Link href="/voedingsadvies" className="text-blue-900 font-semibold hover:underline">voedingscoaches</Link> helpen je met een eetpatroon dat past bij jouw leven — geen strenge diëten.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Persoonlijke coaching
              </h3>
              <p className="text-gray-700">
                Elke les wordt begeleid in groepen van max 12. Je coach kent je doelen en past de training aan op jouw niveau en conditie.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Motivatie van de groep
              </h3>
              <p className="text-gray-700">
                De community bij CrossFit Alkmaar houdt je op de been. Je traint met mensen die je aanmoedigen en missen als je er niet bent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Je hoeft niet fit te zijn om te beginnen
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Veel van onze leden zijn begonnen met het doel om af te vallen. Sommigen hadden nog nooit gesport, anderen kwamen van een andere sportschool waar ze niet de resultaten kregen die ze wilden.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Iedereen start met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> — een persoonlijk traject waarin je de basis leert. Zo bouw je op in je eigen tempo en sta je nooit onvoorbereid in een groepsles.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Klaar om te beginnen?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Plan een gratis kennismakingsgesprek en ontdek hoe wij je kunnen helpen met gezond afvallen.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_afvallen_footer", "afvallen-alkmaar"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
