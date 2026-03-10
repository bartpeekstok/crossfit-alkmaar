"use client";

import { usePathname } from "next/navigation";

const pathNames: { [key: string]: string } = {
  "": "Home",
  "kickstart": "28 Day Kickstart",
  "groepslessen": "Groepslessen",
  "personal-training": "Personal Training",
  "small-group-training": "Small Group Training",
  "voedingsadvies": "Voedingsadvies",
  "blog": "Blog",
  "faq": "Veelgestelde vragen",
  "onze-leden": "Onze Leden",
  "vacatures": "Vacatures",
  "privacy": "Privacy Policy",
  "meer-info": "Meer Informatie",
  "programmas": "Programma's",
  "free-intro": "Gratis Kennismaking",
  "functional-fitness-alkmaar": "Functional Fitness Alkmaar",
  "groepstraining-alkmaar": "Groepstraining Alkmaar",
  "crossfit-vrouwen-alkmaar": "CrossFit voor Vrouwen Alkmaar",
  "sportschool-begeleiding-alkmaar": "Sportschool met Begeleiding Alkmaar",
  "afvallen-met-sport-alkmaar": "Afvallen met Sport Alkmaar",
  "strength-training-alkmaar": "Strength Training Alkmaar",
  "small-group-training-alkmaar": "Small Group Training Alkmaar",
  "olympic-lifting-alkmaar": "Olympic Lifting Alkmaar",
  "sporten-overgang-alkmaar": "Sporten in de Overgang Alkmaar",
};

export default function BreadcrumbSchema() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://crossfitalkmaar.com",
    },
  ];

  let currentPath = "";
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const name = pathNames[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

    breadcrumbItems.push({
      "@type": "ListItem",
      position: index + 2,
      name: name,
      item: `https://crossfitalkmaar.com${currentPath}`,
    });
  });

  // Don't render on homepage
  if (segments.length === 0) {
    return null;
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}
