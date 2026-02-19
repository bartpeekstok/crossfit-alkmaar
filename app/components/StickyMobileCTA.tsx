"use client";

import { useState, useEffect } from "react";
import { usePopup } from "./PopupContext";
import { trackCTAClick } from "../lib/analytics";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const { openPopup } = usePopup();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 p-3 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
      <button
        onClick={() => { trackCTAClick('sticky_mobile_cta', 'global'); openPopup(); }}
        className="w-full bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 rounded-lg transition cursor-pointer"
      >
        Plan je gratis kennismaking
      </button>
    </div>
  );
}
