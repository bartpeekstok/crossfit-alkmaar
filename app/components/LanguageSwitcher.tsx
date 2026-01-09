"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Flag components as SVG for consistent rendering
const FlagNL = () => (
  <svg className="w-6 h-4 rounded-sm" viewBox="0 0 24 16">
    <rect width="24" height="5.33" fill="#AE1C28" />
    <rect y="5.33" width="24" height="5.33" fill="#FFFFFF" />
    <rect y="10.67" width="24" height="5.33" fill="#21468B" />
  </svg>
);

const FlagGB = () => (
  <svg className="w-6 h-4 rounded-sm" viewBox="0 0 60 30">
    <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
    <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

const FlagDE = () => (
  <svg className="w-6 h-4 rounded-sm" viewBox="0 0 24 16">
    <rect width="24" height="5.33" fill="#000000" />
    <rect y="5.33" width="24" height="5.33" fill="#DD0000" />
    <rect y="10.67" width="24" height="5.33" fill="#FFCC00" />
  </svg>
);

const flags: Record<string, React.FC> = {
  nl: FlagNL,
  en: FlagGB,
  de: FlagDE,
};

const languages = [
  { code: "nl", name: "Nederlands", path: "/" },
  { code: "en", name: "English", path: "/en" },
  { code: "de", name: "Deutsch", path: "/de" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Determine current language from pathname
  const getCurrentLang = () => {
    if (pathname.startsWith("/en")) return "en";
    if (pathname.startsWith("/de")) return "de";
    return "nl";
  };

  const currentLang = getCurrentLang();
  const currentLanguage = languages.find((l) => l.code === currentLang) || languages[0];

  // Get equivalent path for other language
  const getPathForLang = (langCode: string) => {
    // Remove current language prefix if present
    let basePath = pathname;
    if (pathname.startsWith("/en")) {
      basePath = pathname.replace("/en", "") || "/";
    } else if (pathname.startsWith("/de")) {
      basePath = pathname.replace("/de", "") || "/";
    }

    // Add new language prefix
    if (langCode === "nl") {
      return basePath === "/" ? "/" : basePath;
    }
    return `/${langCode}${basePath === "/" ? "" : basePath}`;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const CurrentFlag = flags[currentLang];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded bg-blue-900 hover:bg-blue-950 transition"
        aria-label="Select language"
      >
        <CurrentFlag />
        <span className="text-sm font-medium uppercase">{currentLang}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-44 bg-white rounded-lg shadow-lg border z-50">
          {languages.map((lang) => {
            const Flag = flags[lang.code];
            return (
              <Link
                key={lang.code}
                href={getPathForLang(lang.code)}
                onClick={() => setIsOpen(false)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 transition ${
                  lang.code === currentLang ? "bg-gray-50 font-semibold" : ""
                }`}
              >
                <Flag />
                <span className="text-gray-700">{lang.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
