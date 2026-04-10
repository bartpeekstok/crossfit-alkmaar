"use client";

import { useEffect } from "react";
import Script from "next/script";
import { trackEvent, trackFormSubmit } from "../lib/analytics";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";

export default function IntakePage() {
  useEffect(() => {
    // Track free-intro visit with source info
    const referrer = document.referrer;
    const isFromGHL = referrer.includes("ghl.crossfitalkmaar.com");
    const isFromSite = referrer.includes("crossfitalkmaar.com") && !isFromGHL;
    const isFormRedirect = isFromGHL || isFromSite;
    const source = isFromGHL ? "ghl_form" : isFromSite ? "website_form" : referrer ? "external" : "direct";
    trackEvent("free_intro_visit", { referrer_source: source, referrer_url: referrer || "direct" });

    // Track form submission with the specific form name from the popup that was open
    if (isFormRedirect) {
      const pendingForm = sessionStorage.getItem('pending_form');
      if (pendingForm) {
        trackFormSubmit(pendingForm);
        sessionStorage.removeItem('pending_form');
      }
    }
  }, []);

  return (
    <div
      className="min-h-screen"
      role="img"
      aria-label="Gratis kennismaking bij CrossFit Alkmaar - boek een gesprek met een coach"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/CFA-juni-03-community.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <img src="/images/CFA-juni-03-community.jpg" alt="Gratis kennismaking bij CrossFit Alkmaar - boek een gesprek met een coach" className="sr-only" width={1200} height={600} />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left side - Text and Video */}
          <div className="text-white">
            <p className="text-sm uppercase tracking-widest text-gray-300 mb-4">
              Praat met één van onze coaches
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase">
              Plan je gratis kennismaking
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Bespreek je doelen met één van onze coaches. We horen graag alles over je ervaring, uitdagingen en je sterke punten. Samen maken we een plan dat bij jou past.
            </p>
            
            {/* YouTube Video */}
            <div className="rounded-lg overflow-hidden shadow-2xl aspect-video max-w-xl">
              <TrackedYouTubeEmbed videoId="-3KF7VGVzdk" title="Inside the Box: CrossFit Alkmaar" />
            </div>
          </div>

          {/* Right side - Booking Widget */}
          <div className="bg-white rounded-lg shadow-2xl p-2 max-w-md">
            <Script
              src="https://ghl.crossfitalkmaar.com/js/form_embed.js"
              strategy="afterInteractive"
            />
            <iframe
              src="https://ghl.crossfitalkmaar.com/widget/booking/h9ZPe6IvVFloL7y9V5Rx"
              className="w-full min-h-[700px] border-0"
              title="Plan je gratis kennismaking"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
}