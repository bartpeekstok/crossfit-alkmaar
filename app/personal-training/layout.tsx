import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Training Alkmaar - 1-op-1 Coaching",
  description:
    "Personal training in Alkmaar bij CrossFit Alkmaar. Eén-op-één begeleiding afgestemd op jouw doelen. Afvallen, sterker worden of fitter? Plan je gratis kennismaking!",
  keywords: ["personal training Alkmaar", "personal trainer Alkmaar", "1 op 1 coaching Alkmaar", "PT Alkmaar"],
  openGraph: {
    title: "Personal Training | Maximaal Resultaat",
    description:
      "Eén-op-één coaching volledig afgestemd op jouw doelen. Sneller resultaat met persoonlijke aandacht.",
    url: "https://www.crossfitalkmaar.com/personal-training",
  },
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/personal-training",
  },
};

export default function PersonalTrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
