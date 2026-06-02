/* global React */
// CFA Landing — sticky header + hero with above-the-fold lead form
const { useState: useHero, useEffect: useHeroFx } = React;

function StarRow({ size = 16, color = 'var(--hold)' }) {
  return (
    <div style={{ display: 'inline-flex', gap: 2 }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
          <path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.6 6.1 20.8l1.2-6.6L2.5 9l6.6-.9z"/>
        </svg>
      ))}
    </div>
  );
}

function Phone({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
}

function LPHeader({ onCTA }) {
  const [scrolled, setScrolled] = useHero(false);
  useHeroFx(() => {
    const el = document.getElementById('lp-scroll') || window;
    const onScroll = () => {
      const y = el === window ? window.scrollY : el.scrollTop;
      setScrolled(y > 40);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(244,245,247,.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border)',
      boxShadow: scrolled ? 'var(--sh-1)' : 'none',
      transition: 'box-shadow .2s',
    }}>
      <div style={{
        maxWidth: 1160, margin: '0 auto', padding: '12px clamp(16px,4vw,40px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
      }}>
        <img src="assets/cfa-logo.png"
          alt="CrossFit Alkmaar" style={{ height: 44, width: 'auto', display: 'block' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <a href="tel:+31722340560" style={{
            display: 'inline-flex', alignItems: 'center', gap: 7, textDecoration: 'none',
            fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 14, letterSpacing: '.04em',
            color: 'var(--fg1)',
          }}><Phone size={15} /> <span className="lp-hide-sm">072-2340560</span></a>
          <button onClick={onCTA} style={{
            fontFamily: "'Oswald', sans-serif", fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '.08em', fontSize: 13, color: '#fff', background: 'var(--cfa-blue)',
            border: 'none', borderRadius: 4, padding: '13px 18px', cursor: 'pointer',
            boxShadow: 'var(--sh-blue)', whiteSpace: 'nowrap',
          }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--blue-700)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'var(--cfa-blue)'}
          >Gratis kennismaking</button>
        </div>
      </div>
    </header>
  );
}

function Hero({ angle, badge, ctaLabel, formInHero, showProof, webhookUrl, pixelId }) {
  const benefits = [
    'Kleine groepen, max 6 personen',
    'Coaches die je bij naam kennen',
    'Elke training schaalbaar — ook voor beginners',
  ];
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--cfa-ink)' }}>
      {/* photo drop zone */}
      <image-slot id="lp-hero-photo" shape="rect" placeholder="Sleep een foto van de box / een WOD hierheen"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}></image-slot>
      {/* ink scrim */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(180deg, rgba(11,15,30,.78) 0%, rgba(11,15,30,.6) 45%, rgba(11,15,30,.82) 100%)',
      }}></div>

      <div className="lp-hero-grid" style={{
        position: 'relative', zIndex: 2, maxWidth: 1160, margin: '0 auto', pointerEvents: 'none',
        padding: 'clamp(48px,9vh,104px) clamp(16px,4vw,40px) clamp(48px,8vh,88px)',
        display: 'grid', gridTemplateColumns: formInHero ? 'minmax(0,1.05fr) minmax(330px,.95fr)' : 'minmax(0,1fr)',
        gap: 'clamp(32px,5vw,72px)', alignItems: 'center',
      }}>
        {/* left: message */}
        <div style={{ maxWidth: formInHero ? 'none' : 760 }}>
          {badge && <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 18,
            fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 12.5, letterSpacing: '.16em',
            textTransform: 'uppercase', color: '#fff', background: 'var(--cfa-blue)',
            padding: '7px 13px', borderRadius: 2,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#fff', opacity: .9 }}></span>
            {badge}
          </div>}
          <h1 style={{
            fontFamily: "'Anton', sans-serif", fontWeight: 400, textTransform: 'uppercase',
            fontSize: 'clamp(40px,6.2vw,82px)', lineHeight: .94, letterSpacing: '.01em',
            color: '#fff', margin: 0, textWrap: 'balance',
          }}>{angle.h}</h1>
          <p style={{
            fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: 'clamp(17px,1.9vw,21px)',
            lineHeight: 1.5, color: 'rgba(234,237,244,.9)', margin: '20px 0 0', maxWidth: 540, textWrap: 'pretty',
          }}>{angle.sub}</p>

          {showProof && (
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px 24px', marginTop: 26 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <StarRow size={17} />
                <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: 15, color: '#fff' }}>
                  300+ 5-sterren reviews
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <Avatars />
                <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: 15, color: '#fff' }}>
                  300+ actieve leden
                </span>
              </div>
            </div>
          )}

          <ul style={{ listStyle: 'none', padding: 0, margin: '26px 0 0', display: 'grid', gap: 11 }}>
            {benefits.map((b) => (
              <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <span style={{
                  width: 22, height: 22, flexShrink: 0, borderRadius: 3, background: 'rgba(42,72,200,.25)',
                  display: 'grid', placeItems: 'center',
                }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9AAAEC" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </span>
                <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: 16.5, color: 'rgba(234,237,244,.95)' }}>{b}</span>
              </li>
            ))}
          </ul>

          {!formInHero && (
            <a href="#aanmelden" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 32, textDecoration: 'none', pointerEvents: 'auto',
              fontFamily: "'Oswald', sans-serif", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.09em',
              fontSize: 17, color: '#fff', background: 'var(--cfa-blue)', borderRadius: 4,
              padding: '18px 32px', boxShadow: 'var(--sh-blue)',
            }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--blue-700)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'var(--cfa-blue)'}
            >{ctaLabel}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          )}
        </div>

        {/* right: form card */}
        {formInHero && (
          <div id="aanmelden" style={{
            background: 'var(--cfa-white)', borderRadius: 6, padding: 'clamp(22px,3vw,32px)', pointerEvents: 'auto',
            boxShadow: '0 18px 50px rgba(0,0,0,.4)', border: '1px solid rgba(255,255,255,.1)',
          }}>
            <div style={{
              fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 23, lineHeight: 1.05,
              textTransform: 'uppercase', letterSpacing: '.01em', color: 'var(--fg1)', marginBottom: 4,
            }}>Plan je gratis kennismaking</div>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: 'var(--fg2)', margin: '0 0 18px' }}>
              Laat je gegevens achter — we bellen je binnen 1 werkdag.
            </p>
            <LeadForm onDark={false} ctaLabel={ctaLabel} formId="hero" webhookUrl={webhookUrl} pixelId={pixelId} />
          </div>
        )}
      </div>
    </section>
  );
}

function Avatars() {
  const colors = ['var(--blue-600)', 'var(--steel-600)', 'var(--blue-400)', 'var(--steel-700)'];
  return (
    <div style={{ display: 'flex' }}>
      {colors.map((c, i) => (
        <span key={i} style={{
          width: 26, height: 26, borderRadius: '50%', background: c, border: '2px solid var(--cfa-ink)',
          marginLeft: i ? -9 : 0, display: 'grid', placeItems: 'center',
          fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 11, color: '#fff',
        }}>{['JK', 'Bv', 'St', 'MW'][i]}</span>
      ))}
    </div>
  );
}

Object.assign(window, { LPHeader, Hero, StarRow, Avatars });
