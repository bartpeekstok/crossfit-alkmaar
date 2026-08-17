"use client";

// ============================================================================
//  HardestMileRegistration - inschrijfformulier + MultiSafepay-betaling (INLINE)
//  Voor The Hardest Mile (event-pagina /hardest-mile). Zelfde flow en look als
//  HyroxRegistration, maar bewust een VOLLEDIG ZELFSTANDIGE kopie zodat de
//  HYROX-pagina's onaangeraakt blijven. Solo-only en zonder divisie/eindtijd:
//  alleen naam, e-mail en telefoon.
//
//  Gedrag: de "Schrijf je in"-knop vouwt het formulier inline open op z'n eigen
//  plek in de pagina. Na invullen -> lead naar GHL + betaling via de
//  hyrox-betaling-backend (eigen endpoint /api/hardest-mile-betaling).
// ============================================================================

import { useRef, useState } from "react";

type Props = {
  eventDate: string;            // vaste datum van deze event-pagina
  label?: string;               // knoptekst (default "Schrijf je in")
  className?: string;           // knop-classes (default "btn btn--gold btn--lg")
  leadWebhook?: string;         // GHL inbound webhook voor lead-capture
  paymentEndpoint?: string;     // backend-URL; leeg = formulier zonder betaling
};

const DEFAULT_LEAD_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/elOOWDMoCEHJO4WhphRj/webhook-trigger/J91axdbzbMHAoFjU06n9";
const DEFAULT_PAYMENT_ENDPOINT =
  "https://hyrox-betaling-backend.vercel.app/api/hardest-mile-betaling";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i;
const emptyVals = { naam: "", email: "", tel: "" };

// Zet een NL-datum ("Zondag 13 september 2026") om naar ISO (2026-09-13) zodat
// GoHighLevel het als echte datum herkent. Leeg als parsen niet lukt.
const NL_MONTHS: Record<string, number> = { januari:1,februari:2,maart:3,april:4,mei:5,juni:6,juli:7,augustus:8,september:9,oktober:10,november:11,december:12 };
function nlDateToISO(s: string): string {
  if (!s) return "";
  const m = s.toLowerCase().match(/(\d{1,2})\s+([a-z]+)\s+(\d{4})/);
  if (!m) return "";
  const mo = NL_MONTHS[m[2]];
  if (!mo) return "";
  return m[3] + "-" + String(mo).padStart(2, "0") + "-" + m[1].padStart(2, "0");
}

function scrollToEl(el: HTMLElement | null) {
  if (!el) return;
  const top = window.scrollY + el.getBoundingClientRect().top - 24;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

// Meta browser-identifiers (_fbc = Click ID, _fbp = Browser ID) meesturen naar
// de betaal-backend, zodat het server-side CAPI Purchase-event (msp-notify.js)
// ze in user_data kan zetten. Zonder deze cookies kan Meta de betaling veel
// slechter aan een advertentieklik koppelen. De Pixel zet ze zelf als cookie.
function readCookie(name: string): string {
  if (typeof document === "undefined") return "";
  const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]) : "";
}
// Geen _fbc-cookie maar wél een fbclid in de URL? Dan bouwen we fbc zelf op
// volgens Meta's format: fb.<subdomainIndex>.<timestamp_ms>.<fbclid>.
function metaFbc(): string {
  const c = readCookie("_fbc");
  if (c) return c;
  try {
    const fbclid = new URLSearchParams(window.location.search).get("fbclid");
    if (fbclid) return `fb.1.${Date.now()}.${fbclid}`;
  } catch {}
  return "";
}

// ── Zelfstandig inline inschrijf-component (plaats op elke CTA-plek) ─────────
export default function HardestMileRegistration({
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
    if (!vals.naam.trim()) next.naam = "Vul je naam in.";
    if (!EMAIL_RE.test(vals.email.trim())) next.email = "Vul een geldig e-mailadres in.";
    if (vals.tel.replace(/\D/g, "").length < 9) next.tel = "Vul een geldig telefoonnummer in.";
    setErrs(next);
    if (Object.keys(next).length) return;

    setSubmitting(true);
    const parts = vals.naam.trim().split(/\s+/);
    const payload = {
      naam: vals.naam.trim(), voornaam: parts[0] || "", achternaam: parts.slice(1).join(" "),
      email: vals.email.trim(), telefoon: vals.tel.trim(),
      datum: eventDate, datum_iso: nlDateToISO(eventDate),
      type: "solo", aantal_deelnemers: 1,
      evenement: "The Hardest Mile",
      bron: "Website - Hardest Mile inschrijving",
      pagina: typeof location !== "undefined" ? location.href : "",
      // Meta Click ID + Browser ID voor server-side CAPI-matching (zie boven).
      fbc: metaFbc(),
      fbp: readCookie("_fbp"),
    };

    // Meta Pixel: inschrijving verstuurd (checkout gestart). Advanced Matching:
    // e-mail/telefoon/naam meesturen (Pixel hasht zelf) zodat Meta deze persoon
    // beter aan een advertentie kan koppelen, ook als de echte betaling later
    // server-side (CAPI) binnenkomt. Pixel-ID = MetaPixel.tsx.
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("init", "1745951116381755", {
        em: vals.email.trim().toLowerCase(),
        ph: vals.tel.replace(/\D/g, ""),
        fn: (parts[0] || "").toLowerCase(),
        ln: parts.slice(1).join(" ").toLowerCase(),
      });
      window.fbq("track", "InitiateCheckout", {
        content_name: "The Hardest Mile",
        content_category: "Event",
        registration_date: eventDate,
        num_items: 1,
      });
    }

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
    <div ref={sectionRef} className="thm-section">
      {!open && (
        <div className="thm-cta-wrap">
          <button type="button" className={className} onClick={openForm}>{label}</button>
        </div>
      )}

      {open && (
        <div className="thm-inline-panel" role="region" aria-label="Inschrijven The Hardest Mile">
          <div className="thm-head">
            <div className="thm-head-m" />
            <button className="thm-close" type="button" aria-label="Sluiten" onClick={collapse}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
            <p className="thm-eb">The Hardest Mile</p>
            <h3 className="thm-title">Schrijf je in</h3>
            <p className="thm-date">{eventDate}</p>
          </div>

          <div className="thm-body">
            {view === "form" && (
              <form className="thm-form" noValidate onSubmit={submit}>
                <Field inputRef={firstFieldRef} id="thm-naam" label="Naam" value={vals.naam} onChange={set("naam")} error={errs.naam} placeholder="Voornaam Achternaam" autoComplete="name" />
                <Field id="thm-email" label="E-mail" type="email" value={vals.email} onChange={set("email")} error={errs.email} placeholder="Lid van CFA? Gebruik je bekende e-mailadres" autoComplete="email" inputMode="email" />
                <Field id="thm-tel" label="Telefoonnummer" type="tel" value={vals.tel} onChange={set("tel")} error={errs.tel} placeholder="06 12 34 56 78" autoComplete="tel" inputMode="tel" />

                {formErr && <div className="thm-formerr">{formErr}</div>}
                <button className="thm-submit" type="submit" disabled={submitting}>{submitting ? "BEZIG…" : "Schrijf je in!"}</button>
                <div className="thm-note">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  <span>Je gegevens blijven privé · plekken zijn beperkt</span>
                </div>
              </form>
            )}

            {view === "paying" && (
              <div className="thm-state">
                <div className="thm-ic thm-ic-blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg></div>
                <h4>Bijna klaar - reken af</h4>
                <p>We hebben het betaalscherm in een <b>nieuw tabblad</b> geopend. Zodra je betaling rond is, is je inschrijving definitief.</p>
                <button type="button" className="thm-okbtn" onClick={() => payUrl && window.open(payUrl, "_blank", "noopener")}>Betaalscherm opnieuw openen</button>
                <button type="button" className="thm-textbtn" onClick={collapse}>Sluiten</button>
              </div>
            )}

            {view === "done" && (
              <div className="thm-state">
                <div className="thm-ic thm-ic-green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></div>
                <h4>Je staat erop{firstName ? `, ${firstName}` : ""}!</h4>
                <p>We zien je op {eventDate.toLowerCase()} op de baan. Je krijgt nog een bevestiging per e-mail.</p>
                <button type="button" className="thm-okbtn" onClick={collapse}>Sluiten</button>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{thmCss}</style>
    </div>
  );
}

function Field({ id, label, value, onChange, error, type = "text", placeholder, autoComplete, inputMode, inputRef }: {
  id: string; label: string; value: string; onChange: (v: string) => void; error?: string;
  type?: string; placeholder?: string; autoComplete?: string; inputMode?: any;
  inputRef?: React.Ref<HTMLInputElement>;
}) {
  return (
    <div className={"thm-fld" + (error ? " err" : "")}>
      <label htmlFor={id}>{label}</label>
      <input ref={inputRef} id={id} name={id} type={type} value={value} placeholder={placeholder}
        autoComplete={autoComplete} inputMode={inputMode} onChange={(e) => onChange(e.target.value)} />
      {error && <span className="thm-msg">{error}</span>}
    </div>
  );
}

const thmCss = `
  .thm-section { width: 100%; }
  .thm-cta-wrap { display: flex; justify-content: center; }
  .thm-inline-panel { max-width: 600px; margin: 0 auto; background: #fff; border: 1px solid var(--border, #CDD2DD); border-radius: var(--r-lg, 6px); box-shadow: var(--sh-2, 0 12px 34px rgba(11,15,30,.14)); overflow: hidden; animation: thm-reveal .34s cubic-bezier(.2,.7,.3,1) both; text-align: left; }
  @keyframes thm-reveal { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
  .thm-head { position: relative; padding: 30px 34px 24px; background: var(--cfa-ink, #0B0F1E); color: #fff; overflow: hidden; }
  .thm-head-m { position: absolute; inset: 0; pointer-events: none; background: repeating-radial-gradient(circle at 100% 0%, transparent 0 58px, rgba(255,255,255,.08) 58px 60px); }
  .thm-eb { position: relative; font-family: var(--font-head); font-weight: 600; font-size: 13px; letter-spacing: .2em; text-transform: uppercase; color: var(--hold, #E0A325); margin: 0; }
  .thm-title { position: relative; font-family: var(--font-display); font-weight: 400; text-transform: uppercase; font-size: 40px; line-height: .95; letter-spacing: .01em; color: #fff; margin: 8px 0 0; }
  .thm-date { position: relative; font-family: var(--font-body); font-size: 14px; color: rgba(234,237,244,.82); margin: 6px 0 0; }
  .thm-close { position: absolute; top: 18px; right: 18px; z-index: 2; width: 38px; height: 38px; border: 1px solid rgba(255,255,255,.25); border-radius: var(--r-md, 4px); background: rgba(255,255,255,.06); color: #fff; cursor: pointer; display: grid; place-items: center; }
  .thm-close:hover { background: rgba(255,255,255,.16); }
  .thm-close svg { width: 18px; height: 18px; }
  .thm-body { padding: 26px 34px 32px; }
  .thm-form { display: flex; flex-direction: column; gap: 16px; }
  .thm-fld { display: flex; flex-direction: column; gap: 6px; }
  .thm-fld > label { font-family: var(--font-head); font-weight: 600; font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: var(--fg2, #3D475F); }
  .thm-fld input { font-family: var(--font-body); font-size: 16px; font-weight: 500; padding: 13px 14px; border-radius: var(--r-md, 4px); outline: none; background: #fff; color: var(--fg1, #0B0F1E); border: 2px solid var(--border-strong, #A8AFC0); transition: border-color .15s, box-shadow .15s; width: 100%; }
  .thm-fld input:focus { border-color: var(--cfa-blue-bright, #2A48C8); box-shadow: var(--ring, 0 0 0 3px rgba(42,72,200,.35)); }
  .thm-fld.err input { border-color: var(--stop, #D23A36); }
  .thm-msg { font-family: var(--font-body); font-size: 13px; font-weight: 500; color: var(--stop, #D23A36); }
  .thm-formerr { font-family: var(--font-body); font-size: 13.5px; font-weight: 500; color: var(--stop, #D23A36); background: var(--stop-soft, #FBE6E5); border-radius: var(--r-md, 4px); padding: 11px 13px; }
  .thm-submit { font-family: var(--font-head); font-weight: 700; text-transform: uppercase; letter-spacing: .1em; font-size: 17px; color: var(--cfa-ink, #0B0F1E); background: var(--hold, #E0A325); border: none; border-radius: var(--r-md, 4px); padding: 17px 22px; cursor: pointer; box-shadow: var(--sh-1, 0 6px 18px rgba(11,15,30,.12)); margin-top: 4px; transition: background .18s, transform .12s; }
  .thm-submit:hover { background: #f0b53a; transform: translateY(-1px); }
  .thm-submit:disabled { opacity: .7; cursor: wait; transform: none; }
  .thm-note { display: flex; align-items: center; gap: 7px; justify-content: center; color: var(--fg3, #828BA0); }
  .thm-note svg { width: 14px; height: 14px; flex-shrink: 0; }
  .thm-note span { font-family: var(--font-body); font-size: 13px; font-weight: 500; }
  .thm-state { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 16px 8px 8px; }
  .thm-ic { width: 78px; height: 78px; border-radius: 50%; display: grid; place-items: center; margin-bottom: 20px; }
  .thm-ic svg { width: 40px; height: 40px; }
  .thm-ic-blue { background: var(--blue-50, #EEF1FC); color: var(--cfa-blue, #183090); }
  .thm-ic-green { background: var(--go-soft, #E4F4EA); color: var(--go, #1F9D55); }
  .thm-state h4 { font-family: var(--font-display); font-weight: 400; text-transform: uppercase; font-size: 36px; line-height: .95; color: var(--fg1, #0B0F1E); margin: 0; }
  .thm-state p { font-family: var(--font-body); font-size: 16px; line-height: 1.55; color: var(--fg2, #3D475F); margin: 12px 0 24px; max-width: 380px; }
  .thm-okbtn { font-family: var(--font-head); font-weight: 700; text-transform: uppercase; letter-spacing: .08em; font-size: 15px; color: var(--cfa-ink, #0B0F1E); background: var(--hold, #E0A325); border: none; border-radius: var(--r-md, 4px); padding: 14px 30px; cursor: pointer; }
  .thm-textbtn { background: none; border: none; margin-top: 14px; font-family: var(--font-head); font-weight: 600; font-size: 13px; letter-spacing: .08em; text-transform: uppercase; color: var(--fg3, #828BA0); cursor: pointer; }
  @media (max-width: 560px) { .thm-head { padding: 24px 24px 20px; } .thm-title { font-size: 32px; } .thm-body { padding: 22px 24px 26px; } }
`;
