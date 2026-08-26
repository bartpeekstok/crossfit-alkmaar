"use client";

import HyroxSimulatie from "../components/redesign/HyroxSimulatie";

export default function HyroxSimulatie24Oct() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SportsEvent",
        name: "HYROX Simulatie Alkmaar - 24 oktober",
        description: "Een volledige HYROX race bij CrossFit Alkmaar. 8 rondes hardlopen + 8 stations. Open en Pro divisie.",
        startDate: "2026-10-24T09:00:00+02:00",
        endDate: "2026-10-24T15:00:00+02:00",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: { "@type": "Place", name: "CrossFit Alkmaar", address: { "@type": "PostalAddress", streetAddress: "Phoenixstraat 33", addressLocality: "Alkmaar", postalCode: "1812 PP", addressCountry: "NL" } },
        organizer: { "@type": "Organization", name: "CrossFit Alkmaar", url: "https://www.crossfitalkmaar.com" },
        offers: [
          { "@type": "Offer", name: "CFA-leden", price: "10", priceCurrency: "EUR" },
          { "@type": "Offer", name: "Niet-leden", price: "35", priceCurrency: "EUR" },
        ],
        image: "https://www.crossfitalkmaar.com/redesign/assets/header-hyrox.jpg",
      }) }} />
      <HyroxSimulatie
        dateLabel="Zaterdag 24 oktober 2026"
        dateLong="Zaterdag 24 oktober 2026"
        registerUrl="https://ghl.crossfitalkmaar.com/widget/form/1F3ns6iRWouIPINxoHLG"
      />
    </>
  );
}
