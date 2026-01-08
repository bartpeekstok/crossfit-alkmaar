import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Small Group Training",
  description:
    "Train in een kleine groep van max 6 personen bij CrossFit Alkmaar. Persoonlijke aandacht van je coach gecombineerd met de motivatie van samen trainen.",
  openGraph: {
    title: "Small Group Training | CrossFit Alkmaar",
    description:
      "Train in een kleine groep van max 6 personen. Persoonlijke aandacht gecombineerd met de motivatie van samen trainen.",
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
