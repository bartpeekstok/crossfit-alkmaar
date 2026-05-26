"use client";

import { useVoedingsadviesPopup } from "../components/VoedingsadviesPopupContext";
import ServiceSchema from "../components/ServiceSchema";
import { trackCTAClick } from "../lib/analytics";

export default function VoedingsadviesPage() {
  const { openPopup } = useVoedingsadviesPopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="Voedingsadvies"
        description="Persoonlijk voedingsadvies dat past bij jouw levensstijl. Geen strenge diëten maar praktische tips voor optimale resultaten."
        url="https://crossfitalkmaar.com/voedingsadvies"
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
                name: "Wat houdt het voedingsadvies bij CrossFit Alkmaar in?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Persoonlijk voedingsadvies afgestemd op jouw doelen en levensstijl. Geen strenge diëten maar praktische handvatten die aansluiten op je trainingsschema en passen in een druk leven.",
                },
              },
              {
                "@type": "Question",
                name: "Moet ik lid zijn om voedingsadvies te krijgen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Voedingsadvies is beschikbaar als aanvulling op je lidmaatschap. De combinatie van training en voeding geeft het beste resultaat.",
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
              ratingCount: "273",
              reviewCount: "273",
            },
          }),
        }}
      />
      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="Voedingsadvies bij CrossFit Alkmaar - persoonlijke begeleiding voor optimale resultaten"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/voedingsadvies-header.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img src="/images/voedingsadvies-header.jpg" alt="Voedingsadvies bij CrossFit Alkmaar - persoonlijke begeleiding voor optimale resultaten" className="sr-only" width={1200} height={600} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Voedingsadvies
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Voeding die past bij hoe je écht leeft, niet bij een schema dat na drie weken instort.
          </p>
          <button
            onClick={() => { trackCTAClick('gratis_intake_hero', 'voedingsadvies'); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Wat is Voedingsadvies */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Waarom Voedingsadvies?</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              Je kunt nog zo hard trainen, zonder de juiste voeding bereik je nooit je volledige potentieel. Of je nu wilt afvallen, spiermassa wilt opbouwen of gewoon fitter wilt worden - voeding speelt een cruciale rol.
            </p>
            <p className="mb-4">
              Ons voedingsadvies is geen streng dieet, maar een praktische aanpak die past bij jouw levensstijl. We kijken naar wat je nu eet, wat je doelen zijn en hoe we stap voor stap verbeteringen kunnen maken.
            </p>
            <p>
              Geen ingewikkelde macro's tellen of onrealistische beperkingen. Gewoon eerlijk advies dat werkt in het echte leven.
            </p>
          </div>
        </div>
      </section>

      {/* Wat je krijgt */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Wat je krijgt</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Persoonlijk voedingsplan</h3>
              <p className="text-gray-600">Een plan dat past bij jouw doelen, voorkeuren en levensstijl. Geen one-size-fits-all aanpak.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Praktische tips</h3>
              <p className="text-gray-600">Concrete handvatten die je direct kunt toepassen. Van boodschappenlijstjes tot meal prep ideeën.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Regelmatige check-ins</h3>
              <p className="text-gray-600">We volgen je voortgang en passen het plan aan waar nodig. Zo blijf je op koers.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Combinatie met training</h3>
              <p className="text-gray-600">Het voedingsadvies sluit perfect aan op je trainingsschema voor optimale resultaten.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde vragen</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Wat houdt het voedingsadvies bij CrossFit Alkmaar in?</h3>
              <p className="text-gray-600">Persoonlijk voedingsadvies afgestemd op jouw doelen en levensstijl. Geen strenge diëten maar praktische handvatten die aansluiten op je trainingsschema en passen in een druk leven.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Moet ik lid zijn om voedingsadvies te krijgen?</h3>
              <p className="text-gray-600">Voedingsadvies is beschikbaar als aanvulling op je lidmaatschap. De combinatie van training en voeding geeft het beste resultaat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar om te starten?</h2>
          <p className="text-xl mb-8">
            Kom vrijblijvend kennismaken en ontdek hoe voedingsadvies jou kan helpen je doelen te bereiken.
          </p>
          <button
            onClick={() => { trackCTAClick('gratis_intake_footer', 'voedingsadvies'); openPopup(); }}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Plan je kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}