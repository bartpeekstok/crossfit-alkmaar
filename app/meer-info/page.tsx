"use client";

import { usePopup } from "../components/PopupContext";
import Script from "next/script";

export default function MeerInfoPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section className="bg-blue-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Meer info
          </h1>
          <p className="text-xl text-gray-200 mb-6">
            Bekijk ons lesrooster en onze tarieven
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="#rooster" 
              className="bg-white hover:bg-gray-100 text-blue-900 font-semibold py-3 px-6 rounded-lg transition"
            >
              Rooster
            </a>
            <a 
              href="#tarieven" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Tarieven
            </a>
          </div>
        </div>
      </section>

      {/* Rooster sectie */}
      <section id="rooster" className="py-16 px-6 bg-gray-100 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Lesrooster</h2>
          
          {/* Sportbit Rooster Embed */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <link 
              rel="stylesheet" 
              href="https://cfalkmaar.sportbitapp.nl/cbm/css/embed/rooster/rooster.css" 
              type="text/css" 
            />
            <div id="sportbit-rooster">&nbsp;</div>
          </div>
        </div>
      </section>

      {/* Tarieven sectie */}
      <section id="tarieven" className="py-16 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div 
            className="rounded-lg p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6"
            style={{
              background: 'linear-gradient(135deg, #1e3a5f 0%, #0d1b2a 100%)',
            }}
          >
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-3">TARIEVEN</h2>
              <p className="text-lg text-gray-200">
                Onze abonnementen starten al vanaf €95 per maand. Meer informatie? Klik op deze knop.
              </p>
            </div>
            <button
              onClick={openPopup}
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 px-8 rounded-lg transition whitespace-nowrap"
            >
              MEER INFO
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar om te starten?</h2>
          <p className="text-xl mb-8">
            Plan een gratis intake en kom langs voor een proefles.
          </p>
          <button
            onClick={openPopup}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Gratis intake
          </button>
        </div>
      </section>

      {/* Sportbit Script */}
      <Script 
        src="https://cfalkmaar.sportbitapp.nl/cbm/embed/rooster/cdn/"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && (window as any).embed_rooster) {
            (window as any).embed_rooster.init('https://cfalkmaar.sportbitapp.nl/', null);
          }
        }}
      />
    </div>
  );
}