import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BUILD Small Group Training Alkmaar - Max 6 Personen",
  description:
    "BUILD small group training bij CrossFit Alkmaar. Semi personal training in een vaste groep van max 6 personen met gestructureerd programma. De voordelen van personal training voor een fractie van de prijs.",
  keywords: ["small group training Alkmaar", "kleine groep training", "semi personal training Alkmaar", "BUILD CrossFit Alkmaar"],
  openGraph: {
    title: "Small Group Training | Persoonlijk & Samen",
    description:
      "Train in een kleine groep van max 6 personen. Persoonlijke aandacht met de motivatie van samen trainen.",
    url: "https://crossfitalkmaar.com/small-group-training",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/small-group-training",
  },
};

export default function SmallGroupTrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
