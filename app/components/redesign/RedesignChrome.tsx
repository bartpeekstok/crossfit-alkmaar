"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { isRedesignedPath } from "../ConditionalChrome";
import Header from "./Header";
import Footer from "./Footer";
import LeadModal from "./LeadModal";
import ScrollReveal from "./ScrollReveal";

/**
 * Wrapper rond children dat de nieuwe Header/Footer/LeadModal
 * toont op redesigned-2026 paden. Op andere paden render't 'ie
 * alleen de children (oude chrome komt elders via ConditionalChrome).
 */
export default function RedesignChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (!isRedesignedPath(pathname)) return <>{children}</>;
  return (
    <>
      <Header />
      {children}
      <Footer />
      <LeadModal />
      <ScrollReveal />
    </>
  );
}
