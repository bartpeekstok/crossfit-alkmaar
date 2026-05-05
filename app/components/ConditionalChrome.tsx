"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const HIDDEN_PREFIXES = ["/start"];

export default function ConditionalChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isLanding = HIDDEN_PREFIXES.some((p) => pathname === p || pathname.startsWith(p + "/"));
  if (isLanding) return null;
  return <>{children}</>;
}
