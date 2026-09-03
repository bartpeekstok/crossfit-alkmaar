import { NextRequest, NextResponse } from "next/server";

// GHL inbound webhook voor opzeggingen. Zet OPZEGGEN_WEBHOOK_URL in Vercel.
const WEBHOOK_URL =
  process.env.OPZEGGEN_WEBHOOK_URL ||
  "https://services.leadconnectorhq.com/hooks/elOOWDMoCEHJO4WhphRj/webhook-trigger/0a6b6c92-c5e6-473c-9ceb-a8a0ab7f562e";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      voornaam,
      achternaam,
      email,
      lidmaatschap,
      reden,
      opmerkingen,
      score_coaching,
      score_hygiene,
      score_faciliteit,
      score_ervaring,
      aanbeveling,
      website,
    } = body;

    // Honeypot ingevuld = bot, doe alsof het gelukt is
    if (website) {
      return new NextResponse(null, { status: 204 });
    }

    if (!voornaam || !achternaam || !email || !lidmaatschap || !reden) {
      return NextResponse.json(
        { error: "voornaam, achternaam, email, lidmaatschap en reden zijn verplicht" },
        { status: 400 }
      );
    }

    if (!WEBHOOK_URL) {
      console.error("OPZEGGEN_WEBHOOK_URL ontbreekt");
      return NextResponse.json({ error: "webhook niet geconfigureerd" }, { status: 500 });
    }

    const firstName = String(voornaam).slice(0, 100);
    const lastName = String(achternaam).slice(0, 100);

    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        full_name: `${firstName} ${lastName}`,
        first_name: firstName,
        last_name: lastName,
        email: String(email).slice(0, 200),
        lidmaatschap: String(lidmaatschap).slice(0, 120),
        reden: String(reden).slice(0, 120),
        opmerkingen: String(opmerkingen || "").slice(0, 2000),
        score_coaching: String(score_coaching || "").slice(0, 40),
        score_hygiene: String(score_hygiene || "").slice(0, 40),
        score_faciliteit: String(score_faciliteit || "").slice(0, 40),
        score_ervaring: String(score_ervaring || "").slice(0, 40),
        aanbeveling: String(aanbeveling || "").slice(0, 40),
        source: "opzegformulier-website",
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
