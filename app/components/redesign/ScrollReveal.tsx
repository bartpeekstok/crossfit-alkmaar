"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Activeert .reveal animaties via IntersectionObserver,
 * conform site.js gedrag. Mount once globally op redesign-pagina's.
 *
 * Let op: deze component blijft gemount tijdens client-side navigatie
 * (zit in RedesignChrome). Daarom her-observeren we bij elke pathname-
 * wijziging, anders blijven .reveal-elementen van de nieuwe pagina op
 * opacity:0 staan (ze waren immers nooit waargenomen).
 */
export default function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
