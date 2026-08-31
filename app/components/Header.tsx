"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { usePopup } from "./PopupContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [programmasOpen, setProgrammasOpen] = useState(false);
  const [meerInfoOpen, setMeerInfoOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openPopup } = usePopup();
  const pathname = usePathname();
  // Determine current language
  const isEnglish = pathname.startsWith("/en");
  const isGerman = pathname.startsWith("/de");
  const langPrefix = isEnglish ? "/en" : isGerman ? "/de" : "";

  // Translations
  const t = {
    moreInfo: isEnglish ? "More info" : isGerman ? "Mehr Info" : "Meer info",
    schedule: isEnglish ? "Schedule" : isGerman ? "Stundenplan" : "Rooster",
    pricing: isEnglish ? "Pricing" : isGerman ? "Preise" : "Tarieven",
    ourMembers: isEnglish ? "Our members" : isGerman ? "Unsere Mitglieder" : "Onze leden",
    jobs: isEnglish ? "Jobs" : isGerman ? "Stellenangebote" : "Vacatures",
    programs: isEnglish ? "Programs" : isGerman ? "Programme" : "Programma's",
    kickstart: "28 Day Kickstart",
    groupClasses: isEnglish ? "Group classes" : isGerman ? "Gruppenkurse" : "Groepslessen",
    personalTraining: "Personal Training",
    smallGroup: "Small Group Training",
    nutrition: isEnglish ? "Nutrition coaching" : isGerman ? "Ernährungsberatung" : "Voedingsadvies",
    teens: isEnglish ? "Teens" : isGerman ? "Jugendliche" : "Tieners",
    blog: "Blog",
    freeIntro: isEnglish ? "Free intro" : isGerman ? "Kostenloses Probetraining" : "Gratis kennismaking",
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setProgrammasOpen(false);
    setMeerInfoOpen(false);
    setEventsOpen(false);
  };

  return (
    <header className="bg-[#1a1a2e] text-white py-4 px-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" onClick={closeMobileMenu}>
          <Image
            src="/images/logo.png"
            alt="CrossFit Alkmaar"
            width={80}
            height={80}
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Meer Info Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMeerInfoOpen(true)}
            onMouseLeave={() => setMeerInfoOpen(false)}
          >
            <Link href="/meer-info" className="flex items-center hover:text-gray-300 transition">
              {t.moreInfo}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {meerInfoOpen && (
              <div className="absolute top-full left-0 bg-[#1a1a2e] py-2 min-w-[200px] shadow-lg">
                <Link href="/meer-info#rooster" className="block px-4 py-2 hover:bg-[#2a2a4e] transition">
                  {t.schedule}
                </Link>
                <Link href="/meer-info#tarieven" className="block px-4 py-2 hover:bg-[#2a2a4e] transition">
                  {t.pricing}
                </Link>
                <Link href="/onze-leden" className="block px-4 py-2 hover:bg-[#2a2a4e] transition">
                  {t.ourMembers}
                </Link>
                <Link href="/vacatures" className="block px-4 py-2 hover:bg-[#2a2a4e] transition">
                  {t.jobs}
                </Link>
              </div>
            )}
          </div>

          {/* Programma's Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProgrammasOpen(true)}
            onMouseLeave={() => setProgrammasOpen(false)}
          >
            <button className="flex items-center hover:text-gray-300 transition">
              {t.programs}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {programmasOpen && (
              <div className="absolute top-full left-0 bg-[#1a1a2e] py-2 min-w-[200px] shadow-lg">
                <Link href={`${langPrefix}/kickstart`} className="block px-4 py-2 hover:bg-[#2a2a4e] transition">
                  {t.kickstart}
                </Link>
                <Link href="/groepslessen" className="block px-4 py-2 hover:bg-[#2a2a4e] transition">
                  {t.groupClasses}
                </Link>
                <Link href="/personal-training" className="block px-4 py-2 hover:bg-[#2a2a4e] transition">
                  {t.personalTraining}
                </Link>
                <Link href="/small-group-training" className="block px-4 py-2 hover:bg-[#2a2a4e] transition">
                  {t.smallGroup}
                </Link>
                <Link href="/voedingsadvies" className="block px-4 py-2 hover:bg-[#2a2a4e] transition">
                  {t.nutrition}
                </Link>
                <Link href="/tieners" className="block px-4 py-2 hover:bg-[#2a2a4e] transition">
                  {t.teens}
                </Link>
              </div>
            )}
          </div>

          {/* Events Dropdown */}
          {!isEnglish && !isGerman && (
            <div
              className="relative"
              onMouseEnter={() => setEventsOpen(true)}
              onMouseLeave={() => setEventsOpen(false)}
            >
              <button className="flex items-center hover:text-gray-300 transition">
                Events
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {eventsOpen && (
                <div className="absolute top-full left-0 bg-[#1a1a2e] py-2 min-w-[250px] shadow-lg">
                  <Link href="/hyrox-simulatie-alkmaar" className="block px-4 py-2 hover:bg-[#2a2a4e] transition">
                    HYROX Simulatie 24 oktober
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Only show Blog for Dutch */}
          {!isEnglish && !isGerman && (
            <Link href="/blog" className="hover:text-gray-300 transition">
              {t.blog}
            </Link>
          )}

          <button
            onClick={openPopup}
            className="bg-blue-900 hover:bg-blue-950 px-4 py-2 rounded transition"
          >
            {t.freeIntro}
          </button>

          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-2">
            {/* Meer Info Mobile */}
            <div className="flex items-center justify-between px-4 py-2 hover:bg-[#2a2a4e]">
              <Link href="/meer-info" onClick={closeMobileMenu}>{t.moreInfo}</Link>
              <button onClick={() => setMeerInfoOpen(!meerInfoOpen)}>
                <svg className={`w-4 h-4 transition-transform ${meerInfoOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {meerInfoOpen && (
              <div className="pl-4 flex flex-col space-y-2">
                <Link href="/meer-info#rooster" onClick={closeMobileMenu} className="px-4 py-2 hover:bg-[#2a2a4e]">{t.schedule}</Link>
                <Link href="/meer-info#tarieven" onClick={closeMobileMenu} className="px-4 py-2 hover:bg-[#2a2a4e]">{t.pricing}</Link>
                <Link href="/onze-leden" onClick={closeMobileMenu} className="px-4 py-2 hover:bg-[#2a2a4e]">{t.ourMembers}</Link>
                <Link href="/vacatures" onClick={closeMobileMenu} className="px-4 py-2 hover:bg-[#2a2a4e]">{t.jobs}</Link>
              </div>
            )}

            {/* Programma's Mobile */}
            <button
              onClick={() => setProgrammasOpen(!programmasOpen)}
              className="flex items-center justify-between px-4 py-2 hover:bg-[#2a2a4e]"
            >
              {t.programs}
              <svg className={`w-4 h-4 transition-transform ${programmasOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {programmasOpen && (
              <div className="pl-4 flex flex-col space-y-2">
                <Link href={`${langPrefix}/kickstart`} onClick={closeMobileMenu} className="px-4 py-2 hover:bg-[#2a2a4e]">{t.kickstart}</Link>
                <Link href="/groepslessen" onClick={closeMobileMenu} className="px-4 py-2 hover:bg-[#2a2a4e]">{t.groupClasses}</Link>
                <Link href="/personal-training" onClick={closeMobileMenu} className="px-4 py-2 hover:bg-[#2a2a4e]">{t.personalTraining}</Link>
                <Link href="/small-group-training" onClick={closeMobileMenu} className="px-4 py-2 hover:bg-[#2a2a4e]">{t.smallGroup}</Link>
                <Link href="/voedingsadvies" onClick={closeMobileMenu} className="px-4 py-2 hover:bg-[#2a2a4e]">{t.nutrition}</Link>
                <Link href="/tieners" onClick={closeMobileMenu} className="px-4 py-2 hover:bg-[#2a2a4e]">{t.teens}</Link>
              </div>
            )}

            {/* Events Mobile */}
            {!isEnglish && !isGerman && (
              <>
                <button
                  onClick={() => setEventsOpen(!eventsOpen)}
                  className="flex items-center justify-between px-4 py-2 hover:bg-[#2a2a4e]"
                >
                  Events
                  <svg className={`w-4 h-4 transition-transform ${eventsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {eventsOpen && (
                  <div className="pl-4 flex flex-col space-y-2">
                    <Link href="/hyrox-simulatie-alkmaar" onClick={closeMobileMenu} className="px-4 py-2 hover:bg-[#2a2a4e]">HYROX Simulatie 24 oktober</Link>
                  </div>
                )}
              </>
            )}

            {/* Only show Blog for Dutch */}
            {!isEnglish && !isGerman && (
              <Link href="/blog" onClick={closeMobileMenu} className="px-4 py-2 hover:bg-[#2a2a4e]">{t.blog}</Link>
            )}
            <button
              onClick={() => { openPopup(); closeMobileMenu(); }}
              className="mx-4 bg-blue-900 hover:bg-blue-950 px-4 py-2 rounded transition"
            >
              {t.freeIntro}
            </button>

            {/* Language Switcher Mobile */}
            <div className="px-4 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}