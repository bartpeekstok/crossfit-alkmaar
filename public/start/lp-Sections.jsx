/* global React, Eyebrow, DoubleRule, StarRow */
// CFA Landing - content sections (proof, objections, steps, testimonials, why)

function StatBar() {
  const stats = [
    { n: '300+', l: '5-sterren reviews' },
    { n: '300+', l: 'Actieve leden' },
    { n: '12+', l: 'Jaar in Alkmaar' },
    { n: '35+', l: 'Gem. leeftijd' },
  ];
  return (
    <section style={{ background: 'var(--cfa-white)', borderBottom: '1px solid var(--border)' }}>
      <div style={{
        maxWidth: 1160, margin: '0 auto', padding: 'clamp(28px,4vw,44px) clamp(16px,4vw,40px)',
        display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'clamp(12px,2vw,28px)',
      }} className="lp-statbar">
        {stats.map((s, i) => (
          <div key={s.l} style={{
            textAlign: 'center', position: 'relative',
            borderLeft: i ? '1px solid var(--border)' : 'none',
          }}>
            <div style={{
              fontFamily: "'Barlow Semi Condensed', sans-serif", fontWeight: 700,
              fontSize: 'clamp(34px,5vw,52px)', lineHeight: 1, color: 'var(--cfa-blue)', fontVariantNumeric: 'tabular-nums',
            }}>{s.n}</div>
            <div style={{
              fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 'clamp(11px,1.3vw,13px)',
              letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--fg2)', marginTop: 7,
            }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub, light, center }) {
  return (
    <div style={{ maxWidth: center ? 720 : 'none', margin: center ? '0 auto' : 0, textAlign: center ? 'center' : 'left', marginBottom: 'clamp(28px,4vw,48px)' }}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 style={{
        fontFamily: "'Oswald', sans-serif", fontWeight: 700, textTransform: 'uppercase',
        fontSize: 'clamp(28px,3.6vw,44px)', lineHeight: 1.04, letterSpacing: '.01em',
        color: light ? '#fff' : 'var(--fg1)', margin: '12px 0 0',
      }}>{title}</h2>
      {sub && <p style={{
        fontFamily: "'Barlow', sans-serif", fontSize: 18, lineHeight: 1.55,
        color: light ? 'rgba(234,237,244,.85)' : 'var(--fg2)', margin: '14px auto 0', maxWidth: center ? 620 : 640,
      }}>{sub}</p>}
    </div>
  );
}

// "Twijfel je nog?" - objection handling (niet fit genoeg / geen tijd)
function Objections() {
  const items = [
    {
      q: '“Ik ben niet fit genoeg om te beginnen”',
      a: 'Dat is precies waaróm je moet starten. Iedere oefening schalen we naar jouw niveau - je hoeft niets te kunnen. Onze leden zijn 20 tot 70+, gemiddeld 35.',
      icon: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z',
    },
    {
      q: '“Ik heb geen tijd om 5x per week te trainen”',
      a: 'Hoeft ook niet. De meeste leden trainen 2 à 3 keer per week en zien al resultaat. Open van 06:30 - je traint vóór of na werk, in 45 minuten klaar.',
      icon: 'M12 6v6l4 2M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z',
    },
  ];
  return (
    <section style={{ background: 'var(--cfa-chalk)' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'clamp(56px,8vh,96px) clamp(16px,4vw,40px)' }}>
        <SectionHead center eyebrow="Geen excuses nodig" title="Twijfel je nog?"
          sub="De twee dingen die mensen tegenhouden - en waarom ze hier niet opgaan." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(16px,2vw,24px)' }}>
          {items.map((it) => (
            <div key={it.q} style={{
              background: '#fff', border: '1px solid var(--border)', borderRadius: 6,
              padding: 'clamp(24px,3vw,32px)', boxShadow: 'var(--sh-1)',
            }}>
              <div style={{
                width: 46, height: 46, borderRadius: 5, background: 'var(--blue-50)',
                display: 'grid', placeItems: 'center', marginBottom: 18,
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cfa-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={it.icon}/></svg>
              </div>
              <h3 style={{
                fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 20, lineHeight: 1.2,
                letterSpacing: '.005em', color: 'var(--fg1)', margin: '0 0 10px',
              }}>{it.q}</h3>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 16.5, lineHeight: 1.55, color: 'var(--fg2)', margin: 0 }}>{it.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How it works - 3 steps
function Steps() {
  const steps = [
    { n: '01', t: 'Gratis kennismaking', d: 'Kom langs en vertel ons over je doelen, waar je tegenaan loopt en wat je al hebt geprobeerd. Geen verplichtingen.' },
    { n: '02', t: 'Persoonlijk trainingsplan', d: 'Elke training passen we aan op jouw niveau en doelen. Je traint altijd onder leiding van een professionele coach.' },
    { n: '03', t: 'Resultaten zien én voelen', d: 'Binnen weken voel je je sterker en energieker. Elke 3 maanden een check-in met je coach om je plan bij te sturen.' },
  ];
  return (
    <section style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'clamp(56px,8vh,96px) clamp(16px,4vw,40px)' }}>
        <SectionHead eyebrow="Zo werkt het" title="In drie stappen van start" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'clamp(20px,3vw,40px)' }}>
          {steps.map((s) => (
            <div key={s.n}>
              <div style={{
                fontFamily: "'Anton', sans-serif", fontSize: 56, lineHeight: 1, color: 'var(--blue-100)',
                letterSpacing: '.01em',
              }}>{s.n}</div>
              <div style={{ height: 4, background: 'var(--cfa-ink)', width: 48, margin: '14px 0 18px' }}></div>
              <h3 style={{
                fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 22, textTransform: 'uppercase',
                letterSpacing: '.02em', color: 'var(--fg1)', margin: '0 0 10px',
              }}>{s.t}</h3>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 16.5, lineHeight: 1.55, color: 'var(--fg2)', margin: 0 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials
function Testimonials() {
  const quotes = [
    { id: 'jarrald', q: 'Lang sponsor geweest van sportscholen waar ik niet naartoe ging. Nu 20 kilo afgevallen - omdat ik hier wél kom.', n: 'Jarrald', m: 'Kickstart-deelnemer', photo: 'https://img.youtube.com/vi/1qhbmRPtysU/mqdefault.jpg' },
    { id: 'bert', q: 'Ik had niet verwacht dat ik het zó leuk zou vinden als dat ik het nu vind. De groep maakt het.', n: 'Bert', m: '2 jaar lid', photo: 'https://img.youtube.com/vi/a2zbZIlU27Y/mqdefault.jpg' },
  ];
  return (
    <section style={{ background: 'var(--cfa-chalk)' }}>
      <div style={{ position: 'relative', maxWidth: 1160, margin: '0 auto', padding: 'clamp(56px,8vh,96px) clamp(16px,4vw,40px)' }}>
        <SectionHead eyebrow="Uit de community" title="Mensen blijven hier" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(20px,3vw,32px)' }}>
          {quotes.map((q) => (
            <figure key={q.n} style={{
              margin: 0, background: '#fff', border: '1px solid var(--border)',
              borderRadius: 6, padding: 'clamp(24px,3vw,36px)', boxShadow: 'var(--sh-1)',
            }}>
              <StarRow size={18} />
              <blockquote style={{
                margin: '18px 0 24px', fontFamily: "'Barlow', sans-serif", fontWeight: 500, fontSize: 'clamp(19px,2.2vw,24px)',
                lineHeight: 1.4, color: 'var(--fg1)', textWrap: 'pretty',
              }}>“{q.q}”</blockquote>
              <figcaption style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
                <img src={q.photo} alt={q.n}
                  style={{ width: 52, height: 52, flexShrink: 0, objectFit: 'cover', borderRadius: '50%', boxShadow: '0 0 0 2px var(--blue-100)' }} />
                <span>
                  <span style={{ display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 16, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--fg1)' }}>{q.n}</span>
                  <span style={{ display: 'block', fontFamily: "'Barlow', sans-serif", fontSize: 14, color: 'var(--cfa-blue)' }}>{q.m}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why CFA - split with photo
function WhyCFA() {
  const points = [
    { t: 'Kleine groepen', d: 'Maximaal 6 mensen per training. De coach ziet jou - geen anonieme zaal vol machines.' },
    { t: 'Coaches met ervaring', d: 'Professionele begeleiding, ook met blessures of beperkingen. We kiezen altijd een veilig alternatief.' },
    { t: 'Een community die je mist als je er niet bent', d: 'Mensen die je bij naam kennen en je weer naar binnen trekken op de dagen dat het tegenzit.' },
  ];
  return (
    <section style={{ background: 'var(--cfa-chalk)' }}>
      <div className="lp-why-grid" style={{
        maxWidth: 1160, margin: '0 auto', padding: 'clamp(56px,8vh,96px) clamp(16px,4vw,40px)',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,64px)', alignItems: 'center',
      }}>
        <div>
          <SectionHead eyebrow="Waarom CFA" title="Sporten werkt pas als je het volhoudt" />
          <div style={{ display: 'grid', gap: 22 }}>
            {points.map((p) => (
              <div key={p.t} style={{ display: 'flex', gap: 15 }}>
                <span style={{
                  width: 30, height: 30, flexShrink: 0, borderRadius: 4, background: 'var(--cfa-blue)',
                  display: 'grid', placeItems: 'center', marginTop: 2,
                }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </span>
                <div>
                  <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 19, letterSpacing: '.01em', color: 'var(--fg1)', margin: '0 0 5px' }}>{p.t}</h3>
                  <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 16, lineHeight: 1.5, color: 'var(--fg2)', margin: 0 }}>{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <img src="assets/lp-why-photo.webp" alt="Community bij CrossFit Alkmaar"
          style={{ width: '100%', aspectRatio: '4 / 3', height: 'auto', objectFit: 'cover', display: 'block', borderRadius: 6, boxShadow: 'var(--sh-2)' }} />
      </div>
    </section>
  );
}

// Community photo strip - "kom binnenkijken"
function PhotoBand() {
  const shots = [
    { id: 'box1', cap: 'de box / trainingsvloer' },
    { id: 'box2', cap: 'leden samen aan het trainen' },
    { id: 'box3', cap: 'een coach in actie' },
  ];
  return (
    <section style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'clamp(48px,7vh,88px) clamp(16px,4vw,40px)' }}>
        <SectionHead center eyebrow="Kom binnenkijken" title="Dit is waar je traint"
          sub="Echte mensen, echte trainingen - geen spiegelzaal vol vreemden." />
        <div className="lp-photoband" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(12px,1.6vw,18px)' }}>
          {shots.map((s) => (
            <img key={s.id} src={`assets/lp-band-${s.id}.webp`} alt={s.cap}
              style={{ width: '100%', aspectRatio: '4 / 3', height: 'auto', objectFit: 'cover', display: 'block', borderRadius: 6, boxShadow: 'var(--sh-1)' }} />
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { StatBar, SectionHead, Objections, Steps, Testimonials, WhyCFA, PhotoBand });
