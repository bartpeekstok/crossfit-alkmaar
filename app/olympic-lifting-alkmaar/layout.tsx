import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Olympic Lifting Alkmaar - Snatch & Clean and Jerk Leren",
  description:
    "Olympic lifting in Alkmaar bij CrossFit Alkmaar. Leer de snatch en clean & jerk onder professionele begeleiding. Voor beginners en gevorderden. Probeer gratis!",
  keywords: ["olympic lifting Alkmaar", "olympisch gewichtheffen Alkmaar", "snatch leren Alkmaar", "clean and jerk Alkmaar", "weightlifting Alkmaar"],
  openGraph: {
    title: "Olympic Lifting Alkmaar | CrossFit Alkmaar",
    description:
      "Leer de snatch en clean & jerk onder professionele begeleiding. Voor beginners en gevorderden.",
    url: "https://crossfitalkmaar.com/olympic-lifting-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://crossfitalkmaar.com/images/olympic-lifting-header.jpg",
        width: 1200,
        height: 630,
        alt: "Olympic Lifting Alkmaar - CrossFit Alkmaar",
      },
    ],
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/olympic-lifting-alkmaar",
  },
};

export default function OlympicLiftingAlkmaarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
