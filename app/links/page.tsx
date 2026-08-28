"use client";

import "../styles/page-links.css";
import { useEffect } from "react";
import { trackEvent } from "../lib/analytics";

type LinkItem = {
  href: string;
  title: string;
  sub?: string;
  tag?: string;
  primary?: boolean;
};

// Volgorde = volgorde op de pagina. Events aanpassen zodra ze voorbij zijn.
const LINKS: LinkItem[] = [
  { href: "/free-intro", title: "Gratis intake plannen", sub: "Kennismaken met een coach, zonder verplichtingen", primary: true },
  { href: "/kickstart", title: "28 Day Kickstart", sub: "Vier weken begeleid starten" },
  { href: "/hyrox-simulatie-24-oktober", title: "HYROX Simulatie 24 oktober", sub: "Test je racetijd", tag: "Inschrijving open" },
  { href: "/hardest-mile", title: "The Hardest Mile", sub: "Zondag 13 september, AV Hylas", tag: "Inschrijving open" },
  { href: "/onze-leden", title: "Onze leden aan het woord", sub: "Ervaringen en video's" },
  { href: "/events", title: "Alle events", sub: "Wat er de komende maanden op de planning staat" },
  { href: "/blog", title: "Blog", sub: "Tips over trainen, voeding en herstel" },
];

const SOCIALS = [
  { href: "https://www.instagram.com/crossfitalkmaar", label: "Instagram", icon: <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /> },
  { href: "https://www.facebook.com/alkmaarcrossfit", label: "Facebook", icon: <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.3H7.4V14h2.8v8h3.3z" /> },
  { href: "https://www.youtube.com/@crossfitalkmaar7765", label: "YouTube", icon: <path d="M22.5 7.2a2.7 2.7 0 0 0-1.9-1.9C18.9 4.8 12 4.8 12 4.8s-6.9 0-8.6.5A2.7 2.7 0 0 0 1.5 7.2C1 8.9 1 12 1 12s0 3.1.5 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5a2.7 2.7 0 0 0 1.9-1.9c.5-1.7.5-4.8.5-4.8s0-3.1-.5-4.8zM9.8 15.1V8.9l5.7 3.1-5.7 3.1z" /> },
  { href: "mailto:info@crossfitalkmaar.nl", label: "E-mail", icon: <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1 2.4V17h16V7.4l-8 5.3-8-5.3zM5.6 7l6.4 4.3L18.4 7H5.6z" /> },
  { href: "tel:+31722340560", label: "Bel 072 234 0560", icon: <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8z" /> },
];

export default function LinksPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    trackEvent("links_visit", { source: params.get("utm_source") || "direct" });
  }, []);

  const click = (label: string) => () => trackEvent("links_click", { label });

  return (
    <>
      <section className="sec sec--ivoor lk-sec">
        <div className="wrap">
          <div className="center lk-head">
            <p className="eyebrow center-eb">CrossFit Alkmaar</p>
            <h1 className="sec-title">Waar wil je heen?</h1>          </div>
          <nav className="lk-list" aria-label="Links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`lk-item${l.primary ? " lk-item--primary" : ""}`} onClick={click(l.title)}>
                <span className="lk-text">
                  <span className="lk-title">{l.title}</span>
                  {l.sub && <span className="lk-sub">{l.sub}</span>}
                </span>
                {l.tag && <span className="lk-tag">{l.tag}</span>}
                <svg className="lk-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </a>
            ))}
          </nav>

          <div className="lk-social">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                onClick={click(s.label)}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={s.href.startsWith("tel:") ? "lk-social--wide" : undefined}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{s.icon}</svg>
                {s.href.startsWith("tel:") && <span>{s.label}</span>}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
