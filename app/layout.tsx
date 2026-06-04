import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
import Header from "./components/Header";
import Footer from "./components/Footer";
import { PopupProvider } from "./components/PopupContext";
import { KickstartPopupProvider } from "./components/KickstartPopupContext";
import { KickstartFormPopupProvider } from "./components/KickstartFormPopupContext";
import { PersonalTrainingPopupProvider } from "./components/PersonalTrainingPopupContext";
import { SmallGroupPopupProvider } from "./components/SmallGroupPopupContext";
import { VoedingsadviesPopupProvider } from "./components/VoedingsadviesPopupContext";
import { GroepslessenPopupProvider } from "./components/GroepslessenPopupContext";
import { TienersPopupProvider } from "./components/TienersPopupContext";
import { PricingPopupProvider } from "./components/PricingPopupContext";
import IntakePopup from "./components/IntakePopup";
import KickstartPopup from "./components/KickstartPopup";
import KickstartFormPopup from "./components/KickstartFormPopup";
import PersonalTrainingPopup from "./components/PersonalTrainingPopup";
import SmallGroupPopup from "./components/SmallGroupPopup";
import VoedingsadviesPopup from "./components/VoedingsadviesPopup";
import GroepslessenPopup from "./components/GroepslessenPopup";
import TienersPopup from "./components/TienersPopup";
import PricingPopup from "./components/PricingPopup";
import CookieBanner from "./components/CookieBanner";
import GoogleAnalytics from "./components/GoogleAnalytics";
import MetaPixel from "./components/MetaPixel";
import ChatWidget from "./components/ChatWidget";
import JsonLd from "./components/JsonLd";
import BreadcrumbSchema from "./components/BreadcrumbSchema";
import ScrollDepthTracker from "./components/ScrollDepthTracker";
import StickyMobileCTA from "./components/StickyMobileCTA";
import FormSubmissionTracker from "./components/FormSubmissionTracker";
import ConditionalChrome from "./components/ConditionalChrome";
import { LeadModalProvider } from "./components/redesign/LeadModalContext";
import RedesignChrome from "./components/redesign/RedesignChrome";

export const metadata: Metadata = {
  title: {
    default: "CrossFit Alkmaar | Sportschool waar je het wél volhoudt",
    template: "%s | CrossFit Alkmaar",
  },
  description:
    "Sportschool in Alkmaar voor krachttraining, fitness en afvallen. Small group training met persoonlijke begeleiding. Voor alle niveaus, ook 50+. Plan je gratis kennismaking!",
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
    title: "CrossFit Alkmaar | Sportschool waar je het wél volhoudt",
    description:
      "Sportschool in Alkmaar voor krachttraining, fitness en afvallen. Small group training met persoonlijke begeleiding. Plan je gratis kennismaking!",
    images: [
      {
        url: "https://crossfitalkmaar.com/images/logo_dark_square.png",
        width: 500,
        height: 500,
        alt: "CrossFit Alkmaar logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CrossFit Alkmaar | Sportschool waar je het wél volhoudt",
    description:
      "Sportschool in Alkmaar voor krachttraining, fitness en afvallen. Small group training met persoonlijke begeleiding.",
    images: ["https://crossfitalkmaar.com/images/logo_dark_square.png"],
  },
  verification: {
    google: "l6SVjEQksVtawGRXtAB5FgBSmmw0Xl6r-DhsxPQg9aU",
  },
  alternates: {
    canonical: "https://crossfitalkmaar.com",
    languages: {
      "nl-NL": "https://crossfitalkmaar.com",
      "en-GB": "https://crossfitalkmaar.com/en",
      "de-DE": "https://crossfitalkmaar.com/de",
    },
  },
  category: "fitness",
  classification: "Health & Fitness",
  metadataBase: new URL("https://crossfitalkmaar.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="geo.region" content="NL-NH" />
        <meta name="geo.placename" content="Alkmaar" />
        <meta name="geo.position" content="52.6324;4.7534" />
        <meta name="ICBM" content="52.6324, 4.7534" />
        <JsonLd />
      </head>
      <body className={`${inter.className} antialiased`}>
        <GoogleAnalytics />
        <MetaPixel />
        <BreadcrumbSchema />
        <LeadModalProvider>
        <PopupProvider>
          <KickstartPopupProvider>
            <KickstartFormPopupProvider>
              <PersonalTrainingPopupProvider>
                <SmallGroupPopupProvider>
                  <VoedingsadviesPopupProvider>
                    <GroepslessenPopupProvider>
                      <TienersPopupProvider>
                      <PricingPopupProvider>
                        <ConditionalChrome><Header /></ConditionalChrome>
                        <RedesignChrome>
                          <main>{children}</main>
                        </RedesignChrome>
                        <ConditionalChrome>
                          <Footer />
                          <IntakePopup />
                          <KickstartPopup />
                          <KickstartFormPopup />
                          <PersonalTrainingPopup />
                          <SmallGroupPopup />
                          <VoedingsadviesPopup />
                          <GroepslessenPopup />
                          <TienersPopup />
                          <PricingPopup />
                          <StickyMobileCTA />
                          <CookieBanner />
                        </ConditionalChrome>
                        <ScrollDepthTracker />
                        <FormSubmissionTracker />
                        <Analytics />
                      </PricingPopupProvider>
                      </TienersPopupProvider>
                    </GroepslessenPopupProvider>
                  </VoedingsadviesPopupProvider>
                </SmallGroupPopupProvider>
              </PersonalTrainingPopupProvider>
            </KickstartFormPopupProvider>
          </KickstartPopupProvider>
        </PopupProvider>
        </LeadModalProvider>
        
        {/* GoHighLevel Chat Widget */}
        <ConditionalChrome><ChatWidget /></ConditionalChrome>
        <SpeedInsights />
      </body>
    </html>
  );
}