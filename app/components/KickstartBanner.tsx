"use client";

import { useState } from "react";
import Link from "next/link";

export default function KickstartBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-blue-900 text-white py-2 md:py-3 px-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex-1 text-center">
          <span className="text-sm md:text-base">
            <span className="hidden sm:inline">🎯 </span>
            <strong>28-Day Kickstart</strong>
            <span className="hidden sm:inline"> – Start jouw transformatie voor €99</span>
            <Link href="/kickstart" className="underline ml-2 hover:text-blue-200">
              Meer info
            </Link>
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 text-white hover:text-blue-200 transition flex-shrink-0"
          aria-label="Sluiten"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}