"use client";

import { useState } from "react";

export default function KickstartBanner() {
  const [popupOpen, setPopupOpen] = useState(false);

  const maanden = [
    "januari", "februari", "maart", "april", "mei", "juni",
    "juli", "augustus", "september", "oktober", "november", "december"
  ];
  
  const huidigeMaandIndex = new Date().getMonth();
  const huidigeMaand = maanden[huidigeMaandIndex];
  const volgendeMaand = maanden[(huidigeMaandIndex + 1) % 12];

  return (
    <>
      <div className="sticky top-0 z-50 bg-blue-900 text-white py-3 px-4 text-center">
        <p className="text-sm md:text-base mb-2">
          🔥 Kickstart {huidigeMaand} is <strong>VOLGEBOEKT</strong> 🔥 {volgendeMaand} bijna vol!
        </p>
        <button
          onClick={() => setPopupOpen(true)}
          className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-full text-sm hover:bg-gray-100 transition animate-pulse"
        >
          Meer informatie →
        </button>
      </div>

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
    </>
  );
}