import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/faq", "/intake-geboekt", "/bedankt"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/faq", "/intake-geboekt", "/bedankt"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/faq", "/intake-geboekt", "/bedankt"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/faq", "/intake-geboekt", "/bedankt"],
      },
    ],
    sitemap: "https://crossfitalkmaar.com/sitemap.xml",
  };
}
