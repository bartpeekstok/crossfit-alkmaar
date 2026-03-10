"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Link from "next/link";

export default function FitnessAlkmaarPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="Fitness Alkmaar - CrossFit Alkmaar"
        description="Fitness met persoonlijke begeleiding in kleine groepen. CrossFit, strength training en meer bij CrossFit Alkmaar."
        url="https://crossfitalkmaar.com/fitness-alkmaar"
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="Fitness Alkmaar - persoonlijke training bij CrossFit Alkmaar"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/fitness-alkmaar-header.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src="/images/fitness-alkmaar-header.jpg" alt="Fitness Alkmaar - persoonlijke training bij CrossFit Alkmaar" className="sr-only" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Fitness Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Fitness met een coach die je kent, in een groep die je motiveert. Geen eindeloos rondjes lopen op de loopband.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_fitness_hero", "fitness-alkmaar"); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Fitness met begeleiding */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Fitness met echte begeleiding
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Bij veel fitnesscentra in Alkmaar sta je er alleen voor. Je maakt een schema, probeert het een paar weken vol te houden, en voor je het weet sta je weer op de bank. Herkenbaar?
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Bij CrossFit Alkmaar werkt het anders. Elke training is gepland, gevarieerd en wordt begeleid door een coach. Je hoeft niet na te denken over wat je gaat doen - wij regelen dat. Jij hoeft alleen maar op te komen dagen.
          </p>
          <p className="text-lg text-gray-700">
            De trainingen combineren kracht, conditie en mobiliteit. Je traint je hele lichaam, elke week. Dat is effectiever dan vier keer per week dezelfde spiergroep isoleren op een apparaat.
          </p>
        </div>
      </section>

      {/* Vergelijking */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            CrossFit Alkmaar vs. een gewone fitness
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Coach elke les
              </h3>
              <p className="text-gray-700">
                Bij ons staat er altijd een coach. Die corrigeert je techniek, pusht je als het kan, en remt je af als het moet.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Elke dag een andere workout
              </h3>
              <p className="text-gray-700">
                Geen standaard schema dat je wekenlang herhaalt. Elke training is anders, zodat je lichaam blijft groeien.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Resultaat in minder tijd
              </h3>
              <p className="text-gray-700">
                In 60 minuten train je kracht, conditie en mobiliteit. Geen 2 uur in de gym nodig voor dezelfde resultaten.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Motivatie van de groep
              </h3>
              <p className="text-gray-700">
                Samen trainen werkt. De groep houdt je verantwoordelijk - als je er niet bent, merken mensen dat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe beginnen */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Hoe begin je?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Iedereen begint met een gratis kennismakingsgesprek. We bespreken je doelen, laten de gym zien en leggen uit hoe het werkt. Geen verplichtingen.
          </p>
          <p className="text-lg text-gray-700">
            Daarna start je met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> - een persoonlijk traject van semi personal training sessies waarin je alle basis-bewegingen leert. Zo ben je klaar voor de groepslessen en weet je precies wat je doet.
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
            Plan een gratis kennismaking en ontdek waarom onze leden niet meer terug willen naar een gewone sportschool.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_fitness_footer", "fitness-alkmaar"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
