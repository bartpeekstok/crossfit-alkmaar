interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaServed?: string;
}

export default function ServiceSchema({
  name,
  description,
  url,
  provider = "CrossFit Alkmaar",
  areaServed = "Alkmaar",
}: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    url: url,
    provider: {
      "@type": "HealthClub",
      name: provider,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Phoenixstraat 33",
        addressLocality: "Alkmaar",
        postalCode: "1812 PP",
        addressCountry: "NL",
      },
    },
    areaServed: {
      "@type": "City",
      name: areaServed,
    },
    serviceType: "Fitness Training",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}
