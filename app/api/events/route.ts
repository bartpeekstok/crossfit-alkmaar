import { NextResponse } from "next/server";
import { EVENTS } from "../../events/eventsData";

// Publieke, leesbare lijst van events voor externe consumers (o.a. de lounge-slideshow).
// CORS open zodat de slideshow-app dit cross-origin kan ophalen.
// GET https://crossfitalkmaar.com/api/events

const SITE = "https://crossfitalkmaar.com";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function absolute(url: string): string {
  if (/^https?:\/\//.test(url)) return url;
  return SITE + (url.startsWith("/") ? url : "/" + url);
}

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

export function GET() {
  const events = EVENTS.map((e) => ({
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
