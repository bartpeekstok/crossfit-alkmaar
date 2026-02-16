"use client";

import { trackEvent } from "./analytics";

// Define active A/B tests here
export const AB_TESTS = {
  hero_cta: {
    id: "hero_cta",
    variants: [
      "Plan je gratis kennismaking",
      "Zet de eerste stap naar een fitter leven",
    ],
  },
  hero_headline: {
    id: "hero_headline",
    variants: [
      "Hier word je wél sterker en fitter",
      "Moe van sportscholen waar je niet naartoe gaat?",
    ],
  },
  hero_subtitle: {
    id: "hero_subtitle",
    variants: [
      "Kleine groepen, professionele coaches en schaalbaar op elk niveau.",
      "Geen ervaring nodig. Onze coaches begeleiden je bij elke stap.",
    ],
  },
  cta_mid: {
    id: "cta_mid",
    variants: [
      "Klaar om te beginnen?",
      "Benieuwd of het iets voor jou is?",
    ],
  },
  popup_pricing_header: {
    id: "popup_pricing_header",
    variants: [
      "Meer informatie over onze programma's en tarieven",
      "Ontdek welk programma bij jou past",
    ],
  },
  popup_intake_header: {
    id: "popup_intake_header",
    variants: [
      "Laat hier je gegevens achter",
      "Plan je gratis en vrijblijvende kennismaking",
    ],
  },
  hero_social_proof: {
    id: "hero_social_proof",
    variants: ["hidden", "visible"],
  },
} as const;

type TestId = keyof typeof AB_TESTS;

/**
 * Get the assigned variant for a test.
 * Assigns randomly on first call, then persists in sessionStorage.
 * Tracks an ab_impression event on first assignment.
 */
export function getVariant(testId: TestId): string {
  if (typeof window === "undefined") return AB_TESTS[testId].variants[0];

  const storageKey = `ab_${testId}`;
  const stored = sessionStorage.getItem(storageKey);

  if (stored !== null) {
    const idx = parseInt(stored, 10);
    return AB_TESTS[testId].variants[idx] || AB_TESTS[testId].variants[0];
  }

  // Assign random variant (50/50)
  const variantIndex = Math.random() < 0.5 ? 0 : 1;
  sessionStorage.setItem(storageKey, String(variantIndex));

  // Track which variant this session got
  trackEvent("ab_impression", {
    test_id: testId,
    variant: String(variantIndex),
    variant_text: AB_TESTS[testId].variants[variantIndex],
  });

  return AB_TESTS[testId].variants[variantIndex];
}
