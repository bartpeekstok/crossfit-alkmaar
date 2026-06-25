import Script from "next/script";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";

const Plus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--cfa-blue)" strokeWidth="2.5" strokeLinecap="round">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

// TODO: vervang door de echte YouTube-ID zodra de video klaar is.
const VIDEO_ID = "VIDEO_ID_PLACEHOLDER";

export default function KickstartWelkomPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero kw-hero">
        <style>{`
          .kw-hero .inner { max-width: 1140px; }
          .kw-hero h1 { white-space: nowrap; }
          .kw-hero p.lede { max-width: 780px; }
          @media (max-width: 560px) {
            .kw-hero h1 { white-space: normal; }
          }
        `}</style>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-community.jpg" alt="" style={{ objectPosition: "center 35%" }} />
        <div className="scrim" />
        <div className="wrap inner">
          <h1>Welkom bij CrossFit Alkmaar</h1>
          <p className="lede">
            Over een paar dagen begin je aan de 28 day kickstart. Hieronder de belangrijkste informatie zodat
            je goed voorbereid aan de start staat. Tot snel!
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">Bekijk dit eerst</h2>
            <p className="sec-sub">
              [PLACEHOLDER] Korte uitleg waar de video over gaat: wat je kunt verwachten, wat je meeneemt en
              hoe je je voorbereidt op je eerste week.
            </p>
          </div>
          <div
            className="reveal"
            style={{
              maxWidth: 860,
              margin: "28px auto 0",
              aspectRatio: "16 / 9",
              borderRadius: "var(--r-lg)",
              overflow: "hidden",
              boxShadow: "var(--sh-3)",
              background: "#000",
            }}
          >
            <TrackedYouTubeEmbed videoId={VIDEO_ID} title="Kickstart voorbereiding" autoplay={false} />
          </div>
        </div>
      </section>

      {/* CHECK-IN BOEKEN */}
      <section className="sec sec--white">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">Boek je check-in in week 4</h2>
            <p className="sec-sub">
              Via de kalender hieronder boek je makkelijk je check-in gesprek voor in week 4 van je Kickstart.
              We spreken je graag om te horen hoe je je voelt, hoe het bevallen is en om samen te kijken hoe we
              na de Kickstart verder kunnen gaan.
            </p>
          </div>
          {/* GHL-boekingskalender. form_embed.js past de iframe-hoogte automatisch aan. */}
          <div
            className="reveal"
            style={{
              maxWidth: 820,
              margin: "28px auto 0",
              borderRadius: "var(--r-lg)",
              overflow: "hidden",
              boxShadow: "var(--sh-1)",
              background: "#fff",
            }}
          >
            <iframe
              src="https://ghl.crossfitalkmaar.com/widget/booking/bBgBvZjuga1BPExTMj8b"
              title="Boek je check-in gesprek"
              id="FNevcGH4ZFnXQIJwGJRP_1782376258850"
              scrolling="no"
              style={{ width: "100%", minHeight: 700, border: "none" }}
            />
          </div>
          <Script src="https://ghl.crossfitalkmaar.com/js/form_embed.js" strategy="afterInteractive" />
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">Veelgestelde vragen</h2>
            <p className="sec-sub">De meestgestelde vragen voor je Kickstart op een rij. Mis je iets? Stuur ons gerust even een berichtje.</p>
          </div>
          <div className="faq">
            <details open className="reveal">
              <summary>Voor welke groep doe ik mee, en kan ik wisselen?<span className="ic"><Plus /></span></summary>
              <div className="body">Je schrijft je in voor óf de ochtendgroep óf de avondgroep. Op maandag en woensdag train je in je vaste groep, met af en toe wat ruimte om in overleg te wisselen als je agenda dat vraagt. Voor Flex Friday kies je per week zelf of je om 12:30 of 20:15 traint. Je keuze voor de vrijdag geef je, net als andere wijzigingen, per week even door aan de coaches.</div>
            </details>
            <details className="reveal">
              <summary>Hoe laat zijn de trainingen?<span className="ic"><Plus /></span></summary>
              <div className="body">
                <strong>Ochtendgroep:</strong> maandag en woensdag om 09:00<br />
                <strong>Avondgroep:</strong> maandag en woensdag om 20:00<br />
                <strong>Flex Friday:</strong> vrijdag om 12:30 of 20:15 (je kiest per week)<br /><br />
                Elke training duurt een uur.
              </div>
            </details>
            <details className="reveal">
              <summary>Wat als ik een keer niet kan?<span className="ic"><Plus /></span></summary>
              <div className="body">Eén training missen is geen probleem. Mis je meer dan één les? Dan kijken we samen even naar een goede oplossing, bijvoorbeeld door een keer aan te sluiten bij een andere small group, zodat je niets mist.</div>
            </details>
            <details className="reveal">
              <summary>Ik heb een blessure of beperking. Kan ik toch meedoen?<span className="ic"><Plus /></span></summary>
              <div className="body">Zeker. We kunnen prima om blessures heen werken en passen oefeningen aan op jouw lijf en niveau. Laat het je coach vooraf even weten, dan houden we er vanaf je eerste training rekening mee.</div>
            </details>
            <details className="reveal">
              <summary>Hoe bereik ik jullie als ik een vraag heb?<span className="ic"><Plus /></span></summary>
              <div className="body">Wij zijn altijd goed bereikbaar via WhatsApp en e-mail, dus stel je vraag gerust. En andersom: tijdens je Kickstart nemen we zelf ook regelmatig even contact op om te checken hoe het gaat en hoe het voelt.</div>
            </details>
            <details className="reveal">
              <summary>Wat gebeurt er na de Kickstart?<span className="ic"><Plus /></span></summary>
              <div className="body">De Kickstart is een startpunt, geen eenmalige ervaring. Daarom plannen we in week 4 een check-in gesprek: we horen hoe het gaat en hoe het bevallen is, en kijken samen hoe je na je Kickstart verder gaat bij CrossFit Alkmaar. Je boekt je check-in via de kalender hierboven.</div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
