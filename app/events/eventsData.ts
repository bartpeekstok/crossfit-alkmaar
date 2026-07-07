// Bron van waarheid voor alle events. Wordt gebruikt door:
//  - de /events pagina (app/events/page.tsx)
//  - de publieke API (app/api/events/route.ts) die de lounge-slideshow uitleest
//
// Nieuw event: entry toevoegen (gesorteerd op datum). Vul "text" (uitgebreid, voor
// de website) en "slideText" (beknopt, voor op de tv-slide). Laat slideText weg dan
// gebruikt de slide automatisch "text".

export type CfaEvent = {
  href?: string;
  title: string;
  dateLabel: string;
  isoDate: string;
  tag: string;
  img: string;
  imgAlt: string;
  text: string; // uitgebreide tekst voor de website
  slideText?: string; // beknopte tekst voor op de tv-slide (valt terug op text)
  time?: string;
  place?: string;
  imgPos?: string;
  external?: boolean; // href is een externe URL (opent in nieuw tabblad)
  ctaLabel?: string; // tekst van de klik-link, standaard "Bekijk event"
};

export const EVENTS: CfaEvent[] = [
  {
    href: "https://cfalkmaar.sportbitapp.nl/web/nl/events/72051",
    external: true,
    ctaLabel: "Schrijf je in",
    title: "Ladies Night",
    dateLabel: "Vrijdag 3 juli 2026",
    isoDate: "2026-07-03",
    tag: "Inschrijving open",
    img: "/redesign/assets/event-ladies-night.jpg",
    imgAlt: "CFA vrouwen samen tijdens de Ladies Night bij CrossFit Alkmaar",
    text: "Een avond exclusief voor de vrouwen van CFA. Thema: anything but gym clothes. Samen trainen, lachen en borrelen.",
    slideText: "Exclusief voor de CFA-vrouwen. Thema: anything but gym clothes.",
    time: "20:15",
    place: "CrossFit Alkmaar",
  },
  {
    title: "PEP Voedingsadvies",
    dateLabel: "Donderdag 16 juli 2026",
    isoDate: "2026-07-16",
    tag: "Gratis",
    img: "/redesign/assets/event-voedingsadvies.jpg",
    imgAlt: "Overzicht van gezonde verse voeding: vis, kip, groenten, fruit, noten en granen",
    text: "Benieuwd wat voeding voor jouw resultaten kan betekenen? Op donderdagavond 16 juli zit PEP bij ons in de box voor gratis miniconsults van 15 minuten. Stel je vragen over eten rondom je training, je herstel of een doel waar je aan werkt en loop weg met concrete tips die je meteen kunt toepassen. Kort, persoonlijk en helemaal vrijblijvend.",
    slideText: "Gratis miniconsult voeding met PEP. In 15 minuten persoonlijk advies rondom je training, herstel en doelen.",
    time: "Donderdagavond",
    place: "CrossFit Alkmaar",
  },
  {
    href: "https://cfalkmaar.sportbitapp.nl/web/nl/events/72270",
    external: true,
    ctaLabel: "Schrijf je in",
    title: "Kledingruil",
    dateLabel: "Vrijdag 24 juli 2026",
    isoDate: "2026-07-24",
    tag: "Inschrijving open",
    img: "/redesign/assets/event-kledingruil.jpg",
    imgAlt: "Kledingrek met kleurrijke kleding op hangers tijdens de kledingruil bij CrossFit Alkmaar",
    text: "Mest je kast uit en ruil mee! Neem 10 tot 50 stuks dameskleding, sportkleding of accessoires mee en scoor nieuwe toppers uit andermans kast. Dames onder elkaar, met borrel na afloop.",
    slideText: "Kast uitmesten en ruilen maar! Neem 10 tot 50 stuks mee en scoor nieuwe toppers. Gezellige borrel na afloop.",
    time: "Vanaf 20:30",
    place: "CrossFit Alkmaar",
  },
  {
    href: "/hyrox-simulatie-alkmaar",
    title: "HYROX Simulatie",
    dateLabel: "Zaterdag 22 augustus 2026",
    isoDate: "2026-08-22",
    tag: "Inschrijving open",
    img: "/redesign/assets/header-hyrox.jpg",
    imgAlt: "Atleten tijdens een HYROX workout bij CrossFit Alkmaar",
    text: "Een volledige HYROX race in onze eigen box: 8 rondes hardlopen afgewisseld met 8 stations. Open en Pro divisie, solo of met een buddy.",
    slideText: "Volledige HYROX race in onze box. Open en Pro, solo of duo.",
    time: "10:30 start",
    place: "CrossFit Alkmaar",
  },
  {
    href: "https://cfalkmaar.sportbitapp.nl/web/nl/events/72325",
    external: true,
    ctaLabel: "Schrijf je in",
    title: "Olympic Lifting Clinic",
    dateLabel: "Vrijdag 28 augustus 2026",
    isoDate: "2026-08-28",
    tag: "Inschrijving open",
    img: "/images/olympic-lifting-header.jpg",
    imgAlt: "Atleet tijdens een clean en jerk bij CrossFit Alkmaar",
    text: "Werk aan de techniek van je clean & jerk en snatch, voor zowel beginners als gevorderden. Leer beter tillen en bouw op het eind toe naar je zwaarste lift ooit.",
    slideText: "Techniekavond Olympic lifting: clean & jerk en snatch. Voor beginners en gevorderden.",
    time: "20:15",
    place: "CrossFit Alkmaar",
  },
  {
    title: "The Hardest Mile",
    dateLabel: "Zondag 13 september 2026",
    isoDate: "2026-09-13",
    tag: "Inschrijving opent binnenkort",
    img: "/redesign/assets/event-hardest-mile.jpg",
    imgAlt: "Atleten rennen over de atletiekbaan tijdens The Hardest Mile",
    text: "Vier keer vierhonderd meter: burpees, lunges, bearcrawl en hardlopen. Voor alle niveaus, op de atletiekbaan van AV Hylas.",
    slideText: "4x 400m: burpees, lunges, bearcrawl en hardlopen. Alle niveaus.",
    time: "Zondagochtend",
    place: "Atletiekvereniging Hylas",
  },
  {
    title: "CFA Badge Borrel",
    dateLabel: "Vrijdag 2 oktober 2026",
    isoDate: "2026-10-02",
    tag: "Inschrijving opent binnenkort",
    img: "/redesign/assets/event-badge-borrel.jpg",
    imgPos: "center 30%",
    imgAlt: "Leden van CrossFit Alkmaar samen in de lounge",
    text: "Borrel voor onze badge-houders. Even bijkletsen zonder zweet en gehijg, met een hapje en drankje van de box.",
    slideText: "Borrel voor onze badge-houders. Hapje en drankje van de box.",
    time: "Vanaf 19:00",
    place: "In de lounge",
  },
  {
    href: "/hyrox-simulatie-24-oktober",
    title: "HYROX Simulatie",
    dateLabel: "Zaterdag 24 oktober 2026",
    isoDate: "2026-10-24",
    tag: "Inschrijving open",
    img: "/redesign/assets/event-hyrox-simulatie.jpg",
    imgAlt: "Atleet duwt een sled tijdens een HYROX workout bij CrossFit Alkmaar",
    text: "De tweede HYROX Simulatie van het jaar. Test je racetijd, pak je revanche of proef voor het eerst hoe een echte HYROX voelt.",
    slideText: "De tweede HYROX Simulatie van het jaar. Test je racetijd.",
    time: "10:30 start",
    place: "CrossFit Alkmaar",
  },
  {
    title: "Baseqamp",
    dateLabel: "Zaterdag 7 november 2026",
    isoDate: "2026-11-07",
    tag: "Inschrijving opent binnenkort",
    img: "/redesign/assets/event-baseqamp.jpg",
    imgPos: "center 30%",
    imgAlt: "Deelnemers tijdens een ijsbad-workshop van Baseqamp",
    text: "Workshop ijsbad en ademhaling. Leer omgaan met kou en stress, herstel sneller en train met meer focus. Begeleide sessie.",
    slideText: "Workshop ijsbad en ademhaling. Leer omgaan met kou en stress.",
    time: "13:00",
    place: "CrossFit Alkmaar",
  },
  {
    title: "CFA Biathlon",
    dateLabel: "Zaterdag 21 november 2026",
    isoDate: "2026-11-21",
    tag: "Inschrijving opent binnenkort",
    img: "/redesign/assets/event-biathlon.jpg",
    imgAlt: "Biathlon-event bij CrossFit Alkmaar met skiërg en precisieschieten",
    text: "Onze eigen biathlon: een combinatie van skiën en precisieschieten. Conditie en een vaste hand, wie heeft allebei?",
    slideText: "Onze eigen biathlon: skiën en precisieschieten.",
    place: "CrossFit Alkmaar",
  },
];
