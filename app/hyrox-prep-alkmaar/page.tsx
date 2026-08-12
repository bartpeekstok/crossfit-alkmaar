import Link from "next/link";

// TODO bij livegang: SIGNUP_URL vervangen door de echte inschrijf/betaalflow
// (bv. betaallink via hyrox-betaling-backend of GHL-formulier).
const SIGNUP_URL =
  "https://wa.me/31722340560?text=" +
  encodeURIComponent("Hoi! Ik wil meedoen met HYROX Prep Alkmaar.");

const Plus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cfa-blue)" strokeWidth="2.5" strokeLinecap="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const Cross = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const KALENDER = [
  { week: 1, zo: "4 oktober", wo: "7 oktober" },
  { week: 2, zo: "11 oktober", wo: "14 oktober" },
  { week: 3, zo: "18 oktober", wo: "21 oktober" },
  { week: 4, zo: "25 oktober", wo: "28 oktober" },
  { week: 5, zo: "1 november", wo: "4 november" },
  { week: 6, zo: "8 november", wo: "11 november" },
  { week: 7, zo: "15 november", wo: "18 november" },
  { week: 8, zo: "22 november", wo: "25 november" },
];

const EXTRAS = [
  "Een pacingplan op basis van jouw simulatietijden, niet op basis van een gemiddelde",
  "Uitleg over race-indeling, roxzone, transities en waar de meeste tijd verloren gaat",
  "Adviezen over voeding en tapering in de week voor de race",
  "Een groep die op dezelfde dag hetzelfde doet als jij",
];

const JA = [
  "Een ticket hebt voor HYROX Utrecht, solo, doubles of relay",
  "Twijfelt over een ticket en wil weten of je het aankan",
  "Al eerder een HYROX hebt gedaan en deze keer sneller wil",
  "Redelijk fit bent en twee keer per week kunt trainen",
];

const FAQ = [
  {
    q: "Moet ik lid zijn van CrossFit Alkmaar?",
    a: <>Nee. Dit programma staat los van een lidmaatschap en is open voor iedereen.</>,
  },
  {
    q: "Ik heb nog geen HYROX-ticket. Kan ik toch meedoen?",
    a: <>Ja, maar regel je ticket snel. HYROX Utrecht verkoopt uit en wij verkopen geen tickets. Je koopt die zelf via hyrox.com.</>,
  },
  {
    q: "Wat als ik een training mis?",
    a: <>Dat gebeurt. Je krijgt het programma van die week mee zodat je hem zelf kunt inhalen. Meer dan vier sessies missen en je haalt er te weinig uit.</>,
  },
  {
    q: "Ik doe doubles. Werkt dat?",
    a: <>Ja. Sterker nog, kom samen. In de simulaties trainen we het doubles-formaat apart, inclusief wisselstrategie.</>,
  },
  {
    q: "Ik ben al lid en heb een onbeperkt abonnement. Krijg ik korting?",
    a: <>Nee. Dit is een specialistisch programma bovenop je lidmaatschap, met eigen coaching, eigen programmering en een eigen plek in de agenda.</>,
  },
  {
    q: "Wat als het programma niet doorgaat?",
    a: <>Bij minder dan acht inschrijvingen gaat het niet door en krijg je je geld volledig terug.</>,
  },
];

export default function HyroxPrepPage() {
  return (
    <>
      <style>{`
        .hp-note { font-family: var(--font-body); font-size: 14px; color: rgba(234,237,244,.75); margin-top: 14px; }
        .hp-eyebrow { font-family: var(--font-head); font-weight: 700; text-transform: uppercase; letter-spacing: .08em; font-size: clamp(15px,1.8vw,20px); color: var(--hold); }
        .hp-sessies { display: grid; grid-template-columns: repeat(2,1fr); gap: clamp(16px,2.2vw,24px); max-width: 920px; margin: 34px auto 0; }
        .hp-sessies .card { background: #fff; border: 1px solid var(--border); border-radius: var(--r-lg); box-shadow: var(--sh-1); padding: clamp(22px,2.8vw,30px); }
        .hp-sessies .dag { font-family: var(--font-head); font-weight: 700; text-transform: uppercase; letter-spacing: .06em; font-size: 14px; color: var(--cfa-blue); margin: 0 0 8px; }
        .hp-sessies h3 { font-family: var(--font-head); font-weight: 700; text-transform: uppercase; font-size: 19px; margin: 0 0 10px; color: var(--fg1); }
        .hp-sessies p { font-family: var(--font-body); font-size: 15.5px; line-height: 1.55; color: var(--fg2); margin: 0; }
        @media (max-width: 720px) { .hp-sessies { grid-template-columns: 1fr; } }
        .hp-extras { max-width: 720px; margin: 18px auto 0; display: grid; gap: 10px; padding: 0; list-style: none; }
        .hp-extras li { display: flex; gap: 12px; align-items: flex-start; font-family: var(--font-body); font-size: 16.5px; line-height: 1.5; color: var(--fg2); }
        .hp-extras svg, .hp-lijst svg { width: 20px; height: 20px; flex-shrink: 0; margin-top: 3px; }
        .hp-extras svg { color: var(--cfa-blue); }
        .hp-cal { width: 100%; max-width: 640px; margin: 30px auto 0; border-collapse: collapse; background: #fff; border-radius: var(--r-lg); overflow: hidden; box-shadow: var(--sh-1); font-family: var(--font-body); }
        .hp-cal th { font-family: var(--font-head); font-weight: 700; text-transform: uppercase; letter-spacing: .05em; font-size: 13.5px; background: var(--cfa-blue); color: #fff; padding: 13px 18px; text-align: left; }
        .hp-cal td { padding: 12px 18px; border-top: 1px solid var(--border); font-size: 15.5px; color: var(--fg2); }
        .hp-cal td:first-child { font-family: var(--font-stat); font-weight: 700; color: var(--fg1); }
        .hp-wie { display: grid; grid-template-columns: repeat(2,1fr); gap: clamp(16px,2.2vw,24px); max-width: 920px; margin: 34px auto 0; }
        @media (max-width: 720px) { .hp-wie { grid-template-columns: 1fr; } }
        .hp-wie .card { background: #fff; border: 1px solid var(--border); border-radius: var(--r-lg); box-shadow: var(--sh-1); padding: clamp(22px,2.8vw,30px); }
        .hp-wie h3 { font-family: var(--font-head); font-weight: 700; text-transform: uppercase; font-size: 18px; margin: 0 0 14px; color: var(--fg1); }
        .hp-lijst { display: grid; gap: 10px; padding: 0; margin: 0; list-style: none; }
        .hp-lijst li { display: flex; gap: 12px; align-items: flex-start; font-family: var(--font-body); font-size: 15.5px; line-height: 1.5; color: var(--fg2); }
        .hp-lijst.ja svg { color: #1a9b52; }
        .hp-lijst.nee svg { color: #c23b3b; }
        .hp-prijs { max-width: 620px; margin: 34px auto 0; background: #fff; border: 1px solid var(--border); border-radius: var(--r-lg); box-shadow: var(--sh-3); padding: clamp(28px,4vw,44px); text-align: center; }
        .hp-prijs .bedrag { font-family: var(--font-display); font-size: clamp(52px,7vw,76px); line-height: 1; color: var(--fg1); }
        .hp-prijs .bedrag span { font-size: .45em; vertical-align: super; }
        .hp-prijs .sub { font-family: var(--font-head); font-weight: 700; text-transform: uppercase; letter-spacing: .06em; font-size: 14px; color: var(--cfa-blue); margin-top: 6px; }
        .hp-prijs p { font-family: var(--font-body); font-size: 16px; line-height: 1.55; color: var(--fg2); margin: 16px 0 0; }
      `}</style>

      {/* HERO */}
      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-hyrox.jpg" alt="" fetchPriority="high" />
        <div className="scrim" />
        <div className="wrap inner">
          <p className="hp-eyebrow">HYROX Prep Alkmaar</p>
          <h1 style={{ marginTop: 12 }}>Klaar voor HYROX Utrecht. In 8 weken.</h1>
          <p className="lede">
            Een gericht voorbereidingsprogramma voor iedereen die op 26 tot en met 30 november de vloer
            van de Jaarbeurs op stapt. Twee trainingen per week, maximaal 16 deelnemers, van 4 oktober
            tot en met 25 november.
          </p>
          <div className="cta-row">
            <a className="btn btn--gold btn--lg" href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">Ik doe mee</a>
          </div>
          <p className="hp-note">Maximaal 16 plekken. Inschrijving sluit 26 september.</p>
        </div>
      </section>

      {/* BLOK 1: HET PROBLEEM */}
      <section className="sec sec--ivoor">
        <div className="wrap prose">
          <h2 className="sec-title" style={{ textAlign: "left", marginBottom: 18 }}>Je hebt je ticket. Nu het lastige deel.</h2>
          <p>
            De meeste mensen die HYROX voor het eerst doen, trainen verkeerd. Ze lopen hun kilometers los,
            ze doen hun krachtwerk apart, en dan komen ze op de racevloer erachter dat die twee dingen
            niets met elkaar te maken hadden.
          </p>
          <p>
            Want HYROX is geen hardloopwedstrijd met wat oefeningen ertussen. Het is acht keer een kilometer
            lopen op benen die net 100 wall balls hebben gedaan, of een sled van 150 kilo hebben geduwd.
            Dat noemen we compromised running, en dat is de hele sport.
          </p>
          <p>
            Daar train je alleen voor door het te doen. Met de juiste stations, in de juiste volgorde,
            met iemand die naar je pacing kijkt.
          </p>
        </div>
      </section>

      {/* BLOK 2: HET PROGRAMMA */}
      <section className="sec sec--white">
        <div className="wrap">
          <div className="center">
            <h2 className="sec-title">Acht weken, zestien sessies, één doel</h2>
            <p className="sec-sub">
              Dit is geen open training waar je zelf maar wat doet. Het is een opgebouwd programma dat
              toewerkt naar jouw racedag.
            </p>
          </div>
          <div className="hp-sessies">
            <div className="card">
              <p className="dag">Woensdag, 19:00 tot 20:00</p>
              <h3>Kracht en techniek</h3>
              <p>
                Sled push en sled pull, wall balls, burpee broad jumps, farmers carry, sandbag lunges,
                roeitechniek. We slijpen elk station bij tot je er geen seconden meer op verliest.
                Techniek op de sled scheelt makkelijk twee minuten op je eindtijd.
              </p>
            </div>
            <div className="card">
              <p className="dag">Zondag, 09:00 tot 10:30</p>
              <h3>Compromised running en simulatie</h3>
              <p>
                Hier komt alles samen. Runblokken, stationblokken en om de twee weken een halve of hele
                racesimulatie, zodat je precies weet wat er op 26 november gaat gebeuren.
              </p>
            </div>
          </div>
          <div className="center" style={{ marginTop: 44 }}>
            <h3 style={{ fontFamily: "var(--font-head)", fontWeight: 700, textTransform: "uppercase", fontSize: 20, color: "var(--fg1)" }}>
              Wat je verder krijgt
            </h3>
          </div>
          <ul className="hp-extras">
            {EXTRAS.map((e) => (
              <li key={e}><Check />{e}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* BLOK 3: TRAININGSDATA */}
      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center">
            <h2 className="sec-title">De volledige kalender</h2>
          </div>
          <table className="hp-cal">
            <thead>
              <tr><th>Week</th><th>Zondag</th><th>Woensdag</th></tr>
            </thead>
            <tbody>
              {KALENDER.map((w) => (
                <tr key={w.week}><td>{w.week}</td><td>{w.zo}</td><td>{w.wo}</td></tr>
              ))}
            </tbody>
          </table>
          <p className="center" style={{ fontFamily: "var(--font-body)", color: "var(--fg2)", marginTop: 22 }}>
            Laatste training op woensdag 25 november. Daarna nog even rust en dan sta je aan de start.
          </p>
        </div>
      </section>

      {/* BLOK 4: VOOR WIE */}
      <section className="sec sec--white">
        <div className="wrap">
          <div className="center">
            <h2 className="sec-title">Is dit iets voor jou?</h2>
          </div>
          <div className="hp-wie">
            <div className="card">
              <h3>Ja, als je:</h3>
              <ul className="hp-lijst ja">
                {JA.map((j) => (
                  <li key={j}><Check />{j}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Nee, als je:</h3>
              <ul className="hp-lijst nee">
                <li><Cross /><span>Nog nooit gestructureerd hebt getraind. Begin dan met onze <Link href="/kickstart" style={{ color: "var(--cfa-blue)", fontWeight: 600 }}>Kickstart</Link></span></li>
                <li><Cross />Op dit moment een blessure hebt die belasting op de benen uitsluit</li>
                <li><Cross />Niet minimaal twaalf van de zestien sessies kunt halen</li>
              </ul>
            </div>
          </div>
          <p className="center" style={{ fontFamily: "var(--font-body)", color: "var(--fg2)", marginTop: 26, maxWidth: 680, marginLeft: "auto", marginRight: "auto" }}>
            Je hoeft geen lid te zijn van CrossFit Alkmaar en je hoeft geen CrossFit-ervaring te hebben.
            Je moet wel willen afzien.
          </p>
        </div>
      </section>

      {/* BLOK 5: PRIJS */}
      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center">
            <h2 className="sec-title">Wat het kost</h2>
          </div>
          <div className="hp-prijs">
            <div className="bedrag"><span>€</span> 249</div>
            <div className="sub">voor het volledige programma</div>
            <p>
              Zestien begeleide sessies, een persoonlijk pacingplan en toegang tot alle apparatuur.
              Dat is 15,50 euro per training.
            </p>
            <p>Ter vergelijking: één losse personal training kost meer dan drie sessies hier.</p>
            <p>Betalen kan in één keer of in twee termijnen.</p>
            <div style={{ marginTop: 26 }}>
              <a className="btn btn--gold btn--lg" href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">Reserveer mijn plek</a>
            </div>
          </div>
        </div>
      </section>

      {/* BLOK 6: WAAROM CFA */}
      <section className="sec sec--white">
        <div className="wrap prose">
          <h2 className="sec-title" style={{ textAlign: "left", marginBottom: 18 }}>Waarom je dit hier doet</h2>
          <p>
            CrossFit Alkmaar bestaat meer dan twaalf jaar. We hebben ruim 260 reviews en een community
            waar mensen jaren blijven, niet weken.
          </p>
          <p>
            We hebben alle stations in huis: sleds, skiergs, roeiers, sandbags, wall balls en de ruimte
            om ze in de juiste volgorde achter elkaar te zetten. Je traint dus op precies het materiaal
            dat je op de racevloer tegenkomt.
          </p>
          <p>
            En je traint in een groep van maximaal zestien. Dat betekent dat de coach je pacing
            daadwerkelijk ziet, en dat je op zondag niet in de rij staat voor een sled.
          </p>
        </div>
      </section>

      {/* BLOK 7: FAQ */}
      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Veelgestelde vragen</h2></div>
          <div className="faq" style={{ marginTop: 8 }}>
            {FAQ.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}<span className="ic"><Plus /></span></summary>
                <div className="body">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* AFSLUITING */}
      <section className="sec page-cta" style={{ ["--cta-photo" as string]: "url('/redesign/assets/header-hyrox.jpg')" } as React.CSSProperties}>
        <div className="wrap">
          <h2>Zestien plekken. Inschrijving sluit 26 september.</h2>
          <p>We houden de groep klein omdat het anders niet werkt. Vol is vol.</p>
          <a className="btn btn--gold btn--lg" href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">Ik doe mee</a>
          <p style={{ fontSize: 15, marginTop: 24, marginBottom: 0 }}>
            Vragen? App ons via{" "}
            <a href="https://wa.me/31722340560" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", fontWeight: 600 }}>WhatsApp</a>{" "}
            of loop binnen aan de Phoenixstraat 33 in Alkmaar.
          </p>
        </div>
      </section>
    </>
  );
}
