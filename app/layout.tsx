import KickstartBanner from "./components/KickstartBanner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "CrossFit Alkmaar - Word sterker, beweeg beter, voel je fitter",
  description: "Professionele begeleiding in kleine groepen. Schaalbaar op elk niveau.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>
        <KickstartBanner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}