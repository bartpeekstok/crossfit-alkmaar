"use client";

import { useState } from "react";
import Link from "next/link";

export default function KickstartBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-900 text-white py-3 px-4 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Content */}
        <div className="flex items-center gap-4 flex-1">
          <div className="hidden sm:block">
            <span className="text-2xl">🚀</span>
          </div>
          <div className="flex-1">
            <p className="font-semibold text-sm sm:text-base">
              <span className="hidden sm:inline">Start vandaag met de </span>
              <span className="sm:hidden">Start met de </span>
              <span className="text-yellow-300">28 Days Kickstart</span>
              <span className="hidden md:inline"> - Jouw perfecte start bij CrossFit Alkmaar</span>
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/kickstart"
          className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-2 px-4 sm:px-6 rounded-lg transition text-sm sm:text-base whitespace-nowrap"
        >
          Meer info
        </Link>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="text-white/70 hover:text-white transition p-1"
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