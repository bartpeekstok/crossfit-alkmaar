"use client";

import { usePopup } from "../components/PopupContext";

export default function SmallGroupTrainingPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/small-group-training-header.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Small Group Training
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Train in een kleine groep van maximaal 6 personen. Persoonlijke aandacht, samen trainen.
          </p>
          <button
            onClick={openPopup}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Gratis intake
          </button>
        </div>
      </section>

      {/* Wat is Small Group Training */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Wat is Small Group Training?</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              Small Group Training combineert het beste van twee werelden: de persoonlijke aandacht van personal training met de energie en motivatie van samen trainen. Je traint in een kleine groep van maximaal 6 personen.
            </p>
            <p className="mb-4">
              Elke sessie wordt begeleid door een ervaren coach die iedereen individueel in de gaten houdt. Je krijgt feedback op je techniek en het programma wordt aangepast aan jouw niveau.
            </p>
            <p>
              Ideaal voor mensen die meer begeleiding willen dan in een reguliere groepsles, maar ook genieten van de sociale kant van samen sporten.
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
              <h3 className="text-xl font-semibold mb-3">✓ Maximaal 6 personen</h3>
              <p className="text-gray-600">Kleine groep betekent meer aandacht van de coach en beter zicht op je techniek.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Samen trainen, samen groeien</h3>
              <p className="text-gray-600">De energie van een groep motiveert je om net dat beetje extra te geven.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Programma op maat</h3>
              <p className="text-gray-600">Het trainingsschema wordt aangepast aan het niveau van de groep.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Voordeliger dan personal training</h3>
              <p className="text-gray-600">Profiteer van persoonlijke begeleiding tegen een lagere prijs door de kosten te delen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar om te starten?</h2>
          <p className="text-xl mb-8">
            Plan een gratis intake en ontdek of Small Group Training bij jou past.
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