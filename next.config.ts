import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable compression
  compress: true,

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Redirects from old WordPress site
  async redirects() {
    return [
      // Main program pages
      {
        source: "/programmas/28-day-kickstart",
        destination: "/kickstart",
        permanent: true,
      },
      {
        source: "/programmas/28-day-kickstart/",
        destination: "/kickstart",
        permanent: true,
      },
      {
        source: "/programmas/groepslessen",
        destination: "/groepslessen",
        permanent: true,
      },
      {
        source: "/programmas/groepslessen/",
        destination: "/groepslessen",
        permanent: true,
      },
      {
        source: "/programmas/personal-training",
        destination: "/personal-training",
        permanent: true,
      },
      {
        source: "/programmas/personal-training/",
        destination: "/personal-training",
        permanent: true,
      },
      {
        source: "/programmas/voedingsadvies",
        destination: "/voedingsadvies",
        permanent: true,
      },
      {
        source: "/programmas/voedingsadvies/",
        destination: "/voedingsadvies",
        permanent: true,
      },
      // Small group
      {
        source: "/small-group",
        destination: "/small-group-training",
        permanent: true,
      },
      {
        source: "/small-group/",
        destination: "/small-group-training",
        permanent: true,
      },
      // Old blog categories to new blog
      {
        source: "/dit-is-cfa/:slug*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/training/:slug*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/gym-news/:slug*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/gezond-eten/:slug*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/gezondheid/:slug*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/succesverhalen/:slug*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blessurepreventie/:slug*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/uncategorized/:slug*",
        destination: "/blog",
        permanent: true,
      },
      // Old blog pagination
      {
        source: "/blog/page/:num",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/page/:num/",
        destination: "/blog",
        permanent: true,
      },
      // Intake pages
      {
        source: "/intake",
        destination: "/kickstart",
        permanent: true,
      },
      {
        source: "/intake/",
        destination: "/kickstart",
        permanent: true,
      },
      {
        source: "/intake-geboekt",
        destination: "/kickstart",
        permanent: true,
      },
      {
        source: "/intake-geboekt/",
        destination: "/kickstart",
        permanent: true,
      },
      {
        source: "/meer-informatie-intake",
        destination: "/kickstart",
        permanent: true,
      },
      {
        source: "/meer-informatie-intake/",
        destination: "/kickstart",
        permanent: true,
      },
      // Other old pages
      {
        source: "/drop-in",
        destination: "/",
        permanent: true,
      },
      {
        source: "/drop-in/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/testimonials",
        destination: "/",
        permanent: true,
      },
      {
        source: "/testimonials/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/onze-leden-en-reviews",
        destination: "/",
        permanent: true,
      },
      {
        source: "/onze-leden-en-reviews/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/olympisch-gewichtheffen",
        destination: "/groepslessen",
        permanent: true,
      },
      {
        source: "/olympisch-gewichtheffen/",
        destination: "/groepslessen",
        permanent: true,
      },
      {
        source: "/krachtvoer-personal-training-yoga",
        destination: "/personal-training",
        permanent: true,
      },
      {
        source: "/krachtvoer-personal-training-yoga/",
        destination: "/personal-training",
        permanent: true,
      },
      // Legal pages
      {
        source: "/algemene-voorwaarden",
        destination: "/",
        permanent: true,
      },
      {
        source: "/algemene-voorwaarden/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/disclaimer-privacyverklaring",
        destination: "/",
        permanent: true,
      },
      {
        source: "/disclaimer-privacyverklaring/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cancellation",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cancellation/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/opzegging",
        destination: "/",
        permanent: true,
      },
      {
        source: "/opzegging/",
        destination: "/",
        permanent: true,
      },
      // Date archives
      {
        source: "/2024/:path*",
        destination: "/blog",
        permanent: true,
      },
      // Missing old program pages
      {
        source: "/programmas/small-group-training",
        destination: "/small-group-training",
        permanent: true,
      },
      {
        source: "/programmas/small-group-training/",
        destination: "/small-group-training",
        permanent: true,
      },
      {
        source: "/programmas/strong-moms",
        destination: "/programmas",
        permanent: true,
      },
      {
        source: "/programmas/strong-moms/",
        destination: "/programmas",
        permanent: true,
      },
      // Contact page (old)
      {
        source: "/contact",
        destination: "/meer-info",
        permanent: true,
      },
      {
        source: "/contact/",
        destination: "/meer-info",
        permanent: true,
      },
      // English program URLs
      {
        source: "/programs/:slug*",
        destination: "/programmas",
        permanent: true,
      },
      // WordPress artifacts
      {
        source: "/wp-content/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-admin/:path*",
        destination: "/",
        permanent: false,
      },
      {
        source: "/embed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/embed/",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
