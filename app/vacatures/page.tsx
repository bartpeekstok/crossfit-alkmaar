"use client";

const VACATURES = [
  { t: "Coach", loc: "Alkmaar", type: "Full time" },
  { t: "Gym Manager", loc: "Alkmaar", type: "Full time" },
  { t: "Cliënt Succes Manager", loc: "Alkmaar", type: "Part time" },
  { t: "Voedingscoach/Diëtist(e)", loc: "Alkmaar", type: "Full time" },
];

const Pin = () => (
  <svg fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);
const Clock = () => (
  <svg fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
  </svg>
);

export default function VacaturesPage() {
  return (
    <>
      <style>{`
        .vacs { display: grid; gap: 14px; max-width: 820px; margin: 34px auto 0; }
        .vac { background: #fff; border: 1px solid var(--border); border-radius: var(--r-lg); box-shadow: var(--sh-1); padding: clamp(20px,2.4vw,28px); display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: space-between; transition: transform .15s, box-shadow .15s; }
        .vac:hover { transform: translateY(-3px); box-shadow: var(--sh-3); }
        .vac h3 { font-family: var(--font-head); font-weight: 700; text-transform: uppercase; font-size: 21px; margin: 0 0 8px; color: var(--fg1); }
        .vac .meta { display: flex; gap: 20px; font-family: var(--font-body); font-size: 14px; color: var(--fg3); }
        .vac .meta span { display: inline-flex; align-items: center; gap: 6px; }
        .vac .meta svg { width: 15px; height: 15px; color: var(--cfa-blue); }
        .mv { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(16px,2.4vw,28px); max-width: 920px; margin: 0 auto; }
        .mv .card { background: #fff; border: 1px solid var(--border); border-radius: var(--r-lg); box-shadow: var(--sh-1); padding: clamp(26px,3vw,36px); }
        .mv .card h2 { font-family: var(--font-display); font-weight: 400; text-transform: uppercase; font-size: 28px; margin: 0 0 14px; color: var(--fg1); }
        .mv .card p { font-family: var(--font-body); font-size: 16px; line-height: 1.6; color: var(--fg2); margin: 0; }
        @media (max-width: 720px) { .mv { grid-template-columns: 1fr; } }
      `}</style>

      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-community.jpg" alt="" style={{ objectPosition: "center 28%" }} />
        <div className="scrim" />
        <div className="wrap inner">
          <h1>Werken bij CrossFit Alkmaar</h1>
          <p className="lede">Wij tillen samen veel meer dan alleen gewichten.</p>
        </div>
      </section>

      <section className="sec sec--ivoor" style={{ paddingTop: "clamp(28px,4vw,46px)", paddingBottom: "clamp(14px,2vw,26px)" }}>
        <div className="wrap prose" style={{ textAlign: "center" }}>
          <p>Bij CrossFit Alkmaar zijn we altijd op zoek naar helden om ons team te versterken. Ervaring in de sportbranche is mooi meegenomen, maar geen vereiste. We leiden al onze coaches en andere functies intern op.</p>
          <p>Vind je het leuk om met mensen te werken en ze te zien groeien? Laat je gegevens hieronder achter, dan doen we snel samen een kop koffie.</p>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap">
          <div className="mv">
            <div className="card"><h2>Missie</h2><p>Bij CrossFit Alkmaar helpen we onze leden elke dag een beetje sterker te worden, niet alleen in de gym, maar ook daarbuiten. We creëren een plek waar iedereen zich welkom voelt, waar hard gewerkt wordt en waar we elkaar motiveren om het beste uit onszelf te halen.</p></div>
            <div className="card"><h2>Visie</h2><p>Wij geloven dat sport veel meer is dan alleen trainen. Het gaat om zelfvertrouwen, doorzettingsvermogen en samen groeien. Daarom bouwen we aan een community waarin coaches, leden én teamleden elkaar kennen, respecteren en uitdagen.</p></div>
          </div>
        </div>
      </section>

      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Openstaande vacatures</h2></div>
          <div className="vacs">
            {VACATURES.map((v) => (
              <div key={v.t} className="vac">
                <div>
                  <h3>{v.t}</h3>
                  <div className="meta">
                    <span><Pin />{v.loc}</span>
                    <span><Clock />{v.type}</span>
                  </div>
                </div>
                <a className="btn btn--primary" href="https://ghl.crossfitalkmaar.com/widget/survey/O0pkhZsi7YGCilm9DaWP" target="_blank" rel="noopener noreferrer">Solliciteer</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec page-cta" style={{ ["--cta-photo" as string]: "url('/redesign/assets/header-community.jpg')", backgroundPosition: "center 28%" } as React.CSSProperties}>
        <div className="wrap">
          <h2>Staat jouw droombaan er niet tussen?</h2>
          <p>Stuur ons een open sollicitatie. We zijn altijd benieuwd naar gemotiveerde mensen!</p>
          <a className="btn btn--gold btn--lg" href="mailto:info@crossfitalkmaar.nl">Stuur een mail</a>
        </div>
      </section>
    </>
  );
}
