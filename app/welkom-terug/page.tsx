"use client";

import "../styles/page-welkom-terug.css";
import { useEffect, useState } from "react";
import { trackEvent, trackFormSubmit } from "../lib/analytics";

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function WelkomTerugPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    trackEvent("welkom_terug_visit", {
      source: params.get("utm_source") || sessionStorage.getItem("utm_source") || "direct",
    });
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      website: String(data.get("website") || ""), // honeypot
      utm_source: sessionStorage.getItem("utm_source") || "",
      utm_medium: sessionStorage.getItem("utm_medium") || "",
      utm_campaign: sessionStorage.getItem("utm_campaign") || "",
    };

    try {
      const res = await fetch("/api/welkom-terug", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("webhook failed");
      setStatus("done");
      trackFormSubmit("welkom_terug");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="wb">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="bg" src="/redesign/assets/photo-community.webp" alt="" />
      <div className="scrim" />
      <div className="wrap grid">
        <div className="copy">
          <p className="eyebrow">Voor oud-leden</p>
          <h1>Welkom terug!</h1>
          <p className="lede">
            Leuk dat je de kaart hebt gescand. Je weet hoe het hier werkt en hoe goed trainen voelt.
            Kom een week gratis meedoen en pak het ritme weer op. Vul je gegevens in, dan nemen we
            snel persoonlijk contact met je op.
          </p>
          <div className="trust">
            <span><Check />Een week gratis trainen</span>
            <span><Check />Geen verplichtingen</span>
            <span><Check />Instappen op jouw niveau</span>
          </div>
        </div>
        <div className="wb-card">
          {status === "done" ? (
            <div className="wb-done">
              <div className="ring">
                <Check />
              </div>
              <h2>Gelukt!</h2>
              <p>
                We hebben je gegevens ontvangen en nemen snel contact met je op om je gratis week
                in te plannen. Tot snel op de mat!
              </p>
            </div>
          ) : (
            <>
              <h2>Een week gratis meetrainen</h2>
              <p className="sub">Laat je gegevens achter, dan bellen of appen we je snel.</p>
              <form onSubmit={handleSubmit}>
                <div className="wb-field">
                  <label htmlFor="wb-name">Naam</label>
                  <input id="wb-name" name="name" type="text" autoComplete="name" required />
                </div>
                <div className="wb-field">
                  <label htmlFor="wb-email">E-mailadres</label>
                  <input id="wb-email" name="email" type="email" autoComplete="email" required />
                </div>
                <div className="wb-field">
                  <label htmlFor="wb-phone">Telefoonnummer</label>
                  <input id="wb-phone" name="phone" type="tel" autoComplete="tel" required />
                </div>
                {/* honeypot tegen spam, onzichtbaar voor mensen */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", height: 0, width: 0, opacity: 0 }}
                />
                <button type="submit" className="btn btn--primary btn--block" disabled={status === "sending"}>
                  {status === "sending" ? "Versturen..." : "Ja, ik kom een week gratis trainen"}
                </button>
                {status === "error" && (
                  <p className="wb-error">
                    Er ging iets mis bij het versturen. Probeer het nog eens, of stuur ons een{" "}
                    <a href="https://wa.me/31640124097" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
                      appje via WhatsApp
                    </a>.
                  </p>
                )}
                <p className="wb-privacy">
                  We gebruiken je gegevens alleen om contact met je op te nemen over je gratis
                  week. Niets meer, niets minder.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
