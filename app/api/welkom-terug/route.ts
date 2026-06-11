import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL =
  process.env.WELKOM_TERUG_WEBHOOK_URL ||
  "https://services.leadconnectorhq.com/hooks/elOOWDMoCEHJO4WhphRj/webhook-trigger/9a4ba011-bae5-4a81-9f23-c748ff815e50";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, website, utm_source, utm_medium, utm_campaign } = body;

    // Honeypot ingevuld = bot, doe alsof het gelukt is
    if (website) {
      return new NextResponse(null, { status: 204 });
    }

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "name, email en phone zijn verplicht" }, { status: 400 });
    }

    const fullName = String(name).slice(0, 200);
    const parts = fullName.split(/\s+/);
    const firstName = parts.shift() || "";
    const lastName = parts.join(" ");

    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fullName,
        full_name: fullName,
        first_name: firstName,
        last_name: lastName,
        email: String(email).slice(0, 200),
        phone: String(phone).slice(0, 50),
        source: "welkom-terug-pagina",
        utm_source: utm_source || "",
        utm_medium: utm_medium || "",
        utm_campaign: utm_campaign || "",
        submitted_at: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "webhook error" }, { status: 502 });
    }

    return new NextResponse(null, { status: 204 });
  } catch {
    return NextResponse.json({ error: "invalid request" }, { status: 400 });
  }
}
