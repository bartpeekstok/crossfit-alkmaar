"use client";

import Link from "next/link";
import { useLeadModal } from "../components/redesign/LeadModalContext";

type Event = {
  href?: string;
  title: string;
  dateLabel: string;
  isoDate: string;
  tag: string;
  img: string;
  imgAlt: string;
  text: string;
  time?: string;
  place?: string;
  imgPos?: string;
};

// Nieuwe events: entry toevoegen (gesorteerd op datum), kaart verschijnt automatisch.
// href weglaten als er (nog) geen eigen eventpagina is: kaart is dan niet klikbaar.
const EVENTS: Event[] = [
  {
    href: "/hyrox-simulatie-alkmaar",
    title: "HYROX Simulatie",
    dateLabel: "Zaterdag 22 augustus 2026",
    isoDate: "2026-08-22",
    tag: "Inschrijving open",
    img: "/redesign/assets/header-hyrox.jpg",
    imgAlt: "Atleten tijdens een HYROX workout bij CrossFit Alkmaar",
    text: "Een volledige HYROX race in onze eigen box: 8 rondes hardlopen afgewisseld met 8 stations. Open en Pro divisie, solo of met een buddy.",
    time: "10:30 start",
    place: "CrossFit Alkmaar",
  },
  {
    title: "The Hardest Mile",
    dateLabel: "Zondag 13 september 2026",
    isoDate: "2026-09-13",
    tag: "Inschrijving opent binnenkort",
    img: "/redesign/assets/event-hardest-mile.jpg",
    imgAlt: "Atleten rennen over de atletiekbaan tijdens The Hardest Mile",
    text: "Vier keer vierhonderd meter: burpees, lunges, bearcrawl en hardlopen. Voor alle niveaus, op de atletiekbaan van AV Hylas.",
    time: "Zondagochtend",
    place: "Atletiekvereniging Hylas",
  },
  {
    title: "CFA Badge Borrel",
    dateLabel: "Vrijdag 2 oktober 2026",
    isoDate: "2026-10-02",
    tag: "Inschrijving opent binnenkort",
    img: "/redesign/assets/event-badge-borrel.jpg",
    imgPos: "center 30%",
    imgAlt: "Leden van CrossFit Alkmaar samen in de lounge",
    text: "Borrel voor onze badge-houders. Even bijkletsen zonder zweet en gehijg, met een hapje en drankje van de box.",
    time: "Vanaf 19:00",
    place: "In de lounge",
  },
  {
    href: "/hyrox-simulatie-24-oktober",
    title: "HYROX Simulatie",
    dateLabel: "Zaterdag 24 oktober 2026",
    isoDate: "2026-10-24",
    tag: "Inschrijving open",
    img: "/redesign/assets/event-hyrox-simulatie.jpg",
    imgAlt: "Atleet duwt een sled tijdens een HYROX workout bij CrossFit Alkmaar",
    text: "De tweede HYROX Simulatie van het jaar. Test je racetijd, pak je revanche of proef voor het eerst hoe een echte HYROX voelt.",
    time: "10:30 start",
    place: "CrossFit Alkmaar",
  },
  {
    title: "Baseqamp",
    dateLabel: "Zaterdag 7 november 2026",
    isoDate: "2026-11-07",
    tag: "Inschrijving opent binnenkort",
    img: "/redesign/assets/event-baseqamp.jpg",
    imgPos: "center 30%",
    imgAlt: "Deelnemers tijdens een ijsbad-workshop van Baseqamp",
    text: "Workshop ijsbad en ademhaling. Leer omgaan met kou en stress, herstel sneller en train met meer focus. Begeleide sessie.",
    time: "13:00",
    place: "CrossFit Alkmaar",
  },
  {
    title: "CFA Biathlon",
    dateLabel: "Zaterdag 21 november 2026",
    isoDate: "2026-11-21",
    tag: "Inschrijving opent binnenkort",
    img: "/redesign/assets/event-biathlon.jpg",
    imgAlt: "Biathlon-event bij CrossFit Alkmaar met skiërg en precisieschieten",
    text: "Onze eigen biathlon: een combinatie van skiën en precisieschieten. Conditie en een vaste hand, wie heeft allebei?",
    place: "CrossFit Alkmaar",
  },
];

export default function EventsPage() {
  const { open } = useLeadModal();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Events bij CrossFit Alkmaar",
            itemListElement: EVENTS.map((e, i) => ({
              "@type": "ListItem",
              position: i + 1,
              ...(e.href ? { url: `https://crossfitalkmaar.com${e.href}` } : {}),
              name: `${e.title} - ${e.dateLabel}`,
            })),
          }),
        }}
      />

      <style>{`
        .evt-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: clamp(18px,2.4vw,30px); max-width: 1060px; margin: 40px auto 0; }
        .evt { display: flex; flex-direction: column; background: #fff; border: 1px solid var(--border); border-radius: var(--r-lg); box-shadow: var(--sh-1); overflow: hidden; text-decoration: none; transition: transform .15s, box-shadow .15s; }
        .evt:hover { transform: translateY(-4px); box-shadow: var(--sh-3); }
        .evt .ph { position: relative; aspect-ratio: 16/9; overflow: hidden; }
        .evt .ph img { width: 100%; height: 100%; object-fit: cover; transition: transform .35s ease; }
        .evt:hover .ph img { transform: scale(1.05); }
        .evt .tag { position: absolute; top: 12px; left: 12px; background: var(--hold); color: var(--cfa-ink); font-family: var(--font-head); font-weight: 700; font-size: 11px; letter-spacing: .12em; text-transform: uppercase; padding: 6px 12px; border-radius: 999px; }
        .evt .body { display: flex; flex-direction: column; flex: 1; padding: clamp(20px,2.4vw,28px); }
        .evt .date { font-family: var(--font-head); font-weight: 700; font-size: 13px; letter-spacing: .14em; text-transform: uppercase; color: var(--cfa-blue); margin: 0 0 8px; }
        .evt h3 { font-family: var(--font-display); font-weight: 400; text-transform: uppercase; font-size: 28px; letter-spacing: .01em; color: var(--fg1); margin: 0 0 10px; }
        .evt p { font-family: var(--font-body); font-size: 16px; line-height: 1.6; color: var(--fg2); margin: 0 0 14px; }
        .evt .meta { display: flex; flex-wrap: wrap; gap: 6px 16px; font-family: var(--font-body); font-size: 14px; color: var(--fg3); margin: 0 0 18px; }
        .evt .meta span { display: inline-flex; align-items: center; gap: 6px; }
        .evt .meta svg { width: 14px; height: 14px; color: var(--cfa-blue); flex: none; }
        .evt .more { margin-top: auto; display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-head); font-weight: 700; font-size: 14px; letter-spacing: .06em; text-transform: uppercase; color: var(--cfa-blue); }
        .evt .more svg { width: 16px; height: 16px; transition: transform .15s; }
        .evt:hover .more svg { transform: translateX(4px); }
        .evt .more--soon { color: var(--fg3); }
        div.evt:hover { transform: none; box-shadow: var(--sh-1); }
        div.evt:hover .ph img { transform: none; }
      `}</style>

      <section className="page-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="bg" src="/redesign/assets/header-hyrox.jpg" alt="Atleten in actie tijdens een event bij CrossFit Alkmaar" style={{ objectPosition: "center 35%" }} />
        <div className="scrim" />
        <div className="wrap inner">
          <h1>Events</h1>
          <p className="lede">Races, challenges en community-events bij CrossFit Alkmaar. Voor leden en iedereen die een keer wil proeven hoe het er bij ons aan toegaat.</p>
        </div>
      </section>

      <section className="sec sec--ivoor">
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">Aankomende events</h2>
            <p className="sec-sub">Klik op een event voor het volledige programma, de divisies en inschrijving. Er komen regelmatig nieuwe events bij, dus check deze pagina af en toe.</p>
          </div>
          <div className="evt-grid">
            {EVENTS.map((e) => {
              const inner = (
                <>
                  <div className="ph">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={e.img} alt={e.imgAlt} loading="lazy" style={e.imgPos ? { objectPosition: e.imgPos } : undefined} />
                    <span className="tag">{e.tag}</span>
                  </div>
                  <div className="body">
                    <p className="date">{e.dateLabel}</p>
                    <h3>{e.title}</h3>
                    <p>{e.text}</p>
                    <div className="meta">
                      {e.time && (
                        <span>
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
                          {e.time}
                        </span>
                      )}
                      {e.place && (
                        <span>
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-5.1-7-11a7 7 0 1114 0c0 5.9-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
                          {e.place}
                        </span>
                      )}
                    </div>
                    {e.href ? (
                      <span className="more">
                        Bekijk event
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                      </span>
                    ) : (
                      <span className="more more--soon">Meer info volgt</span>
                    )}
                  </div>
                </>
              );
              return e.href ? (
                <Link key={e.title + e.isoDate} href={e.href} className="evt">{inner}</Link>
              ) : (
                <div key={e.title + e.isoDate} className="evt">{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec page-cta" style={{ ["--cta-photo" as string]: "url('/redesign/assets/header-community.jpg')", backgroundPosition: "center 28%" } as React.CSSProperties}>
        <div className="wrap">
          <h2>Liever eerst gewoon komen trainen?</h2>
          <p>Plan een gratis kennismaking. We laten je de box zien en kijken samen wat bij je past.</p>
          <a
            className="btn btn--gold btn--lg"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              open({ source: "Plan je gratis kennismaking", section: "Events CTA", variant: "kennismaking" });
            }}
          >
            Plan je gratis kennismaking
          </a>
        </div>
      </section>
    </>
  );
}
