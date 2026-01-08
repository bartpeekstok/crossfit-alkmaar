import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Training",
  description:
    "Eén-op-één personal training bij CrossFit Alkmaar. Volledig afgestemd op jouw doelen met maximale persoonlijke aandacht van je eigen coach.",
  openGraph: {
    title: "Personal Training | CrossFit Alkmaar",
    description:
      "Eén-op-één personal training volledig afgestemd op jouw doelen met maximale persoonlijke aandacht van je eigen coach.",
    url: "https://crossfitalkmaar.com/personal-training",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/personal-training",
  },
};

export default function PersonalTrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
