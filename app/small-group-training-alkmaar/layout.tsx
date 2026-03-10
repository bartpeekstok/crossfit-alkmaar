import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Small Group Training Alkmaar - Persoonlijke Aandacht, Groepsenergie",
  description:
    "Small group training in Alkmaar bij CrossFit Alkmaar. Train in kleine groepen van max 12 personen met persoonlijke coaching. Combineer de voordelen van personal training met groepsenergie. Probeer gratis!",
  keywords: ["small group training Alkmaar", "klein groep trainen Alkmaar", "semi personal training Alkmaar", "small group fitness Alkmaar", "personal training groep Alkmaar"],
  openGraph: {
    title: "Small Group Training Alkmaar | CrossFit Alkmaar",
    description:
      "Train in kleine groepen van max 12 met persoonlijke coaching. De voordelen van personal training met groepsenergie.",
    url: "https://crossfitalkmaar.com/small-group-training-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://crossfitalkmaar.com/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Small Group Training Alkmaar - CrossFit Alkmaar",
      },
    ],
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/small-group-training-alkmaar",
  },
};

export default function SmallGroupTrainingAlkmaarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
