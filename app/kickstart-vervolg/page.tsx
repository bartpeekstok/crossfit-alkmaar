import Link from "next/link";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";

const VIDEO_ID = "FNnTn4KmCzs";

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
    text: "Eén-op-één begeleiding, volledig op jouw doelen afgestemd. Maximale aandacht en het snelste resultaat.",
  },
  {
    icon: <IconSGT />,
    title: "Small Group Training",
    text: "Trainen in een klein groepje met persoonlijke begeleiding. De vertrouwde Kickstart-sfeer, voortgezet.",
  },
  {
    icon: <IconLes />,
    title: "Groepslessen",
    text: "Energieke trainingen in de groep onder leiding van een coach. Voor structuur, plezier en community.",
  },
  {
    icon: <IconVoeding />,
    title: "Voedingsadvies",
    text: "Haal meer uit je training met een voedingsplan dat bij jou past. De andere helft van je resultaat.",
  },
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
          @media (max-width: 720px) { .kv-opts { grid-template-columns: 1fr; } }
        `}</style>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-groepslessen.jpg" alt="" style={{ objectPosition: "center 40%" }} />
        <div className="scrim" />
        <div className="wrap inner">
          <h1>Hoe ga je verder?</h1>
          <p className="lede">
            Je Kickstart zit er bijna op, goed bezig! Dit is hét moment om te kiezen hoe je verder gaat, zodat
            je je resultaten vasthoudt en blijft doorgroeien. Hieronder zie je je opties.
          </p>
        </div>
      </section>

      {/* VIDEO */}
      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">Bekijk dit eerst</h2>
            <p className="sec-sub">
              In deze video vertel ik je in het kort wat je opties zijn om verder te gaan na je Kickstart.
              Hieronder vind je alles rustig op een rij.
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
            <TrackedYouTubeEmbed videoId={VIDEO_ID} title="Hoe ga je verder na je Kickstart" autoplay={false} />
          </div>
        </div>
      </section>

      {/* VERVOLGOPTIES */}
      <section className="sec sec--white">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">Kies je vervolg</h2>
            <p className="sec-sub">
              Bij CrossFit Alkmaar kun je op verschillende manieren verder. We bespreken samen wat het
              beste bij jou past.
            </p>
          </div>
          <div className="fcards kv-opts">
            {OPTIES.map((o) => (
              <div key={o.title} className="fcard kv-card reveal">
                <div className="ic">{o.icon}</div>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </div>
            ))}
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
