import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { PopupProvider } from "./components/PopupContext";
import { KickstartPopupProvider } from "./components/KickstartPopupContext";
import { KickstartFormPopupProvider } from "./components/KickstartFormPopupContext";
import { PersonalTrainingPopupProvider } from "./components/PersonalTrainingPopupContext";
import { SmallGroupPopupProvider } from "./components/SmallGroupPopupContext";
import { VoedingsadviesPopupProvider } from "./components/VoedingsadviesPopupContext";
import { GroepslessenPopupProvider } from "./components/GroepslessenPopupContext";
import { PricingPopupProvider } from "./components/PricingPopupContext";
import IntakePopup from "./components/IntakePopup";
import KickstartPopup from "./components/KickstartPopup";
import KickstartFormPopup from "./components/KickstartFormPopup";
import PersonalTrainingPopup from "./components/PersonalTrainingPopup";
import SmallGroupPopup from "./components/SmallGroupPopup";
import VoedingsadviesPopup from "./components/VoedingsadviesPopup";
import GroepslessenPopup from "./components/GroepslessenPopup";
import PricingPopup from "./components/PricingPopup";
import CookieBanner from "./components/CookieBanner";
import GoogleAnalytics from "./components/GoogleAnalytics";
import ChatWidget from "./components/ChatWidget";

export const metadata: Metadata = {
  title: {
    default: "CrossFit Alkmaar | Sportschool & Krachttraining in Alkmaar",
    template: "%s | CrossFit Alkmaar",
  },
  description:
    "Sportschool in Alkmaar voor krachttraining, fitness en afvallen. Small group training met persoonlijke begeleiding. Voor alle niveaus, ook 50+. Plan je gratis intake!",
  keywords: [
    "sportschool Alkmaar",
    "fitness Alkmaar",
    "krachttraining Alkmaar",
    "small group training Alkmaar",
    "afvallen Alkmaar",
    "personal training Alkmaar",
    "groepslessen Alkmaar",
    "gym Alkmaar",
    "CrossFit Alkmaar",
    "fitness 50+ Alkmaar",
    "beginners fitness Alkmaar",
    "krachttraining voor vrouwen Alkmaar",
    "functionele fitness Alkmaar",
    "afvallen met begeleiding Alkmaar",
    "sportschool met begeleiding Alkmaar",
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
    url: "https://crossfitalkmaar.com",
    siteName: "CrossFit Alkmaar",
    title: "CrossFit Alkmaar | Sportschool & Krachttraining in Alkmaar",
    description:
      "Sportschool in Alkmaar voor krachttraining, fitness en afvallen. Small group training met persoonlijke begeleiding. Plan je gratis intake!",
    images: [
      {
        url: "https://crossfitalkmaar.com/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "CrossFit Alkmaar - Sportschool in Alkmaar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CrossFit Alkmaar | Sportschool & Krachttraining in Alkmaar",
    description:
      "Sportschool in Alkmaar voor krachttraining, fitness en afvallen. Small group training met persoonlijke begeleiding.",
    images: ["https://crossfitalkmaar.com/images/hero.jpg"],
  },
  verification: {
    // Voeg hier je Google Search Console verificatie code toe
    // google: "jouw-verificatie-code",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com",
  },
  metadataBase: new URL("https://crossfitalkmaar.com"),
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
        <meta name="geo.position" content="52.6324;4.7534" />
        <meta name="ICBM" content="52.6324, 4.7534" />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        <PopupProvider>
          <KickstartPopupProvider>
            <KickstartFormPopupProvider>
              <PersonalTrainingPopupProvider>
                <SmallGroupPopupProvider>
                  <VoedingsadviesPopupProvider>
                    <GroepslessenPopupProvider>
                      <PricingPopupProvider>
                        <Header />
                        <main className="pb-16">{children}</main>
                        <Footer />
                        <IntakePopup />
                        <KickstartPopup />
                        <KickstartFormPopup />
                        <PersonalTrainingPopup />
                        <SmallGroupPopup />
                        <VoedingsadviesPopup />
                        <GroepslessenPopup />
                        <PricingPopup />
                        <CookieBanner />
                      </PricingPopupProvider>
                    </GroepslessenPopupProvider>
                  </VoedingsadviesPopupProvider>
                </SmallGroupPopupProvider>
              </PersonalTrainingPopupProvider>
            </KickstartFormPopupProvider>
          </KickstartPopupProvider>
        </PopupProvider>
        
        {/* GoHighLevel Chat Widget */}
        <ChatWidget />
        <SpeedInsights />
      </body>
    </html>
  );
}