import { NextRequest, NextResponse } from "next/server";

// Redirects van oude WordPress-blog-URLs, in ÉÉN hop, met én zonder trailing slash.
// Dit kan niet via next.config-redirects: die matchen geen trailing-slash-sources en
// de standaard slash-normalisatie zou eerst een extra 308-hop geven (redirect-keten).
// Daarom staat skipTrailingSlashRedirect aan in next.config.ts en doet deze proxy:
// 1) oude blog-URL (beide varianten) -> 308 direct naar de nieuwe /blog/<slug>
// 2) voor alle overige URLs de standaard trailing-slash-normalisatie (/pad/ -> 308 /pad)

// Oude categorie-archieven van WordPress
const OLD_CATS = new Set([
  "dit-is-cfa", "training", "gym-news", "gezond-eten",
  "gezondheid", "succesverhalen", "blessurepreventie", "uncategorized",
]);

// Blogs waarvan de slug gelijk bleef: /<cat>/<slug> -> /blog/<slug>
const BLOG_SLUGS = new Set([
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
]);

// Teruggezette blogs met een nieuwe (kortere) slug: oude URL -> nieuwe slug
const RESTORED: Record<string, string> = {
  "/dit-is-cfa/de-grootste-fout-die-mensen-maken-als-ze-weer-gaan-sporten": "grootste-fout-weer-gaan-sporten",
  "/training/heeft-bankdrukken-invloed-op-buikvet": "heeft-bankdrukken-invloed-op-buikvet",
  "/dit-is-cfa/drie-keer-per-week-trainen-werkt": "drie-keer-per-week-trainen-werkt",
  "/dit-is-cfa/de-cfa-open-25-schrijf-je-nu-in-voor-het-leukste-event-van-het-jaar": "cfa-open-25",
  "/dit-is-cfa/zo-haal-je-het-maximale-uit-drie-trainingen-per-week-zonder-extra-moeite": "maximale-uit-drie-trainingen-per-week",
  "/gezondheid/hoe-de-healthy-habits-challenge-je-helpt-tijdens-de-28-day-kickstart": "healthy-habits-challenge-28-day-kickstart",
  "/dit-is-cfa/zo-ziet-een-intake-er-bij-ons-uit": "zo-ziet-een-intake-eruit",
};

export default function proxy(req: NextRequest) {
  const { pathname, search, origin } = req.nextUrl;
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

  // LET OP: geen req.nextUrl.clone() gebruiken voor redirects; NextURL onthoudt de
  // trailing slash van het oorspronkelijke verzoek en plakt die terug in Location
  // (geeft /pad/ -> /pad/ = loop). Daarom een kale URL bouwen.
  const redirectTo = (p: string) => NextResponse.redirect(new URL(p + search, origin), 308);

  // 1) oude blog-URLs in één hop naar de nieuwe post
  let newSlug = RESTORED[path];
  if (!newSlug) {
    const m = path.match(/^\/([^/]+)\/([^/]+)$/);
    if (m && OLD_CATS.has(m[1]) && BLOG_SLUGS.has(m[2])) newSlug = m[2];
  }
  if (newSlug) return redirectTo(`/blog/${newSlug}`);

  // 2) standaard trailing-slash-normalisatie (zoals Next default)
  if (path !== pathname) return redirectTo(path);

  return NextResponse.next();
}

export const config = {
  // alles behalve interne assets, API-routes en bestanden met extensie
  matcher: ["/((?!_next/|api/|.*\\.[\\w]+$).*)"],
};
