import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/faq", "/intake-geboekt", "/bedankt", "/start", "/welkom-terug", "/hyrox-betaald", "/kickstart-welkom"],
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/faq", "/intake-geboekt", "/bedankt", "/start", "/welkom-terug", "/hyrox-betaald", "/kickstart-welkom"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/faq", "/intake-geboekt", "/bedankt", "/start", "/welkom-terug", "/hyrox-betaald", "/kickstart-welkom"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/faq", "/intake-geboekt", "/bedankt", "/start", "/welkom-terug", "/hyrox-betaald", "/kickstart-welkom"],
      },
    ],
    sitemap: "https://crossfitalkmaar.com/sitemap.xml",
  };
}
