"use client";

import { useEffect, useMemo, useState } from "react";
import { useLeadModal } from "./LeadModalContext";

const WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/elOOWDMoCEHJO4WhphRj/webhook-trigger/0b254396-9523-44b0-a59c-5c79dadd41b1";

type Variant = "kennismaking" | "tarieven" | "kickstart";

const VARIANTS: Record<
  Variant,
  { h: string; s: string; ok: string; redirect: string; dates?: boolean }
> = {
  kennismaking: {
    h: "Plan je gratis kennismaking",
    s: "Laat je gegevens achter, dan bellen we je binnen één werkdag om je kennismaking in te plannen.",
    ok: "We hebben je aanvraag binnen en nemen binnen één werkdag contact met je op! Op de volgende pagina kun je alvast zelf je gratis kennismaking inplannen.",
    redirect: "/free-intro",
  },
  tarieven: {
    h: "Meer informatie",
    s: "Laat je gegevens achter, we nemen snel contact met je op.",
    ok: "We hebben je aanvraag binnen en nemen binnen één werkdag contact met je op! Op de volgende pagina kun je alvast zelf je gratis kennismaking inplannen.",
    redirect: "/free-intro",
  },
  kickstart: {
    h: "28 Day Kickstart",
    s: "",
    dates: true,
    ok: "We hebben je aanvraag binnen en nemen binnen één werkdag contact met je op! Op de volgende pagina kun je alvast zelf je gratis kennismaking inplannen.",
    redirect: "/free-intro",
  },
};

const M = [
  "januari",
  "februari",
  "maart",
  "april",
  "mei",
  "juni",
  "juli",
  "augustus",
  "september",
  "oktober",
  "november",
  "december",
];

function getKickstarts() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const next = new Date(2026, 5, 8);
  while (next <= today) next.setDate(next.getDate() + 28);
  const second = new Date(next);
  second.setDate(second.getDate() + 28);
  const msd = 86400000;
  const plek = (d: number) => {
    if (d < 3) return "vol";
    if (d < 7) return 1;
    if (d < 14) return 2;
    if (d < 21) return 3;
    if (d < 28) return 4;
    return 5;
  };
  const fmt = (d: Date) => `${d.getDate()} ${M[d.getMonth()]} ${d.getFullYear()}`;
  return [
    {
      datum: fmt(next),
      plek: plek(Math.round((next.getTime() - today.getTime()) / msd)),
    },
    {
      datum: fmt(second),
      plek: plek(Math.round((second.getTime() - today.getTime()) / msd)),
    },
  ];
}

function validate(data: { name: string; email: string; phone: string }) {
  const errs: string[] = [];
  const LBL = { name: "naam", email: "e-mailadres", phone: "telefoonnummer" };
  if (!data.name || data.name.length < 2) errs.push(LBL.name);
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(data.email))
    errs.push(LBL.email);
  const digits = data.phone.replace(/[^0-9]/g, "");
  if (!data.phone || !(digits.length === 10 || (digits.length === 11 && digits.slice(0, 2) === "31")))
    errs.push(LBL.phone);
  return errs;
}

export default function LeadModal() {
  const { isOpen, variant, source, section, close } = useLeadModal();
  const cfg = VARIANTS[variant];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errs, setErrs] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const dates = useMemo(() => (cfg.dates ? getKickstarts() : []), [cfg.dates, isOpen]); // recompute on open

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setName("");
      setEmail("");
      setPhone("");
      setErrs([]);
      setSubmitted(false);
      setSubmitting(false);
      document.documentElement.classList.add("cfa-modal-open");
    } else {
      document.documentElement.classList.remove("cfa-modal-open");
    }
    return () => {
      document.documentElement.classList.remove("cfa-modal-open");
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { name: name.trim(), email: email.trim(), phone: phone.trim() };
    const v = validate(data);
    setErrs(v);
    if (v.length > 0) return;

    setSubmitting(true);
    const parts = data.name.split(/\s+/);
    const first_name = parts.shift() || "";
    const last_name = parts.join(" ");
    const payload: Record<string, string> = {
      ...data,
      first_name,
      last_name,
      full_name: data.name,
      cta: source,
      cta_sectie: section,
      formulier: variant,
      page: typeof window !== "undefined" ? window.location.pathname.replace(/^\//, "") || "home" : "home",
      url: typeof window !== "undefined" ? window.location.href : "",
    };
    const body = Object.keys(payload)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(payload[k]))
      .join("&");
    try {
      await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
    } catch {
      // swallow, redirect anyway
    }
    setSubmitted(true);
    if (cfg.redirect) {
      setTimeout(() => {
        window.location.href = cfg.redirect;
      }, 1600);
    }
  };

  const firstName = name.split(/\s+/)[0] || "tot snel";

  return (
    <div id="cfa-modal" className="open" role="dialog" aria-modal="true">
      <div className="ovl" onClick={close} aria-hidden="true" />
      <div className="box">
        <button className="close" onClick={close} aria-label="Sluiten">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0B0F1E"
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
        <div className="content">
          {!submitted ? (
            <>
              <h3>{cfg.h}</h3>
              {cfg.s && <p className="sub">{cfg.s}</p>}
              {cfg.dates && (
                <div className="kk-dates">
                  {dates.map((d, i) => (
                    <div key={i} className="kk-row">
                      <span className="dt">{d.datum}</span>
                      {d.plek === "vol" ? (
                        <span className="vol">VOL</span>
                      ) : (
                        <span className={(d.plek as number) <= 2 ? "laag" : "ok"}>
                          {d.plek} {d.plek === 1 ? "plek" : "plekken"} vrij
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
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
                {errs.length > 0 && (
                  <div className="errmsg" style={{ display: "block" }}>
                    Controleer je {errs.join(", ")}.
                  </div>
                )}
                <button
                  className="btn btn--primary btn--block submit"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? "Versturen…" : "Verstuur"}
                </button>
              </form>
            </>
          ) : (
            <div className="ok">
              <div className="ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>Top, {firstName}!</h3>
              <p className="sub" style={{ margin: 0 }}>
                {cfg.ok}
              </p>
              <a
                href="tel:+31722340560"
                style={{
                  fontFamily: "var(--font-head)",
                  fontWeight: 600,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "var(--cfa-blue)",
                  textDecoration: "none",
                  fontSize: 14,
                }}
              >
                Liever direct bellen? 072-2340560
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
