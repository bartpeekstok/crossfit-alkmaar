"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const languages = [
  { code: "nl", name: "Nederlands", flag: "🇳🇱", path: "/" },
  { code: "en", name: "English", flag: "🇬🇧", path: "/en" },
  { code: "de", name: "Deutsch", flag: "🇩🇪", path: "/de" },
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

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 transition"
        aria-label="Select language"
      >
        <span className="text-xl">{currentLanguage.flag}</span>
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
        <div className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-lg shadow-lg border z-50">
          {languages.map((lang) => (
            <Link
              key={lang.code}
              href={getPathForLang(lang.code)}
              onClick={() => setIsOpen(false)}
              className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 transition ${
                lang.code === currentLang ? "bg-gray-50 font-semibold" : ""
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="text-gray-700">{lang.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
