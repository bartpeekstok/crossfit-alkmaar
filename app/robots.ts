import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/faq", "/intake-geboekt", "/bedankt", "/start"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/faq", "/intake-geboekt", "/bedankt", "/start"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/faq", "/intake-geboekt", "/bedankt", "/start"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/faq", "/intake-geboekt", "/bedankt", "/start"],
      },
    ],
    sitemap: "https://crossfitalkmaar.com/sitemap.xml",
  };
}
