"use client";

import { usePopup } from "../components/PopupContext";
import { usePricingPopup } from "../components/PricingPopupContext";
import Script from "next/script";
import { trackCTAClick } from "../lib/analytics";

export default function MeerInfoPage() {
  const { openPopup } = usePopup();
  const { openPopup: openPricingPopup } = usePricingPopup();

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="CrossFit Alkmaar - meer informatie over onze sportschool en programma's"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/meer-info-header.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img src="/images/meer-info-header.jpg" alt="CrossFit Alkmaar - meer informatie over onze sportschool en programma's" className="sr-only" width={1200} height={600} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meer info
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Trainen dat je volhoudt: in kleine groepen, met coaches die je kennen.
          </p>
          <button
            onClick={() => { trackCTAClick('gratis_intake_hero', 'meer-info'); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Rooster sectie */}
      <section id="rooster" className="py-16 px-6 bg-gray-100 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Lesrooster</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Trainen bij CrossFit Alkmaar past in bijna elk schema. Van vroege ochtendlessen tot avondtrainingen, er is altijd een moment dat bij jou werkt.
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
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            Het exacte pakket dat bij jou past, bespreken we tijdens je gratis kennismaking. Maandelijks opzegbaar.
          </p>
          <div className="text-center">
            <button
              onClick={() => {
                trackCTAClick('pricing_form_tarieven', 'meer-info');
                openPricingPopup();
              }}
              className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
            >
              Meer informatie
            </button>
          </div>
        </div>
      </section>

            {/* Sportbit Script */}
      <Script
        src="https://cfalkmaar.sportbitapp.nl/cbm/embed/rooster/cdn/"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && (window as any).embed_rooster) {
            (window as any).embed_rooster.init('https://cfalkmaar.sportbitapp.nl/', null);

            // Herstel scroll positie naar hash na Sportbit init
            const scrollToHash = () => {
              const hash = window.location.hash;
              if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                  element.scrollIntoView({ behavior: 'instant' });
                }
              }
            };
            setTimeout(scrollToHash, 300);
            setTimeout(scrollToHash, 600);
            setTimeout(scrollToHash, 1000);
          }
        }}
      />
    </div>
  );
}