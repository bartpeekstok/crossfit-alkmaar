"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLeadModal } from "./LeadModalContext";

const Caret = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default function Header() {
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en");
  const isHome = pathname === "/" || pathname === "/en";
  const { open } = useLeadModal();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSections, setMobileSections] = useState<Record<string, boolean>>({});

  const t = isEN
    ? {
        moreInfo: "More info",
        schedule: "Schedule",
        pricing: "Pricing",
        ourMembers: "Our members",
        jobs: "Jobs",
        programs: "Programs",
        kickstart: "28 Day Kickstart",
        groupClasses: "Group classes",
        personalTraining: "Personal Training",
        smallGroup: "Small Group Training",
        nutrition: "Nutrition coaching",
        teens: "Teens",
        events: "Events",
        blog: "Blog",
        freeIntro: "Free intro",
      }
    : {
        moreInfo: "Meer info",
        schedule: "Rooster",
        pricing: "Tarieven",
        ourMembers: "Onze leden",
        jobs: "Vacatures",
        programs: "Programma's",
        kickstart: "28 Day Kickstart",
        groupClasses: "Groepslessen",
        personalTraining: "Personal Training",
        smallGroup: "Small Group Training",
        nutrition: "Voedingsadvies",
        teens: "Tieners",
        events: "Events",
        blog: "Blog",
        freeIntro: "Gratis kennismaking",
      };

  const handleCTAClick = (e: React.MouseEvent, source: string) => {
    e.preventDefault();
    open({ source, section: "Navigatie", variant: "kennismaking" });
    setMobileOpen(false);
  };

  const toggleSection = (key: string) =>
    setMobileSections((s) => ({ ...s, [key]: !s[key] }));

  return (
    <header className="site-header">
      <div className="wrap bar">
        <Link href="/" className="logo" aria-label="CrossFit Alkmaar">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/redesign/assets/cfa-logo.webp" alt="CrossFit Alkmaar" />
        </Link>
        <nav className="nav">
          <div className="nav-item">
            <Link href="/meer-info" className="nav-link">
              {t.moreInfo} <Caret />
            </Link>
            <div className="dropdown">
              <Link href="/meer-info#rooster">{t.schedule}</Link>
              <Link href="/meer-info#tarieven">{t.pricing}</Link>
              <Link href="/onze-leden">{t.ourMembers}</Link>
              <Link href="/vacatures">{t.jobs}</Link>
            </div>
          </div>
          <div className="nav-item">
            <button className="nav-link" type="button">
              {t.programs} <Caret />
            </button>
            <div className="dropdown">
              <Link href="/kickstart">{t.kickstart}</Link>
              <Link href="/groepslessen">{t.groupClasses}</Link>
              <Link href="/personal-training">{t.personalTraining}</Link>
              <Link href="/small-group-training">{t.smallGroup}</Link>
              <Link href="/voedingsadvies">{t.nutrition}</Link>
              <Link href="/tieners">{t.teens}</Link>
            </div>
          </div>
          <Link href="/events" className="nav-link">
            {t.events}
          </Link>
          <Link href="/blog" className="nav-link">
            {t.blog}
          </Link>
          <a
            className="btn btn--primary"
            href="#"
            onClick={(e) => handleCTAClick(e, t.freeIntro)}
          >
            {t.freeIntro}
          </a>
          {isHome && (
            <span className="lang">
              <button
                type="button"
                data-lang="nl"
                className={!isEN ? "on" : ""}
                onClick={() => {
                  if (isEN) window.location.href = "/";
                }}
              >
                NL
              </button>
              <button
                type="button"
                data-lang="en"
                className={isEN ? "on" : ""}
                onClick={() => {
                  if (!isEN) window.location.href = "/en";
                }}
              >
                EN
              </button>
            </span>
          )}
        </nav>
        <button
          type="button"
          className="hamburger"
          aria-label="Menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        <div className="mwrap">
          <div className={`m-sec${mobileSections.moreInfo ? " open" : ""}`}>
            <button className="m-head" type="button" onClick={() => toggleSection("moreInfo")}>
              {t.moreInfo} <Caret />
            </button>
            <div className="m-sub">
              <Link href="/meer-info#rooster" onClick={() => setMobileOpen(false)}>{t.schedule}</Link>
              <Link href="/meer-info#tarieven" onClick={() => setMobileOpen(false)}>{t.pricing}</Link>
              <Link href="/onze-leden" onClick={() => setMobileOpen(false)}>{t.ourMembers}</Link>
              <Link href="/vacatures" onClick={() => setMobileOpen(false)}>{t.jobs}</Link>
            </div>
          </div>
          <div className={`m-sec${mobileSections.programs ? " open" : ""}`}>
            <button className="m-head" type="button" onClick={() => toggleSection("programs")}>
              {t.programs} <Caret />
            </button>
            <div className="m-sub">
              <Link href="/kickstart" onClick={() => setMobileOpen(false)}>{t.kickstart}</Link>
              <Link href="/groepslessen" onClick={() => setMobileOpen(false)}>{t.groupClasses}</Link>
              <Link href="/personal-training" onClick={() => setMobileOpen(false)}>{t.personalTraining}</Link>
              <Link href="/small-group-training" onClick={() => setMobileOpen(false)}>{t.smallGroup}</Link>
              <Link href="/voedingsadvies" onClick={() => setMobileOpen(false)}>{t.nutrition}</Link>
              <Link href="/tieners" onClick={() => setMobileOpen(false)}>{t.teens}</Link>
            </div>
          </div>
          <Link href="/events" className="m-head" onClick={() => setMobileOpen(false)}>
            {t.events}
          </Link>
          <Link href="/blog" className="m-head" onClick={() => setMobileOpen(false)}>
            {t.blog}
          </Link>
          <a
            className="btn btn--primary"
            style={{ marginTop: 12 }}
            href="#"
            onClick={(e) => handleCTAClick(e, t.freeIntro)}
          >
            {t.freeIntro}
          </a>
          {isHome && (
            <span className="lang" style={{ marginTop: 14 }}>
              <button
                type="button"
                data-lang="nl"
                className={!isEN ? "on" : ""}
                onClick={() => {
                  if (isEN) window.location.href = "/";
                }}
              >
                NL
              </button>
              <button
                type="button"
                data-lang="en"
                className={isEN ? "on" : ""}
                onClick={() => {
                  if (!isEN) window.location.href = "/en";
                }}
              >
                EN
              </button>
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
