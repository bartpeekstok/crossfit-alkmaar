"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";
import { trackCTAClick, trackEvent } from "../lib/analytics";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";

const GHL_FORM_ID = "z8t7r0Jf0MGmJanbVsXB";
const GHL_FORM_URL = `https://ghl.crossfitalkmaar.com/widget/form/${GHL_FORM_ID}`;

function CTAButton({
  label = "Plan je gratis intake",
  source,
  variant = "primary",
}: {
  label?: string;
  source: string;
  variant?: "primary" | "white";
}) {
  const base =
    "inline-block font-semibold py-4 px-8 rounded-lg transition cursor-pointer text-center";
  const styles =
    variant === "white"
      ? "bg-white text-blue-900 hover:bg-gray-100"
      : "bg-blue-900 text-white hover:bg-blue-950";
  return (
    <a
      href="#aanmelden"
      onClick={() => trackCTAClick(source, "start")}
      className={`${base} ${styles}`}
    >
      {label}
    </a>
  );
}

export default function StartPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const openForm = () => {
    trackEvent("popup_open", { popup_name: "landingspagina_form" });
    setIsFormOpen(true);
  };
  const closeForm = () => setIsFormOpen(false);

  useEffect(() => {
    trackEvent("landing_view", { page: "start" });
  }, []);

  // Lock body scroll while popup is open
  useEffect(() => {
    if (isFormOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isFormOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isFormOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeForm();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isFormOpen]);

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Mini header: sticky met logo + telefoon + CTA */}
      <header className="bg-[#1a1a2e] text-white py-3 px-6 sticky top-0 z-40 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-3">
          <Link href="/start" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="CrossFit Alkmaar"
              width={64}
              height={64}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="tel:+31722340560"
              className="text-sm hover:text-gray-300 transition hidden md:flex items-center gap-2"
              aria-label="Bel ons"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>072-2340560</span>
            </a>
            <button
              type="button"
              onClick={() => {
                trackCTAClick("sticky_header_cta", "start");
                openForm();
              }}
              className="bg-blue-700 hover:bg-blue-800 px-3 sm:px-4 py-2 rounded font-semibold text-xs sm:text-sm transition cursor-pointer"
            >
              Plan intake
            </button>
          </div>
        </div>
      </header>

      {/* 1. HERO + INLINE FORM (2-kolom op desktop) */}
      <section
        className="relative text-white py-16 px-6"
        role="img"
        aria-label="CrossFit Alkmaar - de sportschool waar het je wel lukt"
      >
        <Image
          src="/images/CFA-juni-03-community.jpg"
          alt="Leden van CrossFit Alkmaar trainen samen in kleine groep"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Tekst-kolom */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Sportschool werkt niet voor jou?
                <br />
                <span className="text-blue-300">Bij ons lukt het wél.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-4">
                Begeleiding in kleine groepen, met coaches die je naam kennen en je naar resultaat leiden.
              </p>
              <p className="text-base text-blue-200 italic mb-6">
                Gemiddelde leeftijd hier: 35. Geen sporters, gewone mensen.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 text-sm text-gray-200 mb-6">
                <span>✓ Geen ervaring nodig</span>
                <span>✓ Elke leeftijd</span>
                <span>✓ Geen verkoopgesprek</span>
              </div>
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-gray-300 pt-4 border-t border-gray-700">
                <span>Sinds 2013 in Alkmaar</span>
                <span className="hidden sm:inline">•</span>
                <span>7 professionele coaches</span>
                <span className="hidden sm:inline">•</span>
                <span>273+ 5★ Google reviews</span>
              </div>
            </div>
            {/* Form-kolom */}
            <div id="aanmelden" className="scroll-mt-20">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                <div style={{ backgroundColor: "#1e3a8a", padding: "16px 20px", textAlign: "center" }}>
                  <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "#ffffff", textTransform: "uppercase", margin: 0, letterSpacing: "0.5px" }}>
                    Plan je gratis intake
                  </h2>
                  <p style={{ color: "#ffffff", marginTop: "4px", marginBottom: 0, fontSize: "13px", opacity: 0.9 }}>
                    We bellen je binnen 24 uur op een werkdag terug
                  </p>
                </div>
                <iframe
                  src={GHL_FORM_URL}
                  style={{ width: "100%", minHeight: "420px", border: "none", display: "block" }}
                  id={`inline-${GHL_FORM_ID}`}
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Landingspagina form"
                  data-height="undefined"
                  data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
                  data-form-id={GHL_FORM_ID}
                  title="Landingspagina form"
                />
                <Script
                  src="https://ghl.crossfitalkmaar.com/js/form_embed.js"
                  strategy="afterInteractive"
                />
                <div style={{ backgroundColor: "#1e3a8a", padding: "16px 20px", textAlign: "center" }}>
                  <p style={{ fontSize: "16px", fontWeight: "bold", color: "#ffffff", textTransform: "uppercase", margin: 0, letterSpacing: "0.5px" }}>
                    Vrijblijvend & gratis
                  </p>
                  <p style={{ color: "#ffffff", marginTop: "4px", marginBottom: 0, fontSize: "13px", opacity: 0.9 }}>
                    Geen verplichtingen · Geen kosten · Geen verkoopgesprek
                  </p>
                </div>
              </div>
              <p className="text-center text-gray-300 text-xs mt-3">
                30 seconden invullen · Geen verplichtingen · Geen kosten
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEEM-HERKENNING */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Komt dit je bekend voor?
          </h2>
          <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Je bent niet de enige. Bijna iedereen die bij ons start, herkent
            zich in een of meer van deze punten:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Je hebt al meerdere sportscholen geprobeerd, maar elke keer haakte je af.",
              "Alleen sporten lukt niet, je mist de motivatie en structuur.",
              "Je traint maar ziet geen resultaat omdat je niet weet wat je doet.",
              "Je gym-abonnement loopt nog door, maar je bent er al maanden niet geweest.",
            ].map((line, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-lg shadow-sm flex items-start gap-3"
              >
                <span className="text-blue-900 font-bold text-xl shrink-0">✓</span>
                <p className="text-gray-800">{line}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 mt-10 text-center max-w-2xl mx-auto">
            Dat ligt niet aan jou. Het ligt aan de aanpak. Bij CrossFit Alkmaar
            doen we het anders. En dat is precies waarom het wél lukt.
          </p>
        </div>
      </section>

      {/* 2b. SOCIAL PROOF: TESTIMONIALS (omhoog verplaatst, direct na herkenning) */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Anderen lukte het ook
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">
            Echte verhalen van mensen die net als jij aarzelden en blij zijn dat ze toch zijn begonnen.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Lisette",
                age: 42,
                videoId: "WuOyAWYDeG0",
                quote:
                  "Ik dacht dat sporten niks voor mij was. Hier voelt het als een team. Ik kom nu drie keer per week en mis het als ik er niet ben.",
                result: "Sport nu structureel 3x per week",
              },
              {
                name: "Jarrald",
                age: 48,
                videoId: "1qhbmRPtysU",
                quote:
                  "Lang sponsor geweest van sportscholen. Hier is het anders: de coaches kennen me, weten waar ik sta en pushen me precies genoeg.",
                result: "20 kilo afgevallen",
              },
              {
                name: "Simone",
                age: 39,
                videoId: "14v6cnGlI7g",
                quote:
                  "Ik wilde sterker worden, niet dunner. Bij CFA leerde ik wat krachttraining echt is. Mijn lichaam is veranderd en mijn zelfvertrouwen ook.",
                result: "Sterker dan ooit",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${t.videoId}/mqdefault.jpg`}
                  alt={`${t.name}, lid bij CrossFit Alkmaar`}
                  width={80}
                  height={80}
                  loading="lazy"
                  className="w-20 h-20 rounded-full mb-4 object-cover bg-gray-300"
                />
                <p className="text-gray-800 italic mb-4 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-gray-300 pt-3">
                  <p className="font-bold text-gray-900">
                    {t.name}, {t.age}
                  </p>
                  <p className="text-sm text-blue-900 font-semibold">
                    {t.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <CTAButton source="testimonials_cta" />
          </div>
        </div>
      </section>

      {/* 3. DE CFA-AANPAK: 3 PIJLERS */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Onze aanpak: leuk, veilig, effectief
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Leuk */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Leuk</h3>
              <p className="text-gray-700">
                Je traint in een kleine groep mensen die jou kennen en
                aanmoedigen. Geen verveling, geen herhaling. Elke training is
                anders. Je komt terug omdat je het léuk vindt, niet omdat je
                moet.
              </p>
            </div>
            {/* Veilig */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Veilig</h3>
              <p className="text-gray-700">
                Onze coaches kijken mee bij elke beweging. Elke oefening wordt
                aangepast aan jouw niveau en lichaam. Beginnen kan op iedere
                leeftijd, met of zonder ervaring. Zonder blessures en zonder
                stress.
              </p>
            </div>
            {/* Effectief */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Effectief</h3>
              <p className="text-gray-700">
                Twee tot drie keer per week is genoeg. Je traint kracht én
                conditie in één sessie van een uur. Combineer dat met onze
                voedingsbegeleiding en je ziet binnen weken verandering.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <CTAButton source="aanpak_cta" />
          </div>
        </div>
      </section>

      {/* 3b. INSIDE THE BOX VIDEO */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Zo ziet een intake bij ons eruit
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
            Een rustig kennismakingsgesprek van 30 minuten. We luisteren naar jouw verhaal en doelen, jij ziet de gym en het team. Geen verkooppraatje, geen druk.
          </p>
          <div className="rounded-lg overflow-hidden shadow-2xl aspect-video">
            <TrackedYouTubeEmbed videoId="-3KF7VGVzdk" title="Inside the Box: CrossFit Alkmaar" />
          </div>
          <div className="text-center mt-10">
            <CTAButton source="post_video_cta" />
            <p className="text-sm text-gray-600 mt-3">
              30 seconden invullen, geen verplichtingen
            </p>
          </div>
        </div>
      </section>

      {/* 3c. GOOGLE REVIEWS WIDGET */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <Script
            src="https://ghl.crossfitalkmaar.com/reputation/assets/review-widget.js"
            strategy="lazyOnload"
          />
          <iframe
            className="lc_reviews_widget"
            src="https://ghl.crossfitalkmaar.com/reputation/widgets/review_widget/elOOWDMoCEHJO4WhphRj"
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: "100%", width: "100%" }}
            title="Google Reviews"
          />
        </div>
      </section>

      {/* 5. HOE HET WERKT */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Zo simpel begint het
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Plan je gratis intake",
                text:
                  "Vul het formulier in. We bellen je binnen 24 uur op een werkdag terug om een moment in te plannen.",
              },
              {
                step: "2",
                title: "Kennismakingsgesprek",
                text:
                  "30 minuten, vrijblijvend en zonder verplichtingen. We bespreken jouw doelen, beperkingen en wat het beste bij jou past.",
              },
              {
                step: "3",
                title: "Start in de Kickstart",
                text:
                  "Je begint in een kleine groep van max 6 personen. Je leert de basis, in je eigen tempo, met persoonlijke aandacht.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="bg-white p-6 rounded-lg shadow-sm relative"
              >
                <div className="absolute -top-4 -left-2 w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2">
                  {s.title}
                </h3>
                <p className="text-gray-700">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Veelgestelde vragen
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Is CrossFit niet voor gespierde types?",
                a: "Nee. De meeste van onze leden zijn 30-50 jaar, werkend, druk en startten zonder enige fitness-achtergrond. CrossFit is een methode, geen wedstrijd. Je traint op jouw niveau, niet dat van een ander.",
              },
              {
                q: "Ik ben niet fit genoeg om te beginnen.",
                a: "Dat hoor je vaker. En het is niet waar. Onze 28 Day Kickstart is letterlijk gemaakt voor mensen die nog niet fit zijn. Je leert eerst de basis, in een groep van max 6 personen, op jouw tempo. Je wordt fit doordát je begint.",
              },
              {
                q: "Is het niet gevaarlijk?",
                a: "Niet bij ons. Onze coaches kijken mee bij elke beweging. Elke oefening wordt aangepast aan jouw niveau, lichaam en blessures. Sinds 2013 helpen we mensen veilig sterker te worden, getoetst aan 273+ 5-sterren reviews.",
              },
              {
                q: "Hoeveel tijd kost het per week?",
                a: "Twee tot drie keer per week, een uur per sessie, is voldoende voor zichtbaar resultaat. Veel leden combineren dit gemakkelijk met werk en gezin.",
              },
              {
                q: "Wat is een intake precies?",
                a: "Een vrijblijvend gesprek van ongeveer 30 minuten. We leren je kennen, kijken naar je doelen en beperkingen, en bespreken wat de beste route is. Geen sales-praatje, geen druk. Alleen als het klikt en bij jou past, gaan we verder.",
              },
              {
                q: "Wat gebeurt er na de intake?",
                a: "Als je wilt starten, beginnen we in onze 28 Day Kickstart. Dat is een persoonlijk traject in een kleine groep waarin je rustig de basis leert. Daarna stroom je door naar de reguliere lessen. De prijs en alle details bespreken we tijdens de intake.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="bg-white p-5 rounded-lg shadow-sm group"
              >
                <summary className="cursor-pointer font-semibold text-gray-900 list-none flex justify-between items-center">
                  <span>{item.q}</span>
                  <span className="text-blue-900 text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-700 mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA-card (was inline form, vervangen omdat form nu in hero staat) */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Klaar om te beginnen?
          </h2>
          <p className="text-blue-100 text-lg mb-2">
            Plan je gratis intake. Wij bellen je binnen 24 uur op een werkdag terug.
          </p>
          <p className="text-blue-200 text-sm mb-8">
            Kickstart-groepen blijven klein (max 6 personen).
          </p>
          <CTAButton label="Plan je gratis intake" source="bottom_cta" variant="white" />
          <p className="text-blue-100 text-xs mt-4">
            Geen verplichtingen · Geen kosten · Geen verkoopgesprek
          </p>
        </div>
      </section>

      {/* 9. LOCATIE & BEREIKBAARHEID */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Waar je ons vindt
          </h2>
          <p className="text-lg text-gray-700 mb-10 text-center">
            Phoenixstraat 33, Alkmaar (Overdie). Gratis parkeren voor de deur.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-lg overflow-hidden shadow-sm bg-white">
              <iframe
                src="https://www.google.com/maps?q=CrossFit+Alkmaar+Phoenixstraat+33+Alkmaar&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locatie CrossFit Alkmaar"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col justify-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">CrossFit Alkmaar</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="text-sm text-blue-900 font-semibold block">ADRES</span>
                  Phoenixstraat 33<br />
                  1812 PP Alkmaar
                </p>
                <p>
                  <span className="text-sm text-blue-900 font-semibold block">PARKEREN</span>
                  Gratis voor de deur
                </p>
                <p>
                  <span className="text-sm text-blue-900 font-semibold block">TELEFOON</span>
                  <a href="tel:+31722340560" className="hover:text-blue-900">072-2340560</a>
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Phoenixstraat+33+1812+PP+Alkmaar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 font-semibold hover:underline mt-4 inline-block"
              >
                Bekijk op Google Maps →
              </a>
            </div>
          </div>
          <div className="text-center mt-12">
            <CTAButton source="locatie_cta" />
          </div>
        </div>
      </section>

      {/* 10. FOOTER: minimal */}
      <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="CrossFit Alkmaar"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <div>
                <p className="font-bold">CrossFit Alkmaar</p>
                <p className="text-sm text-gray-400">Phoenixstraat 33, Alkmaar</p>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/crossfitalkmaar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-blue-400 transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/crossfitalkmaar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-400 transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="text-center mb-4">
            <CTAButton label="Plan je gratis intake" source="footer_cta" variant="white" />
            <p className="text-sm text-gray-400 mt-3">
              30 seconden invullen, geen verplichtingen
            </p>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} CrossFit Alkmaar.</p>
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-white transition mt-1 inline-block"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>

      {/* POPUP: GHL Landingspagina form */}
      {isFormOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="start-form-title"
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={closeForm}
            aria-hidden="true"
          />
          <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 z-[101] overflow-hidden max-h-[90vh] flex flex-col">
            <button
              type="button"
              onClick={closeForm}
              aria-label="Sluit formulier"
              className="absolute top-3 right-3 text-white hover:text-gray-200 transition z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div style={{ backgroundColor: "#1e3a8a", padding: "20px 24px", textAlign: "center" }}>
              <h2
                id="start-form-title"
                style={{ fontSize: "20px", fontWeight: "bold", color: "#ffffff", textTransform: "uppercase", margin: 0 }}
              >
                Plan je gratis intake
              </h2>
              <p style={{ color: "#ffffff", marginTop: "4px", marginBottom: 0, fontSize: "14px" }}>
                We nemen snel contact met je op
              </p>
            </div>
            <div className="flex-1 overflow-auto">
              <iframe
                src={GHL_FORM_URL}
                style={{ width: "100%", minHeight: "520px", border: "none", borderRadius: "3px" }}
                id={`popup-${GHL_FORM_ID}`}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Landingspagina form"
                data-height="undefined"
                data-layout-iframe-id={`popup-${GHL_FORM_ID}`}
                data-form-id={GHL_FORM_ID}
                title="Landingspagina form"
              />
              <Script
                src="https://ghl.crossfitalkmaar.com/js/form_embed.js"
                strategy="afterInteractive"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
