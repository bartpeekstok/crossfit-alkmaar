import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { PopupProvider } from "./components/PopupContext";
import IntakePopup from "./components/IntakePopup";
import KickstartBanner from "./components/KickstartBanner";
import CookieBanner from "./components/CookieBanner";

export const metadata: Metadata = {
  title: {
    default: "CrossFit Alkmaar - Train veilig en effectief op elk niveau",
    template: "%s | CrossFit Alkmaar",
  },
  description:
    "CrossFit Alkmaar: professionele begeleiding, schaalbare trainingen voor alle niveaus. Of je nu 30, 50 of 60+ bent - wij helpen je sterker worden. Plan je gratis intake!",
  keywords: [
    "CrossFit Alkmaar",
    "CrossFit",
    "fitness Alkmaar",
    "personal training Alkmaar",
    "groepslessen Alkmaar",
    "krachttraining",
    "functionele fitness",
    "50+ fitness",
    "beginners CrossFit",
  ],
  authors: [{ name: "CrossFit Alkmaar" }],
  creator: "CrossFit Alkmaar",
  publisher: "CrossFit Alkmaar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://crossfitalkmaar.nl",
    siteName: "CrossFit Alkmaar",
    title: "CrossFit Alkmaar - Train veilig en effectief op elk niveau",
    description:
      "Professionele begeleiding, schaalbare trainingen voor alle niveaus. Plan je gratis intake!",
    images: [
      {
        url: "https://crossfitalkmaar.nl/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "CrossFit Alkmaar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CrossFit Alkmaar - Train veilig en effectief op elk niveau",
    description:
      "Professionele begeleiding, schaalbare trainingen voor alle niveaus. Plan je gratis intake!",
    images: ["https://crossfitalkmaar.nl/images/hero.jpg"],
  },
  verification: {
    // Voeg hier je Google Search Console verificatie code toe
    // google: "jouw-verificatie-code",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.nl",
  },
  metadataBase: new URL("https://crossfitalkmaar.nl"),
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="geo.region" content="NL-NH" />
        <meta name="geo.placename" content="Alkmaar" />
      </head>
      <body className="antialiased">
        <PopupProvider>
          <Header />
          <main className="pb-16">{children}</main>
          <Footer />
          <IntakePopup />
          <KickstartBanner />
          <CookieBanner />
        </PopupProvider>
      </body>
    </html>
  );
}