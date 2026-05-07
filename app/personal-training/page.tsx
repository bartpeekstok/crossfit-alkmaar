"use client";

import { usePersonalTrainingPopup } from "../components/PersonalTrainingPopupContext";
import ServiceSchema from "../components/ServiceSchema";
import { trackCTAClick } from "../lib/analytics";

export default function PersonalTrainingPage() {
  const { openPopup } = usePersonalTrainingPopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="Personal Training"
        description="Eén-op-één personal training volledig afgestemd op jouw doelen. Maximale persoonlijke aandacht van je eigen coach."
        url="https://crossfitalkmaar.com/personal-training"
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
                name: "Wat is personal training bij CrossFit Alkmaar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Eén-op-één training met een dedicated coach, volledig afgestemd op jouw doelen. Of je wilt afvallen, sterker worden of fitter worden, je coach maakt een programma op maat.",
                },
              },
              {
                "@type": "Question",
                name: "Voor wie is personal training geschikt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Voor iedereen die maximaal resultaat wil met persoonlijke aandacht. Of je nu beginner bent of gevorderd, de training wordt volledig aangepast aan jouw niveau en doelen.",
                },
              },
              {
                "@type": "Question",
                name: "Wat kost personal training bij CrossFit Alkmaar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Neem contact op voor de actuele tarieven van personal training. Plan een gratis kennismaking om je doelen te bespreken en een passend voorstel te ontvangen.",
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
        aria-label="Personal training bij CrossFit Alkmaar - een-op-een begeleiding met coach"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/personal-training-header.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        <img src="/images/personal-training-header.jpg" alt="Personal training bij CrossFit Alkmaar - een-op-een begeleiding met coach" className="sr-only" width={1200} height={600} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Personal Training
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Eén-op-één begeleiding voor maximale resultaten. Volledig afgestemd op jouw doelen.
          </p>
          <button
            onClick={() => { trackCTAClick('gratis_intake_hero', 'personal-training'); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Wat is Personal Training */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Wat is Personal Training?</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              Met personal training krijg je de volledige aandacht van je coach. Elke sessie is volledig afgestemd op jouw doelen, niveau en beschikbaarheid. Of je nu wilt afvallen, sterker worden of werkt aan herstel na een blessure.
            </p>
            <p className="mb-4">
              Je coach stelt een programma samen dat perfect bij jou past en stuurt bij waar nodig. Zo behaal je sneller resultaat dan bij groepstrainingen.
            </p>
            <p>
              Personal training is ideaal voor mensen die specifieke doelen hebben, extra begeleiding nodig hebben, of simpelweg het beste uit zichzelf willen halen.
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
              <h3 className="text-xl font-semibold mb-3">✓ Volledig gepersonaliseerd programma</h3>
              <p className="text-gray-600">Een trainingsschema dat 100% is afgestemd op jouw doelen en mogelijkheden.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Flexibele tijden</h3>
              <p className="text-gray-600">Train wanneer het jou uitkomt. We plannen samen de sessies in.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Snellere resultaten</h3>
              <p className="text-gray-600">Door de persoonlijke aandacht en op maat gemaakte aanpak bereik je sneller je doelen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Extra aandacht voor techniek</h3>
              <p className="text-gray-600">Je coach corrigeert direct en zorgt dat je elke beweging veilig en effectief uitvoert.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde vragen</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Wat is personal training bij CrossFit Alkmaar?</h3>
              <p className="text-gray-600">Eén-op-één training met een dedicated coach, volledig afgestemd op jouw doelen. Of je wilt afvallen, sterker worden of fitter worden, je coach maakt een programma op maat.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Voor wie is personal training geschikt?</h3>
              <p className="text-gray-600">Voor iedereen die maximaal resultaat wil met persoonlijke aandacht. Of je nu beginner bent of gevorderd, de training wordt volledig aangepast aan jouw niveau en doelen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Wat kost personal training bij CrossFit Alkmaar?</h3>
              <p className="text-gray-600">Neem contact op voor de actuele tarieven van personal training. Plan een gratis kennismaking om je doelen te bespreken en een passend voorstel te ontvangen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar om te starten?</h2>
          <p className="text-xl mb-8">
            Kom vrijblijvend kennismaken en ontdek hoe personal training jou kan helpen je doelen te bereiken.
          </p>
          <button
            onClick={() => { trackCTAClick('gratis_intake_footer', 'personal-training'); openPopup(); }}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Plan je kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}