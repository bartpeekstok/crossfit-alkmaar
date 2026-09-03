import Link from "next/link";

// Eenmalig vooruitbetaalaanbod aan het einde van de Kickstart.
// Basis: CrossFit 15 credits per maand = EUR 127,50 (zie /faq).
const PRIJS_MAAND = "€127,50";
const PRIJS_VOORUIT = "€765";
const PRIJS_NORMAAL = "€892,50";
const PRIJS_EFFECTIEF = "€109,29";

const WA_BERICHT =
  "Hoi! Ik wil graag gebruikmaken van de Kickstart-aanbieding: 7 maanden trainen voor de prijs van 6.";
const WA_LINK = `https://wa.me/31722340560?text=${encodeURIComponent(WA_BERICHT)}`;

const Plus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cfa-blue)" strokeWidth="2.5" strokeLinecap="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

// Simpele icoontjes voor de vervolgopties (stroke-stijl, past bij .fcard .ic).
const IconPT = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="7" r="3.2" /><path d="M5.5 21c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
  </svg>
);
const IconSGT = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="2.6" /><circle cx="16" cy="8" r="2.6" /><path d="M3 20c0-2.8 2.2-5 5-5s5 2.2 5 5M13 20c0-2.8 2.2-5 5-5 1 0 1.9.2 2.7.6" />
  </svg>
);
const IconLes = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10" />
  </svg>
);
const IconVoeding = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8c0-2.5 2-4.5 4.5-4.5C16.5 6 14.5 8 12 8zM12 8c-1.5-2-4-2.5-6-1.5C4.5 9 6 14 8.5 18c1 1.6 2 2 3.5 2s2.5-.4 3.5-2c1.4-2.3 2.6-5 2-7" />
  </svg>
);

const OPTIES = [
  {
    icon: <IconPT />,
    title: "Personal Training",
    text: "Eén op één met je eigen coach. Elke sessie is volledig afgestemd op jouw doel, je tempo en eventuele blessures, en je krijgt continu correctie op je techniek. Je traint niets wat voor jou niet nodig is. Personal training kan ook naast de groepslessen, om aan een specifiek doel te werken.",
    who: "Voor wie maximale aandacht wil en het snelste resultaat. Meestal 1 tot 2 keer per week.",
  },
  {
    icon: <IconSGT />,
    title: "Small Group Training",
    text: "Trainen in een vaste groep van maximaal zes personen, met een coach die je bij naam kent en het programma op de groep aanpast. Dit lijkt het meest op de Kickstart zoals je die nu gewend bent.",
    who: "Voor wie de vertrouwde sfeer en persoonlijke begeleiding wil vasthouden. 2 of 3 keer per week.",
  },
  {
    icon: <IconLes />,
    title: "Groepslessen",
    text: "De reguliere CrossFit-lessen, elke dag op meerdere tijden. Een coach leidt de les, je traint samen met de rest van de groep en elke dag staat er een ander programma klaar. Zelf nadenken over je training hoeft nooit meer.",
    who: "Voor wie flexibel wil plannen en energie haalt uit de groep.",
  },
  {
    icon: <IconVoeding />,
    title: "Voedingsadvies",
    text: "Je training is de helft van het verhaal. Samen met een voedingscoach kijk je naar wat je eet op een gewone week en pas je aan wat echt verschil maakt. Geen streng dieet, wel een plan dat je volhoudt.",
    who: "Voor wie zijn resultaat wil versnellen.",
  },
];

const VOORWAARDEN = [
  `Geldt voor het CrossFit 3 keer per week abonnement, 15 keer per maand (${PRIJS_MAAND} per maand)`,
  "Je betaalt zes maanden in één keer vooruit en traint zeven maanden",
  "Alleen te gebruiken tijdens je eindgesprek aan het einde van je Kickstart",
  "Eenmalig aanbod, daarna vervalt het",
  "Na die zeven maanden loopt je lidmaatschap gewoon per maand door en is het maandelijks opzegbaar",
];

export default function KickstartVervolgPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero kv-hero">
        <style>{`
          .kv-hero .inner { max-width: 1040px; }
          .kv-hero p.lede { max-width: 780px; }
          .kv-opts { grid-template-columns: repeat(2, 1fr); max-width: 920px; margin: 30px auto 0; }
          .kv-card .who { margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--border); font-size: 16px; line-height: 1.55; color: var(--cfa-blue); font-weight: 600; }
          @media (max-width: 720px) { .kv-opts { grid-template-columns: 1fr; } }

          #aanbod .eyebrow { font-size: clamp(22px, 3.6vw, 34px); letter-spacing: .12em; line-height: 1; }
          #aanbod .sec-title { margin-top: 12px; }
          #aanbod .sec-sub { margin-top: 12px; }
          .kv-deal { max-width: 720px; margin: 34px auto 0; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.16); border-top: 4px solid var(--hold); border-radius: var(--r-lg); padding: clamp(26px, 3.4vw, 40px); }
          .kv-price { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: center; gap: 14px; }
          .kv-price .now { font-family: var(--font-display); font-weight: 400; font-size: clamp(52px, 8vw, 82px); line-height: .9; color: var(--hold); }
          .kv-price .was { font-family: var(--font-body); font-size: clamp(19px, 2.4vw, 24px); color: rgba(234,237,244,.62); text-decoration: line-through; }
          .kv-price .per { font-family: var(--font-head); font-weight: 700; text-transform: uppercase; letter-spacing: .1em; font-size: 13px; color: rgba(234,237,244,.8); }
          .kv-eff { font-family: var(--font-body); font-size: clamp(16px, 1.8vw, 18px); line-height: 1.55; color: rgba(234,237,244,.86); text-align: center; margin: 16px auto 0; max-width: 480px; }
          .kv-vw { list-style: none; margin: 26px 0 0; padding: 26px 0 0; border-top: 1px solid rgba(255,255,255,.14); display: grid; gap: 12px; }
          .kv-vw li { display: flex; gap: 12px; font-family: var(--font-body); font-size: clamp(15px, 1.6vw, 16.5px); line-height: 1.5; color: rgba(234,237,244,.9); }
          .kv-vw li svg { width: 19px; height: 19px; flex-shrink: 0; margin-top: 3px; color: var(--hold); }
          .kv-act { margin-top: 28px; text-align: center; }
          .kv-act p { font-family: var(--font-body); font-size: 15.5px; line-height: 1.55; color: rgba(234,237,244,.72); margin: 14px auto 0; max-width: 420px; }
        `}</style>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-groepslessen.jpg" alt="" style={{ objectPosition: "center 40%" }} />
        <div className="scrim" />
        <div className="wrap inner">
          <h1>Hoe ga je verder?</h1>
          <p className="lede">
            Je Kickstart zit er bijna op, goed bezig! Dit is hét moment om te kiezen hoe je verder gaat, zodat
            je je resultaten vasthoudt en blijft doorgroeien. Hieronder zie je je opties, plus een aanbod dat
            alleen nu geldt.
          </p>
          <div className="cta-row">
            <a className="btn btn--gold btn--lg" href="#aanbod">Bekijk het aanbod</a>
          </div>
        </div>
      </section>

      {/* WAAROM DOORGAAN */}
      <section className="sec sec--ivoor">
        <div className="wrap prose">
          <h2 className="sec-title" style={{ textAlign: "left", marginBottom: 18 }}>Je Kickstart is klaar. En nu?</h2>
          <p>
            Vier weken geleden stapte je hier voor het eerst binnen. Inmiddels ken je de bewegingen, weet je
            waar alles ligt en is trainen een vast onderdeel van je week geworden. Dat laatste is misschien wel
            de grootste winst: je hebt een gewoonte opgebouwd. De vraag is nu vooral hoe je die vasthoudt.
          </p>
          <p>
            Eerlijk is eerlijk: de conditie en kracht die je in vier weken opbouwt, verdwijnen sneller dan ze
            erbij kwamen. Val je na je Kickstart een paar weken stil, dan sta je bij een herstart vaak weer
            bijna op je oude punt en begin je opnieuw. Pak je meteen door, dan bouw je verder op wat er al
            staat. Dat verschil bepaalt uiteindelijk of je over een half jaar terugkijkt op vier leuke weken of
            op het begin van iets blijvends.
          </p>
          <h3>Hoe het praktisch werkt</h3>
          <p>
            In week 4 heb je je eindgesprek met je coach. Daarin kijken we eerst terug: hoe ging het, wat is er
            veranderd en hoe voel je je nu vergeleken met vier weken geleden. Daarna kijken we vooruit. We
            bespreken welke vorm van trainen past bij jouw doel, je agenda en je budget, en zetten dat meteen
            voor je klaar. Je hoeft dus niets zelf uit te zoeken, en er zit geen pauze tussen je laatste
            Kickstart-training en je eerste training daarna.
          </p>
          <h3>Wat je kunt verwachten in maand twee en drie</h3>
          <p>
            De bewegingen die nu nog aandacht kosten gaan vanzelf voelen, en dat is precies het moment waarop
            de gewichten wat omhoog kunnen. En rond maand drie merken de meeste mensen het vooral buiten de
            gym: de trap, de boodschappen, en hoeveel energie er 's avonds nog over is. Dat horen we dan graag
            tijdens je eerste 90-day check in!
          </p>
        </div>
      </section>

      {/* VERVOLGOPTIES */}
      <section className="sec sec--white">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">Kies je vervolg</h2>
            <p className="sec-sub">
              Bij CrossFit Alkmaar kun je op verschillende manieren verder. Tijdens je eindgesprek bespreken
              we samen wat het beste bij jou past.
            </p>
          </div>
          <div className="fcards kv-opts">
            {OPTIES.map((o) => (
              <div key={o.title} className="fcard kv-card reveal">
                <div className="ic">{o.icon}</div>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
                <p className="who">{o.who}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EENMALIG AANBOD */}
      <section className="sec sec--ink" id="aanbod">
        <div className="wrap">
          <div className="center reveal">
            <p className="eyebrow center-eb">Alleen nu, eenmalig</p>
            <h2 className="sec-title">7 maanden trainen, 6 maanden betalen</h2>
            <p className="sec-sub">
              Omdat je je Kickstart hebt afgemaakt, mag je nu eenmalig een half jaar vooruit betalen op het
              CrossFit 3 keer per week abonnement (15 keer per maand). Je krijgt er dan een volle maand
              gratis bij.
            </p>
          </div>
          <div className="kv-deal reveal">
            <div className="kv-price">
              <span className="was">{PRIJS_NORMAAL}</span>
              <span className="now">{PRIJS_VOORUIT}</span>
              <span className="per">voor 7 maanden</span>
            </div>
            <p className="kv-eff">
              Dat komt neer op {PRIJS_EFFECTIEF} per maand in plaats van {PRIJS_MAAND}. Je bespaart {PRIJS_MAAND},
              precies een maand gratis trainen.
            </p>
            <ul className="kv-vw">
              {VOORWAARDEN.map((v) => (
                <li key={v}><Check />{v}</li>
              ))}
            </ul>
            <div className="kv-act">
              <a className="btn btn--gold btn--lg" href={WA_LINK} target="_blank" rel="noopener noreferrer">
                Regel het via WhatsApp
              </a>
              <p>Of zeg het gewoon tegen je coach tijdens je eindgesprek, dan zetten we het daar voor je klaar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ OVER HET AANBOD */}
      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">Vragen over het aanbod</h2>
            <p className="sec-sub">De vragen die we het meest krijgen over vooruitbetalen. Zit jouw vraag er niet bij? Vraag het gerust aan je coach.</p>
          </div>
          <div className="faq">
            <details open className="reveal">
              <summary>Wat gebeurt er na die zeven maanden?<span className="ic"><Plus /></span></summary>
              <div className="body">Dan loopt je lidmaatschap gewoon door als maandabonnement en is het maandelijks opzegbaar, met een opzegtermijn van één kalendermaand. Wil je op dat moment opnieuw vooruit betalen? Dat kan altijd: vanaf dan kun je elk jaar kiezen om een jaar vooruit te betalen.</div>
            </details>
            <details className="reveal">
              <summary>Kan ik hier later nog gebruik van maken?<span className="ic"><Plus /></span></summary>
              <div className="body">Nee. Dit aanbod hoort bij het einde van je Kickstart en geldt alleen tijdens je eindgesprek. Daarna vervalt het. De mogelijkheid om een jaar vooruit te betalen blijft wel altijd bestaan.</div>
            </details>
            <details className="reveal">
              <summary>Wat als 15 credits te veel of te weinig blijkt?<span className="ic"><Plus /></span></summary>
              <div className="body">15 keer per maand komt neer op ongeveer drie keer trainen per week, hetzelfde ritme als tijdens je Kickstart. Twijfel je of dat past? Bespreek het in je eindgesprek, dan kijken we samen naar je agenda. Het vooruitbetaalvoordeel geldt alleen op dit abonnement.</div>
            </details>
            <details className="reveal">
              <summary>Kan ik tussentijds pauzeren?<span className="ic"><Plus /></span></summary>
              <div className="body">We pauzeren geen abonnementen. Raak je geblesseerd, laat het dan weten aan je coach: we kunnen bijna altijd om een blessure heen trainen en denken graag met je mee.</div>
            </details>
            <details className="reveal">
              <summary>Hoe regel ik de betaling?<span className="ic"><Plus /></span></summary>
              <div className="body">Dat spreken we samen af tijdens je eindgesprek. Je betaalt het bedrag in één keer vooruit, daarna zijn er zeven maanden lang geen incasso&apos;s.</div>
            </details>
          </div>
        </div>
      </section>

      {/* LEDENSERVICE / FAQ */}
      <section
        className="sec page-cta"
        style={{ ["--cta-photo" as string]: "url('/redesign/assets/header-community.jpg')", backgroundPosition: "center 30%" } as React.CSSProperties}
      >
        <div className="wrap">
          <h2>De meestgestelde vragen</h2>
          <p>Op onze ledenservice vind je antwoord op de meestgestelde vragen. Kom je er niet uit? App of mail ons gerust, we denken graag met je mee.</p>
          <Link className="btn btn--gold btn--lg" href="/faq">Naar de ledenservice</Link>
        </div>
      </section>
    </>
  );
}
