import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import KickstartBanner from "./components/KickstartBanner";
import Footer from "./components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CrossFit Alkmaar - Train veilig en effectief op elk niveau",
  description: "Professionele begeleiding, schaalbare trainingen en resultaten voor beginners tot gevorderden.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <KickstartBanner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}