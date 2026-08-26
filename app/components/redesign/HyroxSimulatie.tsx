"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import HyroxRegistration from "./HyroxRegistration";

const Plus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cfa-blue)" strokeWidth="2.5" strokeLinecap="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

type Props = {
  dateLabel: string;
  dateLong: string;
  registerUrl: string;
  // Sluitingsdatum van de inschrijving. Zet 'm alleen op de editie waar de
  // deadline nadert: toont een afteltimer in de hero + urgentieregels bij de
  // CTA's, en sluit de inschrijving automatisch zodra de teller op nul staat.
  deadline?: { iso: string; label: string };
  // Race-modus: inschrijving is dicht en het event is (bijna) bezig. Vervangt
  // alle inschrijf-CTA's door startlijst- + leaderboard-knoppen.
  raceLinks?: { startlijst: string; leaderboard: string };
};

export default function HyroxSimulatie({ dateLabel, dateLong, deadline, raceLinks }: Props) {
  const deadlineIso = deadline?.iso;
  const deadlineTs = deadlineIso ? new Date(deadlineIso).getTime() : 0;
  // null tot na de mount: de server kent de kliktijd van de bezoeker niet, dus
  // de teller rendert pas client-side (voorkomt een hydration-mismatch).
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    if (!deadlineIso) return;
    const tick = () => setNow(Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [deadlineIso]);

  const closed = !!deadline && now !== null && now >= deadlineTs;
  const rest = now !== null ? Math.max(0, deadlineTs - now) : 0;
  const dagen = Math.floor(rest / 86400000);
  const uren = Math.floor((rest % 86400000) / 3600000);
  const minuten = Math.floor((rest % 3600000) / 60000);
  const seconden = Math.floor((rest % 60000) / 1000);
  const urgentie = dagen >= 2 ? `Nog ${dagen} dagen om in te schrijven` : dagen === 1 ? "Nog 1 dag om in te schrijven" : "Laatste dag: schrijf je vandaag in";
  const pad = (n: number) => String(n).padStart(2, "0");

  const raceButtons = raceLinks && (
    <>
      <a href={raceLinks.startlijst} className="btn btn--outline btn--lg">Bekijk startlijst</a>
      <a href={raceLinks.leaderboard} className="btn btn--gold btn--lg">Live leaderboard</a>
    </>
  );

  return (
    <>
      <style>{`
        .hx-date { font-family: var(--font-head); font-weight: 700; text-transform: uppercase; letter-spacing: .08em; font-size: clamp(16px,1.9vw,22px); color: var(--hold); }
        .reviews-embed iframe { width: 100%; min-width: 100%; border: 0; }
        .stations { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; max-width: 760px; margin: 30px auto 0; }
        .stations .st { display: flex; align-items: center; gap: 10px; background: #fff; border: 1px solid var(--border); border-radius: 999px; padding: 11px 20px; box-shadow: var(--sh-1); font-family: var(--font-head); font-weight: 600; font-size: 15px; color: var(--fg1); }
        .stations .st b { font-family: var(--font-stat); color: var(--cfa-blue); }
        .hxpics { display: flex; flex-wrap: wrap; justify-content: center; gap: clamp(10px,1.8vw,20px); max-width: 880px; margin: 0 auto clamp(34px,5vw,52px); }
        .hxpics .pp { flex: 1 1 0; min-width: 0; flex-basis: 200px; max-width: 220px; background: #fff; padding: 8px 8px 12px; border-radius: 3px; box-shadow: 0 12px 26px rgba(11,15,30,.18), 0 2px 6px rgba(0,0,0,.1); transition: transform .25s cubic-bezier(.2,.7,.3,1), box-shadow .25s; }
        .hxpics .pp:nth-child(odd) { transform: rotate(-2.5deg); }
        .hxpics .pp:nth-child(even) { transform: rotate(2deg); }
        .hxpics .pp:hover { transform: rotate(0) translateY(-6px) scale(1.04); box-shadow: 0 22px 44px rgba(11,15,30,.28); z-index: 5; }
        .hxpics .ph { aspect-ratio: 9/16; border-radius: 1px; overflow: hidden; background: #000; }
        .hxpics .ph img { width: 100%; height: 100%; object-fit: cover; }
        @media (max-width: 560px) { .hxpics .pp { flex-basis: 42%; } }
        .info { display: grid; grid-template-columns: repeat(2,1fr); gap: clamp(16px,2.2vw,24px); max-width: 880px; margin: 0 auto; }
        .info .card { background: #fff; border: 1px solid var(--border); border-radius: var(--r-lg); box-shadow: var(--sh-1); padding: clamp(22px,2.6vw,28px); display: flex; gap: 16px; align-items: flex-start; }
        .info .card .ic { width: 28px; height: 28px; flex-shrink: 0; color: var(--cfa-blue); margin-top: 2px; }
        .info .card h3 { font-family: var(--font-head); font-weight: 700; text-transform: uppercase; font-size: 17px; margin: 0 0 7px; color: var(--fg1); }
        .info .card p { font-family: var(--font-body); font-size: 15.5px; line-height: 1.5; color: var(--fg2); margin: 0; }
        .info .card .small { color: var(--fg3); font-size: 13px; }
        .hx-band { position: relative; overflow: hidden; text-align: center; color: #fff; }
        .hx-band .bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .hx-band .scrim { position: absolute; inset: 0; background: rgba(11,15,30,.78); }
        .hx-band .inner { position: relative; z-index: 1; }
        .hx-band h2 { font-family: var(--font-display); font-weight: 400; text-transform: uppercase; font-size: clamp(30px,4.2vw,52px); line-height: .98; color: #fff; }
        .hx-band p { font-family: var(--font-body); font-size: clamp(16px,1.8vw,19px); color: rgba(234,237,244,.9); margin: 14px auto 26px; max-width: 560px; }
        .hx-cta-row { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; }
        .hx-deadline { display: flex; flex-direction: column; gap: 12px; align-items: center; margin: 20px 0 4px; }
        .hx-deadline .lbl { font-family: var(--font-head); font-weight: 700; text-transform: uppercase; letter-spacing: .08em; font-size: clamp(14px,1.6vw,17px); color: var(--hold); margin: 0; }
        .hx-count { display: flex; gap: clamp(8px,1.2vw,12px); justify-content: center; }
        .hx-count .seg { min-width: clamp(58px,7vw,72px); padding: 10px 6px 8px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.2); border-radius: 10px; text-align: center; }
        .hx-count .n { font-family: var(--font-stat); font-size: clamp(24px,3.2vw,34px); line-height: 1; color: #fff; }
        .hx-count .u { font-family: var(--font-head); font-weight: 600; font-size: 10.5px; text-transform: uppercase; letter-spacing: .08em; color: rgba(234,237,244,.75); margin-top: 5px; }
        .hx-urgent { font-family: var(--font-head); font-weight: 700; text-transform: uppercase; letter-spacing: .08em; font-size: 14px; color: var(--hold); margin: 0 0 14px; }
        @media (max-width: 720px) { .info { grid-template-columns: 1fr; } }
      `}</style>

      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-hyrox.jpg" alt="" fetchPriority="high" />
        <div className="scrim" />
        <div className="wrap inner">
          <p className="hx-date">{dateLabel}</p>
          <h1 style={{ marginTop: 12 }}>HYROX Simulatie Alkmaar</h1>
          <p className="lede">Een volledige HYROX race bij CrossFit Alkmaar. Open en Pro divisie. 8 rondes, 8 stations, 1 finish.</p>
          {deadline && (
            <div className="hx-deadline">
              <p className="lbl">{closed ? "De inschrijving is gesloten" : `Inschrijving sluit ${deadline.label}`}</p>
              {!closed && now !== null && (
                <div className="hx-count" role="timer" aria-label={`Nog ${dagen} dagen, ${uren} uur, ${minuten} minuten en ${seconden} seconden om in te schrijven`}>
                  <div className="seg"><div className="n">{dagen}</div><div className="u">{dagen === 1 ? "dag" : "dagen"}</div></div>
                  <div className="seg"><div className="n">{pad(uren)}</div><div className="u">uur</div></div>
                  <div className="seg"><div className="n">{pad(minuten)}</div><div className="u">min</div></div>
                  <div className="seg"><div className="n">{pad(seconden)}</div><div className="u">sec</div></div>
                </div>
              )}
            </div>
          )}
          <div className="cta-row">
            {raceLinks
              ? raceButtons
              : closed
                ? <a href="/hyrox-simulatie-24-oktober" className="btn btn--gold btn--lg">Bekijk de volgende editie: 24 oktober</a>
                : <HyroxRegistration eventDate={dateLong} className="btn btn--gold btn--lg" />}
          </div>
        </div>
      </section>

      <section className="sec sec--ivoor">
        <div className="wrap prose">
          <h2 className="sec-title" style={{ textAlign: "left", marginBottom: 18 }}>Een echte HYROX race, bij CrossFit Alkmaar</h2>
          <p>Op {dateLabel.toLowerCase()} organiseren we bij CrossFit Alkmaar een volledige HYROX Simulatie. Dezelfde opzet als een officiële HYROX wedstrijd: 8 rondes van 1 kilometer hardlopen, elk gevolgd door een functioneel station.</p>
          <p>Bereid je voor op je eerste HYROX, test je race-strategie of verbeter je tijd. De simulatie is de perfecte manier om te ervaren wat een HYROX-race inhoudt, zonder naar een officieel evenement te hoeven reizen.</p>
          <p>Iedereen is welkom, ook niet-leden. Je kunt individueel meedoen of als Doubles team, in de Open of Pro divisie.</p>
          {!raceLinks && (
            <p>We starten om 09:00 uur en werken met heats: op basis van je verwachte eindtijd en je divisie delen we alle deelnemers in starttijden in. In de week voor de start ontvang je jouw persoonlijke starttijd. Bij vorige edities was de laatste deelnemer rond 15:00 uur binnen.</p>
          )}
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap">
          <div className="hxpics">
            {[3, 1, 2, 4].map((n) => (
              <div key={n} className="pp">
                <div className="ph">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/hyrox-sim-${n}.jpg`} alt="Deelnemers tijdens de HYROX Simulatie bij CrossFit Alkmaar" loading="lazy" />
                </div>
              </div>
            ))}
          </div>
          <div className="center"><h2 className="sec-title">De 8 HYROX-stations</h2></div>
          <div className="stations">
            <span className="st"><b>1</b> SkiErg</span>
            <span className="st"><b>2</b> Sled Push</span>
            <span className="st"><b>3</b> Sled Pull</span>
            <span className="st"><b>4</b> Burpee Broad Jumps</span>
            <span className="st"><b>5</b> Rowing</span>
            <span className="st"><b>6</b> Farmers Carry</span>
            <span className="st"><b>7</b> Sandbag Lunges</span>
            <span className="st"><b>8</b> Wall Balls</span>
          </div>
          <p className="center" style={{ fontFamily: "var(--font-body)", color: "var(--fg2)", marginTop: 22 }}>Elk station wordt voorafgegaan door 1 kilometer hardlopen, totaal 8 km.</p>
        </div>
      </section>

      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Praktische informatie</h2></div>
          <div className="info" style={{ marginTop: 34 }}>
            <div className="card">
              <svg className="ic" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              <div><h3>Datum &amp; tijd</h3>{raceLinks
                ? <p>{dateLong}<br />Start om 10:30 uur</p>
                : <p>{dateLong}<br />Eerste heat om 09:00 uur<br />Laatste finishers rond 15:00 uur</p>}</div>
            </div>
            <div className="card">
              <svg className="ic" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <div><h3>Locatie</h3><p>CrossFit Alkmaar<br />Phoenixstraat 33<br />1812 PP Alkmaar</p></div>
            </div>
            <div className="card">
              <svg className="ic" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              <div><h3>Kosten</h3><p>CFA-leden: € 10,-<br />Niet-leden: € 35,-</p></div>
            </div>
            <div className="card">
              <svg className="ic" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              <div><h3>Voor wie</h3><p>Open en Pro divisie.<br />Individual of Doubles.<br />Iedereen welkom, ook niet-leden.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec hx-band">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-hyrox.jpg" alt="" />
        <div className="scrim" />
        <div className="wrap inner">
          <h2>CrossFit Alkmaar is een officiële HYROX gym</h2>
          <p>Deze simulatie organiseren we als onderdeel van ons HYROX-programma.</p>
          {deadline && !closed && <p className="hx-urgent">{urgentie}</p>}
          <div className="hx-cta-row">
            {raceLinks
              ? raceButtons
              : closed
                ? <a href="/hyrox-simulatie-24-oktober" className="btn btn--gold btn--lg">Bekijk de volgende editie: 24 oktober</a>
                : <HyroxRegistration eventDate={dateLong} className="btn btn--gold btn--lg" />}
          </div>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Wat onze leden zeggen</h2></div>
          <div className="reviews-embed" style={{ marginTop: 24 }}>
            <Script src="https://ghl.crossfitalkmaar.com/reputation/assets/review-widget.js" strategy="lazyOnload" />
            <iframe className="lc_reviews_widget" src="https://ghl.crossfitalkmaar.com/reputation/widgets/review_widget/elOOWDMoCEHJO4WhphRj" style={{ minWidth: "100%", width: "100%", border: 0 }} scrolling="no" title="Google Reviews" />
          </div>
        </div>
      </section>

      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Veelgestelde vragen</h2></div>
          <div className="faq" style={{ marginTop: 8 }}>
            <details open><summary>Wat is een HYROX Simulatie?<span className="ic"><Plus /></span></summary><div className="body">Een volledige nabootsing van een HYROX race: 8 rondes van 1 kilometer hardlopen, elk gevolgd door een functionele workout. Dezelfde opzet als een officiële HYROX wedstrijd.</div></details>
            <details><summary>Moet ik al ervaring hebben met HYROX?<span className="ic"><Plus /></span></summary><div className="body">Nee, de simulatie is geschikt voor zowel beginners als ervaren HYROX-atleten. Onze coaches begeleiden je bij elk station.</div></details>
            <details><summary>Kan ik als Doubles meedoen?<span className="ic"><Plus /></span></summary><div className="body">Ja, je kunt je inschrijven als individual of als Doubles team. Beide formats worden aangeboden.</div></details>
            <details><summary>Moet ik lid zijn van CrossFit Alkmaar?<span className="ic"><Plus /></span></summary><div className="body">Nee, de HYROX Simulatie is open voor iedereen. Ook niet-leden zijn welkom om mee te doen.</div></details>
            <details><summary>Wat kost de HYROX Simulatie?<span className="ic"><Plus /></span></summary><div className="body">Voor leden van CrossFit Alkmaar kost deelname € 10,-. Voor niet-leden is de prijs € 35,-.</div></details>
            <details><summary>Hoe laat start ik?<span className="ic"><Plus /></span></summary><div className="body">De eerste heat start om 09:00 uur. Alle deelnemers worden op basis van hun verwachte eindtijd en divisie in heats ingedeeld. In de week voor de start ontvang je bericht met jouw persoonlijke starttijd.</div></details>
            <details><summary>Hoe lang duurt een HYROX Simulatie?<span className="ic"><Plus /></span></summary><div className="body">De eerste heat start om 09:00 uur en bij vorige edities was het evenement rond 15:00 uur afgelopen. Je persoonlijke racetijd hangt af van je niveau, gemiddeld tussen de 60 en 120 minuten.</div></details>
            <details><summary>Welke divisies worden aangeboden?<span className="ic"><Plus /></span></summary><div className="body">We bieden de Open en Pro divisie aan. Je kunt individueel meedoen of als Doubles team.</div></details>
          </div>
        </div>
      </section>

      <section className="sec page-cta" style={{ ["--cta-photo" as string]: "url('/redesign/assets/header-hyrox.jpg')" } as React.CSSProperties}>
        <div className="wrap">
          <h2>Doe mee op {dateLabel.toLowerCase()}</h2>
          {raceLinks ? (
            <>
              <p>De inschrijving is gesloten. Volg de HYROX Simulatie bij CrossFit Alkmaar live.</p>
              <div className="hx-cta-row">{raceButtons}</div>
            </>
          ) : closed ? (
            <>
              <p>De inschrijving voor deze editie is gesloten. De volgende HYROX Simulatie is op zaterdag 24 oktober.</p>
              <a href="/hyrox-simulatie-24-oktober" className="btn btn--gold btn--lg">Bekijk de volgende editie: 24 oktober</a>
            </>
          ) : (
            <>
              <p>Schrijf je in voor de HYROX Simulatie bij CrossFit Alkmaar.</p>
              {deadline && <p className="hx-urgent">{urgentie}</p>}
              <HyroxRegistration eventDate={dateLong} className="btn btn--gold btn--lg" />
            </>
          )}
        </div>
      </section>
    </>
  );
}
