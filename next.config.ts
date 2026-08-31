import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Trailing-slash-redirect zelf afhandelen (zie proxy.ts): oude WP-URLs met
  // slash moeten in 1 hop naar de nieuwe URL, zonder aparte slash-strip-308.
  skipTrailingSlashRedirect: true,

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

  // Proxy hyrox leaderboard (public Vercel deploy) onder de event-URL
  async rewrites() {
    return [
      {
        source: "/hyrox-simulatie-alkmaar/:path+",
        destination:
          "https://hyrox-sim-cfa.vercel.app/hyrox-simulatie-alkmaar/:path+",
      },
      // Statische landingspagina onder public/start/
      {
        source: "/start",
        destination: "/start/index.html",
      },
    ];
  },

  // Redirects from old WordPress site.
  // LET OP: alle oude BLOG-URLs (/dit-is-cfa/..., /training/..., etc.) worden in
  // proxy.ts geredirect: die vangt beide trailing-slash-varianten in ÉÉN hop.
  // Paginering (/blog/page/N/, /<cat>/page/N/) en onbekende oude URLs geven bewust 404.
  async redirects() {
    return [
      // HYROX Prep-programma geschrapt (aug 2026); oude links naar de HYROX-overzichtspagina
      { source: "/hyrox-prep", destination: "/hyrox-alkmaar", permanent: true },
      { source: "/hyrox-prep-alkmaar", destination: "/hyrox-alkmaar", permanent: true },
      // Editiepagina samengevoegd met de evergreen simulatiepagina (SEO: één URL voor 'hyrox simulatie')
      { source: "/hyrox-simulatie-24-oktober", destination: "/hyrox-simulatie-alkmaar", permanent: true },
      // Oude blogs die niet zijn teruggezet, naar de best passende opvolger
      {
        source: "/blog/hyrox-voor-beginners",
        destination: "/hyrox-alkmaar",
        permanent: true,
      },
      {
        source: "/blog/afvallen-zonder-dieet",
        destination: "/blog/afvallen-in-alkmaar",
        permanent: true,
      },
      {
        source: "/blog/spiermassa-opbouwen-na-je-40e",
        destination: "/blog/krachttraining-50plus",
        permanent: true,
      },
      {
        source: "/blog/krachttraining-voor-vrouwen",
        destination: "/crossfit-vrouwen-alkmaar",
        permanent: true,
      },
      // Tarieven page removed, route naar de tarieven-sectie op meer-info
      {
        source: "/tarieven",
        destination: "/meer-info#tarieven",
        permanent: true,
      },
      {
        source: "/tarieven/",
        destination: "/meer-info#tarieven",
        permanent: true,
      },
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
      // /intake-geboekt NIET redirecten: dat is de live bedankpagina
      // waar GHL na een boeking naartoe stuurt (intake_booked-event).
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
