import type { Metadata } from "next";
import "./globals.css";
import KickstartBanner from "./components/KickstartBanner";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "CrossFit Alkmaar - Word sterker, beweeg beter, voel je fitter",
  description: "Professionele begeleiding in kleine groepen. Schaalbaar op elk niveau. Plan je gratis kennismaking.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className="antialiased">
        <KickstartBanner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}