import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afvallen in Alkmaar | CrossFit Alkmaar",
  description:
    "Gezond afvallen met professionele begeleiding bij CrossFit Alkmaar. Effectieve training en voedingsadvies in kleine groepen.",
  alternates: {
    canonical: "https://crossfitalkmaar.com/afvallen-alkmaar",
  },
  openGraph: {
    title: "Afvallen in Alkmaar | CrossFit Alkmaar",
    description:
      "Gezond afvallen met professionele begeleiding bij CrossFit Alkmaar. Effectieve training en voedingsadvies in kleine groepen.",
    url: "https://crossfitalkmaar.com/afvallen-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://crossfitalkmaar.com/images/afvallen-alkmaar-header.jpg",
        width: 1200,
        height: 630,
        alt: "Afvallen in Alkmaar - CrossFit Alkmaar",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
