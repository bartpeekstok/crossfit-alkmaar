import { NextRequest, NextResponse } from "next/server";

const INDEXNOW_KEY = "d8e3f2a1b4c5d6e7f8a9b0c1d2e3f4a5";
const SITE_URL = "https://crossfitalkmaar.com";

// IndexNow endpoints (Microsoft/Bing, Yandex, Seznam)
const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
];

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: "URLs array is required" },
        { status: 400 }
      );
    }

    // Submit to all IndexNow endpoints
    const results = await Promise.allSettled(
      INDEXNOW_ENDPOINTS.map(async (endpoint) => {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            host: "crossfitalkmaar.com",
            key: INDEXNOW_KEY,
            keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
            urlList: urls.map((url: string) =>
              url.startsWith("http") ? url : `${SITE_URL}${url}`
            ),
          }),
        });

        return {
          endpoint,
          status: response.status,
          ok: response.ok,
        };
      })
    );

    return NextResponse.json({
      success: true,
      message: "URLs submitted to IndexNow",
      results: results.map((r) =>
        r.status === "fulfilled" ? r.value : { error: r.reason }
      ),
    });
  } catch (error) {
    console.error("IndexNow error:", error);
    return NextResponse.json(
      { error: "Failed to submit to IndexNow" },
      { status: 500 }
    );
  }
}

// GET endpoint to manually trigger indexing of all blog posts
export async function GET() {
  const blogSlugs = [
    "personal-training-alkmaar",
    "fitness-voor-50-plussers",
    "sportschool-voor-beginners",
    "afvallen-in-alkmaar",
    "krachttraining-alkmaar",
    "hoe-vaak-moet-je-trainen",
    "de-kracht-van-samen-trainen",
    "functioneel-trainen-vs-machines",
    "waarom-warming-up-onmisbaar-is",
    "doelen-stellen-die-werken",
    "training-als-stressverlichter",
    "de-kracht-van-goede-voeding",
    "herstel-de-vergeten-component",
    "mindset-de-sleutel-tot-succes",
    "waarom-krachttraining-voor-50-plussers",
    "5-tips-om-consistent-te-blijven",
    "wat-eet-je-voor-en-na-training",
    "crossfit-voor-beginners",
    "blessures-voorkomen",
    "meer-energie-door-beweging",
  ];

  const urls = [
    SITE_URL,
    `${SITE_URL}/blog`,
    `${SITE_URL}/kickstart`,
    `${SITE_URL}/groepslessen`,
    `${SITE_URL}/personal-training`,
    `${SITE_URL}/small-group-training`,
    `${SITE_URL}/voedingsadvies`,
    `${SITE_URL}/contact`,
    // English pages
    `${SITE_URL}/en`,
    `${SITE_URL}/en/kickstart`,
    // German pages
    `${SITE_URL}/de`,
    `${SITE_URL}/de/kickstart`,
    ...blogSlugs.map((slug) => `${SITE_URL}/blog/${slug}`),
  ];

  // Submit to IndexNow
  const results = await Promise.allSettled(
    INDEXNOW_ENDPOINTS.map(async (endpoint) => {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          host: "crossfitalkmaar.com",
          key: INDEXNOW_KEY,
          keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
          urlList: urls,
        }),
      });

      return {
        endpoint,
        status: response.status,
        ok: response.ok,
      };
    })
  );

  return NextResponse.json({
    success: true,
    message: "All URLs submitted to IndexNow",
    urlCount: urls.length,
    results: results.map((r) =>
      r.status === "fulfilled" ? r.value : { error: r.reason }
    ),
  });
}
