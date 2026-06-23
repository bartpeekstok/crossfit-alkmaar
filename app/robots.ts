import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/faq", "/intake-geboekt", "/bedankt", "/start", "/welkom-terug", "/hyrox-betaald"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/faq", "/intake-geboekt", "/bedankt", "/start", "/welkom-terug", "/hyrox-betaald"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/faq", "/intake-geboekt", "/bedankt", "/start", "/welkom-terug", "/hyrox-betaald"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/faq", "/intake-geboekt", "/bedankt", "/start", "/welkom-terug", "/hyrox-betaald"],
      },
    ],
    sitemap: "https://crossfitalkmaar.com/sitemap.xml",
  };
}
