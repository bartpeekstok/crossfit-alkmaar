"use client";

import Script from "next/script";
import HardestMileRegistration from "../components/redesign/HardestMileRegistration";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";

const DATE_LABEL = "Zondag 13 september 2026";

const Plus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cfa-blue)" strokeWidth="2.5" strokeLinecap="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export default function HardestMilePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SportsEvent",
        name: "The Hardest Mile",
        description: "Eén mijl, vier onderdelen: 4x 400 meter burpees, lunges, bearcrawl en hardlopen op de atletiekbaan van AV Hylas in Alkmaar. Voor alle niveaus.",
        startDate: "2026-09-13T12:30:00+02:00",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: { "@type": "Place", name: "Atletiekvereniging Hylas", address: { "@type": "PostalAddress", addressLocality: "Alkmaar", addressCountry: "NL" } },
        organizer: { "@type": "Organization", name: "CrossFit Alkmaar", url: "https://www.crossfitalkmaar.com" },
        offers: [
          { "@type": "Offer", name: "CFA-leden", price: "10", priceCurrency: "EUR" },
          { "@type": "Offer", name: "Niet-leden", price: "30", priceCurrency: "EUR" },
        ],
        image: "https://www.crossfitalkmaar.com/redesign/assets/header-hardest-mile.jpg",
      }) }} />

      <style>{`
        .thm-date-lbl { font-family: var(--font-head); font-weight: 700; text-transform: uppercase; letter-spacing: .08em; font-size: clamp(16px,1.9vw,22px); color: var(--hold); }
        .reviews-embed iframe { width: 100%; min-width: 100%; border: 0; }
        .rondes { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; max-width: 760px; margin: 30px auto 0; }
        .rondes .st { display: flex; align-items: center; gap: 10px; background: #fff; border: 1px solid var(--border); border-radius: 999px; padding: 11px 20px; box-shadow: var(--sh-1); font-family: var(--font-head); font-weight: 600; font-size: 15px; color: var(--fg1); }
        .rondes .st b { font-family: var(--font-stat); color: var(--cfa-blue); }
        .info { display: grid; grid-template-columns: repeat(2,1fr); gap: clamp(16px,2.2vw,24px); max-width: 880px; margin: 0 auto; }
        .info .card { background: #fff; border: 1px solid var(--border); border-radius: var(--r-lg); box-shadow: var(--sh-1); padding: clamp(22px,2.6vw,28px); display: flex; gap: 16px; align-items: flex-start; }
        .info .card .ic { width: 28px; height: 28px; flex-shrink: 0; color: var(--cfa-blue); margin-top: 2px; }
        .info .card h3 { font-family: var(--font-head); font-weight: 700; text-transform: uppercase; font-size: 17px; margin: 0 0 7px; color: var(--fg1); }
        .info .card p { font-family: var(--font-body); font-size: 15.5px; line-height: 1.5; color: var(--fg2); margin: 0; }
        .thm-band { position: relative; overflow: hidden; text-align: center; color: #fff; }
        .thm-band .bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
        .thm-band .scrim { position: absolute; inset: 0; background: rgba(11,15,30,.78); }
        .thm-band .inner { position: relative; z-index: 1; }
        .thm-band h2 { font-family: var(--font-display); font-weight: 400; text-transform: uppercase; font-size: clamp(30px,4.2vw,52px); line-height: .98; color: #fff; }
        .thm-band p { font-family: var(--font-body); font-size: clamp(16px,1.8vw,19px); color: rgba(234,237,244,.9); margin: 14px auto 26px; max-width: 560px; }
        .thm-video { max-width: 880px; aspect-ratio: 16 / 9; margin: 30px auto 0; border-radius: var(--r-lg); overflow: hidden; box-shadow: var(--sh-2); }
        @media (max-width: 720px) { .info { grid-template-columns: 1fr; } }
      `}</style>

      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-hardest-mile.jpg" alt="" fetchPriority="high" />
        <div className="scrim" />
        <div className="wrap inner">
          <p className="thm-date-lbl">{DATE_LABEL}</p>
          <h1 style={{ marginTop: 12 }}>The Hardest Mile</h1>
          <p className="lede">Eén mijl, vier onderdelen: burpees, lunges, bearcrawl en hardlopen. Op de atletiekbaan van AV Hylas in Alkmaar. Voor alle niveaus, ook niet-leden.</p>
          <div className="cta-row">
            <HardestMileRegistration eventDate={DATE_LABEL} className="btn btn--gold btn--lg" />
          </div>
        </div>
      </section>

      <section className="sec sec--ivoor">
        <div className="wrap prose">
          <h2 className="sec-title" style={{ textAlign: "left", marginBottom: 18 }}>De zwaarste mijl van Alkmaar</h2>
          <p>Op zondag 13 september om 12:30 organiseert CrossFit Alkmaar The Hardest Mile op de atletiekbaan van Atletiekvereniging Hylas. Het concept is simpel, de uitvoering niet: je legt één mijl af, verdeeld over vier rondes van 400 meter. Elke ronde doe je op een andere manier vooruit.</p>
          <p>Een ronde burpees, een ronde lunges, een ronde bearcrawl en tot slot een ronde hardlopen. Geen ingewikkelde techniek, geen zware gewichten: gewoon jij, de baan en de klok.</p>
          <p>En je gaat niet naar huis met alleen verzuurde benen. We klokken je officiële eindtijd en je krijgt een gave actiefoto met je eindtijd in beeld. Bewijs voor je Instagram, en de lat voor de volgende editie.</p>
          <p>Iedereen kan meedoen, ook als je geen lid bent van CrossFit Alkmaar. Je bepaalt zelf je tempo, dus elk niveau is welkom. Opgeven doe je hieronder, betalen gaat direct online via iDEAL.</p>
        </div>
      </section>

      <section className="sec sec--white">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">De 4 rondes van 400 meter</h2></div>
          <div className="rondes">
            <span className="st"><b>1</b> Burpees</span>
            <span className="st"><b>2</b> Lunges</span>
            <span className="st"><b>3</b> Bearcrawl</span>
            <span className="st"><b>4</b> Hardlopen</span>
          </div>
          <p className="center" style={{ fontFamily: "var(--font-body)", color: "var(--fg2)", marginTop: 22 }}>4x 400 meter = 1 mijl. In je eigen tempo, samen met de rest van de groep.</p>
          <div className="thm-video">
            <TrackedYouTubeEmbed videoId="c2pWYwKM0Pk" title="The Hardest Mile" />
          </div>
        </div>
      </section>

      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center"><h2 className="sec-title">Praktische informatie</h2></div>
          <div className="info" style={{ marginTop: 34 }}>
            <div className="card">
              <svg className="ic" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              <div><h3>Datum &amp; tijd</h3><p>{DATE_LABEL}<br />Start om 12:30 uur</p></div>
            </div>
            <div className="card">
              <svg className="ic" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <div><h3>Locatie</h3><p>Atletiekvereniging Hylas<br />Alkmaar</p></div>
            </div>
            <div className="card">
              <svg className="ic" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              <div><h3>Kosten</h3><p>CFA-leden: € 10,-<br />Niet-leden: € 30,-<br />Je betaalt direct online via iDEAL.</p></div>
            </div>
            <div className="card">
              <svg className="ic" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              <div><h3>Voor wie</h3><p>Alle niveaus.<br />Iedereen welkom, ook niet-leden.<br />Je loopt in je eigen tempo.</p></div>
            </div>
            <div className="card">
              <svg className="ic" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 2.5" /><path d="M9 2h6" /></svg>
              <div><h3>Tijdregistratie</h3><p>We klokken je officiële eindtijd. Jouw tijd, zwart op wit.</p></div>
            </div>
            <div className="card">
              <svg className="ic" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
              <div><h3>Finisher-foto</h3><p>Een gave actiefoto van jou op de baan, met je eindtijd in beeld.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec thm-band">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-hardest-mile.jpg" alt="" />
        <div className="scrim" />
        <div className="wrap inner">
          <h2>Durf jij de mijl aan?</h2>
          <p>Schrijf je in, reken direct af en je plek staat vast.</p>
          <HardestMileRegistration eventDate={DATE_LABEL} className="btn btn--gold btn--lg" />
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
            <details open><summary>Wat is The Hardest Mile?<span className="ic"><Plus /></span></summary><div className="body">Een event van CrossFit Alkmaar op de atletiekbaan van AV Hylas. Je legt één mijl af in vier rondes van 400 meter: een ronde burpees, een ronde lunges, een ronde bearcrawl en een ronde hardlopen.</div></details>
            <details><summary>Moet ik lid zijn van CrossFit Alkmaar?<span className="ic"><Plus /></span></summary><div className="body">Nee, iedereen kan meedoen. Ook niet-leden zijn van harte welkom.</div></details>
            <details><summary>Wat kost deelname?<span className="ic"><Plus /></span></summary><div className="body">Voor leden van CrossFit Alkmaar kost deelname € 10,-. Voor niet-leden is de prijs € 30,-. Je rekent direct online af via iDEAL.</div></details>
            <details><summary>Hoe weet het systeem dat ik lid ben?<span className="ic"><Plus /></span></summary><div className="body">We herkennen je op je e-mailadres. Gebruik bij het inschrijven het e-mailadres dat bij ons bekend is, dan rekent het systeem automatisch het ledentarief.</div></details>
            <details><summary>Is dit ook iets voor beginners?<span className="ic"><Plus /></span></summary><div className="body">Zeker. Je bepaalt zelf je tempo en de bewegingen zijn voor elk niveau te doen. De sfeer en de groep slepen je erdoorheen.</div></details>
            <details><summary>Krijg ik mijn eindtijd te zien?<span className="ic"><Plus /></span></summary><div className="body">Ja. We klokken je officiële eindtijd en je krijgt na afloop een actiefoto met je eindtijd in beeld. Zo heb je bewijs van je prestatie en een doel voor de volgende editie.</div></details>
            <details><summary>Waar moet ik zijn?<span className="ic"><Plus /></span></summary><div className="body">Op de atletiekbaan van Atletiekvereniging Hylas in Alkmaar. We starten om 12:30 uur.</div></details>
          </div>
        </div>
      </section>

      <section className="sec page-cta" style={{ ["--cta-photo" as string]: "url('/redesign/assets/header-hardest-mile.jpg')" } as React.CSSProperties}>
        <div className="wrap">
          <h2>Doe mee op {DATE_LABEL.toLowerCase()}</h2>
          <p>Schrijf je in voor The Hardest Mile en zet jouw tijd neer.</p>
          <HardestMileRegistration eventDate={DATE_LABEL} className="btn btn--gold btn--lg" />
        </div>
      </section>
    </>
  );
}
