import { Metadata } from "next";

export const metadata: Metadata = {
  title: "28 Day Kickstart - Start Nu met Trainen in Alkmaar",
  description:
    "Start jouw fitnessreis met onze 28 Day Kickstart in Alkmaar. In 4 weken bouw je een sterke basis op met begeleide trainingen en voedingsadvies. Gratis kennismaking!",
  keywords: ["kickstart programma Alkmaar", "beginnen met fitness Alkmaar", "4 weken trainingsprogramma", "beginners sportschool Alkmaar", "CrossFit beginners"],
  openGraph: {
    title: "28 Day Kickstart | Begin Jouw Transformatie",
    description:
      "In 4 weken van beginner naar fit. Persoonlijke begeleiding, voedingsadvies en een sterke basis.",
    url: "https://crossfitalkmaar.com/kickstart",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com/kickstart",
  },
};

export default function KickstartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
