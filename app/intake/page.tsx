"use client";

import Script from "next/script";

export default function IntakePage() {
  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/hero.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left side - Text and Video */}
          <div className="text-white">
            <p className="text-sm uppercase tracking-widest text-gray-300 mb-4">
              Praat met één van onze coaches
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase">
              Boek een gratis intake
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Bespreek je doelen met één van onze coaches. We horen graag alles over je ervaring, uitdagingen en je sterke punten. Samen maken we een plan dat bij jou past.
            </p>
            
            {/* YouTube Video */}
            <div className="rounded-lg overflow-hidden shadow-2xl aspect-video max-w-xl">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/-3KF7VGVzdk" 
                title="Inside the Box: CrossFit Alkmaar" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right side - Booking Widget */}
          <div className="bg-white rounded-lg shadow-2xl p-2 max-w-md">
            <Script 
              src="https://kilo.gymleadmachine.com/js/form_embed.js" 
              strategy="lazyOnload"
            />
            <iframe 
              src="https://kilo.gymleadmachine.com/widget/booking/FWSWLWpfUeNwh536AGL0"
              className="w-full min-h-[500px] border-0"
              scrolling="no"
              title="Boek een gratis intake"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}