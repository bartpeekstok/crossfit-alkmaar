import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://crossfitalkmaar.com";

  // Blog posts - voeg hier nieuwe blogs toe
  const blogPosts: string[] = [];

  const blogUrls = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date("2026-02-16"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // English pages
  const englishPages = [
    { url: `${baseUrl}/en`, priority: 0.8 },
    { url: `${baseUrl}/en/kickstart`, priority: 0.7 },
  ].map((page) => ({
    ...page,
    lastModified: new Date("2025-01-15"),
    changeFrequency: "monthly" as const,
  }));

  // German pages
  const germanPages = [
    { url: `${baseUrl}/de`, priority: 0.8 },
    { url: `${baseUrl}/de/kickstart`, priority: 0.7 },
  ].map((page) => ({
    ...page,
    lastModified: new Date("2025-01-15"),
    changeFrequency: "monthly" as const,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-02-08"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/kickstart`,
      lastModified: new Date("2025-12-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/groepslessen`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/personal-training`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/small-group-training`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/voedingsadvies`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/programmas`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2025-12-01"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogUrls,
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2025-01-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/meer-info`,
      lastModified: new Date("2025-10-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/onze-leden`,
      lastModified: new Date("2025-10-01"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/vacatures`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    // SEO landingspagina's
    {
      url: `${baseUrl}/sportschool-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fitness-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sportschool-50-plus-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hyrox-training-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/personal-trainer-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/afvallen-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/krachttraining-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/groepslessen-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bootcamp-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hyrox-voorbereiding-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hyrox-gym-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/crossfit-beginners-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/personal-training-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // English pages
    ...englishPages,
    // German pages
    ...germanPages,
  ];
}
