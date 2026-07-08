import { NextResponse } from "next/server";
import { EVENTS } from "../../events/eventsData";

// Publieke, leesbare lijst van events voor externe consumers (o.a. de lounge-slideshow).
// CORS open zodat de slideshow-app dit cross-origin kan ophalen.
// GET https://www.crossfitalkmaar.com/api/events

const SITE = "https://www.crossfitalkmaar.com";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function absolute(url: string): string {
  if (/^https?:\/\//.test(url)) return url;
  return SITE + (url.startsWith("/") ? url : "/" + url);
}

// Per request bepalen (niet bij build) zodat de datumfilter meeloopt met vandaag.
export const dynamic = "force-dynamic";

// "Vandaag" in de Nederlandse tijdzone als YYYY-MM-DD, zodat een event pas na
// afloop van zijn eigen dag uit de slideshow verdwijnt (lounge-tv staat in NL).
function todayInNL(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Amsterdam" }).format(new Date());
}

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

export function GET() {
  const today = todayInNL();
  // Voorbije events vallen weg: alleen events van vandaag en later blijven in de slideshow.
  const events = EVENTS.filter((e) => e.isoDate >= today).map((e) => ({
    title: e.title,
    date: e.isoDate,
    dateLabel: e.dateLabel,
    time: e.time ?? "",
    place: e.place ?? "",
    tag: e.tag,
    // Beknopte tekst voor op de slide, valt terug op de uitgebreide website-tekst.
    slideText: e.slideText ?? e.text,
    text: e.text,
    image: absolute(e.img),
    // Inschrijf-/infolink: externe URL letterlijk, interne pagina als absolute URL.
    signup: e.href ? absolute(e.href) : "",
    url: e.href ? absolute(e.href) : `${SITE}/events`,
  }));

  return NextResponse.json(
    { source: "crossfitalkmaar.com", count: events.length, events },
    { headers: { ...CORS, "Cache-Control": "public, max-age=300, s-maxage=300" } }
  );
}
