"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 md:p-6 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm md:text-base text-center md:text-left">
          <p>
            Wij gebruiken cookies om je ervaring te verbeteren. Door verder te gaan ga je akkoord met ons{" "}
            <Link href="/privacy" className="underline hover:text-blue-300">
              privacybeleid
            </Link>.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm border border-white rounded-lg hover:bg-white hover:text-gray-900 transition"
          >
            Weigeren
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-blue-700 hover:bg-blue-800 rounded-lg transition"
          >
            Accepteren
          </button>
        </div>
      </div>
    </div>
  );
}