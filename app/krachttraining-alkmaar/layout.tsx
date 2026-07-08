import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Krachttraining Alkmaar | CrossFit Alkmaar",
  description:
    "Krachttraining met professionele coaching in Alkmaar. Squats, deadlifts en Olympic lifting in kleine groepen bij CrossFit Alkmaar.",
  keywords: ["krachttraining Alkmaar", "strength training Alkmaar", "squats deadlifts Alkmaar", "krachttraining begeleiding Alkmaar", "weightlifting Alkmaar", "kracht opbouwen Alkmaar"],
  alternates: {
    canonical: "https://www.crossfitalkmaar.com/krachttraining-alkmaar",
  },
  openGraph: {
    title: "Krachttraining Alkmaar | CrossFit Alkmaar",
    description:
      "Krachttraining met professionele coaching in Alkmaar. Squats, deadlifts en Olympic lifting in kleine groepen bij CrossFit Alkmaar.",
    url: "https://www.crossfitalkmaar.com/krachttraining-alkmaar",
    siteName: "CrossFit Alkmaar",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "https://www.crossfitalkmaar.com/images/krachttraining-alkmaar-header.jpg",
        width: 1200,
        height: 630,
        alt: "Krachttraining Alkmaar - CrossFit Alkmaar",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
