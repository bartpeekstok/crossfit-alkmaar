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
  "sterke-core-zonder-crunches",
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

// Verdwenen WP-content zonder 1-op-1 vervanger: oude URL -> best passende
// bestaande pagina (op basis van Search Console-vertoningen, juli 2026).
// Alleen inhoudelijk verwante doelen; de rest valt op de categorie-catch-all.
const REMAP: Record<string, string> = {
  // Oude /blog-URLs die niet zijn teruggezet
  "/blog/fitness-voor-50-plussers": "/blog/krachttraining-50plus",
  "/blog/waarom-krachttraining-voor-50-plussers": "/blog/krachttraining-50plus",
  "/blog/wat-is-crossfit": "/blog/waarom-crossfit-alkmaar-niet-zomaar-een-sportschool-is",
  "/blog/eerste-keer-crossfit": "/crossfit-beginners-alkmaar",
  "/blog/crossfit-voor-beginners": "/crossfit-beginners-alkmaar",
  "/blog/functioneel-trainen-vs-machines": "/functional-fitness-alkmaar",
  "/blog/blessures-voorkomen": "/blog/blessures-en-trainen-bij-crossfit-alkmaar",
  "/blog/5-tips-om-consistent-te-blijven": "/blog/doelen-stellen-die-werken",
  // Topscoorders uit de oude categorieen
  "/training/coaches-moet-je-spierpijn-hebben-na-elke-workout": "/blog/moet-je-spierpijn-hebben-na-elke-workout",
  "/training/heeft-dagelijks-core-training-zin": "/blog/sterke-core-zonder-crunches",
  "/training/de-beste-oefening-voor-buikspieren": "/blog/sterke-core-zonder-crunches",
  "/dit-is-cfa/waarom-crossfit-alkmaar-niet-concurreert-met-grote-gyms-of-zij-met-ons": "/blog/waarom-crossfit-alkmaar-niet-zomaar-een-sportschool-is",
  "/gezond-eten/het-grote-geheim-over-gewicht-afvallen": "/blog/afvallen-in-alkmaar",
  "/gezond-eten/hoe-krijg-ik-zo-snel-mogelijk-een-sixpack": "/blog/wat-eet-je-voor-en-na-training",
  "/dit-is-cfa/wat-zijn-fitness-en-voedingstips-om-snel-spieren-op-te-bouwen": "/blog/wat-eet-je-voor-en-na-training",
  "/dit-is-cfa/kan-ik-spiermassa-opbouwen-en-tegelijkertijd-droog-trainen": "/blog/wat-eet-je-voor-en-na-training",
  "/dit-is-cfa/kun-je-een-sixpack-krijgen-van-hardlopen": "/blog/is-hardlopen-slecht-voor-je",
  "/training/small-group-trainingen-persoonlijke-aandacht-in-een-vaste-groep": "/small-group-training",
  "/dit-is-cfa/small-group-training-alle-voordelen-van-personal-training-zonder-het-prijskaartje": "/small-group-training",
  "/training/waarom-trainen-op-vaste-momenten-werkt-small-group-training-bij-crossfit-alkmaar": "/small-group-training",
  "/dit-is-cfa/28-day-kickstart-bij-crossfit-alkmaar": "/kickstart",
  "/dit-is-cfa/een-nieuwe-start-in-2024-jouw-28-day-kickstart": "/kickstart",
  "/dit-is-cfa/afvallen-in-alkmaar-28-day-kickstart": "/blog/afvallen-in-alkmaar",
  "/dit-is-cfa/waarom-staan-de-tarieven-van-crossfit-alkmaar-niet-op-de-website-vermeld": "/meer-info",
  "/dit-is-cfa/waarom-drie-keer-per-week-trainen-al-genoeg-is-om-verschil-te-merken": "/blog/drie-keer-per-week-trainen-werkt",
  "/dit-is-cfa/personal-training-alkmaar-wanneer": "/blog/personal-training-alkmaar",
  "/training/afvallen-als-doel-waarom-de-keuze-voor-de-juiste-sportschool-belangrijk-is": "/blog/de-juiste-sportschool-kiezen",
  "/training/sporten-met-een-vol-hoofd": "/blog/training-als-stressverlichter",
  "/training/starten-met-trainen": "/blog/sportschool-voor-beginners",
  "/gezondheid/waarom-verlies-ik-mijn-conditie-zo-snel": "/blog/hoe-vaak-moet-je-trainen",
  "/uncategorized/te-gespierd-van-crossfit-alkmaar": "/blog/ben-jij-fit-genoeg-voor-crossfit-alkmaar",
  "/uncategorized/van-special-forces-naar-crossfit": "/onze-leden",
  // Overige oude losse pagina's
  "/gratis-voedingsintake": "/voedingsadvies",
  "/strong-moms-gratis-intake": "/programmas",
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

  // 2) expliciete remap van verdwenen content naar best passende pagina
  if (REMAP[path]) return redirectTo(REMAP[path]);

  // 3) vangnet voor alles wat overblijft in oude WP-categorieën
  //    (categorie-index, /page/N-paginering en niet-teruggezette posts):
  //    ledenverhalen -> /onze-leden, voeding -> /voedingsadvies, rest -> /blog
  const catMatch = path.match(/^\/([^/]+)(\/.*)?$/);
  if (catMatch && OLD_CATS.has(catMatch[1])) {
    const rest = catMatch[2] ?? "";
    if (catMatch[1] === "succesverhalen" || rest.startsWith("/verhalen-van-onze-leden")) {
      return redirectTo("/onze-leden");
    }
    if (catMatch[1] === "gezond-eten") return redirectTo("/voedingsadvies");
    return redirectTo("/blog");
  }

  // 4) oude blogpaginering /blog/page/N -> /blog
  if (/^\/blog\/page\/\d+$/.test(path)) return redirectTo("/blog");

  // 5) standaard trailing-slash-normalisatie (zoals Next default)
  if (path !== pathname) return redirectTo(path);

  return NextResponse.next();
}

export const config = {
  // alles behalve interne assets, API-routes en bestanden met extensie
  matcher: ["/((?!_next/|api/|.*\\.[\\w]+$).*)"],
};
