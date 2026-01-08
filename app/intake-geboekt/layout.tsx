import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intake Geboekt",
  description:
    "Bedankt voor je boeking! Je intake bij CrossFit Alkmaar is bevestigd. We kijken ernaar uit je te ontmoeten.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function IntakeGeboektLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
