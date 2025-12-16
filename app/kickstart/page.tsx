"use client";

import { useState } from "react";

export default function KickstartPage() {
  const [popupOpen, setPopupOpen] = useState(false);

  const maanden = [
    "januari", "februari", "maart", "april", "mei", "juni",
    "juli", "augustus", "september", "oktober", "november", "december"
  ];
  
  const huidigeMaandIndex = new Date().getMonth();
  const volgendeMaand = maanden[(huidigeMaandIndex + 1) % 12];

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/kickstart-header.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            28-Day Kickstart
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            De perfecte start naar een fitter en sterker leven. In 4 weken bouw je een sterke basis op.
          </p>
          <button
            onClick={() => setPopupOpen(true)}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Claim je plek voor {volgendeMaand}
          </button>
        </div>
      </section>

      {/* Wat is de Kickstart */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Wat is de 28 day Kickstart?</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              De Kickstart is speciaal ontworpen voor drukke mensen die nieuw zijn bij CrossFit maar niet weten waar te beginnen. Gedurende 4 weken krijg je 12 trainingen waarin je alle basis bewegingen leert, onder begeleiding van ervaren coaches.
            </p>
            <p className="mb-4">
              Je traint in een kleine groep van maximaal 6 personen, zodat je persoonlijke aandacht krijgt. We nemen de tijd om elke beweging goed uit te leggen en te oefenen.
            </p>
            <p>
              Na de Kickstart kun je met vertrouwen doorstromen naar onze BUILD programma of groepslessen.
            </p>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/esc-52ZNdPY"
              title="28-Day Kickstart"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Wat je krijgt */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Wat je krijgt</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ 12 trainingen in 4 weken</h3>
              <p className="text-gray-600">Drie trainingen per week op vaste tijden, zodat het in je schema past.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Kleine groepen (max 6)</h3>
              <p className="text-gray-600">Maximaal 6 personen per groep voor persoonlijke aandacht.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Een goede basis</h3>
              <p className="text-gray-600">Je leert de basis van kracht- en conditietraining veilig uitvoeren.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Basis leefstijladvies</h3>
              <p className="text-gray-600">Naast training krijg je tips over voeding en herstel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start in {volgendeMaand}</h2>
          <p className="text-xl mb-8">
            De Kickstart van {volgendeMaand} heeft nog plekken beschikbaar.
          </p>
          <button
            onClick={() => setPopupOpen(true)}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Meld je aan
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
              <h2 className="text-2xl font-bold mb-2">MEER INFORMATIE OVER DE KICKSTART VAN {volgendeMaand.toUpperCase()}</h2>
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