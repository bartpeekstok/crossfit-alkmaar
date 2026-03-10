import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/faq", "/intake-geboekt"],
    },
    sitemap: "https://crossfitalkmaar.com/sitemap.xml",
  };
}
