"use client";

import Script from "next/script";
import { useLeadModal } from "../components/redesign/LeadModalContext";

export default function MeerInfoPage() {
  const { open } = useLeadModal();

  const openModal = (source: string, section: string, variant: "kennismaking" | "tarieven" = "kennismaking") => (e: React.MouseEvent) => {
    e.preventDefault();
    open({ source, section, variant });
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cfalkmaar.sportbitapp.nl/cbm/css/embed/rooster/rooster.css"
        type="text/css"
      />
      <style>{`
        .rooster-embed { background: #fff; border: 1px solid var(--border); border-radius: var(--r-lg); box-shadow: var(--sh-1); padding: clamp(14px,2vw,22px); margin-top: 12px; }
        .rooster-embed #sportbit-rooster { min-height: 80px; }
        .tarief-note { text-align: center; margin-top: 26px; }
      `}</style>

      {/* HERO */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-community.jpg" alt="" style={{ objectPosition: "center 30%" }} />
        <div className="scrim" />
        <div className="wrap inner">
          <p className="eyebrow">Meer info</p>
          <h1>Meer info</h1>
          <p className="lede">Trainen dat je volhoudt: in kleine groepen, met coaches die je kennen.</p>
          <div className="cta-row">
            <a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan je gratis kennismaking", "Hero")}>Plan je gratis kennismaking</a>
          </div>
        </div>
      </section>

      {/* ROOSTER */}
      <section className="sec sec--ivoor" id="rooster" style={{ scrollMarginTop: 90 }}>
        <div className="wrap">
          <div className="center">
            <h2 className="sec-title">Lesrooster</h2>
            <p className="sec-sub">Trainen bij <a href="/">CrossFit Alkmaar</a> past in bijna elk schema. Van vroege ochtendlessen tot avondtrainingen, er is altijd een moment dat bij jou werkt.</p>
          </div>
          <div className="rooster-embed">
            <div id="sportbit-rooster">&nbsp;</div>
          </div>
        </div>
      </section>

      {/* TARIEVEN */}
      <section className="sec sec--white" id="tarieven" style={{ scrollMarginTop: 90 }}>
        <div className="wrap">
          <div className="center">
            <h2 className="sec-title">Tarieven</h2>
            <p className="sec-sub">Al onze abonnementen zijn maandelijks opzegbaar. Wij zorgen dat je blijft omdat je dat wilt, niet omdat je vast zit aan een lang contract.</p>
          </div>
          <div className="tarief-note">
            <a className="btn btn--primary btn--lg" href="#" onClick={openModal("Tarieven — Meer informatie", "Tarieven", "tarieven")}>Meer informatie</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="sec page-cta"
        style={{
          ["--cta-photo" as string]: "url('/redesign/assets/header-community.jpg')",
          backgroundPosition: "center 30%",
        } as React.CSSProperties}
      >
        <div className="wrap">
          <h2>Klaar om te starten?</h2>
          <p>Kom vrijblijvend langs. Geen verplichtingen.</p>
          <a className="btn btn--gold btn--lg" href="#" onClick={openModal("Plan je kennismaking", "Klaar om te starten")}>Plan je kennismaking</a>
        </div>
      </section>

      <Script
        src="https://cfalkmaar.sportbitapp.nl/cbm/embed/rooster/cdn/"
        strategy="afterInteractive"
        onLoad={() => {
          setTimeout(() => {
            if (typeof window !== "undefined" && (window as unknown as { embed_rooster?: { init: (url: string, n: null) => void } }).embed_rooster) {
              try {
                (window as unknown as { embed_rooster: { init: (url: string, n: null) => void } }).embed_rooster.init(
                  "https://cfalkmaar.sportbitapp.nl/",
                  null
                );
              } catch {}
            }
          }, 400);
        }}
      />
    </>
  );
}
