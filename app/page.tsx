"use client";

import Link from "next/link";
import Script from "next/script";
import { usePopup } from "./components/PopupContext";

export default function HomePage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 px-6 min-h-[600px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hier word je wél sterker en fitter
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            Kleine groepen, professionele coaches en schaalbaar op elk niveau.
          </p>
          <p className="text-lg mb-8 text-gray-400">
            Of je nu 30, 50 of 60+ bent, lang niet hebt gesport of weer wilt beginnen: wij helpen je veilig en effectief sterker te worden.
          </p>
          <button
            onClick={openPopup}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Gratis intake
          </button>
        </div>
      </section>

      {/* Video 1 - Souad */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/5ThBJD4lJ0g" title="CrossFit Alkmaar" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <p className="text-center text-gray-900 mt-6 text-xl font-medium italic">
            Souad: 'Vooral denken in mogelijkheden'
          </p>
        </div>
      </section>

      {/* Hoe werkt het - 3 stappen */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Zo werkt trainen bij CrossFit Alkmaar</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Gratis kennismaking</h3>
              <p className="text-gray-600">We kijken naar jouw doel, ervaring en eventuele beperkingen. Geen verplichtingen.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Persoonlijk trainingsplan</h3>
              <p className="text-gray-600">Elke training wordt aangepast aan jouw niveau. Onze coaches begeleiden je stap voor stap.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Resultaten zien en voelen</h3>
              <p className="text-gray-600">Binnen weken voel je je sterker, energieker en fitter. We meten je voortgang samen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Card 1 */}
      <section className="py-12 px-6 bg-gray-200">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <h3 className="text-2xl font-bold mb-4">Klaar om te beginnen?</h3>
            <button
              onClick={openPopup}
              className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-10 text-lg rounded-lg transition cursor-pointer"
            >
              Gratis intake
            </button>
          </div>
        </div>
      </section>

      {/* Video 2 - Bert */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/a2zbZIlU27Y" title="CrossFit Alkmaar" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <p className="text-center text-gray-900 mt-6 text-xl font-medium italic">
            Bert: 'Ik moet zeggen, ik had niet verwacht dat ik het zó leuk zou vinden als dat ik het nu vind'
          </p>
        </div>
      </section>

      {/* Programmas */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Kies het programma dat bij je past</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Trainingen voor iedereen en elk niveau.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-3">28 day kickstart</h3>
              <p className="text-gray-600 mb-6">Hier start iedereen. In vier weken leggen we samen een solide basis.</p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✓ Wordt sterker en fitter</li>
                <li>✓ Structuur en accountability</li>
                <li>✓ Kleine groepen (max 6)</li>
                <li>✓ Basis leefstijladvies</li>
              </ul>
              <Link href="/kickstart" className="block w-full text-center bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 rounded-lg transition">Meer info</Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-3">BUILD</h3>
              <p className="text-gray-600 mb-6">Semi personal training in een vaste groep.</p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✓ De voordelen van personal training</li>
                <li>✓ In een vaste groep van maximaal 6 personen</li>
                <li>✓ Een gestructureerd schema</li>
                <li>✓ Met jouw vaste coaches</li>
              </ul>
              <Link href="/small-group-training" className="block w-full text-center bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 rounded-lg transition">Meer info</Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-3">Groepslessen</h3>
              <p className="text-gray-600 mb-6">Gevarieerd, uitdagend, en altijd schaalbaar naar jouw niveau.</p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✓ De beste coaches van Alkmaar</li>
                <li>✓ Flexibel in- en uitschrijven</li>
                <li>✓ Ontmoet nieuwe vrienden</li>
                <li>✓ Voor alle niveaus</li>
              </ul>
              <Link href="/groepslessen" className="block w-full text-center bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 rounded-lg transition">Meer info</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Wat onze leden zeggen</h2>
          <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-441b4eee-fe67-40af-9775-caf184c8ed7f" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* CTA Card 2 */}
      <section className="py-12 px-6 bg-gray-200">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <h3 className="text-2xl font-bold mb-4">Weet je het nog niet zeker?</h3>
            <p className="text-gray-600 mb-6">Kom vrijblijvend kennismaken en ontdek of CrossFit Alkmaar bij je past.</p>
            <button
              onClick={openPopup}
              className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-10 text-lg rounded-lg transition cursor-pointer"
            >
              Gratis intake
            </button>
          </div>
        </div>
      </section>

      {/* Resultaten */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">CrossFit Alkmaar in cijfers</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <a 
              href="https://www.google.com/search?q=crossfit+alkmaar#lrd=0x47cf573834f8b5b7:0x4a55c3c9c9a67e0e,1"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-center hover:scale-105 transition cursor-pointer"
            >
              <div className="text-5xl font-bold text-blue-900 mb-2">260+</div>
              <p className="text-gray-600">Google Reviews ⭐</p>
            </a>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">300+</div>
              <p className="text-gray-600">Actieve leden</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">12+</div>
              <p className="text-gray-600">Jaar ervaring</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">35+</div>
              <p className="text-gray-600">Gemiddelde leeftijd</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">15K</div>
              <p className="text-gray-600">Bakjes koffie per jaar ☕</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde vragen</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Ik ben niet fit genoeg om te starten</h3>
              <p className="text-gray-600">Dat is precies waarom je juist wél moet starten. Elke training schalen we naar jouw niveau.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Ik heb geen tijd voor 5x per week trainen</h3>
              <p className="text-gray-600">Hoeft ook niet. Veel leden trainen 2-3x per week en zien al goede resultaten.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Ben ik niet te oud om met trainen te beginnen?</h3>
              <p className="text-gray-600">Absoluut niet. Onze gemiddelde leeftijd is 35+. We hebben leden van 20 tot 70+ die veilig trainen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat als ik blessures of beperkingen heb?</h3>
              <p className="text-gray-600">We passen bewegingen aan of kiezen alternatieven. Onze coaches hebben ervaring met revalidatie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar om te starten?</h2>
          <p className="text-xl mb-8">Plan een gratis kennismaking. Geen verplichtingen.</p>
          <button
            onClick={openPopup}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg cursor-pointer"
          >
            Gratis intake
          </button>
        </div>
      </section>
    </div>
  );
}