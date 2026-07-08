import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strength Training Alkmaar - Word Sterker met Professionele Coaching",
  description:
    "Strength training in Alkmaar bij CrossFit Alkmaar. Squats, deadlifts, presses en meer onder professionele begeleiding. Voor beginners en gevorderden. Probeer gratis!",
  keywords: ["strength training Alkmaar", "krachttraining begeleiding Alkmaar", "sterker worden Alkmaar", "barbell training Alkmaar", "strength coaching Alkmaar"],
  openGraph: {
    title: "Strength Training Alkmaar | CrossFit Alkmaar",
    description:
      "Word sterker met squats, deadlifts en presses onder professionele coaching. Voor alle niveaus.",
    url: "https://www.crossfitalkmaar.com/strength-training-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://www.crossfitalkmaar.com/images/strength-training-header.jpg",
        width: 1200,
        height: 630,
        alt: "Strength Training Alkmaar - CrossFit Alkmaar",
      },
    ],
  },
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/strength-training-alkmaar",
  },
};

export default function StrengthTrainingAlkmaarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
