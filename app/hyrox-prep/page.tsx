"use client";

import "../styles/page-hyrox-prep.css";
import { useEffect, useState } from "react";
import { trackEvent, trackFormSubmit } from "../lib/analytics";

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const TICKET_OPTIES = ["Ja", "Nee, nog niet", "Ik twijfel nog"];

const PERKS = [
  "24 uur eerder inschrijven dan iedereen die de advertentie ziet",
  "50 euro korting, alleen voor de wachtlijst",
  "Als eerste de volledige programmering en trainingstijden in je inbox",
  "Geen verplichting. Je zegt nu nog niets toe",
];

function validate(data: { firstName: string; lastName: string; email: string; phone: string; ticket: string }) {
  const errs: string[] = [];
  if (!data.firstName || data.firstName.length < 2) errs.push("voornaam");
  if (!data.lastName || data.lastName.length < 2) errs.push("achternaam");
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(data.email)) errs.push("e-mailadres");
  const digits = data.phone.replace(/[^0-9]/g, "");
  if (!data.phone || !(digits.length === 10 || (digits.length === 11 && digits.slice(0, 2) === "31")))
    errs.push("telefoonnummer");
  if (!TICKET_OPTIES.includes(data.ticket)) errs.push("ticket-vraag");
  return errs;
}

export default function HyroxPrepWachtlijstPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ticket, setTicket] = useState("");
  const [errs, setErrs] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    trackEvent("hyrox_prep_wachtlijst_visit", {
      source: params.get("utm_source") || sessionStorage.getItem("utm_source") || "direct",
    });
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const data = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      ticket,
    };
    const v = validate(data);
    setErrs(v);
    if (v.length > 0) return;

    setStatus("sending");
    const honeypot = (e.currentTarget.elements.namedItem("website") as HTMLInputElement)?.value || "";
    const payload = {
      ...data,
      website: honeypot,
      utm_source: sessionStorage.getItem("utm_source") || "",
      utm_medium: sessionStorage.getItem("utm_medium") || "",
      utm_campaign: sessionStorage.getItem("utm_campaign") || "",
    };

    try {
      const res = await fetch("/api/hyrox-prep", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("webhook failed");
      setStatus("done");
      trackFormSubmit("hyrox_prep_wachtlijst");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-hyrox.jpg" alt="" fetchPriority="high" />
        <div className="scrim" />
        <div className="wrap inner">
          <h1>HYROX Prep Alkmaar. Wachtlijst open.</h1>
          <p className="lede">
            Op 26 tot en met 30 november is HYROX Utrecht. Wij draaien daar een 8 weken durend
            voorbereidingsprogramma naartoe, van 3 oktober tot en met 24 november. Zestien plekken.
            Inschrijving opent 1 september.
          </p>
        </div>
      </section>

      {/* CONTENT + FORMULIER */}
      <section className="sec sec--ivoor">
        <div className="wrap hpw-grid">
          <div className="hpw-copy">
            <h2 className="sec-title">Waarom een wachtlijst</h2>
            <p className="body">
              Zestien plekken vullen zich sneller dan we open kunnen houden. Wie op de wachtlijst
              staat, krijgt 24 uur voorsprong op de rest en betaalt 199 euro in plaats van 249.
            </p>

            <h3>Wat je krijgt als je je nu aanmeldt</h3>
            <ul className="hpw-perks">
              {PERKS.map((p) => (
                <li key={p}><Check />{p}</li>
              ))}
            </ul>

            <h3>Wat het programma inhoudt, in het kort</h3>
            <p className="body">
              Twee trainingen per week. Dinsdagavond kracht en stationtechniek, zaterdagochtend
              compromised running en racesimulaties. Maximaal zestien deelnemers, dus de coach ziet
              daadwerkelijk wat jij doet. Je hoeft geen lid te zijn en geen CrossFit-ervaring te hebben.
            </p>
          </div>

          <div className="hpw-card">
            {status === "done" ? (
              <div className="ok">
                <div className="ic">
                  <Check />
                </div>
                <h3>Je staat op de lijst, {firstName.trim().split(/\s+/)[0] || "top"}!</h3>
                <p>
                  Je hebt zojuist een bevestigingsmail van ons ontvangen. Zie je hem niet? Check
                  dan even je spamfolder, daar belanden onze mails nog wel eens in.
                </p>
                <p>
                  Verder hoor je als eerste van ons zodra de inschrijving opent. Check je inbox
                  rond 1 september, dan krijg jij 24 uur voorsprong en de wachtlijstprijs van
                  199 euro.
                </p>
              </div>
            ) : (
              <>
                <h3>Zet mij op de wachtlijst</h3>
                <p className="sub">Vrijblijvend. Je krijgt 24 uur voorsprong en 50 euro korting.</p>
                <form noValidate onSubmit={handleSubmit}>
                  <div className="row2">
                    <label>
                      Voornaam
                      <input
                        name="firstName"
                        type="text"
                        required
                        autoComplete="given-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className={errs.includes("voornaam") ? "err" : ""}
                      />
                    </label>
                    <label>
                      Achternaam
                      <input
                        name="lastName"
                        type="text"
                        required
                        autoComplete="family-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className={errs.includes("achternaam") ? "err" : ""}
                      />
                    </label>
                  </div>
                  <label>
                    E-mail
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={errs.includes("e-mailadres") ? "err" : ""}
                    />
                  </label>
                  <label>
                    Telefoonnummer
                    <input
                      name="phone"
                      type="tel"
                      required
                      inputMode="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={errs.includes("telefoonnummer") ? "err" : ""}
                    />
                  </label>
                  <label>
                    Heb je al een HYROX-ticket?
                    <select
                      name="ticket"
                      required
                      value={ticket}
                      onChange={(e) => setTicket(e.target.value)}
                      className={errs.includes("ticket-vraag") ? "err" : ""}
                    >
                      <option value="" disabled>Maak een keuze</option>
                      {TICKET_OPTIES.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </label>
                  {/* honeypot tegen spam, onzichtbaar voor mensen */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-9999px", height: 0, width: 0, opacity: 0 }}
                  />
                  {errs.length > 0 && <div className="errmsg">Controleer je {errs.join(", ")}.</div>}
                  {status === "error" && (
                    <div className="errmsg">
                      Er ging iets mis bij het versturen. Probeer het nog eens, of stuur ons een{" "}
                      <a href="https://wa.me/31722340560" target="_blank" rel="noopener noreferrer">
                        appje via WhatsApp
                      </a>.
                    </div>
                  )}
                  <button className="btn btn--primary btn--block submit" type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Versturen..." : "Zet mij op de wachtlijst"}
                  </button>
                  <p className="privacy">
                    We gebruiken je gegevens alleen voor dit programma. Geen nieuwsbrief, tenzij je
                    daar zelf om vraagt.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
