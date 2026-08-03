import { NextRequest, NextResponse } from "next/server";

// Wachtlijst HYROX Prep Alkmaar. Dedicated GHL inbound webhook; segmentatie
// zit in de velden source en hyrox_ticket.
const WEBHOOK_URL =
  process.env.HYROX_PREP_WEBHOOK_URL ||
  "https://services.leadconnectorhq.com/hooks/elOOWDMoCEHJO4WhphRj/webhook-trigger/316a667e-5232-4275-a026-c4fbb80cadb4";

const TICKET_OPTIES = ["Ja", "Nee, nog niet", "Ik twijfel nog"];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, ticket, website, utm_source, utm_medium, utm_campaign } = body;

    // Honeypot ingevuld = bot, doe alsof het gelukt is
    if (website) {
      return new NextResponse(null, { status: 204 });
    }

    if (!firstName || !lastName || !email || !phone || !TICKET_OPTIES.includes(ticket)) {
      return NextResponse.json(
        { error: "firstName, lastName, email, phone en ticket zijn verplicht" },
        { status: 400 }
      );
    }

    const first = String(firstName).slice(0, 100);
    const last = String(lastName).slice(0, 100);

    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${first} ${last}`,
        full_name: `${first} ${last}`,
        first_name: first,
        last_name: last,
        email: String(email).slice(0, 200),
        phone: String(phone).slice(0, 50),
        hyrox_ticket: ticket,
        source: "hyrox-prep-wachtlijst",
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
