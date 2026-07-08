import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Lees hoe CrossFit Alkmaar omgaat met jouw persoonlijke gegevens. Onze privacy policy beschrijft welke data we verzamelen en hoe we deze beschermen.",
  openGraph: {
    title: "Privacy Policy | CrossFit Alkmaar",
    description:
      "Lees hoe CrossFit Alkmaar omgaat met jouw persoonlijke gegevens en hoe we deze beschermen.",
    url: "https://www.crossfitalkmaar.com/privacy",
  },
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
