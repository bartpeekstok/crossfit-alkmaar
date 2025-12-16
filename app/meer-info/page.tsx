"use client";

import { usePopup } from "../components/PopupContext";
import Script from "next/script";

export default function MeerInfoPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/meer-info-header.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Meer info
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#rooster" 
              className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Rooster
            </a>
            <a 
              href="#tarieven" 
              className="bg-white hover:bg-gray-100 text-blue-900 font-semibold py-3 px-6 rounded-lg transition"
            >
              Tarieven
            </a>
            <button
              onClick={openPopup}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Gratis intake
            </button>
          </div>
        </div>
      </section>

      {/* Rooster sectie */}
      <section id="rooster" className="py-16 px-6 bg-gray-100 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Lesrooster</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We hebben ruime openingstijden zodat je altijd een moment kunt vinden dat bij jou past. 
            Van vroege ochtendtrainingen tot avondlessen - er is altijd een les die in je schema past.
          </p>
          
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
      <section id="tarieven" className="py-16 px-6 bg-gray-200 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Tarieven</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Onze abonnementen starten al vanaf €99 per maand. Benieuwd naar alle mogelijkheden en wat het beste bij jou past?
          </p>
          <div className="text-center">
            <button
              onClick={openPopup}
              className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
            >
              Vraag meer informatie aan
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