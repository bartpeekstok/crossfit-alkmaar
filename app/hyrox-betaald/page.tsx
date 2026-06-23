"use client";

import { useEffect, useState } from "react";

/**
 * Bedankt-pagina na een HYROX-betaling. Vervangt de losse betaald.html op het
 * betaal-project: nu op ons eigen domein zodat de globale Meta Pixel hier vuurt
 * (PageView automatisch + Purchase hieronder) en alles in dezelfde Pixel/Test
 * Events terechtkomt.
 *
 * Bedrag (centen) + order-id komen mee in de URL (zie api/hyrox-betaling.js in
 * repo hyrox-betaling-backend). eventID = order-id = hetzelfde event_id als het
 * server-side CAPI-event in api/msp-notify.js, zodat Meta dedupliceert.
 * Bij status=geannuleerd tonen we een andere boodschap en vuren we geen Purchase.
 */
export default function HyroxBetaaldPage() {
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const geannuleerd = (p.get("status") || "").indexOf("geannuleerd") === 0;
    if (geannuleerd) {
      setCancelled(true);
      return; // geen Purchase bij een afgebroken betaling
    }

    // Centen uit de URL (eventuele extra MSP-parameter eraf strippen).
    const cents = parseInt(String(p.get("bedrag") || "").replace(/\D.*$/, ""), 10);
    const value = isFinite(cents) && cents > 0 ? cents / 100 : undefined;
    const oid = String(p.get("oid") || "").replace(/[?&].*$/, "");

    const data: Record<string, unknown> = {
      currency: "EUR",
      content_name: "HYROX Simulatie",
      content_category: "Event",
    };
    if (value) data.value = value;
    const opts = oid ? { eventID: oid } : undefined;

    // De globale Pixel laadt 'afterInteractive' en is soms net iets later klaar
    // dan dit effect; daarom kort retry'en tot window.fbq bestaat.
    let tries = 0;
    const fire = () => {
      const fbq = (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq;
      if (typeof fbq === "function") {
        fbq("track", "Purchase", data, opts);
        return;
      }
      if (tries++ < 20) window.setTimeout(fire, 150);
    };
    fire();
  }, []);

  return (
    <div className="hb-wrap">
      <style>{`
        .hb-wrap { --hb-ink:#0B0F1E; --hb-blue:#183090; --hb-gold:#E0A325; --hb-go:#1F9D55; --hb-go-soft:#E4F4EA; --hb-fg2:#3D475F; --hb-chalk:#F4F5F7;
          font-family: var(--font-barlow), system-ui, sans-serif; background: var(--hb-chalk); color: var(--hb-ink);
          display: grid; place-items: center; padding: 24px; min-height: 100vh; box-sizing: border-box; }
        .hb-card { background: #fff; border: 1px solid #CDD2DD; border-radius: 8px; box-shadow: 0 8px 28px rgba(11,15,30,.12);
          max-width: 520px; width: 100%; text-align: center; padding: 48px 40px 44px; }
        .hb-check { width: 84px; height: 84px; border-radius: 50%; background: var(--hb-go-soft); color: var(--hb-go);
          display: grid; place-items: center; margin: 0 auto 24px; }
        .hb-check svg { width: 44px; height: 44px; }
        .hb-eb { font-family: var(--font-oswald), sans-serif; font-weight: 600; font-size: 13px; letter-spacing: .2em;
          text-transform: uppercase; color: var(--hb-blue); margin: 0 0 10px; }
        .hb-card h1 { font-family: var(--font-anton), sans-serif; font-weight: 400; text-transform: uppercase; font-size: 44px;
          line-height: .96; letter-spacing: .01em; margin: 0; }
        .hb-card p { font-size: 17px; line-height: 1.55; color: var(--hb-fg2); margin: 16px auto 0; max-width: 380px; }
        .hb-btn { display: inline-flex; align-items: center; gap: 10px; margin-top: 28px; text-decoration: none;
          font-family: var(--font-oswald), sans-serif; font-weight: 700; text-transform: uppercase; letter-spacing: .08em;
          font-size: 15px; color: var(--hb-ink); background: var(--hb-gold); border-radius: 4px; padding: 14px 28px; }
      `}</style>

      {cancelled ? (
        <div className="hb-card">
          <p className="hb-eb">HYROX Simulatie · CrossFit Alkmaar</p>
          <h1>Betaling niet voltooid</h1>
          <p>
            Je betaling is afgebroken, dus je plek staat nog niet vast. Geen zorgen: open opnieuw je
            betaallink om de inschrijving af te ronden.
          </p>
          <a className="hb-btn" href="https://www.crossfitalkmaar.nl">Terug naar de site</a>
        </div>
      ) : (
        <div className="hb-card">
          <div className="hb-check">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
          </div>
          <p className="hb-eb">HYROX Simulatie · CrossFit Alkmaar</p>
          <h1>Je bent ingeschreven!</h1>
          <p>Je betaling is gelukt en je plek staat vast. Je krijgt een bevestiging per e-mail. Tot in de box! 💪</p>
          <a className="hb-btn" href="https://www.crossfitalkmaar.nl">Terug naar de site</a>
        </div>
      )}
    </div>
  );
}
