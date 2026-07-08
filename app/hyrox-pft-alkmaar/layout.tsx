import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYROX PFT Alkmaar | Gratis Physical Fitness Test 9 mei",
  description:
    "Doe gratis mee aan de HYROX Physical Fitness Test op 9 mei bij CrossFit Alkmaar. Ontdek waar je staat en in welke divisie je thuishoort.",
  keywords: ["HYROX PFT Alkmaar", "HYROX Physical Fitness Test", "HYROX test Alkmaar", "HYROX evenement Alkmaar", "HYROX beginners test", "gratis HYROX test"],
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/hyrox-pft-alkmaar",
  },
  openGraph: {
    title: "HYROX PFT Alkmaar | Gratis Physical Fitness Test 9 mei",
    description:
      "Doe gratis mee aan de HYROX Physical Fitness Test op 9 mei bij CrossFit Alkmaar. Ontdek waar je staat en in welke divisie je thuishoort.",
    url: "https://www.crossfitalkmaar.com/hyrox-pft-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://www.crossfitalkmaar.com/images/hyrox-pft-header.jpg",
        width: 1200,
        height: 630,
        alt: "HYROX Physical Fitness Test Alkmaar - 9 mei bij CrossFit Alkmaar",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
