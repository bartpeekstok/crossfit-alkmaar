"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useEffect } from "react";
import { trackCTAClick, trackEvent } from "../lib/analytics";

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
  useEffect(() => {
    trackEvent("landing_view", { page: "start" });
  }, []);

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Mini header — alleen logo + telefoon, geen navigatie */}
      <header className="bg-[#1a1a2e] text-white py-3 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/start" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="CrossFit Alkmaar"
              width={64}
              height={64}
              className="h-12 w-auto"
              priority
            />
          </Link>
          <a
            href="tel:+31722340560"
            className="text-sm md:text-base hover:text-gray-300 transition flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="hidden sm:inline">072-2340560</span>
            <span className="sm:hidden">Bel ons</span>
          </a>
        </div>
      </header>

      {/* 1. HERO */}
      <section
        className="relative text-white py-20 px-6 min-h-[560px] flex items-center"
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
        <div className="absolute inset-0 bg-black/65" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Sportschool werkt niet voor jou?
            <br />
            <span className="text-blue-300">Bij ons lukt het wél.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Begeleiding in kleine groepen, met coaches die je naam kennen en je
            naar resultaat leiden. Geen anonieme gym — een plek waar je
            terugkomt omdat het wérkt.
          </p>
          <CTAButton source="hero_cta" />
          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-200">
            <span>Duizenden mensen geholpen</span>
            <span className="hidden sm:inline">•</span>
            <span>7 professionele coaches</span>
            <span className="hidden sm:inline">•</span>
            <span>Alkmaar-Overdie</span>
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
              "Alleen sporten lukt niet — je mist de motivatie en structuur.",
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
            doen we het anders — en dat is precies waarom het wél lukt.
          </p>
        </div>
      </section>

      {/* 3. DE CFA-AANPAK — 3 PIJLERS */}
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
                aanmoedigen. Geen verveling, geen herhaling — elke training is
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
                leeftijd, met of zonder ervaring — zonder blessures en zonder
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

      {/* 4. SOCIAL PROOF — TESTIMONIALS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Anderen lukte het ook
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">
            Echte verhalen van mensen die net als jij aarzelden — en blij zijn
            dat ze toch zijn begonnen.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Lisette",
                age: 42,
                quote:
                  "Ik dacht dat sporten niks voor mij was. Hier voelt het als een team — ik kom nu drie keer per week en mis het als ik er niet ben.",
                result: "Sport nu structureel 3x per week",
              },
              {
                name: "Jarrald",
                age: 48,
                quote:
                  "Lang sponsor geweest van sportscholen. Hier is het anders: de coaches kennen me, weten waar ik sta en pushen me precies genoeg.",
                result: "20 kilo afgevallen",
              },
              {
                name: "Simone",
                age: 39,
                quote:
                  "Ik wilde sterker worden, niet dunner. Bij CFA leerde ik wat krachttraining echt is. Mijn lichaam is veranderd en mijn zelfvertrouwen ook.",
                result: "Sterker dan ooit",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-gray-100 p-6 rounded-lg shadow-sm flex flex-col"
              >
                {/* Foto-placeholder */}
                <div className="w-20 h-20 bg-gray-300 rounded-full mb-4 flex items-center justify-center text-gray-500 text-2xl font-bold">
                  {t.name.charAt(0)}
                </div>
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

      {/* 6. OVER DE COACHES */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            7 coaches die je naam kennen
          </h2>
          <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Geen losse instructeurs, maar een team dat samen optrekt. Allemaal
            opgeleid en ervaren — én oprecht ge&iuml;nteresseerd in jouw
            voortgang.
          </p>
          {/* Coach grid - placeholders */}
          <div className="grid grid-cols-3 md:grid-cols-7 gap-3 md:gap-4 mb-8">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs">
                Coach {i + 1}
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm text-center">
            Je leert ze allemaal kennen tijdens je intake en eerste weken.
          </p>
        </div>
      </section>

      {/* 7. FAQ */}
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
                a: "Niet bij ons. Onze coaches kijken mee bij elke beweging. Elke oefening wordt aangepast aan jouw niveau, lichaam en blessures. We hebben in 12 jaar duizenden mensen veilig leren trainen.",
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

      {/* 8. FORMULIER — HOOFDCONVERSIE */}
      <section id="aanmelden" className="py-16 px-6 bg-blue-900 scroll-mt-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
            Plan je gratis intake
          </h2>
          <p className="text-blue-100 text-lg text-center mb-2">
            We bellen je binnen 24 uur op een werkdag terug.
          </p>
          <p className="text-blue-200 text-sm text-center mb-8">
            Geen verplichtingen. Geen kosten. Geen sales-praatje.
          </p>

          {/* GHL Landingspagina form — inline embed, auto-resize via form_embed.js */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden p-2">
            <iframe
              src={GHL_FORM_URL}
              style={{ width: "100%", minHeight: "560px", border: "none", borderRadius: "3px" }}
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
          </div>
          <p className="text-blue-100 text-xs text-center mt-4">
            Door het formulier te versturen ga je akkoord met onze{" "}
            <Link href="/privacy" className="underline hover:text-white">
              privacy policy
            </Link>
            .
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
            Phoenixstraat 33, Alkmaar (Overdie) — gratis parkeren voor de deur.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-lg overflow-hidden shadow-sm bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.123!2d4.7534!3d52.6324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDM3JzU2LjYiTiA0wrA0NScxMi4yIkU!5e0!3m2!1snl!2snl!4v1700000000000"
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

      {/* 10. FOOTER — minimal */}
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
    </div>
  );
}
