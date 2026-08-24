"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLeadModal } from "../components/redesign/LeadModalContext";
import { EVENTS, type CfaEvent } from "./eventsData";

export default function EventsPage() {
  const { open } = useLeadModal();

  // Voor mount tonen we alles als "aankomend" (geen hydration-mismatch). Na mount
  // splitsen we op de datum van vandaag: voorbije events zakken naar "Afgelopen events".
  const [todayIso, setTodayIso] = useState<string | null>(null);
  useEffect(() => {
    setTodayIso(new Date().toISOString().slice(0, 10));
  }, []);

  const upcoming = todayIso ? EVENTS.filter((e) => e.isoDate >= todayIso) : EVENTS;
  const past = todayIso
    ? EVENTS.filter((e) => e.isoDate < todayIso).slice().reverse()
    : [];

  const renderCard = (e: CfaEvent, isPast: boolean) => {
    const inner = (
      <>
        <div className="ph">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={e.img} alt={e.imgAlt} loading="lazy" style={e.imgPos ? { objectPosition: e.imgPos } : undefined} />
          <span className="tag">{isPast ? "Afgelopen" : e.tag}</span>
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
          {isPast ? (
            e.href && !e.external ? (
              <span className="more">
                Bekijk event
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            ) : null
          ) : e.href ? (
            <span className="more">
              {e.ctaLabel ?? "Bekijk event"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </span>
          ) : (
            <span className="more more--soon">Meer info volgt</span>
          )}
        </div>
      </>
    );
    const key = e.title + e.isoDate;
    // Voorbije events linken alleen naar een eigen pagina (geen externe inschrijving meer).
    if (isPast) {
      return e.href && !e.external ? (
        <Link key={key} href={e.href} className="evt evt--past">{inner}</Link>
      ) : (
        <div key={key} className="evt evt--past">{inner}</div>
      );
    }
    if (e.href && e.external) {
      return (
        <a key={key} href={e.href} target="_blank" rel="noopener noreferrer" className="evt">{inner}</a>
      );
    }
    return e.href ? (
      <Link key={key} href={e.href} className="evt">{inner}</Link>
    ) : (
      <div key={key} className="evt">{inner}</div>
    );
  };

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
              ...(e.href ? { url: `https://www.crossfitalkmaar.com${e.href}` } : {}),
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
        .evt p { font-family: var(--font-body); font-size: 16px; line-height: 1.6; color: var(--fg2); margin: 0 0 14px; white-space: pre-line; }
        .evt .meta { display: flex; flex-wrap: wrap; gap: 6px 16px; font-family: var(--font-body); font-size: 14px; color: var(--fg3); margin: 0 0 18px; }
        .evt .meta span { display: inline-flex; align-items: center; gap: 6px; }
        .evt .meta svg { width: 14px; height: 14px; color: var(--cfa-blue); flex: none; }
        .evt .more { margin-top: auto; display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-head); font-weight: 700; font-size: 14px; letter-spacing: .06em; text-transform: uppercase; color: var(--cfa-blue); }
        .evt .more svg { width: 16px; height: 16px; transition: transform .15s; }
        .evt:hover .more svg { transform: translateX(4px); }
        .evt .more--soon { color: var(--fg3); }
        div.evt:hover { transform: none; box-shadow: var(--sh-1); }
        div.evt:hover .ph img { transform: none; }
        .evt--past .ph img { filter: grayscale(0.4) brightness(0.92); }
        .evt--past .tag { background: var(--border-strong, #cbd2dd); color: var(--fg2); }
        .evt--past .date { color: var(--fg3); }
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

      <section className="sec sec--ivoor" style={{ paddingBottom: "clamp(24px,4vw,48px)" }}>
        <div className="wrap">
          <div className="center reveal">
            <h2 className="sec-title">Aankomende events</h2>
            <p className="sec-sub">Klik op een event voor het volledige programma, de divisies en inschrijving. Er komen regelmatig nieuwe events bij, dus check deze pagina af en toe.</p>
          </div>
          <div className="evt-grid">
            {upcoming.map((e) => renderCard(e, false))}
          </div>
        </div>
      </section>

      {past.length > 0 && (
        <section className="sec sec--white" style={{ paddingTop: "clamp(24px,4vw,48px)" }}>
          <div className="wrap">
            <div className="center">
              <h2 className="sec-title">Afgelopen events</h2>
              <p className="sec-sub">Een terugblik op wat er bij CrossFit Alkmaar voorbij is gekomen. Erbij zijn de volgende keer? Houd de aankomende events in de gaten.</p>
            </div>
            <div className="evt-grid">
              {past.map((e) => renderCard(e, true))}
            </div>
          </div>
        </section>
      )}

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
