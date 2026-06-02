/* global React, LeadForm */
// CFA Landing — final CTA (form) + footer

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
          }}>Kom vrijblijvend langs. Geen verplichtingen, geen druk — gewoon kennismaken en kijken of het klikt. We bellen je binnen 1 werkdag terug.</p>
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

function Footer() {
  const hours = [
    ['Ma', '06:30 – 22:00'], ['Di', '06:30 – 21:00'], ['Wo', '06:30 – 21:00'],
    ['Do', '06:30 – 21:00'], ['Vr', '06:30 – 21:00'], ['Za', '08:00 – 12:30'], ['Zo', '08:00 – 12:30'],
  ];
  return (
    <footer style={{ background: 'var(--cfa-ink)', color: 'var(--fg-on-ink)' }}>
      <div className="lp-footer-grid" style={{
        maxWidth: 1160, margin: '0 auto', padding: 'clamp(44px,6vw,72px) clamp(16px,4vw,40px) 32px',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 'clamp(28px,4vw,56px)',
      }}>
        <div>
          <img src="assets/cfa-logo-mono-white.png" alt="CrossFit Alkmaar" style={{ height: 56, width: 'auto', marginBottom: 18 }} />
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15.5, lineHeight: 1.6, color: 'rgba(234,237,244,.7)', maxWidth: 320, margin: 0 }}>
            Sportschool in Alkmaar voor krachttraining, fitness en afvallen — met persoonlijke begeleiding, voor alle niveaus.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
            {[['Instagram', 'https://www.instagram.com/crossfitalkmaar'], ['Facebook', 'https://www.facebook.com/crossfitalkmaar']].map(([l, h]) => (
              <a key={l} href={h} style={{
                fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase',
                color: '#fff', textDecoration: 'none', border: '1px solid rgba(255,255,255,.2)', borderRadius: 3, padding: '8px 14px',
              }}>{l}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--blue-300)', margin: '0 0 16px' }}>Contact</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 11, fontFamily: "'Barlow', sans-serif", fontSize: 15.5 }}>
            <li><a href="tel:+31722340560" style={{ color: 'rgba(234,237,244,.85)', textDecoration: 'none' }}>072-2340560</a></li>
            <li><a href="mailto:info@crossfitalkmaar.nl" style={{ color: 'rgba(234,237,244,.85)', textDecoration: 'none' }}>info@crossfitalkmaar.nl</a></li>
            <li style={{ color: 'rgba(234,237,244,.7)', lineHeight: 1.5 }}>Phoenixstraat 33<br/>1812 PP Alkmaar</li>
            <li><a href="https://maps.google.com/?q=Phoenixstraat+33+1812+PP+Alkmaar" style={{ color: 'var(--blue-300)', textDecoration: 'none', fontWeight: 600 }}>Bekijk op Google Maps →</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--blue-300)', margin: '0 0 16px' }}>Openingstijden</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8, fontFamily: "'Barlow Semi Condensed', sans-serif", fontSize: 15.5 }}>
            {hours.map(([d, t]) => (
              <li key={d} style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 190, color: 'rgba(234,237,244,.8)' }}>
                <span style={{ fontWeight: 700 }}>{d}</span><span style={{ fontVariantNumeric: 'tabular-nums' }}>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,.1)' }}>
        <div style={{
          maxWidth: 1160, margin: '0 auto', padding: '20px clamp(16px,4vw,40px)',
          display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between',
          fontFamily: "'Barlow', sans-serif", fontSize: 13, color: 'rgba(234,237,244,.5)',
        }}>
          <span>© 2026 CrossFit Alkmaar · KvK 61162825</span>
          <a href="https://www.crossfitalkmaar.com/privacy" style={{ color: 'rgba(234,237,244,.5)' }}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { FinalCTA, Footer });
