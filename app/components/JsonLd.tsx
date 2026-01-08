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
    logo: "https://crossfitalkmaar.com/images/logo.png",
    image: "https://crossfitalkmaar.com/images/hero.jpg",
    telephone: "+31612345678",
    email: "info@crossfitalkmaar.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hertog Aalbrechtweg 10",
      addressLocality: "Alkmaar",
      postalCode: "1823 DL",
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "06:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "12:00",
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
      ratingCount: "89",
      reviewCount: "89",
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
    </>
  );
}
