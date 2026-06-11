"use client";

import "../styles/page-welkom-terug.css";
import { useEffect, useState } from "react";
import { trackEvent, trackFormSubmit } from "../lib/analytics";

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

function validate(data: { name: string; email: string; phone: string }) {
  const errs: string[] = [];
  if (!data.name || data.name.length < 2) errs.push("naam");
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(data.email)) errs.push("e-mailadres");
  const digits = data.phone.replace(/[^0-9]/g, "");
  if (!data.phone || !(digits.length === 10 || (digits.length === 11 && digits.slice(0, 2) === "31")))
    errs.push("telefoonnummer");
  return errs;
}

export default function WelkomTerugPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errs, setErrs] = useState<string[]>([]);
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

    const data = { name: name.trim(), email: email.trim(), phone: phone.trim() };
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

  const firstName = name.trim().split(/\s+/)[0] || "tot snel";

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/photo-community.webp" alt="" fetchPriority="high" style={{ objectPosition: "center 10%" }} />
        <div className="scrim" />
        <div className="wrap inner">
          <h1>Welkom terug!</h1>
          <p className="lede">
            Leuk dat je de kaart hebt gescand. Kom een week gratis meetrainen en pak het ritme weer op.
          </p>
        </div>
      </section>

      {/* CONTENT + FORMULIER */}
      <section className="sec sec--ivoor">
        <div className="wrap wb-grid">
          <div className="wb-copy">
            <h2 className="sec-title">Een week gratis meetrainen</h2>
            <p className="body">
              Je weet hoe het hier werkt en hoe goed trainen voelt. Of je nu een paar maanden of een
              paar jaar weg bent geweest: de deur staat open en je stapt gewoon weer in op jouw niveau.
            </p>
            <div className="wb-steps">
              <div className="wb-step">
                <span className="num">1</span>
                <p><strong>Vul het formulier in.</strong> Meer dan je naam, e-mail en nummer hebben we niet nodig.</p>
              </div>
              <div className="wb-step">
                <span className="num">2</span>
                <p><strong>We nemen snel contact op.</strong> We bellen of appen je om je gratis week in te plannen.</p>
              </div>
              <div className="wb-step">
                <span className="num">3</span>
                <p><strong>Train een week gratis mee.</strong> Gewoon weer lekker sporten, zonder verplichtingen.</p>
              </div>
            </div>
            <div className="wb-trust">
              <span><Check />Geen verplichtingen</span>
              <span><Check />Instappen op jouw niveau</span>
              <span><Check />Je kent de coaches al</span>
            </div>
          </div>
          <div className="wb-card">
            {status === "done" ? (
              <div className="ok">
                <div className="ic">
                  <Check />
                </div>
                <h3>Top, {firstName}!</h3>
                <p>
                  We hebben je gegevens ontvangen en nemen snel contact met je op om je gratis week
                  in te plannen. Tot snel op de mat!
                </p>
              </div>
            ) : (
              <>
                <h3>Ja, ik kom een week gratis trainen</h3>
                <p className="sub">Laat je gegevens achter, dan bellen of appen we je snel.</p>
                <form noValidate onSubmit={handleSubmit}>
                  <label>
                    Naam
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Voornaam Achternaam"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={errs.includes("naam") ? "err" : ""}
                    />
                  </label>
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
                      <a href="https://wa.me/31640124097" target="_blank" rel="noopener noreferrer">
                        appje via WhatsApp
                      </a>.
                    </div>
                  )}
                  <button className="btn btn--primary btn--block submit" type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Versturen..." : "Verstuur"}
                  </button>
                  <p className="privacy">
                    We gebruiken je gegevens alleen om contact met je op te nemen over je gratis week.
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
