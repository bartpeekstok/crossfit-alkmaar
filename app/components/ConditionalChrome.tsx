"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const HIDDEN_PREFIXES = ["/start"];

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
  "/hyrox-simulatie-24-oktober",
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
  // Ledenservice (geen SEO-landing, wel nieuwe huisstijl-chrome)
  "/faq",
  // Campagnepagina ex-leden (QR op ansichtkaart, noindex)
  "/welkom-terug",
];

// Prefix-paden die ook onder de nieuwe redesign vallen (bv. blog-detail pagina's)
export const REDESIGNED_PREFIXES = ["/blog/"];

export function isRedesignedPath(pathname: string): boolean {
  return REDESIGNED_PATHS.includes(pathname) || REDESIGNED_PREFIXES.some((p) => pathname.startsWith(p));
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
