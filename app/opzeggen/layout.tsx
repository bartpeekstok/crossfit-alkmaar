import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opzeggen | CrossFit Alkmaar",
  description:
    "Wil je je lidmaatschap bij CrossFit Alkmaar opzeggen? Vul het opzegformulier in, dan bevestigt de ledenservice je einddatum per e-mail.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OpzeggenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
