"use client";

import { useEffect } from "react";
import { trackFormSubmit } from "../lib/analytics";

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
          trackFormSubmit(formNames[formId] || formId);
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
