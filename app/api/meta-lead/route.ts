import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// Meta Conversion API endpoint for server-side Lead event firing.
// Called by a GoHighLevel workflow on form submission.
// Provides redundancy when client-side Pixel is blocked (ad-blockers, iOS tracking prevention).
//
// Required env vars:
//   META_PIXEL_ID                - Meta Pixel ID (already in MetaPixel.tsx, mirror here)
//   META_CAPI_ACCESS_TOKEN       - System User access token from Events Manager
//   META_LEAD_WEBHOOK_SECRET     - Shared secret; GHL must include in `x-webhook-secret` header
// Optional:
//   META_CAPI_TEST_EVENT_CODE    - Test event code for Events Manager debugging

const META_API_VERSION = "v21.0";

function sha256(value: string): string {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function normalizePhone(phone: string): string {
  // Strip non-digits. Meta wants E.164 without "+" sign.
  const digits = phone.replace(/\D/g, "");
  // If Dutch local number (10 digits starting with 0), convert to international 31...
  if (digits.length === 10 && digits.startsWith("0")) {
    return "31" + digits.slice(1);
  }
  return digits;
}

function normalizeName(name: string): string {
  return name.trim().toLowerCase();
}

function pickField(body: Record<string, unknown>, ...keys: string[]): string | undefined {
  for (const key of keys) {
    const value = body[key];
    if (typeof value === "string" && value.trim() !== "") return value.trim();
  }
  return undefined;
}

export async function POST(request: NextRequest) {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  const webhookSecret = process.env.META_LEAD_WEBHOOK_SECRET;
  const testEventCode = process.env.META_CAPI_TEST_EVENT_CODE;

  if (!pixelId || !accessToken || !webhookSecret) {
    return NextResponse.json(
      { error: "Server not configured for Meta CAPI" },
      { status: 500 }
    );
  }

  // Auth: shared secret in header
  const providedSecret = request.headers.get("x-webhook-secret");
  if (providedSecret !== webhookSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Extract lead fields from GHL webhook payload (multiple possible field names)
  const email = pickField(body, "email", "Email", "contact_email");
  const phone = pickField(body, "phone", "Phone", "contact_phone", "phone_number");
  const firstName = pickField(body, "first_name", "firstName", "first", "voornaam");
  const lastName = pickField(body, "last_name", "lastName", "last", "achternaam");
  const eventIdFromBody = pickField(body, "event_id", "eventId");
  const fbp = pickField(body, "fbp", "_fbp");
  const fbc = pickField(body, "fbc", "_fbc");
  const clientUserAgent = pickField(body, "user_agent", "userAgent");

  if (!email && !phone) {
    return NextResponse.json(
      { error: "At least one of email or phone is required for matching" },
      { status: 400 }
    );
  }

  // Build Meta CAPI payload
  const eventId =
    eventIdFromBody ||
    `lead_capi_${Date.now()}_${crypto.randomBytes(4).toString("hex")}`;
  const eventTime = Math.floor(Date.now() / 1000);

  const userData: Record<string, string | string[]> = {};
  if (email) userData.em = sha256(normalizeEmail(email));
  if (phone) userData.ph = sha256(normalizePhone(phone));
  if (firstName) userData.fn = sha256(normalizeName(firstName));
  if (lastName) userData.ln = sha256(normalizeName(lastName));
  userData.country = sha256("nl");
  if (fbp) userData.fbp = fbp;
  if (fbc) userData.fbc = fbc;
  if (clientUserAgent) userData.client_user_agent = clientUserAgent;

  const sourceUrl = pickField(body, "source_url", "sourceUrl", "page_url") ||
    "https://crossfitalkmaar.com/start";

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: eventTime,
        event_id: eventId,
        event_source_url: sourceUrl,
        action_source: "website",
        user_data: userData,
        custom_data: {
          content_name: "landingspagina",
          content_category: "intake",
        },
      },
    ],
    ...(testEventCode ? { test_event_code: testEventCode } : {}),
  };

  const url = `https://graph.facebook.com/${META_API_VERSION}/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`;

  try {
    const metaRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const metaJson = await metaRes.json().catch(() => ({}));

    if (!metaRes.ok) {
      console.error("Meta CAPI error", metaRes.status, metaJson);
      return NextResponse.json(
        { error: "Meta CAPI request failed", status: metaRes.status, meta: metaJson },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, event_id: eventId, meta: metaJson });
  } catch (err) {
    console.error("Meta CAPI request threw", err);
    return NextResponse.json(
      { error: "Meta CAPI request error" },
      { status: 502 }
    );
  }
}
