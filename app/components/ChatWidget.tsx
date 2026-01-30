"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

export default function ChatWidget() {
  const pathname = usePathname();
  
  // Pagina's waar de widget NIET moet verschijnen
  const hiddenPages = ["/free-intro", "/faq"];
  
  if (hiddenPages.includes(pathname)) {
    return null;
  }

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="697d34950079c347eeddf86b"
      strategy="lazyOnload"
    />
  );
}