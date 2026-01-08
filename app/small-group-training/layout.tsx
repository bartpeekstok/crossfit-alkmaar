import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Small Group Training Alkmaar - Max 6 Personen",
  description:
    "Small group training in Alkmaar bij CrossFit Alkmaar. Train in een kleine groep van max 6 personen met persoonlijke coaching. Het beste van twee werelden!",
  keywords: ["small group training Alkmaar", "kleine groep training", "semi personal training Alkmaar"],
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
