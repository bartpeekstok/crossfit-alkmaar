"use client";

import { useEffect } from "react";
import { trackFormSubmit } from "../lib/analytics";

// Forms die als Meta Pixel "Lead" conversion-event moeten worden gefired.
// GHL's iframe Pixel-firing werkt niet betrouwbaar voor cross-domain
// embedded forms, dus firen we vanaf de parent zodra GHL's
// form_submitted postMessage binnenkomt.
const LEAD_FIRING_FORM_IDS = new Set<string>([
  "z8t7r0Jf0MGmJanbVsXB", // Landingspagina form (/start)
]);

declare global {
  interface Window {
    fbq?: (
      action: string,
      eventName: string,
      params?: Record<string, unknown>,
      options?: { eventID?: string }
    ) => void;
  }
}

function generateEventId(): string {
  const rand =
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID().replace(/-/g, "").slice(0, 16)
      : Math.random().toString(36).slice(2, 18);
  return `lead_${Date.now()}_${rand}`;
}

export default function FormSubmissionTracker() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only listen to messages from GHL
      if (!event.origin.includes("ghl.crossfitalkmaar.com")) return;

      try {
        const data = typeof event.data === "string" ? JSON.parse(event.data) : event.data;

        // GHL sends various message formats on form submission
        if (
          data?.type === "form_submitted" ||
          data?.event_type === "form_submitted" ||
          data?.action === "form_submitted" ||
          data?.event === "form_submitted"
        ) {
          const formId = data?.formId || data?.form_id || "unknown";
          const formNames: Record<string, string> = {
            e3fbmRKr8THIIu0p0KAT: "intake",
            okYuR3fqmIOu1FJjLWlm: "kickstart_form",
            Dlem1saM0HnFhodOK65i: "groepslessen",
            g0ZyoJRDrJaJnWC0B6PW: "personal_training",
            "6iRfUsSgI7rqbPInTqh5": "small_group",
            "8uMHauIkDJV0OIDQnNk7": "voedingsadvies",
            SAgj2y3QX3GFvGt0Z9cv: "pricing",
            z8t7r0Jf0MGmJanbVsXB: "landingspagina",
          };
          const formName = formNames[formId] || formId;
          trackFormSubmit(formName);

          // Fire Meta Pixel "Lead" voor primary conversion forms.
          // GHL fired niet betrouwbaar zelf vanuit het iframe, dus we doen
          // het hier op het hoofddomein zodra het form_submitted bericht
          // binnenkomt (vóórdat GHL de parent redirect).
          if (LEAD_FIRING_FORM_IDS.has(formId) && typeof window.fbq === "function") {
            const eventId = generateEventId();

            window.fbq(
              "track",
              "Lead",
              {
                content_name: formName,
                content_category: "intake",
              },
              { eventID: eventId }
            );

            // Bewaar tijdelijk zodat /free-intro na de redirect niet dubbel
            // hoeft te firen (alleen relevant als we dat ooit toevoegen).
            try {
              sessionStorage.setItem(
                "meta_lead_event",
                JSON.stringify({
                  event_id: eventId,
                  form: formName,
                  fired_at: Date.now(),
                })
              );
            } catch {
              // sessionStorage unavailable, continue without persistence
            }
          }
        }
      } catch {
        // Not a JSON message or not relevant, ignore
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}
