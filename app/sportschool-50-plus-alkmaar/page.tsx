"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Image from "next/image";
import Link from "next/link";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";

export default function Sportschool50PlusPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="Sportschool 50+ Alkmaar - CrossFit Alkmaar"
        description="Veilig sporten voor 50-plussers met professionele begeleiding. Kleine groepen, aangepaste oefeningen, voor elk niveau."
        url="https://crossfitalkmaar.com/sportschool-50-plus-alkmaar"
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
                name: "Is CrossFit veilig voor 50-plussers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja. Elke oefening wordt aangepast aan jouw niveau en eventuele beperkingen. Onze coaches hebben ervaring met het begeleiden van oudere sporters.",
                },
              },
              {
                "@type": "Question",
                name: "Ik heb last van mijn knieën/rug, kan ik toch trainen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In veel gevallen wel. Onze coaches passen oefeningen aan of kiezen alternatieven. Bewegen is vaak juist goed bij gewrichtsklachten.",
                },
              },
              {
                "@type": "Question",
                name: "Zijn er speciale lessen voor ouderen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Onze reguliere lessen zijn geschikt voor alle leeftijden. Elke oefening is schaalbaar. Je traint samen met anderen, ieder op eigen niveau.",
                },
              },
              {
                "@type": "Question",
                name: "Wat is de gemiddelde leeftijd bij CrossFit Alkmaar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Onze leden zijn 20 tot 70+ jaar. De gemiddelde leeftijd is 35+. Je bent dus zeker niet de enige 50-plusser.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Renze — lid bij CrossFit Alkmaar",
            description: "Ik houd niet van fitness, dat vind ik veel te saai - Lid bij CrossFit Alkmaar deelt zijn ervaring",
            thumbnailUrl: `https://img.youtube.com/vi/iJ6KoiK5QZk/maxresdefault.jpg`,
            uploadDate: "2025-01-01",
            contentUrl: `https://www.youtube.com/watch?v=iJ6KoiK5QZk`,
            embedUrl: `https://www.youtube.com/embed/iJ6KoiK5QZk`,
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="Sportschool 50 plus Alkmaar - veilig sporten met begeleiding"
      >
        <Image
          src="/images/50+-header.jpg"
          alt="Sportschool 50 plus Alkmaar - veilig sporten met begeleiding"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sportschool 50+ Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Veilig en verantwoord sporten met professionele begeleiding. Onze leden zijn 20 tot 70+ jaar.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_50plus_hero", "sportschool-50-plus"); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Google Reviews */}
      <div className="bg-white py-3 text-center">
        <p className="text-gray-700 text-sm">
          <span className="text-yellow-500">★★★★★</span> <span className="font-semibold">5.0</span> — 260+ Google reviews
        </p>
      </div>

      {/* Waarom geschikt */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Waarom CrossFit Alkmaar geschikt is voor 50+
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Veel mensen denken dat CrossFit alleen voor jonge, fitte mensen is. Dat is een misverstand. Bij CrossFit Alkmaar trainen leden van 20 tot ruim 70 jaar. De trainingen worden voor iedereen aangepast aan het eigen niveau.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Juist als je ouder wordt is het belangrijk om te blijven bewegen. Spiermassa neemt af vanaf je 30e, je botten worden zwakker, en je balans verslechtert. <Link href="/krachttraining-alkmaar" className="text-blue-900 font-semibold hover:underline">Krachttraining</Link> is bewezen de beste manier om dit tegen te gaan.
          </p>
          <p className="text-lg text-gray-700">
            Bij ons hoef je geen zwaar gewicht te tillen als je dat niet wilt. Onze coaches passen elke oefening aan: een andere variant, een lichter gewicht, of een ander tempo. Jij bepaalt je eigen grenzen, wij begeleiden je veilig.
          </p>
        </div>
      </section>

      {/* Voordelen */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Voordelen van sporten bij CrossFit Alkmaar als 50-plusser
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Aangepaste oefeningen
              </h3>
              <p className="text-gray-700">
                Elke oefening heeft varianten. Kun je iets niet? Dan biedt de coach een alternatief dat hetzelfde effect heeft, maar binnen jouw mogelijkheden past.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Kleine groepen, veel aandacht
              </h3>
              <p className="text-gray-700">
                Maximaal 12 personen per les. De coach ziet iedereen en let op correcte uitvoering. Geen risico op blessures door verkeerde techniek.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Sterkere botten en spieren
              </h3>
              <p className="text-gray-700">
                Krachttraining stimuleert botdichtheid en spiergroei. Dit helpt bij het voorkomen van osteoporose, vallen en algehele achteruitgang.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Sociale omgeving
              </h3>
              <p className="text-gray-700">
                Sporten in een groep zorgt voor motivatie en sociale contacten. Onze community is warm en inclusief - iedereen is welkom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe starten */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Hoe werkt het?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Je begint met een gratis kennismakingsgesprek. We bespreken je achtergrond, eventuele blessures of beperkingen, en je doelen. Geen verplichtingen.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Daarna start je met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> - semi personal training sessies waarin je in je eigen tempo alle bewegingen leert. Je gaat pas naar de groepslessen als je je er klaar voor voelt.
          </p>
          <p className="text-lg text-gray-700">
            Bekijk de verhalen van <Link href="/onze-leden" className="text-blue-900 font-semibold hover:underline">onze leden</Link> en ontdek hoe mensen van alle leeftijden hier sterker en fitter zijn geworden.
          </p>
        </div>
      </section>

      {/* AEO Content */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Hoe blijf je fit na je 50e?</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Waarom is krachttraining belangrijk na je 50e?</h3>
              <p className="text-gray-600">Vanaf je 50e verlies je jaarlijks spiermassa en botdichtheid. Krachttraining remt dit af en kan het zelfs omkeren. Bij CrossFit Alkmaar trainen leden van 20 tot 70+ veilig samen, omdat elke oefening wordt aangepast aan jouw niveau.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is CrossFit geschikt voor 50-plussers?</h3>
              <p className="text-gray-600">Ja. Onze gemiddelde leeftijd is 35+ en we hebben veel leden boven de 50. Elke oefening is schaalbaar. Je hoeft geen pull-ups of handstanden te doen — je werkt op jouw niveau met een coach die je begeleidt.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoe begin je met sporten als je al jaren niet hebt gesport?</h3>
              <p className="text-gray-600">Start met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">28 Day Kickstart</Link>: vier weken in een kleine groep van max 6 personen waar je alle basisbewegingen leert. Je coach past alles aan op jouw mogelijkheden, ook als je beperkingen hebt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lid aan het woord */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Renze — lid bij CrossFit Alkmaar</h2>
          <p className="text-gray-600 text-center mb-8">&quot;Ik houd niet van fitness, dat vind ik veel te saai&quot;</p>
          <div className="relative w-full rounded-lg shadow-sm overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <div className="absolute top-0 left-0 w-full h-full">
              <TrackedYouTubeEmbed videoId="iJ6KoiK5QZk" title="Renze — lid bij CrossFit Alkmaar" />
            </div>
          </div>
          <p className="text-center mt-6">
            <Link href="/onze-leden" className="text-blue-900 font-semibold hover:underline">Bekijk meer verhalen van onze leden →</Link>
          </p>
        </div>
      </section>

      {/* Veelgestelde vragen */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde vragen</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is CrossFit veilig voor 50-plussers?</h3>
              <p className="text-gray-600">Ja. Elke oefening wordt aangepast aan jouw niveau en eventuele beperkingen. Onze coaches hebben ervaring met het begeleiden van oudere sporters.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Ik heb last van mijn knieën/rug, kan ik toch trainen?</h3>
              <p className="text-gray-600">In veel gevallen wel. Onze coaches passen oefeningen aan of kiezen alternatieven. Bewegen is vaak juist goed bij gewrichtsklachten. Overweeg eventueel <Link href="/personal-training" className="text-blue-900 font-semibold hover:underline">personal training</Link> voor extra begeleiding.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Zijn er speciale lessen voor ouderen?</h3>
              <p className="text-gray-600">Onze reguliere <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">lessen</Link> zijn geschikt voor alle leeftijden. Elke oefening is schaalbaar. Je traint samen met anderen, ieder op eigen niveau.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat is de gemiddelde leeftijd bij CrossFit Alkmaar?</h3>
              <p className="text-gray-600">Onze leden zijn 20 tot 70+ jaar. De gemiddelde leeftijd is 35+. Je bent dus zeker niet de enige 50-plusser.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Kom vrijblijvend kennismaken
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Ontdek hoe veilig en leuk sporten kan zijn, ook na je 50e. Plan een gratis gesprek.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_50plus_footer", "sportschool-50-plus"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
