import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HYROX PFT Alkmaar | Gratis Physical Fitness Test 9 mei",
  description:
    "Doe gratis mee aan de HYROX Physical Fitness Test op 9 mei bij CrossFit Alkmaar. Ontdek je niveau en krijg advies voor je eerste HYROX race.",
  keywords: ["HYROX PFT Alkmaar", "HYROX Physical Fitness Test", "HYROX test Alkmaar", "HYROX evenement Alkmaar", "HYROX beginners test", "gratis HYROX test"],
  alternates: {
    canonical: "https://crossfitalkmaar.com/hyrox-pft-alkmaar",
  },
  openGraph: {
    title: "HYROX PFT Alkmaar | Gratis Physical Fitness Test 9 mei",
    description:
      "Doe gratis mee aan de HYROX Physical Fitness Test op 9 mei bij CrossFit Alkmaar. Ontdek je niveau en krijg advies voor je eerste HYROX race.",
    url: "https://crossfitalkmaar.com/hyrox-pft-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://crossfitalkmaar.com/images/blog/Blog%20hyrox.jpg",
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
