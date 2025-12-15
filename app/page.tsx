"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
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
            Word sterker, beweeg beter, voel je fitter
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            Professionele begeleiding in kleine groepen. Schaalbaar op elk niveau.
          </p>
          <p className="text-lg mb-8 text-gray-400">
            Of je nu 30, 50 of 60+ bent, lang niet hebt gesport of weer wilt beginnen: wij helpen je veilig en effectief sterker te worden.
          </p>
          <button
            onClick={() => setPopupOpen(true)}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Gratis intake
          </button>
        </div>
      </section>

      {/* Video 1 */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/G9HkOnSsKg8" title="CrossFit Alkmaar" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      {/* Hoe werkt het - 3 stappen */}
      <section className="py-16 px-6 bg-white">
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

      {/* Video 2 */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/a2zbZIlU27Y" title="CrossFit Alkmaar" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      {/* Programmas */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Kies het programma dat bij je past</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Of je nu wilt starten, structuur zoekt, of specifiek aan kracht wilt werken.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-3">28-Day Kickstart</h3>
              <p className="text-gray-600 mb-6">Ideaal om te starten. 4 weken begeleide training en een solide basis.</p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✓ 8 trainingen in 4 weken</li>
                <li>✓ Extra aandacht en uitleg</li>
                <li>✓ Kleine groepen (max 8)</li>
                <li>✓ Doorstromen naar regulier</li>
              </ul>
              <Link href="/kickstart" className="block w-full text-center bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 rounded-lg transition">Meer info</Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-3">Algemeen trainen</h3>
              <p className="text-gray-600 mb-6">Gevarieerd, uitdagend, en altijd schaalbaar naar jouw niveau.</p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✓ Onbeperkt trainen</li>
                <li>✓ Elke training andere focus</li>
                <li>✓ Ervaren coaches</li>
                <li>✓ Alle niveaus welkom</li>
              </ul>
              <Link href="/programmas" className="block w-full text-center bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 rounded-lg transition">Meer info</Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-3">BUILD</h3>
              <p className="text-gray-600 mb-6">Specifiek krachtprogramma. Focus op sterker worden met barbells.</p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✓ 2x per week, vaste tijden</li>
                <li>✓ Maximaal 6 personen</li>
                <li>✓ Progressief schema</li>
                <li>✓ Ideaal voor 40+</li>
              </ul>
              <Link href="/programmas" className="block w-full text-center bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 rounded-lg transition">Meer info</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resultaten */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">CrossFit Alkmaar in cijfers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde vragen</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Ik ben niet fit genoeg om te starten</h3>
              <p className="text-gray-600">Dat is precies waarom je juist wél moet starten. Elke training schalen we naar jouw niveau.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Ik heb geen tijd voor 5x per week trainen</h3>
              <p className="text-gray-600">Hoeft ook niet. Veel leden trainen 2-3x per week en zien al goede resultaten.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Ben ik niet te oud om met CrossFit te beginnen?</h3>
              <p className="text-gray-600">Absoluut niet. Onze gemiddelde leeftijd is 35+. We hebben leden van 20 tot 70+ die veilig trainen.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
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
            onClick={() => setPopupOpen(true)}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg cursor-pointer"
          >
            Gratis intake
          </button>
        </div>
      </section>

      {/* Popup */}
      {popupOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setPopupOpen(false)}></div>
          <div className="relative w-full max-w-lg bg-[#1e3a5f] rounded-lg overflow-hidden shadow-2xl">
            <button onClick={() => setPopupOpen(false)} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-[#1e3a5f] text-white text-center py-6 px-8">
              <h2 className="text-2xl font-bold mb-2">VUL HIER JE GEGEVENS IN OM VAN START TE GAAN</h2>
              <p className="text-gray-300">Neem de eerste stap op weg naar jouw fitness doelen</p>
            </div>
            <div className="bg-white p-6">
              <iframe src="https://kilo.gymleadmachine.com/widget/form/peswXaJSSZHHMPxZQ4es" style={{ width: "100%", height: "350px", border: "none" }} title="Website Form"></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}