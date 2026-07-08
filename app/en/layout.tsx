import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CrossFit Alkmaar | Gym & Strength Training in Alkmaar",
  description:
    "Gym in Alkmaar for strength training, fitness and weight loss. Small group training with personal guidance. For all levels, including 50+. Book your free intro!",
  keywords: ["gym Alkmaar", "fitness Alkmaar", "strength training Alkmaar", "CrossFit Alkmaar", "personal training Alkmaar"],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "CrossFit Alkmaar | Gym & Strength Training",
    description:
      "Gym in Alkmaar for strength training, fitness and weight loss. Small group training with personal guidance.",
    url: "https://www.crossfitalkmaar.com/en",
    locale: "en_GB",
  },
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/en",
    languages: {
      "nl-NL": "https://www.crossfitalkmaar.com",
      "en-GB": "https://www.crossfitalkmaar.com/en",
      "de-DE": "https://www.crossfitalkmaar.com/de",
    },
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
