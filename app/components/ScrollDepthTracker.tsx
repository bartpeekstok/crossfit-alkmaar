"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackScrollDepth } from "../lib/analytics";

export default function ScrollDepthTracker() {
  const pathname = usePathname();
  const firedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    firedRef.current = new Set();

    const thresholds = [25, 50, 75, 100];

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

      for (const threshold of thresholds) {
        if (scrollPercent >= threshold && !firedRef.current.has(threshold)) {
          firedRef.current.add(threshold);
          trackScrollDepth(threshold, pathname);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return null;
}
