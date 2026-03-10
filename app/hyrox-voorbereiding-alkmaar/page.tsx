"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Link from "next/link";

export default function HyroxVoorbereidingAlkmaarPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="HYROX Voorbereiding Alkmaar - CrossFit Alkmaar"
        description="Bereid je voor op HYROX met professionele coaching bij CrossFit Alkmaar. Running, sled push, wall balls en meer."
        url="https://crossfitalkmaar.com/hyrox-voorbereiding-alkmaar"
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="HYROX voorbereiding Alkmaar - train voor je HYROX race bij CrossFit Alkmaar"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hyrox-alkmaar-header.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src="/images/hyrox-alkmaar-header.jpg" alt="HYROX voorbereiding Alkmaar - train voor je HYROX race bij CrossFit Alkmaar" className="sr-only" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            HYROX Voorbereiding Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Train voor je HYROX race met coaches die weten wat je nodig hebt. Alle apparatuur, alle oefeningen, onder één dak.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_hyrox_prep_hero", "hyrox-voorbereiding-alkmaar"); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Waarom CFA voor HYROX prep */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            De ideale HYROX voorbereiding
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            HYROX vraagt een combinatie van hardlopen en functionele oefeningen. Precies waar CrossFit om draait. Bij CrossFit Alkmaar heb je alle apparatuur die je nodig hebt: sleds, rowers, ski-ergs, wall balls, sandbags en meer.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Onze coaches helpen je met een trainingsplan dat is afgestemd op je HYROX-doel. Of het je eerste race is of je een PR wilt neerzetten — we bouwen je conditie, kracht en race-strategie op.
          </p>
          <p className="text-lg text-gray-700">
            En je traint niet alleen. Bij CrossFit Alkmaar bereiden meerdere leden zich voor op HYROX. Samen trainen, samen racen.
          </p>
        </div>
      </section>

      {/* HYROX oefeningen */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Alle HYROX stations, onder één dak
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Sled Push & Pull
              </h3>
              <p className="text-gray-700">
                Onze sleds staan klaar. Train de juiste techniek en bouw de kracht op die je nodig hebt op racedag.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                SkiErg & Rower
              </h3>
              <p className="text-gray-700">
                Werk aan je pacing en conditie op de SkiErg en rower. Leer de juiste strategie voor elke machine.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Wall Balls & Burpees
              </h3>
              <p className="text-gray-700">
                De stations die het verschil maken. Train ze regelmatig zodat ze op racedag geen verrassing zijn.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Running
              </h3>
              <p className="text-gray-700">
                8 km hardlopen verdeeld over 8 rondes. We werken aan je looptempo, pacing en het combineren van lopen met stations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Voor elke HYROX-deelnemer
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Of je nu je eerste HYROX doet of al meerdere races hebt gelopen — onze coaches stemmen de voorbereiding af op jouw niveau en doel. Van finishen tot podium.
          </p>
          <p className="text-lg text-gray-700">
            Nog nooit aan CrossFit gedaan? Geen probleem. Start met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> en bouw de basis op die je nodig hebt voor zowel CrossFit als HYROX.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start je HYROX voorbereiding
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Plan een gratis kennismakingsgesprek en bespreek je HYROX-doelen met onze coaches.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_hyrox_prep_footer", "hyrox-voorbereiding-alkmaar"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
