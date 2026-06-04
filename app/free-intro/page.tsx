"use client";

import "../styles/page-free-intro.css";
import Script from "next/script";
import { useEffect } from "react";
import { trackEvent, trackFormSubmit } from "../lib/analytics";
import YouTubeEmbed from "../components/redesign/YouTubeEmbed";

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function FreeIntroPage() {
  useEffect(() => {
    const referrer = document.referrer;
    const isFromGHL = referrer.includes("ghl.crossfitalkmaar.com");
    const isFromSite = referrer.includes("crossfitalkmaar.com") && !isFromGHL;
    const isFormRedirect = isFromGHL || isFromSite;
    const source = isFromGHL
      ? "ghl_form"
      : isFromSite
      ? "website_form"
      : referrer
      ? "external"
      : "direct";
    trackEvent("free_intro_visit", { referrer_source: source, referrer_url: referrer || "direct" });

    if (isFormRedirect) {
      const pendingForm = sessionStorage.getItem("pending_form");
      if (pendingForm) {
        trackFormSubmit(pendingForm);
        sessionStorage.removeItem("pending_form");
      }
    }
  }, []);

  return (
    <section className="book">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="bg" src="/redesign/assets/photo-community.webp" alt="" />
      <div className="scrim" />
      <div className="wrap grid">
        <div className="copy">
          <p className="eyebrow">Praat met één van onze coaches</p>
          <h1>Plan je gratis kennismaking</h1>
          <p className="lede">
            Bespreek je doelen met één van onze coaches. We horen graag alles over je ervaring, uitdagingen en je sterke punten. Samen maken we een plan dat bij jou past.
          </p>
          <div className="video">
            <YouTubeEmbed videoId="-3KF7VGVzdk" alt="Inside the Box: CrossFit Alkmaar" />
          </div>
          <div className="trust">
            <span><Check />Geen verplichtingen</span>
            <span><Check />Voor alle niveaus</span>
            <span><Check />Maandelijks opzegbaar</span>
          </div>
        </div>
        <div className="widget">
          <Script src="https://ghl.crossfitalkmaar.com/js/form_embed.js" strategy="afterInteractive" />
          <iframe
            src="https://ghl.crossfitalkmaar.com/widget/booking/h9ZPe6IvVFloL7y9V5Rx"
            title="Plan je gratis kennismaking"
            scrolling="no"
          />
        </div>
      </div>
    </section>
  );
}
