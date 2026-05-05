"use client";

import { useEffect } from "react";
import { trackFormSubmit } from "../lib/analytics";

// Forms die als Meta Pixel "Lead" conversion-event moeten worden gefired.
// Voeg hier nieuwe form IDs toe die je als hoofdconversie wilt tellen.
const LEAD_FIRING_FORM_IDS = new Set<string>([
  "z8t7r0Jf0MGmJanbVsXB", // Landingspagina form (/start)
  "e3fbmRKr8THIIu0p0KAT", // Website form (intake popup)
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
          // Try to identify which form was submitted
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

          // Fire Meta Pixel "Lead" event for primary conversion forms
          if (LEAD_FIRING_FORM_IDS.has(formId) && typeof window.fbq === "function") {
            // Generate event_id for server-side deduplication via Conversion API
            const eventId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;

            // Store so the destination page (/free-intro) doesn't double-fire,
            // and so server-side CAPI can use the same event_id for dedup.
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
              // sessionStorage unavailable — continue without persistence
            }

            window.fbq(
              "track",
              "Lead",
              {
                content_name: formName,
                content_category: "intake",
              },
              { eventID: eventId }
            );
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
