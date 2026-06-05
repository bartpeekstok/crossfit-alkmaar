"use client";

// ============================================================================
//  HyroxRegistration - inschrijfformulier + MultiSafepay-betaling (INLINE)
//  Voor de HYROX Simulatie-pagina's op de CrossFit Alkmaar website.
//  Vervangt de GoHighLevel-formulierwidget.
//
//  Gedrag: de "Schrijf je in"-knop opent het formulier NIET als popup, maar
//  vouwt het inline OPEN op z'n eigen plek in de pagina (met animatie +
//  scrollt ernaartoe). Na invullen → lead naar GHL + betaling via de Vercel-backend.
//
//  Werkt out-of-the-box: HYROX-webhook en live betaal-endpoint staan al
//  ingevuld. Wil je iets overschrijven, geef het mee als prop.
//
//  Zelfstandig component: je kunt het zo vaak op de pagina plaatsen als je wilt
//  (hero, tussenblok, slot-CTA). Elke knop vouwt het formulier op z'n eigen plek
//  open. Gewoon op elke CTA-plek <HyroxRegistration eventDate={dateLong} /> zetten.
// ============================================================================

import { useRef, useState } from "react";

type Props = {
  eventDate: string;            // vaste datum van deze event-pagina
  label?: string;               // knoptekst (default "Schrijf je in")
  className?: string;           // knop-classes (default "btn btn--gold btn--lg")
  leadWebhook?: string;         // GHL inbound webhook voor lead-capture
  paymentEndpoint?: string;     // backend-URL; leeg = formulier zonder betaling
};

const DIVISIES = [
  "Women OPEN", "Women PRO", "Men OPEN", "Men PRO",
  "Doubles women OPEN", "Doubles women PRO", "Doubles men PRO",
  "Doubles men OPEN", "Doubles mixed",
];
const EINDTIJDEN = [
  "Sneller dan 01:00:00", "Tussen 01:00:00 en 01:15:00", "Tussen 01:15:00 en 01:30:00",
  "Tussen 01:30:00 en 01:45:00", "Langer dan 01:45:00",
];
const DEFAULT_LEAD_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/elOOWDMoCEHJO4WhphRj/webhook-trigger/17e08f33-015b-4580-9484-2063fcee6558";
const DEFAULT_PAYMENT_ENDPOINT =
  "https://hyrox-betaling-backend.vercel.app/api/hyrox-betaling";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const emptyVals = { naam: "", email: "", tel: "", divisie: "", naam2: "", email2: "", tel2: "", eindtijd: "" };

function scrollToEl(el: HTMLElement | null) {
  if (!el) return;
  const top = window.scrollY + el.getBoundingClientRect().top - 24;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

// ── Zelfstandig inline inschrijf-component (plaats op elke CTA-plek) ─────────
export default function HyroxRegistration({
  eventDate,
  label = "Schrijf je in",
  className = "btn btn--gold btn--lg",
  leadWebhook = DEFAULT_LEAD_WEBHOOK,
  paymentEndpoint = DEFAULT_PAYMENT_ENDPOINT,
}: Props) {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<"form" | "paying" | "done">("form");
  const [submitting, setSubmitting] = useState(false);
  const [vals, setVals] = useState({ ...emptyVals });
  const [errs, setErrs] = useState<Record<string, string>>({});
  const [formErr, setFormErr] = useState("");
  const [payUrl, setPayUrl] = useState("");

  const sectionRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const isDuo = /doubles/i.test(vals.divisie);
  const firstName = vals.naam.trim().split(/\s+/)[0] || "";

  function openForm() {
    setView("form"); setErrs({}); setFormErr(""); setOpen(true);
    setTimeout(() => { scrollToEl(sectionRef.current); firstFieldRef.current?.focus({ preventScroll: true }); }, 70);
  }

  const set = (k: string) => (v: string) => {
    setVals((p) => ({ ...p, [k]: v }));
    setErrs((p) => ({ ...p, [k]: "" }));
  };

  function collapse() { setOpen(false); setVals({ ...emptyVals }); setView("form"); }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setFormErr("");
    const next: Record<string, string> = {};
    if (!vals.naam.trim()) next.naam = "Vul de naam in.";
    if (!EMAIL_RE.test(vals.email.trim())) next.email = "Vul een geldig e-mailadres in.";
    if (vals.tel.replace(/\D/g, "").length < 9) next.tel = "Vul een geldig telefoonnummer in.";
    if (!vals.divisie) next.divisie = "Kies je divisie.";
    if (isDuo) {
      if (!vals.naam2.trim()) next.naam2 = "Vul de naam van deelnemer 2 in.";
      if (!EMAIL_RE.test(vals.email2.trim())) next.email2 = "Vul een geldig e-mailadres in.";
      if (vals.tel2.replace(/\D/g, "").length < 9) next.tel2 = "Vul een geldig telefoonnummer in.";
    }
    if (!vals.eindtijd) next.eindtijd = "Kies je geschatte eindtijd.";
    setErrs(next);
    if (Object.keys(next).length) return;

    setSubmitting(true);
    const parts = vals.naam.trim().split(/\s+/);
    const parts2 = vals.naam2.trim().split(/\s+/);
    const payload = {
      naam: vals.naam.trim(), voornaam: parts[0] || "", achternaam: parts.slice(1).join(" "),
      email: vals.email.trim(), telefoon: vals.tel.trim(),
      divisie: vals.divisie, datum: eventDate,
      type: isDuo ? "duo" : "solo", aantal_deelnemers: isDuo ? 2 : 1,
      naam_deelnemer_2: vals.naam2.trim(),
      voornaam_deelnemer_2: isDuo ? (parts2[0] || "") : "",
      achternaam_deelnemer_2: isDuo ? parts2.slice(1).join(" ") : "",
      email_deelnemer_2: vals.email2.trim(), telefoon_deelnemer_2: vals.tel2.trim(),
      geschatte_eindtijd: vals.eindtijd, evenement: "HYROX Simulatie",
      bron: "Website - HYROX inschrijving",
      pagina: typeof location !== "undefined" ? location.href : "",
    };

    // 1) Lead opslaan in GHL - op de achtergrond (blokkeert de UI niet)
    if (leadWebhook) {
      fetch(leadWebhook, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload), keepalive: true,
      }).catch((err) => console.warn("GHL webhook faalde:", err));
    }

    // 2) Betaling via de backend
    if (paymentEndpoint) {
      try {
        const res = await fetch(paymentEndpoint, {
          method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload),
        });
        const pay = await res.json().catch(() => null);
        if (res.ok && pay && pay.payment_url) {
          window.open(pay.payment_url, "_blank", "noopener");
          setPayUrl(pay.payment_url);
          setView("paying");
          setSubmitting(false);
          setTimeout(() => scrollToEl(sectionRef.current), 50);
          return;
        }
        throw new Error((pay && pay.error) || "Geen betaallink ontvangen");
      } catch (err) {
        console.error("Betaling starten faalde:", err);
        setFormErr("Betaling starten lukte niet. Probeer het opnieuw of reken af aan de balie.");
        setSubmitting(false);
        return;
      }
    }

    setView("done");
    setSubmitting(false);
    setTimeout(() => scrollToEl(sectionRef.current), 50);
  }

  return (
    <div ref={sectionRef} className="hxr-section">
      {!open && (
        <div className="hxr-cta-wrap">
          <button type="button" className={className} onClick={openForm}>{label}</button>
        </div>
      )}

      {open && (
        <div className="hxr-inline-panel" role="region" aria-label="Inschrijven HYROX Simulatie">
          <div className="hxr-head">
            <div className="hxr-head-m" />
            <button className="hxr-close" type="button" aria-label="Sluiten" onClick={collapse}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
            <p className="hxr-eb">HYROX Simulatie</p>
            <h3 className="hxr-title">Schrijf je in</h3>
            <p className="hxr-date">{eventDate}</p>
          </div>

          <div className="hxr-body">
            {view === "form" && (
              <form className="hxr-form" noValidate onSubmit={submit}>
                <Field inputRef={firstFieldRef} id="hxr-naam" label="Naam deelnemer" value={vals.naam} onChange={set("naam")} error={errs.naam} placeholder="Voornaam Achternaam" autoComplete="name" />
                <Field id="hxr-email" label="E-mail deelnemer" type="email" value={vals.email} onChange={set("email")} error={errs.email} placeholder="Lid van CFA? Gebruik je bekende e-mailadres" autoComplete="email" inputMode="email" />
                <Field id="hxr-tel" label="Telefoonnummer deelnemer" type="tel" value={vals.tel} onChange={set("tel")} error={errs.tel} placeholder="06 12 34 56 78" autoComplete="tel" inputMode="tel" />

                <div className={"hxr-fld" + (errs.divisie ? " err" : "")}>
                  <label htmlFor="hxr-divisie">Divisie</label>
                  <select id="hxr-divisie" className={vals.divisie ? "" : "ph"} value={vals.divisie} onChange={(e) => set("divisie")(e.target.value)}>
                    <option value="" disabled hidden>Maak een keuze</option>
                    {DIVISIES.map((d) => <option key={d}>{d}</option>)}
                  </select>
                  {errs.divisie && <span className="hxr-msg">{errs.divisie}</span>}
                </div>

                {isDuo && (
                  <div className="hxr-dz">
                    <div className="hxr-dz-head">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                      Gegevens deelnemer 2
                    </div>
                    <Field id="hxr-naam2" label="Naam deelnemer 2" value={vals.naam2} onChange={set("naam2")} error={errs.naam2} placeholder="Voornaam Achternaam" />
                    <Field id="hxr-email2" label="E-mail deelnemer 2" type="email" value={vals.email2} onChange={set("email2")} error={errs.email2} placeholder="deelnemer2@email.nl" inputMode="email" />
                    <Field id="hxr-tel2" label="Telefoonnummer deelnemer 2" type="tel" value={vals.tel2} onChange={set("tel2")} error={errs.tel2} placeholder="06 12 34 56 78" inputMode="tel" />
                  </div>
                )}

                <div className={"hxr-fld" + (errs.eindtijd ? " err" : "")}>
                  <label htmlFor="hxr-eindtijd">Geschatte eindtijd</label>
                  <select id="hxr-eindtijd" className={vals.eindtijd ? "" : "ph"} value={vals.eindtijd} onChange={(e) => set("eindtijd")(e.target.value)}>
                    <option value="" disabled hidden>Maak een keuze</option>
                    {EINDTIJDEN.map((t) => <option key={t}>{t}</option>)}
                  </select>
                  <span className="hxr-hint">Hiermee bepalen we je starttijd. Geen probleem als je het niet exact weet.</span>
                  {errs.eindtijd && <span className="hxr-msg">{errs.eindtijd}</span>}
                </div>

                {formErr && <div className="hxr-formerr">{formErr}</div>}
                <button className="hxr-submit" type="submit" disabled={submitting}>{submitting ? "BEZIG…" : "Schrijf je in!"}</button>
                <div className="hxr-note">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  <span>Je gegevens blijven privé · plekken zijn beperkt</span>
                </div>
              </form>
            )}

            {view === "paying" && (
              <div className="hxr-state">
                <div className="hxr-ic hxr-ic-blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg></div>
                <h4>Bijna klaar - reken af</h4>
                <p>We hebben het betaalscherm in een <b>nieuw tabblad</b> geopend. Zodra je betaling rond is, is je inschrijving definitief.</p>
                <button type="button" className="hxr-okbtn" onClick={() => payUrl && window.open(payUrl, "_blank", "noopener")}>Betaalscherm opnieuw openen</button>
                <button type="button" className="hxr-textbtn" onClick={collapse}>Sluiten</button>
              </div>
            )}

            {view === "done" && (
              <div className="hxr-state">
                <div className="hxr-ic hxr-ic-green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></div>
                <h4>Je staat erop{firstName ? `, ${firstName}` : ""}!</h4>
                <p>We zien je op {eventDate.toLowerCase()} in de box. Je krijgt nog een bevestiging per e-mail.</p>
                <button type="button" className="hxr-okbtn" onClick={collapse}>Sluiten</button>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{hxrCss}</style>
    </div>
  );
}

function Field({ id, label, value, onChange, error, type = "text", placeholder, autoComplete, inputMode, inputRef }: {
  id: string; label: string; value: string; onChange: (v: string) => void; error?: string;
  type?: string; placeholder?: string; autoComplete?: string; inputMode?: any;
  inputRef?: React.Ref<HTMLInputElement>;
}) {
  return (
    <div className={"hxr-fld" + (error ? " err" : "")}>
      <label htmlFor={id}>{label}</label>
      <input ref={inputRef} id={id} name={id} type={type} value={value} placeholder={placeholder}
        autoComplete={autoComplete} inputMode={inputMode} onChange={(e) => onChange(e.target.value)} />
      {error && <span className="hxr-msg">{error}</span>}
    </div>
  );
}

const hxrCss = `
  .hxr-section { width: 100%; }
  .hxr-cta-wrap { display: flex; justify-content: center; }
  .hxr-inline-panel { max-width: 600px; margin: 0 auto; background: #fff; border: 1px solid var(--border, #CDD2DD); border-radius: var(--r-lg, 6px); box-shadow: var(--sh-2, 0 12px 34px rgba(11,15,30,.14)); overflow: hidden; animation: hxr-reveal .34s cubic-bezier(.2,.7,.3,1) both; }
  @keyframes hxr-reveal { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
  .hxr-head { position: relative; padding: 30px 34px 24px; background: var(--cfa-ink, #0B0F1E); color: #fff; overflow: hidden; }
  .hxr-head-m { position: absolute; inset: 0; pointer-events: none; background: repeating-radial-gradient(circle at 100% 0%, transparent 0 58px, rgba(255,255,255,.08) 58px 60px); }
  .hxr-eb { position: relative; font-family: var(--font-head); font-weight: 600; font-size: 13px; letter-spacing: .2em; text-transform: uppercase; color: var(--hold, #E0A325); margin: 0; }
  .hxr-title { position: relative; font-family: var(--font-display); font-weight: 400; text-transform: uppercase; font-size: 40px; line-height: .95; letter-spacing: .01em; color: #fff; margin: 8px 0 0; }
  .hxr-date { position: relative; font-family: var(--font-body); font-size: 14px; color: rgba(234,237,244,.82); margin: 6px 0 0; }
  .hxr-close { position: absolute; top: 18px; right: 18px; z-index: 2; width: 38px; height: 38px; border: 1px solid rgba(255,255,255,.25); border-radius: var(--r-md, 4px); background: rgba(255,255,255,.06); color: #fff; cursor: pointer; display: grid; place-items: center; }
  .hxr-close:hover { background: rgba(255,255,255,.16); }
  .hxr-close svg { width: 18px; height: 18px; }
  .hxr-body { padding: 26px 34px 32px; }
  .hxr-form { display: flex; flex-direction: column; gap: 16px; }
  .hxr-fld { display: flex; flex-direction: column; gap: 6px; }
  .hxr-fld > label { font-family: var(--font-head); font-weight: 600; font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: var(--fg2, #3D475F); }
  .hxr-fld input, .hxr-fld select { font-family: var(--font-body); font-size: 16px; font-weight: 500; padding: 13px 14px; border-radius: var(--r-md, 4px); outline: none; background: #fff; color: var(--fg1, #0B0F1E); border: 2px solid var(--border-strong, #A8AFC0); transition: border-color .15s, box-shadow .15s; width: 100%; }
  .hxr-fld select { appearance: none; -webkit-appearance: none; padding-right: 42px; cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%235A647C' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; }
  .hxr-fld select.ph { color: var(--fg3, #828BA0); }
  .hxr-fld input:focus, .hxr-fld select:focus { border-color: var(--cfa-blue-bright, #2A48C8); box-shadow: var(--ring, 0 0 0 3px rgba(42,72,200,.35)); }
  .hxr-fld.err input, .hxr-fld.err select { border-color: var(--stop, #D23A36); }
  .hxr-msg { font-family: var(--font-body); font-size: 13px; font-weight: 500; color: var(--stop, #D23A36); }
  .hxr-hint { font-family: var(--font-body); font-size: 12.5px; line-height: 1.4; color: var(--fg3, #828BA0); }
  .hxr-dz { display: flex; flex-direction: column; gap: 16px; padding-top: 18px; border-top: 1px dashed var(--border-strong, #A8AFC0); animation: hxr-dz .28s cubic-bezier(.2,.7,.3,1) both; }
  @keyframes hxr-dz { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: none; } }
  .hxr-dz-head { display: flex; align-items: center; gap: 9px; font-family: var(--font-head); font-weight: 600; font-size: 13px; letter-spacing: .14em; text-transform: uppercase; color: var(--cfa-blue, #183090); }
  .hxr-dz-head svg { width: 17px; height: 17px; }
  .hxr-formerr { font-family: var(--font-body); font-size: 13.5px; font-weight: 500; color: var(--stop, #D23A36); background: var(--stop-soft, #FBE6E5); border-radius: var(--r-md, 4px); padding: 11px 13px; }
  .hxr-submit { font-family: var(--font-head); font-weight: 700; text-transform: uppercase; letter-spacing: .1em; font-size: 17px; color: var(--cfa-ink, #0B0F1E); background: var(--hold, #E0A325); border: none; border-radius: var(--r-md, 4px); padding: 17px 22px; cursor: pointer; box-shadow: var(--sh-1, 0 6px 18px rgba(11,15,30,.12)); margin-top: 4px; transition: background .18s, transform .12s; }
  .hxr-submit:hover { background: #f0b53a; transform: translateY(-1px); }
  .hxr-submit:disabled { opacity: .7; cursor: wait; transform: none; }
  .hxr-note { display: flex; align-items: center; gap: 7px; justify-content: center; color: var(--fg3, #828BA0); }
  .hxr-note svg { width: 14px; height: 14px; flex-shrink: 0; }
  .hxr-note span { font-family: var(--font-body); font-size: 13px; font-weight: 500; }
  .hxr-state { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 16px 8px 8px; }
  .hxr-ic { width: 78px; height: 78px; border-radius: 50%; display: grid; place-items: center; margin-bottom: 20px; }
  .hxr-ic svg { width: 40px; height: 40px; }
  .hxr-ic-blue { background: var(--blue-50, #EEF1FC); color: var(--cfa-blue, #183090); }
  .hxr-ic-green { background: var(--go-soft, #E4F4EA); color: var(--go, #1F9D55); }
  .hxr-state h4 { font-family: var(--font-display); font-weight: 400; text-transform: uppercase; font-size: 36px; line-height: .95; color: var(--fg1, #0B0F1E); margin: 0; }
  .hxr-state p { font-family: var(--font-body); font-size: 16px; line-height: 1.55; color: var(--fg2, #3D475F); margin: 12px 0 24px; max-width: 380px; }
  .hxr-okbtn { font-family: var(--font-head); font-weight: 700; text-transform: uppercase; letter-spacing: .08em; font-size: 15px; color: var(--cfa-ink, #0B0F1E); background: var(--hold, #E0A325); border: none; border-radius: var(--r-md, 4px); padding: 14px 30px; cursor: pointer; }
  .hxr-textbtn { background: none; border: none; margin-top: 14px; font-family: var(--font-head); font-weight: 600; font-size: 13px; letter-spacing: .08em; text-transform: uppercase; color: var(--fg3, #828BA0); cursor: pointer; }
  @media (max-width: 560px) { .hxr-head { padding: 24px 24px 20px; } .hxr-title { font-size: 32px; } .hxr-body { padding: 22px 24px 26px; } }
`;
