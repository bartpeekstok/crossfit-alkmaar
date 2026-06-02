/* global React, Btn */
// CFA Landing — Lead capture form (naam + e-mail + telefoon)
// Used in the hero (onDark) and in the final CTA block (light).
const { useState: useLF } = React;

// ───────────────────────────────────────────────────────────────────────────
// GOHIGHLEVEL KOPPELING
// Plak hieronder de Inbound Webhook-URL uit je GHL-workflow:
//   GHL → Automation → Workflows → + Add Trigger → "Inbound Webhook"
//   → kopieer de URL (ziet eruit als https://services.leadconnectorhq.com/hooks/...)
// In de workflow map je dan de velden naam / email / telefoon en voeg je een
// "Create/Update Contact" actie toe.
// Laat leeg om te testen zonder te verzenden — je gaat dan toch door naar de bedankt-pagina.
const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/elOOWDMoCEHJO4WhphRj/webhook-trigger/Di0SoBWLkL51vYE0NJYK';
const BEDANKT_URL = 'Bedankt.html';

function Field({ id, label, type = 'text', value, onChange, onDark, error, placeholder, autoComplete, inputMode }) {
  const [focus, setFocus] = useLF(false);
  const labelColor = onDark ? 'rgba(234,237,244,.72)' : 'var(--fg2)';
  const borderColor = error ? 'var(--stop)' : focus ? 'var(--cfa-blue-bright)' : (onDark ? 'rgba(255,255,255,.18)' : 'var(--border-strong)');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label htmlFor={id} style={{
        fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 12,
        letterSpacing: '.14em', textTransform: 'uppercase', color: labelColor,
      }}>{label}</label>
      <input
        id={id} name={id} type={type} value={value} placeholder={placeholder}
        autoComplete={autoComplete} inputMode={inputMode}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: 500,
          padding: '13px 14px', borderRadius: 4, outline: 'none',
          background: onDark ? 'rgba(255,255,255,.06)' : '#fff',
          color: onDark ? '#fff' : 'var(--fg1)',
          border: `2px solid ${borderColor}`,
          boxShadow: focus ? 'var(--ring)' : 'none',
          transition: 'border-color .15s, box-shadow .15s',
          WebkitTextFillColor: onDark ? '#fff' : 'var(--fg1)',
        }} />
      {error && <span style={{
        fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 500,
        color: onDark ? '#FF9C99' : 'var(--stop)',
      }}>{error}</span>}
    </div>
  );
}

function LeadForm({ onDark = false, ctaLabel = 'PLAN MIJN GRATIS KENNISMAKING', formId = 'lead', webhookUrl = '', pixelId = '' }) {
  const [vals, setVals] = useLF({ naam: '', email: '', tel: '' });
  const [errs, setErrs] = useLF({});
  const [submitting, setSubmitting] = useLF(false);
  const set = (k) => (v) => { setVals((p) => ({ ...p, [k]: v })); setErrs((p) => ({ ...p, [k]: undefined })); };

  const submit = async (e) => {
    e.preventDefault();
    const next = {};
    if (!vals.naam.trim()) next.naam = 'Vul je naam in.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(vals.email.trim())) next.email = 'Vul een geldig e-mailadres in.';
    const telDigits = vals.tel.replace(/[^\d]/g, '');
    if (telDigits.length < 9) next.tel = 'Vul een geldig telefoonnummer in.';
    setErrs(next);
    if (Object.keys(next).length > 0) return;

    setSubmitting(true);
    const naam = vals.naam.trim();
    const nameParts = naam.split(/\s+/);
    const payload = {
      naam: naam,
      voornaam: nameParts[0] || '',
      achternaam: nameParts.slice(1).join(' '),
      email: vals.email.trim(),
      telefoon: vals.tel.trim(),
      bron: 'Landingspagina — gratis kennismaking',
      pagina: (typeof location !== 'undefined' ? location.href : ''),
    };
    const url = (webhookUrl || GHL_WEBHOOK_URL || '').trim();
    try {
      if (url) {
        // Normale (CORS) POST — GHL ondersteunt CORS en parseert de JSON.
        // (Eerder gebruikten we no-cors; dat stript de content-type waardoor de
        // payload niet als JSON aankwam. Deze methode komt wél netjes binnen.)
        await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true,
        });
      }
    } catch (err) {
      // Lead niet laten blokkeren op een netwerkfout — ga toch door naar bedankt.
      console.warn('GHL webhook faalde, ga toch door:', err);
    }
    const params = new URLSearchParams();
    const first = (naam.split(/\s+/)[0] || '');
    if (first) params.set('naam', first);
    const px = (pixelId || '').trim();
    if (px) params.set('px', px);
    const qs = params.toString();
    window.location.href = BEDANKT_URL + (qs ? '?' + qs : '');
  };

  const noteColor = onDark ? 'rgba(234,237,244,.6)' : 'var(--fg3)';

  return (
    <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <Field id={`${formId}-naam`} label="Naam" value={vals.naam} onChange={set('naam')} onDark={onDark}
        error={errs.naam} placeholder="Voornaam Achternaam" autoComplete="name" />
      <Field id={`${formId}-email`} label="E-mail" type="email" value={vals.email} onChange={set('email')} onDark={onDark}
        error={errs.email} placeholder="jij@email.nl" autoComplete="email" inputMode="email" />
      <Field id={`${formId}-tel`} label="Telefoon" type="tel" value={vals.tel} onChange={set('tel')} onDark={onDark}
        error={errs.tel} placeholder="06 12 34 56 78" autoComplete="tel" inputMode="tel" />
      <button type="submit" disabled={submitting} style={{
        fontFamily: "'Oswald', sans-serif", fontWeight: 700, textTransform: 'uppercase',
        letterSpacing: '.1em', fontSize: 17, color: '#fff', background: 'var(--cfa-blue)',
        border: 'none', borderRadius: 4, padding: '17px 22px', cursor: submitting ? 'wait' : 'pointer',
        boxShadow: 'var(--sh-blue)', marginTop: 2, opacity: submitting ? .8 : 1,
        transition: 'background .18s, transform .12s',
      }}
        onMouseEnter={(e) => { if (submitting) return; e.currentTarget.style.background = 'var(--blue-700)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--cfa-blue)'; e.currentTarget.style.transform = 'none'; }}
        onMouseDown={(e) => { if (submitting) return; e.currentTarget.style.transform = 'translateY(1px)'; }}
        onMouseUp={(e) => { if (submitting) return; e.currentTarget.style.transform = 'translateY(-1px)'; }}
      >{submitting ? 'BEZIG…' : ctaLabel}</button>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, justifyContent: 'center', color: noteColor }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 500 }}>
          Geen verplichtingen · Je gegevens blijven privé
        </span>
      </div>
    </form>
  );
}

Object.assign(window, { LeadForm });
