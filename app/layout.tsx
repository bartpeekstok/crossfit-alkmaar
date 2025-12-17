import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { PopupProvider } from "./components/PopupContext";
import IntakePopup from "./components/IntakePopup";
import KickstartBanner from "./components/KickstartBanner";
import CookieBanner from "./components/CookieBanner";

export const metadata: Metadata = {
  title: "CrossFit Alkmaar - Train veilig en effectief op elk niveau",
  description:
    "Professionele begeleiding, schaalbare trainingen en resultaten voor beginners tot gevorderden. Plan je gratis kennismaking.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
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