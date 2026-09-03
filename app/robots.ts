import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/faq", "/intake-geboekt", "/bedankt", "/start", "/welkom-terug", "/opzeggen", "/hyrox-betaald", "/hardest-mile-betaald"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/faq", "/intake-geboekt", "/bedankt", "/start", "/welkom-terug", "/opzeggen", "/hyrox-betaald", "/hardest-mile-betaald"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/faq", "/intake-geboekt", "/bedankt", "/start", "/welkom-terug", "/opzeggen", "/hyrox-betaald", "/hardest-mile-betaald"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/faq", "/intake-geboekt", "/bedankt", "/start", "/welkom-terug", "/opzeggen", "/hyrox-betaald", "/hardest-mile-betaald"],
      },
    ],
    sitemap: "https://www.crossfitalkmaar.com/sitemap.xml",
  };
}
