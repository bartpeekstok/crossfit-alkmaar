import { MetadataRoute } from "next";
import { blogPosts } from "./blog/[slug]/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.crossfitalkmaar.com";

  // Alle blogs uit blogData.ts (single source of truth); nieuwe blogs gaan automatisch mee
  const blogUrls = Object.entries(blogPosts).map(([slug, post]) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(post.date),
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
      url: `${baseUrl}/tieners`,
      lastModified: new Date("2026-04-02"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/programmas`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-03-10"),
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
      url: `${baseUrl}/free-intro`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
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
    {
      url: `${baseUrl}/functional-fitness-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/groepstraining-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/crossfit-vrouwen-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sportschool-begeleiding-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/afvallen-met-sport-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/strength-training-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/small-group-training-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/olympic-lifting-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sporten-overgang-alkmaar`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/crossfit-heerhugowaard`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/crossfit-heiloo`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/crossfit-bergen`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/crossfit-langedijk`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hyrox-heerhugowaard`,
      lastModified: new Date("2026-07-21"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hyrox-alkmaar`,
      lastModified: new Date("2026-03-18"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hyrox-pft-alkmaar`,
      lastModified: new Date("2026-03-18"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hyrox-simulatie-alkmaar`,
      lastModified: new Date("2026-08-28"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hardest-mile`,
      lastModified: new Date("2026-08-13"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date("2026-06-12"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // English pages
    ...englishPages,
    // German pages
    ...germanPages,
  ];
}
