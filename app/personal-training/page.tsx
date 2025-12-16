"use client";

import { usePopup } from "../components/PopupContext";

export default function PersonalTrainingPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/personal-training-header.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Personal Training
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Eén-op-één begeleiding voor maximale resultaten. Volledig afgestemd op jouw doelen.
          </p>
          <button
            onClick={openPopup}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Gratis intake
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

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar om te starten?</h2>
          <p className="text-xl mb-8">
            Plan een gratis intake en ontdek hoe personal training jou kan helpen je doelen te bereiken.
          </p>
          <button
            onClick={openPopup}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Gratis intake
          </button>
        </div>
      </section>
    </div>
  );
}