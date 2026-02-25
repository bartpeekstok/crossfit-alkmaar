"use client";

import { trackEvent } from "./analytics";

// Define active A/B tests here
export const AB_TESTS = {
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
  tarieven_link: {
    id: "tarieven_link",
    variants: ["/meer-info#tarieven", "/tarieven"],
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
