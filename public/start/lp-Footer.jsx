/* global React, LeadForm, SectionHead */
// CFA Landing - final CTA (form) + member-video polaroids + footer
// Footer + .vpair video-polaroids zijn 1-op-1 overgenomen uit
// bartpeekstok/crossfit-alkmaar (_static-ref/site.js + site.css).
const { useState: useFoot } = React;

function FinalCTA({ ctaLabel, badge, webhookUrl, pixelId }) {
  return (
    <section id="aanmelden-eind" style={{ background: 'var(--cfa-white)' }}>
      <div className="lp-final-grid" style={{
        maxWidth: 1080, margin: '0 auto', padding: 'clamp(56px,8vh,96px) clamp(16px,4vw,40px)',
        display: 'grid', gridTemplateColumns: '1fr minmax(330px,440px)', gap: 'clamp(32px,5vw,64px)', alignItems: 'center',
      }}>
        <div>
          {badge && <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 18,
            fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 12.5, letterSpacing: '.16em',
            textTransform: 'uppercase', color: 'var(--cfa-blue)', background: 'var(--blue-50)',
            padding: '7px 13px', borderRadius: 2,
          }}>{badge}</div>}
          <h2 style={{
            fontFamily: "'Anton', sans-serif", fontWeight: 400, textTransform: 'uppercase',
            fontSize: 'clamp(34px,4.6vw,60px)', lineHeight: .96, letterSpacing: '.01em',
            color: 'var(--fg1)', margin: 0, textWrap: 'balance',
          }}>Klaar om te starten?</h2>
          <p style={{
            fontFamily: "'Barlow', sans-serif", fontSize: 'clamp(17px,1.9vw,20px)', lineHeight: 1.5,
            color: 'var(--fg2)', margin: '18px 0 0', maxWidth: 460,
          }}>Kom vrijblijvend langs. Geen verplichtingen, geen druk - gewoon kennismaken en kijken of het klikt. We bellen je binnen 1 werkdag terug.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginTop: 26, flexWrap: 'wrap' }}>
            <a href="tel:+31722340560" style={{
              display: 'inline-flex', alignItems: 'center', gap: 9, textDecoration: 'none',
              fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 16, color: 'var(--fg1)',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--cfa-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              072-2340560
            </a>
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: 'var(--fg3)' }}>Phoenixstraat 33, Alkmaar</span>
          </div>
          <img src="assets/lp-cta-photo.webp" alt="CrossFit Alkmaar"
            style={{ width: '100%', aspectRatio: '16 / 9', height: 'auto', objectFit: 'cover', display: 'block', borderRadius: 6, boxShadow: 'var(--sh-1)', marginTop: 28 }} />
        </div>
        <div style={{
          background: 'var(--cfa-chalk)', borderRadius: 6, padding: 'clamp(24px,3vw,34px)',
          border: '1px solid var(--border)', boxShadow: 'var(--sh-2)',
        }}>
          <div style={{
            fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 22, lineHeight: 1.05,
            textTransform: 'uppercase', color: 'var(--fg1)', marginBottom: 16,
          }}>Plan je gratis kennismaking</div>
          <LeadForm onDark={false} ctaLabel={ctaLabel} formId="eind" webhookUrl={webhookUrl} pixelId={pixelId} />
        </div>
      </div>
    </section>
  );
}

// ---- Member-video polaroids - exact .vpair-stijl uit site.css ----------------
function VCard({ id, n, q }) {
  const [play, setPlay] = useFoot(false);
  return (
    <figure className="vp" style={{ margin: 0 }}>
      <div className="video" onClick={() => id && setPlay(true)}>
        {play && id ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0&modestbranding=1`}
            title={`Video ${n}`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }} />
        ) : (
          <React.Fragment>
            <img src={id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : ''} alt={n} />
            <div className="play"><span><svg viewBox="0 0 24 24" fill="#0B0F1E"><path d="M8 5v14l11-7z"/></svg></span></div>
          </React.Fragment>
        )}
      </div>
      <div className="nm">{n}</div>
      {q && <div className="vq">“{q}”</div>}
    </figure>
  );
}

function VideoBand() {
  const vids = [
    { id: '1qhbmRPtysU', n: 'Jarrald', q: '20 kilo afgevallen - omdat ik hier wél kom.' },
    { id: 'SKchVCAIx80', n: 'Steven', q: 'Waarom hij niet meer weg wil bij CFA.' },
  ];
  return (
    <section style={{ background: 'var(--cfa-chalk)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', padding: 'clamp(48px,7vh,88px) clamp(16px,4vw,40px)' }}>
        <SectionHead center eyebrow="Echte verhalen" title="Hoor het van onze leden"
          sub="Geen acteurs - gewoon leden die vertellen wat CrossFit Alkmaar voor ze doet." />
        <div className="vpair">
          {vids.map((v) => <VCard key={v.n} {...v} />)}
        </div>
      </div>
    </section>
  );
}

function ClosingCTA({ ctaLabel }) {
  const toForm = () => {
    const el = document.getElementById('aanmelden-eind') || document.getElementById('aanmelden');
    if (!el) return;
    const top = window.scrollY + el.getBoundingClientRect().top - 80;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  };
  return (
    <section className="page-cta">
      <div className="pcwrap">
        <h2>Klaar om te starten?</h2>
        <p>Eén gratis kennismaking, geen verplichtingen.<br/>We bellen je binnen 1 werkdag terug.</p>
        <button className="btn btn--gold btn--lg" onClick={toForm}>
          {ctaLabel}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </button>
      </div>
    </section>
  );
}

function Footer() {
  const hours = [
    ['Ma', '06:30 – 22:00'], ['Di', '06:30 – 21:00'], ['Wo', '06:30 – 21:00'],
    ['Do', '06:30 – 21:00'], ['Vr', '06:30 – 21:00'], ['Za', '08:00 – 12:30'], ['Zo', '08:00 – 12:30'],
  ];
  const subLab = { color: 'var(--cfa-blue)', fontSize: 12, letterSpacing: '.08em', fontWeight: 600 };
  return (
    <footer className="site-footer">
      <div className="fwrap ftop">
        <div>
          <a className="logo" href="https://www.crossfitalkmaar.com">
            <img src="assets/cfa-logo.png" alt="CrossFit Alkmaar" />
          </a>
          <p className="intro">Sportschool in Alkmaar voor krachttraining, fitness en afvallen, met persoonlijke begeleiding voor alle niveaus.</p>
          <div className="fsocial">
            <a href="https://www.instagram.com/crossfitalkmaar" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.facebook.com/crossfitalkmaar" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
          <div className="fpowered">
            <span>Powered by</span>
            <a href="https://gymops.io" target="_blank" rel="noopener noreferrer"><img src="assets/gymops-logo.png" alt="GymOps" /></a>
          </div>
        </div>
        <div>
          <h4>Openingstijden</h4>
          <ul className="hours">
            {hours.map(([d, t]) => <li key={d}><b>{d}</b><span>{t}</span></li>)}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><span style={subLab}>TELEFOON</span><br/><a href="tel:+31722340560">072-2340560</a></li>
            <li><span style={subLab}>EMAIL</span><br/><a href="mailto:info@crossfitalkmaar.nl">info@crossfitalkmaar.nl</a></li>
            <li><span style={subLab}>LEDENSERVICE</span><br/><a href="mailto:ledenservice@crossfitalkmaar.nl">ledenservice@crossfitalkmaar.nl</a></li>
            <li style={{ color: 'var(--fg2)', lineHeight: 1.5, marginTop: 4 }}>Phoenixstraat 33<br/>1812 PP Alkmaar<br/><a href="https://maps.google.com/?q=Phoenixstraat+33+1812+PP+Alkmaar" style={{ color: 'var(--cfa-blue)' }}>Bekijk op Google Maps →</a></li>
          </ul>
        </div>
      </div>
      <div className="fbottom">
        <div className="fwrap fb">
          <span>© 2026 CrossFit Alkmaar · Alle rechten voorbehouden · KvK 61162825</span>
          <a href="https://www.crossfitalkmaar.com/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { FinalCTA, VideoBand, ClosingCTA, Footer });
