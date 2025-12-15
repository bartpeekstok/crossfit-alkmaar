"use client";

import { useState } from "react";

export default function KickstartBanner() {
  const [popupOpen, setPopupOpen] = useState(false);

  const now = new Date();
  const currentMonth = now.toLocaleString('nl-NL', { month: 'long' });
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1).toLocaleString('nl-NL', { month: 'long' });

  return (
    <>
      <div className="bg-blue-900 text-white py-4 px-4 text-center sticky top-0 z-[60]">
        <p className="text-lg md:text-xl font-bold mb-2">
          🔥 Kickstart {currentMonth} is VOLGEBOEKT — {nextMonth} bijna vol!
        </p>
        <button
          onClick={() => setPopupOpen(true)}
          className="bg-white text-blue-900 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition animate-pulse"
        >
          Zet mij op de lijst →
        </button>
      </div>

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
              <h2 className="text-2xl font-bold mb-2">RESERVEER JE PLEK VOOR {nextMonth.toUpperCase()}</h2>
              <p className="text-gray-300">Je staat op de wachtlijst. Wij nemen snel contact op!</p>
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