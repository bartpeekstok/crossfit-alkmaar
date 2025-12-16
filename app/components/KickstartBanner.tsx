"use client";

import { useState } from "react";

export default function KickstartBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  // Maanden in het Nederlands
  const maanden = [
    "januari", "februari", "maart", "april", "mei", "juni",
    "juli", "augustus", "september", "oktober", "november", "december"
  ];

  const nu = new Date();
  const huidigeMaand = maanden[nu.getMonth()];
  const volgendeMaand = maanden[(nu.getMonth() + 1) % 12];

  if (!isVisible) return null;

  return (
    <>
      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-900 text-white py-3 px-4 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          {/* Content */}
          <div className="flex-1">
            <p className="font-semibold text-sm sm:text-base">
              <span className="hidden sm:inline">
               De 28 day kickstart van {huidigeMaand} zit nu VOL! De inschrijving voor {volgendeMaand} opent binnenkort 🔥🔥
              </span>
              <span className="sm:hidden">
              Kickstart {huidigeMaand} zit VOL! Inschrijving {volgendeMaand} opent binnenkort🔥🔥
              </span>
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setPopupOpen(true)}
            className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-2 px-4 sm:px-6 rounded-lg transition text-sm sm:text-base whitespace-nowrap"
          >
            Meer info
          </button>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/70 hover:text-white transition p-1"
            aria-label="Sluiten"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Kickstart Popup */}
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
              <iframe src="https://kilo.gymleadmachine.com/widget/form/peswXaJSSZHHMPxZQ4es" style={{ width: "100%", height: "350px", border: "none" }} title="Kickstart Form"></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}