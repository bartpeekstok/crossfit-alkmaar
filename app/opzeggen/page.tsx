"use client";

import "../styles/page-opzeggen.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { trackEvent, trackFormSubmit } from "../lib/analytics";

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const IconSwitch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8h13l-3.5-3.5M20 16H7l3.5 3.5" />
  </svg>
);
const IconHeart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20s-7-4.6-7-9.5A3.9 3.9 0 0 1 12 8a3.9 3.9 0 0 1 7 2.5C19 15.4 12 20 12 20z" />
  </svg>
);
const IconChat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12a7.5 7.5 0 0 1-7.5 7.5H8L4 22v-4.4A7.5 7.5 0 0 1 3 12a7.5 7.5 0 0 1 7.5-7.5h3A7.5 7.5 0 0 1 21 12z" />
  </svg>
);

const LIDMAATSCHAPPEN = [
  "Groepslessen, 1x per week",
  "Groepslessen, 10x per maand",
  "Groepslessen, 15x per maand",
  "Groepslessen, onbeperkt",
  "BUILD Small Group Training, 2x per week",
  "BUILD Small Group Training, 3x per week",
  "Personal training",
  "Tieners",
  "Anders of weet ik niet",
];

const REDENEN = [
  "Verhuizing",
  "Te druk of geen tijd meer",
  "Financieel",
  "Blessure of gezondheid",
  "Andere gym gevonden",
  "De gym voldoet niet aan mijn verwachtingen",
  "De coaching past niet bij mij",
  "Andere reden",
];

const SCHAAL = ["Uitstekend", "Goed", "Voldoende", "Matig", "Slecht"];

const FEEDBACK_VRAGEN: { key: string; q: string }[] = [
  { key: "coaching", q: "Het coachingsteam" },
  { key: "hygiene", q: "De hygiëne in de gym" },
  { key: "faciliteit", q: "De gym en het materiaal" },
  { key: "ervaring", q: "Je algehele ervaring" },
];

const WA_LINK = "https://wa.me/31722340560";
const CHECKIN_LINK = "https://ghl.crossfitalkmaar.com/widget/booking/bBgBvZjuga1BPExTMj8b";

export default function OpzeggenPage() {
  const [form, setForm] = useState({
    voornaam: "",
    achternaam: "",
    email: "",
    lidmaatschap: "",
    reden: "",
    opmerkingen: "",
  });
  const [scores, setScores] = useState<Record<string, string>>({});
  const [aanbeveling, setAanbeveling] = useState("");
  const [errs, setErrs] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  useEffect(() => {
    trackEvent("opzeggen_visit");
  }, []);

  function set(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function validate() {
    const v: string[] = [];
    if (form.voornaam.trim().length < 2) v.push("voornaam");
    if (form.achternaam.trim().length < 2) v.push("achternaam");
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(form.email.trim())) v.push("e-mailadres");
    if (!form.lidmaatschap) v.push("lidmaatschap");
    if (!form.reden) v.push("reden");
    return v;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const v = validate();
    setErrs(v);
    if (v.length > 0) return;

    setStatus("sending");
    const honeypot = (e.currentTarget.elements.namedItem("website") as HTMLInputElement)?.value || "";

    try {
      const res = await fetch("/api/opzeggen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          voornaam: form.voornaam.trim(),
          achternaam: form.achternaam.trim(),
          email: form.email.trim(),
          lidmaatschap: form.lidmaatschap,
          reden: form.reden,
          opmerkingen: form.opmerkingen.trim(),
          score_coaching: scores.coaching || "",
          score_hygiene: scores.hygiene || "",
          score_faciliteit: scores.faciliteit || "",
          score_ervaring: scores.ervaring || "",
          aanbeveling,
          website: honeypot,
        }),
      });
      if (!res.ok) throw new Error("webhook failed");
      setStatus("done");
      trackFormSubmit("opzeggen");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-community.jpg" alt="" fetchPriority="high" style={{ objectPosition: "center 35%" }} />
        <div className="scrim" />
        <div className="wrap inner">
          <h1>Opzeggen</h1>
          <p className="lede">Geen drempels. Gewoon opzeggen.</p>
        </div>
      </section>

      {/* OPZEGTERMIJN */}
      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">Hoe je opzegtermijn werkt</h2>
            <p className="sec-sub">
              Je zit bij ons nooit vast aan een lang contract. Er geldt één opzegtermijn van een
              kalendermaand, meer niet.
            </p>
          </div>
          <div className="op-note reveal">
            <p>
              <strong>Opzegtermijn: één kalendermaand.</strong> Je betaalt na je opzegging alleen de
              maand daarna nog, daarna eindigt je lidmaatschap.
            </p>
            <p>
              Zeg je bijvoorbeeld op 10 maart op, dan betaal je april nog en stopt je lidmaatschap op
              30 april. Je kunt die maand gewoon blijven trainen.
            </p>
          </div>
        </div>
      </section>

      {/* ALTERNATIEVEN */}
      <section className="sec sec--white">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">Misschien past iets anders beter</h2>
            <p className="sec-sub">
              Voor je opzegt: soms is het niet de gym, maar de vorm die even niet past. Dit kan
              allemaal, en het kost je niets om ernaar te vragen.
            </p>
          </div>
          <div className="fcards" style={{ marginTop: 34 }}>
            <div className="fcard reveal">
              <div className="ic"><IconSwitch /></div>
              <h3>Een abonnement lager</h3>
              <p>
                Te veel credits die je niet gebruikt? Downgraden regel je zelf in de SportBit app,
                onder &apos;abonnementen&apos;. Zo blijf je trainen tegen een lager bedrag per maand.
              </p>
            </div>
            <div className="fcard reveal" data-d="1">
              <div className="ic"><IconHeart /></div>
              <h3>Blessure of drukke periode</h3>
              <p>
                We pauzeren geen abonnementen, maar we kunnen bijna altijd om een blessure heen
                trainen. En in een drukke periode kun je tijdelijk minder vaak komen. Leg het voor
                aan je coach, dan passen we je programma of je frequentie aan.
              </p>
              <a
                className="op-link"
                href={CHECKIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("opzeggen_checkin_click", { blok: "blessure" })}
              >
                Overleg met je coach &rarr;
              </a>
            </div>
            <div className="fcard reveal" data-d="2">
              <div className="ic"><IconChat /></div>
              <h3>Twijfel over je resultaat</h3>
              <p>
                Sta je stil of ben je je ritme kwijt? Tijdens een check in kijkt je coach met je mee
                naar je trainingen en je doel. Daar komt vaak een oplossing uit waar je zelf niet
                aan dacht.
              </p>
              <a
                className="op-link"
                href={CHECKIN_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("opzeggen_checkin_click", { blok: "resultaat" })}
              >
                Check in inplannen &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOE HET WERKT */}
      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">Zo werkt het</h2>
            <p className="sec-sub">Drie stappen. Je hoeft er verder niets voor te bellen of te mailen.</p>
          </div>
          <div className="op-steps">
            <div className="op-step reveal">
              <span className="num">1</span>
              <div>
                <h3>Vul het formulier in</h3>
                <p>Je gegevens, welk lidmaatschap het betreft en je reden. Klaar in twee minuten.</p>
              </div>
            </div>
            <div className="op-step reveal" data-d="1">
              <span className="num">2</span>
              <div>
                <h3>Wij verwerken je opzegging</h3>
                <p>De ledenservice zet je opzegging in het systeem en rekent je opzegtermijn uit.</p>
              </div>
            </div>
            <div className="op-step reveal" data-d="2">
              <span className="num">3</span>
              <div>
                <h3>Je krijgt een bevestiging</h3>
                <p>Per e-mail, met de datum waarop je lidmaatschap en de incasso stoppen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULIER */}
      <section className="sec sec--white" id="formulier">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">Opzegformulier</h2>
            <p className="sec-sub">Vul in, verstuur, klaar. Je feedback lezen we serieus, ook als je weggaat.</p>
          </div>

          <div className="op-card reveal">
            {status === "done" ? (
              <div className="ok">
                <div className="ic"><Check /></div>
                <h3>Je opzegging is binnen</h3>
                <p>
                  Bedankt {form.voornaam.trim() || "voor je bericht"}. We verwerken je opzegging en
                  sturen je een bevestiging per e-mail met de datum waarop je lidmaatschap stopt. Tot
                  die tijd ben je gewoon welkom bij CrossFit Alkmaar.
                </p>
              </div>
            ) : (
              <form noValidate onSubmit={handleSubmit}>
                {/* DEEL 01 */}
                <div className="op-part">
                  <div className="op-part-head">
                    <span className="no">01</span>
                    <h3>Je gegevens</h3>
                  </div>
                  <div className="op-fields">
                    <div className="op-row">
                      <label className="fld">
                        Voornaam
                        <input
                          type="text"
                          autoComplete="given-name"
                          value={form.voornaam}
                          onChange={(e) => set("voornaam", e.target.value)}
                          className={errs.includes("voornaam") ? "err" : ""}
                        />
                      </label>
                      <label className="fld">
                        Achternaam
                        <input
                          type="text"
                          autoComplete="family-name"
                          value={form.achternaam}
                          onChange={(e) => set("achternaam", e.target.value)}
                          className={errs.includes("achternaam") ? "err" : ""}
                        />
                      </label>
                    </div>
                    <label className="fld">
                      E-mailadres
                      <input
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                        className={errs.includes("e-mailadres") ? "err" : ""}
                      />
                    </label>
                    <label className="fld">
                      Welk lidmaatschap wil je opzeggen?
                      <select
                        value={form.lidmaatschap}
                        onChange={(e) => set("lidmaatschap", e.target.value)}
                        className={errs.includes("lidmaatschap") ? "err" : ""}
                      >
                        <option value="">Maak een keuze</option>
                        {LIDMAATSCHAPPEN.map((l) => (
                          <option key={l} value={l}>{l}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>

                {/* DEEL 02 */}
                <div className="op-part">
                  <div className="op-part-head">
                    <span className="no">02</span>
                    <h3>Je reden</h3>
                  </div>
                  <div className="op-fields">
                    <label className="fld">
                      Wat is de belangrijkste reden van je opzegging?
                      <select
                        value={form.reden}
                        onChange={(e) => set("reden", e.target.value)}
                        className={errs.includes("reden") ? "err" : ""}
                      >
                        <option value="">Maak een keuze</option>
                        {REDENEN.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>

                {/* DEEL 03 */}
                <div className="op-part">
                  <div className="op-part-head">
                    <span className="no">03</span>
                    <h3>Je feedback</h3>
                  </div>
                  {FEEDBACK_VRAGEN.map(({ key, q }) => (
                    <div className="op-scale" key={key}>
                      <span className="q">{q}</span>
                      <div className="op-opts">
                        {SCHAAL.map((s) => (
                          <label key={s}>
                            <input
                              type="radio"
                              name={`score_${key}`}
                              value={s}
                              checked={scores[key] === s}
                              onChange={() => setScores((prev) => ({ ...prev, [key]: s }))}
                            />
                            <span>{s}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="op-scale">
                    <span className="q">Zou je ons aanbevelen aan vrienden?</span>
                    <div className="op-opts">
                      {["Ja", "Misschien", "Nee"].map((a) => (
                        <label key={a}>
                          <input
                            type="radio"
                            name="aanbeveling"
                            value={a}
                            checked={aanbeveling === a}
                            onChange={() => setAanbeveling(a)}
                          />
                          <span>{a}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="op-fields" style={{ marginTop: 18 }}>
                    <label className="fld">
                      Aanvullende opmerkingen (optioneel)
                      <textarea
                        value={form.opmerkingen}
                        onChange={(e) => set("opmerkingen", e.target.value)}
                        placeholder="Wat had beter gekund? Of wat ging juist goed?"
                      />
                    </label>
                  </div>
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

                {errs.length > 0 && <div className="errmsg">Controleer je {errs.join(", ")}.</div>}
                {status === "error" && (
                  <div className="errmsg">
                    Er ging iets mis bij het versturen. Probeer het nog eens, stuur een{" "}
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer">appje via WhatsApp</a>{" "}
                    of mail naar{" "}
                    <a href="mailto:ledenservice@crossfitalkmaar.nl">ledenservice@crossfitalkmaar.nl</a>.
                  </div>
                )}

                <button className="btn btn--primary btn--block btn--lg submit" type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Versturen..." : "Verstuur opzegging"}
                </button>
                <p className="privacy">
                  We gebruiken je gegevens alleen om je opzegging te verwerken en te bevestigen.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec page-cta">
        <div className="wrap">
          <h2>Nog een vraag?</h2>
          <p>
            Over je opzegtermijn, je facturen of je abonnement: op de ledenservice staan de
            antwoorden op de vragen die we het meest krijgen.
          </p>
          <Link className="btn btn--gold btn--lg" href="/faq">Naar de ledenservice</Link>
        </div>
      </section>
    </>
  );
}
