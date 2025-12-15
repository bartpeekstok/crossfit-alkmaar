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

      {/* Hoe werkt het */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Zo werkt trainen bij CrossFit Alkmaar
          </h2>
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

      {/* Videos */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Zie wat onze leden zeggen</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Echte verhalen van leden die net als jij begonnen zijn.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-gray-800 rounded-lg overflow-hidden aspect-video mb-4">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/G9HkOnSsKg8" title="CrossFit Alkmaar" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <h3 className="text-xl font-semibold mb-2">Echte resultaten van echte leden</h3>
              <p className="text-gray-600">Ontdek hoe onze leden sterker en fitter worden met professionele begeleiding.</p>
            </div>
            <div>
              <div className="bg-gray-800 rounded-lg overflow-hidden aspect-video mb-4">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/a2zbZIlU27Y" title="CrossFit Alkmaar" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <h3 className="text-xl font-semibold mb-2">Training voor elk niveau</h3>
              <p className="text-gray-600">Of je nu beginner bent of ervaren, onze coaches helpen je vooruit.</p>
            </div>
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
              <Link href="/programmas" className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition">Meer info</Link>
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
              <Link href="/programmas" className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition">Meer info</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Resultaten van echte leden</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">200+</div>
              <p className="text-gray-600">Actieve leden</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">15+</div>
              <p className="text-gray-600">Jaar ervaring</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">50+</div>
              <p className="text-gray-600">Gemiddelde leeftijd</p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg">
            <p className="text-lg italic text-gray-700 mb-4">Ik ben 58 en dacht dat dit niets voor mij was. Na de Kickstart train ik nu 3x per week en voel me beter dan 10 jaar geleden.</p>
            <p className="font-semibold">— Petra, 58 jaar, lid sinds 2023</p>
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
              <p className="text-gray-600">Absoluut niet. Onze gemiddelde leeftijd is 50+. We hebben leden van 60, 65, 70+ die veilig trainen.</p>
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setPopupOpen(false)}></div>
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-lg mx-4">
            <button onClick={() => setPopupOpen(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe src="https://kilo.gymleadmachine.com/widget/form/peswXaJSSZHHMPxZQ4es" style={{ width: "100%", height: "450px", border: "none", borderRadius: "7px" }} title="Website Form"></iframe>
          </div>
        </div>
      )}
    </div>
  );
}