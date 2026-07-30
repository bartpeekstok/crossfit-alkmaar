"use client";

import { useEffect } from "react";
import Link from "next/link";
import { trackEvent } from "../lib/analytics";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";

export default function IntakeGeboektPage() {
  useEffect(() => {
    // Conversie-event: GHL redirect boekers na een geslaagde boeking
    // naar deze pagina (GA4 key event + eigen dashboard-tracking).
    trackEvent("intake_booked", { page_location: "intake-geboekt" });
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-community.jpg" alt="" style={{ objectPosition: "center 35%" }} />
        <div className="scrim" />
        <div className="wrap inner">
          <h1>Je gratis kennismaking is geboekt!</h1>
          <p className="lede">
            We sturen je een bevestiging via e-mail en WhatsApp. Tot snel bij CrossFit Alkmaar!
          </p>
          <div style={{ marginTop: 22 }}>
            <Link href="/" className="btn btn--primary btn--lg">Terug naar home</Link>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">Zo ziet je kennismaking eruit</h2>
            <p className="sec-sub">
              Alvast een kijkje: in deze video zie je hoe een gratis kennismaking bij ons verloopt.
            </p>
          </div>
          <div
            className="reveal"
            style={{
              maxWidth: 860,
              margin: "28px auto 0",
              aspectRatio: "16 / 9",
              borderRadius: "var(--r-lg)",
              overflow: "hidden",
              boxShadow: "var(--sh-3)",
              background: "#000",
            }}
          >
            <TrackedYouTubeEmbed videoId="-3KF7VGVzdk" title="Gratis kennismaking bij CrossFit Alkmaar" />
          </div>
        </div>
      </section>

      {/* PRAKTISCH */}
      <section className="sec">
        <div className="wrap center reveal">
          <h2 className="sec-title">Waar we je verwachten</h2>
          <p className="sec-sub">
            Phoenixstraat 33, 1812 PP Alkmaar. Parkeren is gratis, voor de deur.
          </p>
          <div style={{ marginTop: 16 }}>
            <a
              className="btn btn--ghost"
              href="https://maps.google.com/?q=Phoenixstraat+33+1812+PP+Alkmaar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bekijk op Google Maps →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
