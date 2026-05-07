"use client";

import { useEffect } from "react";
import { trackFormSubmit } from "../lib/analytics";

const META_PIXEL_ID = "1745951116381755";

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

// Get _fbp cookie for proper attribution
function getFbpCookie(): string {
  const match = document.cookie.match(/_fbp=([^;]+)/);
  return match ? match[1] : "";
}

// Fire Lead event via sendBeacon, which is NOT cancelled by page navigation.
// Crucial because GHL redirects the parent immediately after form submit.
function fireLeadViaSendBeacon(eventId: string): boolean {
  if (!navigator.sendBeacon) return false;
  const params = new URLSearchParams({
    id: META_PIXEL_ID,
    ev: "Lead",
    eid: eventId,
    dl: window.location.href,
    rl: document.referrer || "",
    if: "false",
    ts: String(Date.now()),
    v: "2.9.313",
    sw: String(window.screen.width),
    sh: String(window.screen.height),
  });
  const fbp = getFbpCookie();
  if (fbp) params.set("fbp", fbp);
  return navigator.sendBeacon(
    `https://www.facebook.com/tr/?${params.toString()}`
  );
}

export default function FormSubmissionTracker() {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("ghl.crossfitalkmaar.com")) return;

      try {
        const data =
          typeof event.data === "string" ? JSON.parse(event.data) : event.data;

        // Debug: log every GHL message so we can see the actual format.
        // Remove later when we're sure submissions fire correctly.
        if (data && typeof data === "object") {
          console.log("[FormSubmissionTracker] GHL message:", data);
        }

        // Match a wide range of submission-event shapes that GHL has used
        // across different form versions.
        const eventName: string =
          data?.type ||
          data?.event_type ||
          data?.action ||
          data?.event ||
          "";
        const isSubmission =
          eventName === "form_submitted" ||
          eventName === "form-submitted" ||
          eventName === "FORM_SUBMITTED" ||
          eventName === "submitted" ||
          eventName === "submit" ||
          eventName === "form_submit";

        if (!isSubmission) return;

        const formId = data?.formId || data?.form_id || data?.id || "unknown";
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

        if (LEAD_FIRING_FORM_IDS.has(formId)) {
          const eventId = generateEventId();
          console.log(
            "[FormSubmissionTracker] firing Lead with eventID:",
            eventId
          );

          // 1. Standard fbq call (might be cancelled by redirect, but works
          //    when there is no redirect or when redirect is delayed).
          if (typeof window.fbq === "function") {
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

          // 2. sendBeacon backup. Browsers guarantee delivery even when
          //    the page navigates away mid-flight.
          fireLeadViaSendBeacon(eventId);

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
      } catch {
        // Not a JSON message or not relevant, ignore
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}
