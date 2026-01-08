import { Metadata } from "next";

export const metadata: Metadata = {
  title: "28 Day Kickstart",
  description:
    "Start jouw fitnessreis met onze 28 Day Kickstart. In 4 weken bouw je een sterke basis op met begeleide trainingen en voedingsadvies bij CrossFit Alkmaar.",
  openGraph: {
    title: "28 Day Kickstart | CrossFit Alkmaar",
    description:
      "Start jouw fitnessreis met onze 28 Day Kickstart. In 4 weken bouw je een sterke basis op met begeleide trainingen en voedingsadvies.",
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
