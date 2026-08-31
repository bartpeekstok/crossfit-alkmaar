"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

// /links = link-in-bio (Linktree-vervanger): bewust geen header/footer/popups.
const HIDDEN_PREFIXES = ["/start", "/hyrox-betaald", "/hardest-mile-betaald", "/links"];

// Paden die de nieuwe redesign-2026 layout gebruiken (Header/Footer/LeadModal
// uit components/redesign). De OUDE Header/Footer/popups worden hier verborgen.
export const REDESIGNED_PATHS = [
  "/",
  "/en",
  "/free-intro",
  "/meer-info",
  "/kickstart",
  "/groepslessen",
  "/personal-training",
  "/small-group-training",
  "/voedingsadvies",
  "/tieners",
  "/onze-leden",
  "/blog",
  "/vacatures",
  "/privacy",
  "/hyrox-simulatie-alkmaar",
  "/hardest-mile",
  "/hyrox-alkmaar",
  "/events",
  // SEO landingspagina's (template-based via SeoLanding.tsx)
  "/afvallen-alkmaar",
  "/sportschool-alkmaar",
  "/fitness-alkmaar",
  "/krachttraining-alkmaar",
  "/sportschool-50-plus-alkmaar",
  "/hyrox-training-alkmaar",
  "/personal-trainer-alkmaar",
  "/groepslessen-alkmaar",
  "/bootcamp-alkmaar",
  "/hyrox-voorbereiding-alkmaar",
  "/hyrox-gym-alkmaar",
  "/crossfit-beginners-alkmaar",
  "/personal-training-alkmaar",
  "/functional-fitness-alkmaar",
  "/groepstraining-alkmaar",
  "/crossfit-vrouwen-alkmaar",
  "/sportschool-begeleiding-alkmaar",
  "/afvallen-met-sport-alkmaar",
  "/strength-training-alkmaar",
  "/small-group-training-alkmaar",
  "/olympic-lifting-alkmaar",
  "/sporten-overgang-alkmaar",
  "/crossfit-heerhugowaard",
  "/crossfit-heiloo",
  "/crossfit-bergen",
  "/crossfit-langedijk",
  "/hyrox-heerhugowaard",
  // Ledenservice (geen SEO-landing, wel nieuwe huisstijl-chrome)
  "/faq",
  // Bedankpagina na intake-boeking (GHL-redirect, noindex)
  "/intake-geboekt",
  // Campagnepagina ex-leden (QR op ansichtkaart, noindex)
  "/welkom-terug",
  // Verborgen pagina's voor Kickstart-deelnemers (alleen via link, noindex)
  "/kickstart-welkom",
  "/kickstart-vervolg",
];

// Prefix-paden die ook onder de nieuwe redesign vallen (bv. blog-detail pagina's)
export const REDESIGNED_PREFIXES = ["/blog/"];

// De laatste pagina's die nog de OUDE Header/Footer gebruiken. Al het andere
// (incl. onbekende paden -> 404) krijgt de nieuwe chrome, zodat een nieuwe
// pagina niet per ongeluk in de oude look valt.
export const LEGACY_CHROME_PATHS = ["/de", "/de/kickstart", "/en/kickstart", "/bedankt", "/hyrox-pft-alkmaar", "/programmas"];

export function isRedesignedPath(pathname: string): boolean {
  if (REDESIGNED_PATHS.includes(pathname) || REDESIGNED_PREFIXES.some((p) => pathname.startsWith(p))) return true;
  if (LEGACY_CHROME_PATHS.includes(pathname)) return false;
  if (HIDDEN_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + "/"))) return false;
  return true;
}

export default function ConditionalChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isLanding = HIDDEN_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );
  if (isLanding) return null;
  if (isRedesignedPath(pathname)) return null;
  return <>{children}</>;
}
