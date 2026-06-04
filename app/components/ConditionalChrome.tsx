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
];

export default function ConditionalChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isLanding = HIDDEN_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );
  if (isLanding) return null;
  const isRedesigned = REDESIGNED_PATHS.includes(pathname);
  if (isRedesigned) return null;
  return <>{children}</>;
}
