"use client";

import { useState } from "react";

export default function KickstartBanner() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <div className="bg-blue-900 text-white py-4 px-6 sticky top-0 z-[60]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg md:text-xl font-semibold">
            🎉 Onze Kickstart zit vol deze maand!
          </p>
          <p className="text-base md:text-lg mt-1">
            <button 
              onClick={() => setPopupOpen(true)}
              className="underline hover:no-underline cursor-pointer"
            >
              Zet jezelf op de wachtlijst voor volgende maand →
            </button>
          </p>
        </div>
      </div>

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
    </>
  );
}