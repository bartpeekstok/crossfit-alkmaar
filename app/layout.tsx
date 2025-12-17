import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://crossfitalkmaar.com'),
  title: {
    default: "CrossFit Alkmaar | Sportschool & Krachttraining in Alkmaar",
    template: "%s | CrossFit Alkmaar"
  },
  description: "CrossFit Alkmaar: dé sportschool voor krachttraining, fitness en small group training in Alkmaar. Geschikt voor alle niveaus, van beginner tot gevorderd. Persoonlijke begeleiding, effectieve workouts. Start vandaag!",
  keywords: [
    "sportschool Alkmaar",
    "fitness Alkmaar", 
    "krachttraining Alkmaar",
    "CrossFit Alkmaar",
    "small group training Alkmaar",
    "personal training Alkmaar",
    "afvallen Alkmaar",
    "gym Alkmaar",
    "fitnesscentrum Alkmaar",
    "groepslessen Alkmaar",
    "strength training Alkmaar",
    "functioneel trainen Alkmaar",
    "beginner fitness Alkmaar",
    "sport Alkmaar",
    "gezond leven Alkmaar"
  ],
  authors: [{ name: "CrossFit Alkmaar" }],
  creator: "CrossFit Alkmaar",
  publisher: "CrossFit Alkmaar",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://crossfitalkmaar.com",
    siteName: "CrossFit Alkmaar",
    title: "CrossFit Alkmaar | Sportschool & Krachttraining in Alkmaar",
    description: "CrossFit Alkmaar: dé sportschool voor krachttraining, fitness en small group training in Alkmaar. Start vandaag met je gratis proefles!",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "CrossFit Alkmaar - Sportschool"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "CrossFit Alkmaar | Sportschool & Krachttraining",
    description: "Dé sportschool voor krachttraining en fitness in Alkmaar. Start vandaag!",
    images: ["/images/hero.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com"
  },
  other: {
    "geo.region": "NL-NH",
    "geo.placename": "Alkmaar",
    "geo.position": "52.6324;4.7534",
    "ICBM": "52.6324, 4.7534"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}