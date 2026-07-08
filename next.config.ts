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

  // Redirects from old WordPress site
  async redirects() {
    // FIX 0: oude WordPress categorie-URLs 1-op-1 naar de nieuwe /blog/<slug> als
    // die slug bestaat (permanent, 1 hop, geen soft-404). Slugs die niet bestaan
    // vallen via de catch-alls verderop alsnog terug op /blog. Bron van de slugs:
    // app/blog/[slug]/blogData.ts (object-keys van blogPosts).
    const OLD_BLOG_CATS = [
      "dit-is-cfa", "training", "gym-news", "gezond-eten",
      "gezondheid", "succesverhalen", "blessurepreventie", "uncategorized",
    ];
    const BLOG_SLUGS = [
      "bart-bij-scherpschutters-podcast",
      "ben-jij-fit-genoeg-voor-crossfit-alkmaar",
      "blessures-en-trainen-bij-crossfit-alkmaar",
      "doe-je-het-zelf-of-schakel-je-een-professional-in",
      "een-hardcore-sportschool",
      "had-je-een-steentje-in-je-schoen",
      "hoe-je-ook-tussen-je-oren-sterker-wordt-van-trainen",
      "hyrox-bij-crossfit-alkmaar",
      "is-hardlopen-slecht-voor-je",
      "moet-je-spierpijn-hebben-na-elke-workout",
      "tienerprogramma-bij-crossfit-alkmaar",
      "twaalf-jaar-crossfit-alkmaar",
      "waarom-crossfit-alkmaar-niet-zomaar-een-sportschool-is",
      "waarom-je-bij-crossfit-alkmaar-geen-proefles-kan-doen",
      "waarom-mensen-duizend-trainingen-doen-bij-crossfit-alkmaar",
      "wat-we-nu-anders-doen-dan-tien-jaar-geleden",
      "wijze-lessen",
    ];
    const blogSlugRedirects = OLD_BLOG_CATS.flatMap((cat) =>
      BLOG_SLUGS.flatMap((slug) => [
        { source: `/${cat}/${slug}`, destination: `/blog/${slug}`, permanent: true },
        { source: `/${cat}/${slug}/`, destination: `/blog/${slug}`, permanent: true },
      ])
    );
    // Teruggezette WordPress-blogs: oude categorie-URL -> nieuwe /blog/<slug>.
    // Oude /blog/<slug>-URLs behouden dezelfde slug (pagina bestaat weer, geen redirect nodig).
    const RESTORED_BLOG_REDIRECTS: Array<[string, string]> = [
      ["/dit-is-cfa/de-grootste-fout-die-mensen-maken-als-ze-weer-gaan-sporten", "grootste-fout-weer-gaan-sporten"],
      ["/training/heeft-bankdrukken-invloed-op-buikvet", "heeft-bankdrukken-invloed-op-buikvet"],
      ["/dit-is-cfa/drie-keer-per-week-trainen-werkt", "drie-keer-per-week-trainen-werkt"],
      ["/dit-is-cfa/de-cfa-open-25-schrijf-je-nu-in-voor-het-leukste-event-van-het-jaar", "cfa-open-25"],
      ["/dit-is-cfa/zo-haal-je-het-maximale-uit-drie-trainingen-per-week-zonder-extra-moeite", "maximale-uit-drie-trainingen-per-week"],
      ["/gezondheid/hoe-de-healthy-habits-challenge-je-helpt-tijdens-de-28-day-kickstart", "healthy-habits-challenge-28-day-kickstart"],
      ["/dit-is-cfa/zo-ziet-een-intake-er-bij-ons-uit", "zo-ziet-een-intake-eruit"],
    ];
    const restoredBlogRedirects = RESTORED_BLOG_REDIRECTS.flatMap(([oldPath, slug]) => [
      { source: oldPath, destination: `/blog/${slug}`, permanent: true },
      { source: `${oldPath}/`, destination: `/blog/${slug}`, permanent: true },
    ]);
    return [
      // FIX 0: specifieke 1-op-1 blog-redirects VOOR de generieke catch-alls.
      ...blogSlugRedirects,
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
      // Teruggezette blogs: oude categorie-URL 1-op-1 naar de nieuwe post.
      // GEEN catch-all meer naar /blog: onbekende oude categorie-URLs en
      // paginering (/blog/page/N/, /dit-is-cfa/page/N/, etc.) geven bewust 404.
      ...restoredBlogRedirects,
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
