"use client";

import { useTienersPopup } from "../components/TienersPopupContext";
import ServiceSchema from "../components/ServiceSchema";
import { trackCTAClick } from "../lib/analytics";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function TienersPage() {
  const { openPopup } = useTienersPopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="Tieners Programma"
        description="CrossFit tienerprogramma voor jongeren van 14-17 jaar. Leer veilig en effectief trainen onder professionele begeleiding. Goed voor kracht en zelfvertrouwen."
        url="https://crossfitalkmaar.com/tieners"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Voor welke leeftijd is het tienerprogramma?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Het tienerprogramma is voor jongeren van 14 tot en met 17 jaar.",
                },
              },
              {
                "@type": "Question",
                name: "Heeft mijn kind sportervaring nodig?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nee, geen ervaring nodig. We beginnen bij de basis en bouwen stap voor stap op. Elke training wordt afgestemd op het niveau van je kind.",
                },
              },
              {
                "@type": "Question",
                name: "Wat kost het tienerprogramma?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Het tienerprogramma kost €70 per maand voor twee keer per week trainen. De kennismaking is gratis.",
                },
              },
              {
                "@type": "Question",
                name: "Waarom CrossFit Alkmaar en niet een gewone sportschool?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bij grote sportscholen worden jongeren zonder begeleiding aan hun lot overgelaten. Bij ons staat er altijd een professionele coach naast je kind die zorgt voor veilige en effectieve training.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthClub",
            "@id": "https://crossfitalkmaar.com/#organization",
            name: "CrossFit Alkmaar",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              bestRating: "5",
              worstRating: "1",
              ratingCount: "260",
              reviewCount: "260",
            },
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="CrossFit tieners programma Alkmaar - jongeren trainen samen met dumbbells"
      >
        <Image
          src="/images/tieners-header.webp"
          alt="CrossFit tieners programma Alkmaar - jongeren trainen samen met dumbbells"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tieners Programma
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4">
            Speciaal voor jongeren van 14 tot en met 17 jaar
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Leer veilig en effectief trainen met altijd een professionele coach naast je.
          </p>
          <button
            onClick={() => { trackCTAClick('gratis_intake_hero', 'tieners'); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Plan een gratis kennismaking
          </button>
        </div>
      </section>

      {/* Wat is het Tieners Programma */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Wat is het Tieners Programma?</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              Ons tienerprogramma is speciaal ontwikkeld voor jongeren van 14 tot en met 17 jaar. We geven tieners een alternatief voor de grote sportscholen waar ze zonder begeleiding aan hun lot worden overgelaten. Bij ons staat er altijd een professionele coach naast je die je leert hoe je veilig en effectief traint.
            </p>
            <p className="mb-4">
              Zo geven we jongeren een goede start met trainen. Ze leren de juiste technieken, bouwen kracht en conditie op, en ontdekken hoe het voelt om fit en sterk te zijn. Dat geeft enorm veel zelfvertrouwen, niet alleen in de gym, maar ook daarbuiten.
            </p>
            <p>
              De trainingen zijn uitdagend maar altijd afgestemd op het niveau en de ontwikkeling van elke tiener. Er wordt geen druk uitgeoefend: het draait om plezier, vooruitgang en een gezonde basis leggen voor de rest van hun leven.
            </p>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <Script src="https://ghl.crossfitalkmaar.com/reputation/assets/review-widget.js" strategy="lazyOnload" />
          <iframe
            className="lc_reviews_widget"
            src="https://ghl.crossfitalkmaar.com/reputation/widgets/review_widget/elOOWDMoCEHJO4WhphRj"
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: '100%', width: '100%' }}
            title="Google Reviews"
          ></iframe>
        </div>
      </section>

      {/* Waarom CrossFit voor tieners */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Waarom CrossFit voor tieners?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Sterker worden</h3>
              <p className="text-gray-600">
                Bouw kracht en conditie op met gevarieerde trainingen die nooit saai worden. Elke les is anders.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Meer zelfvertrouwen</h3>
              <p className="text-gray-600">
                Ontdek wat je lichaam allemaal kan. Elke kleine overwinning bouwt zelfvertrouwen op dat verder reikt dan de gym.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Samen met leeftijdsgenoten</h3>
              <p className="text-gray-600">
                Train in een groep met jongeren van jouw leeftijd. Samen werken, samen lachen, samen groeien.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wat je krijgt */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Wat je krijgt</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Professionele coaching</h3>
              <p className="text-gray-600">Ervaren coaches die getraind zijn om met jongeren te werken. Veiligheid en plezier staan voorop.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Kleine groepen</h3>
              <p className="text-gray-600">Maximale persoonlijke aandacht door te trainen in kleine groepen. Iedereen wordt gezien.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Aangepast aan elk niveau</h3>
              <p className="text-gray-600">Of je nu nooit hebt gesport of al jaren bezig bent: elke training wordt afgestemd op jouw niveau.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Gevarieerde trainingen</h3>
              <p className="text-gray-600">Geen saaie herhalingen. Elke les is anders met een mix van kracht, conditie, coördinatie en plezier.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Gezonde gewoontes</h3>
              <p className="text-gray-600">Leg een sterke basis voor een actieve, gezonde levensstijl. Een investering voor het leven.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Leuke sfeer</h3>
              <p className="text-gray-600">Bij ons staat plezier centraal. Tieners komen hier graag naartoe, dat merk je aan de energie in de groep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Voor ouders */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Voor ouders</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              We begrijpen dat je als ouder wilt weten dat je kind in goede handen is. Bij CrossFit Alkmaar staat veiligheid altijd voorop. In tegenstelling tot grote sportscholen waar jongeren zonder begeleiding rondlopen, staat er bij ons altijd een ervaren coach naast je kind. Elke oefening wordt zorgvuldig uitgelegd en opgebouwd.
            </p>
            <p className="mb-4">
              Tieners leren bij ons niet alleen hoe ze veilig en effectief trainen, maar ontdekken ook hoe het voelt om fit en sterk te zijn. Dat heeft een enorm positief effect op hun zelfvertrouwen, niet alleen in de gym, maar ook op school en in het dagelijks leven.
            </p>
            <p>
              Benieuwd of dit iets voor jouw zoon of dochter is? Plan een gratis kennismaking, dan kun je zelf zien hoe we werken en al je vragen stellen.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde vragen</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Voor welke leeftijd is het tienerprogramma?</h3>
              <p className="text-gray-600">Het tienerprogramma is voor jongeren van 14 tot en met 17 jaar.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Heeft mijn kind sportervaring nodig?</h3>
              <p className="text-gray-600">Nee, geen ervaring nodig. We beginnen bij de basis en bouwen stap voor stap op. Elke training wordt afgestemd op het niveau van je kind.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Wat kost het tienerprogramma?</h3>
              <p className="text-gray-600">Het tienerprogramma kost €70 per maand voor twee keer per week trainen. De kennismaking is gratis.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Waarom CrossFit Alkmaar en niet een gewone sportschool?</h3>
              <p className="text-gray-600">Bij grote sportscholen worden jongeren zonder begeleiding aan hun lot overgelaten. Bij ons staat er altijd een professionele coach naast je kind die zorgt voor veilige en effectieve training.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Kennismaken?</h2>
          <p className="text-xl mb-8">
            Plan een gratis en vrijblijvende kennismaking.
          </p>
          <button
            onClick={() => { trackCTAClick('gratis_intake_footer', 'tieners'); openPopup(); }}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Plan een kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
