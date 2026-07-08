import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bootcamp Alkmaar | CrossFit Alkmaar",
  description:
    "Op zoek naar een bootcamp in Alkmaar? CrossFit Alkmaar biedt intensieve groepstraining met coaching, binnen en het hele jaar door.",
  keywords: ["bootcamp Alkmaar", "bootcamp training Alkmaar", "intensieve training Alkmaar", "groepstraining buiten Alkmaar", "bootcamp alternatief Alkmaar", "fitness bootcamp Alkmaar"],
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/bootcamp-alkmaar",
  },
  openGraph: {
    title: "Bootcamp Alkmaar | CrossFit Alkmaar",
    description:
      "Op zoek naar een bootcamp in Alkmaar? CrossFit Alkmaar biedt intensieve groepstraining met coaching, binnen en het hele jaar door.",
    url: "https://www.crossfitalkmaar.com/bootcamp-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://www.crossfitalkmaar.com/images/bootcamp-alkmaar-header.jpg",
        width: 1200,
        height: 630,
        alt: "Bootcamp Alkmaar - CrossFit Alkmaar",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
