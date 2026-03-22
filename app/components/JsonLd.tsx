"use client";

import { usePathname } from "next/navigation";

// Pages that have their own FAQPage schema - skip global FAQ on these
const PAGES_WITH_OWN_FAQ = [
  "/hyrox-pft-alkmaar",
  "/hyrox-simulatie-alkmaar",
  "/sportschool-alkmaar",
  "/fitness-alkmaar",
  "/sportschool-50-plus-alkmaar",
  "/hyrox-training-alkmaar",
  "/personal-trainer-alkmaar",
  "/afvallen-alkmaar",
  "/krachttraining-alkmaar",
  "/groepslessen-alkmaar",
  "/bootcamp-alkmaar",
  "/hyrox-voorbereiding-alkmaar",
  "/hyrox-gym-alkmaar",
  "/crossfit-beginners-alkmaar",
  "/personal-training-alkmaar",
  "/functional-fitness-alkmaar",
  "/groepstraining-alkmaar",
  "/crossfit-vrouwen-alkmaar",
  "/sportschool-begeleiding-alkmaar",
  "/afvallen-met-sport-alkmaar",
  "/strength-training-alkmaar",
  "/small-group-training-alkmaar",
  "/olympic-lifting-alkmaar",
  "/sporten-overgang-alkmaar",
];

function GlobalFaqSchema({ faqSchema }: { faqSchema: object }) {
  const pathname = usePathname();
  if (PAGES_WITH_OWN_FAQ.includes(pathname)) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

export default function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    "@id": "https://crossfitalkmaar.com/#organization",
    name: "CrossFit Alkmaar",
    alternateName: "CrossFit Alkmaar Sportschool",
    description:
      "Sportschool in Alkmaar voor krachttraining, fitness en afvallen. Small group training met persoonlijke begeleiding. Voor alle niveaus, ook 50+.",
    url: "https://crossfitalkmaar.com",
    logo: "https://crossfitalkmaar.com/images/logo_dark_square.png",
    image: "https://crossfitalkmaar.com/images/hero.jpg",
    telephone: "+31650500790",
    email: "info@crossfitalkmaar.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Phoenixstraat 33",
      addressLocality: "Alkmaar",
      postalCode: "1812 PP",
      addressRegion: "Noord-Holland",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.6324,
      longitude: 4.7534,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "06:30",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "06:30",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "08:00",
        closes: "12:30",
      },
    ],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    areaServed: {
      "@type": "City",
      name: "Alkmaar",
    },
    sameAs: [
      "https://www.instagram.com/crossfitalkmaar",
      "https://www.facebook.com/crossfitalkmaar",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "260",
      reviewCount: "260",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Trainingen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Groepslessen",
            description: "CrossFit groepslessen met professionele begeleiding",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Personal Training",
            description: "1-op-1 personal training sessies",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Small Group Training",
            description: "Training in kleine groepen met persoonlijke aandacht",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "28 Day Kickstart",
            description: "4 weken introductieprogramma voor beginners",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Ik ben niet fit genoeg om te starten",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dat is precies waarom je juist wél moet starten. Elke training schalen we naar jouw niveau.",
        },
      },
      {
        "@type": "Question",
        name: "Ik heb geen tijd voor 5x per week trainen",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hoeft ook niet. Veel leden trainen 2-3x per week en zien al goede resultaten.",
        },
      },
      {
        "@type": "Question",
        name: "Ben ik niet te oud om met trainen te beginnen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absoluut niet. Onze gemiddelde leeftijd is 35+. We hebben leden van 20 tot 70+ die veilig trainen.",
        },
      },
      {
        "@type": "Question",
        name: "Wat als ik blessures of beperkingen heb?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We passen bewegingen aan of kiezen alternatieven. Onze coaches hebben ervaring met revalidatie.",
        },
      },
      {
        "@type": "Question",
        name: "Is CrossFit geschikt voor beginners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absoluut. Bij CrossFit Alkmaar start iedereen met een 28 day kickstart waarin je in kleine groepen (max 6 personen) alle basisbewegingen leert. Elke oefening wordt aangepast aan jouw niveau, dus ervaring is niet nodig.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is het verschil tussen CrossFit en een gewone sportschool?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bij een gewone sportschool train je alleen met machines en zonder begeleiding. Bij CrossFit Alkmaar train je altijd onder leiding van professionele coaches, in kleine groepen met gevarieerde trainingen. Je wordt sterker, fitter én je bouwt een community op.",
        },
      },
      {
        "@type": "Question",
        name: "Voor wie is CrossFit Alkmaar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CrossFit Alkmaar is voor iedereen: van 20 tot 70+, van complete beginners tot ervaren sporters. Onze gemiddelde leeftijd is 35+. Elke training is schaalbaar naar jouw niveau, doelen en eventuele beperkingen.",
        },
      },
      {
        "@type": "Question",
        name: "Wat kost CrossFit Alkmaar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Groepslessen starten vanaf €99,95 per maand (2x per week). Het populairste abonnement is 3x per week voor €127,50 per maand. Onbeperkt trainen kost €159,95 per maand. Alle abonnementen zijn maandelijks opzegbaar en inclusief professionele coaching en 90 day check ins.",
        },
      },
      {
        "@type": "Question",
        name: "Hoe lang duurt een CrossFit les?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Een groepsles bij CrossFit Alkmaar duurt 60 minuten. Dit omvat een warming-up, techniekuitleg, de workout en een cooling-down. Elke les wordt begeleid door een professionele coach.",
        },
      },
      {
        "@type": "Question",
        name: "Hoeveel keer per week moet je CrossFit doen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "De meeste leden trainen 2 tot 3 keer per week en zien daar al goede resultaten mee. Je hoeft niet elke dag te trainen. Consistentie is belangrijker dan frequentie.",
        },
      },
      {
        "@type": "Question",
        name: "Is CrossFit veilig voor ouderen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, CrossFit is zeer geschikt voor ouderen. Bij CrossFit Alkmaar trainen leden van 20 tot 70+. Elke oefening wordt aangepast aan jouw niveau en eventuele beperkingen. Onze coaches hebben ervaring met het begeleiden van oudere sporters.",
        },
      },
      {
        "@type": "Question",
        name: "Wat is het verschil tussen CrossFit en HYROX?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CrossFit is een brede trainingsmethode gericht op algehele fitness met gevarieerde workouts. HYROX is een specifieke wedstrijdformat met hardlopen en functionele oefeningen. Bij CrossFit Alkmaar bieden we zowel CrossFit als HYROX-gerichte trainingen aan in onze groepslessen.",
        },
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://crossfitalkmaar.com/#website",
    url: "https://crossfitalkmaar.com",
    name: "CrossFit Alkmaar",
    description: "Sportschool in Alkmaar voor krachttraining, fitness en afvallen",
    publisher: {
      "@id": "https://crossfitalkmaar.com/#organization",
    },
    inLanguage: "nl-NL",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <GlobalFaqSchema faqSchema={faqSchema} />
    </>
  );
}
