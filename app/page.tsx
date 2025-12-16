"use client";

import { useState } from "react";

export default function HomePage() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero Section */}
      <section className="relative text-white py-20 px-6 min-h-[600px] flex items-center">
        <img
          src="/images/hero.jpg"
          alt="CrossFit Alkmaar"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Word sterker, beweeg beter, voel je fitter
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            Professionele begeleiding in kleine groepen. Schaalbaar op elk niveau.
          </p>
          <p className="text-lg mb-8 text-gray-400">
            Of je nu 30, 50 of 60+ bent, lang niet hebt gesport of weer wilt beginnen: wij helpen je veilig en effectief sterker te worden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setPopupOpen(true)}
              className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
            >
              Plan een gratis kennismaking
            </button>
            
              href="/kickstart"
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
            >
              Bekijk de 28-Day Kickstart
            </a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Zie wat onze leden zeggen
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Echte verhalen van leden die net als jij begonnen zijn.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/G9HkOnSsKg8"
                title="CrossFit Alkmaar testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/a2zbZIlU27Y"
                title="CrossFit Alkmaar testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe werkt het - 3 stappen */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Zo werkt trainen bij CrossFit Alkmaar
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Gratis kennismaking</h3>
              <p className="text-gray-600">
                We kijken naar jouw doel, ervaring en eventuele beperkingen. Geen verplichtingen.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Persoonlijk trainingsplan</h3>
              <p className="text-gray-600">
                Elke training wordt aangepast aan jouw niveau. Onze coaches begeleiden je stap voor stap.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Resultaten zien en voelen</h3>
              <p className="text-gray-600">
                Binnen weken voel je je sterker, energieker en fitter. We meten je voortgang samen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA na stappen */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Klaar om te beginnen?</h3>
            <button
              onClick={() => setPopupOpen(true)}
              className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-10 rounded-lg transition text-lg"
            >
              Gratis intake
            </button>
          </div>
        </div>
      </section>

      {/* Statistieken */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">500+</div>
              <p className="text-gray-600">Tevreden leden</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">10+</div>
              <p className="text-gray-600">Jaar ervaring</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">50+</div>
              <p className="text-gray-600">Klassen per week</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">4.9</div>
              <p className="text-gray-600">Google rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programma's */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Kies het programma dat bij je past
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Of je nu wilt starten, structuur zoekt, of specifiek aan kracht wilt werken: wij hebben een programma voor jou.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* 28-Day Kickstart */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-3">28-Day Kickstart</h3>
              <p className="text-gray-600 mb-6">
                Hier start iedereen. 4 weken begeleide training en een solide basis.
              </p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✓ 12 trainingen in 4 weken</li>
                <li>✓ Extra aandacht en uitleg</li>
                <li>✓ Kleine groepen (max 6)</li>
                <li>✓ Basis leefstijladvies</li>
              </ul>
              
                href="/kickstart"
                className="block w-full text-center bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 rounded-lg transition cursor-pointer"
              >
                Meer info
              </a>
            </div>

            {/* BUILD */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-3">BUILD</h3>
              <p className="text-gray-600 mb-6">
                Semi personal training in een vaste groep.
              </p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✓ De voordelen van personal training</li>
                <li>✓ In een vaste groep van maximaal 6 personen</li>
                <li>✓ Een gestructureerd schema</li>
                <li>✓ Met jouw vaste coaches</li>
              </ul>
              
                href="/build"
                className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition cursor-pointer"
              >
                Meer info
              </a>
            </div>

            {/* Groepslessen */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-3">Groepslessen</h3>
              <p className="text-gray-600 mb-6">
                Gevarieerd, uitdagend, en altijd schaalbaar naar jouw niveau.
              </p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✓ De beste coaches van Alkmaar</li>
                <li>✓ Flexibel in- en uitschrijven</li>
                <li>✓ Ontmoet nieuwe vrienden</li>
                <li>✓ Voor alle niveaus</li>
              </ul>
              
                href="/groepslessen"
                className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition cursor-pointer"
              >
                Meer info
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA na programma's */}
      <section className="py-12 px-6 bg-gray-200">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Weet je het nog niet zeker?</h3>
            <p className="text-gray-600 mb-6">Plan een vrijblijvend gesprek en ontdek welk programma bij je past.</p>
            <button
              onClick={() => setPopupOpen(true)}
              className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-10 rounded-lg transition text-lg"
            >
              Gratis intake
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Veelgestelde vragen
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">
                Ik ben niet fit genoeg om te starten
              </h3>
              <p className="text-gray-600">
                Dat is precies waarom je juist wél moet starten. Elke training schalen we naar jouw niveau. Je traint in je eigen tempo, met begeleiding. De meeste leden begonnen net als jij.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">
                Ik heb geen tijd voor 5x per week trainen
              </h3>
              <p className="text-gray-600">
                Hoeft ook niet. Veel leden trainen 2-3x per week en zien al goede resultaten. Consistentie is belangrijker dan frequentie. We helpen je een realistisch schema te maken.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">
                Ben ik niet te oud om met CrossFit te beginnen?
              </h3>
              <p className="text-gray-600">
                Absoluut niet. We hebben leden van 60, 65, 70+ die veilig en effectief trainen. Juist op latere leeftijd is krachtraining essentieel voor mobiliteit en gezondheid.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">
                Wat als ik blessures of beperkingen heb?
              </h3>
              <p className="text-gray-600">
                Tijdens de kennismaking bespreken we dit. We passen bewegingen aan of kiezen alternatieven. Onze coaches hebben ervaring met revalidatie en kunnen veilig met beperkingen werken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Klaar om te starten?
          </h2>
          <p className="text-xl mb-8">
            Plan een gratis kennismaking. Geen verplichtingen, gewoon kennismaken en kijken of het bij je past.
          </p>
          <button
            onClick={() => setPopupOpen(true)}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Popup */}
      {popupOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setPopupOpen(false)}></div>
          <div className="relative w-full max-w-lg bg-blue-900 rounded-lg overflow-hidden shadow-2xl">
            <button onClick={() => setPopupOpen(false)} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-blue-900 text-white text-center py-6 px-8">
              <h2 className="text-2xl font-bold mb-2">PLAN JE GRATIS INTAKE</h2>
              <p className="text-gray-300">Laat je gegevens achter, we nemen snel contact met je op.</p>
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