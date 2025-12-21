"use client";

import { useKickstartPopup } from "../components/KickstartPopupContext";

export default function KickstartPage() {
  const { openPopup } = useKickstartPopup();

  const maanden = [
    "januari", "februari", "maart", "april", "mei", "juni",
    "juli", "augustus", "september", "oktober", "november", "december"
  ];
  
  const huidigeMaandIndex = new Date().getMonth();
  const volgendeMaand = maanden[(huidigeMaandIndex + 1) % 12];

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/kickstart-header.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            28 day kickstart
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            De perfecte start naar een fitter en sterker leven. In 4 weken bouw je een sterke basis op.
          </p>
          <button
            onClick={openPopup}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Claim je plek voor {volgendeMaand}
          </button>
        </div>
      </section>

      {/* Wat is de Kickstart */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Wat is de 28 day Kickstart?</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              De Kickstart is speciaal ontworpen voor drukke mensen die (weer) willen starten met trainen maar niet weten waar te beginnen. Wij maken trainen leuk, veilig en effectief. Zo leggen we een goede basis om op verder te bouwen.
            </p>
            <p className="mb-4">
              Je traint in een kleine groep van maximaal 6 personen, zodat je persoonlijke aandacht krijgt. We nemen de tijd om alles goed uit te leggen en te oefenen.
            </p>
            <p>
              Na de Kickstart kun je met vertrouwen doorstromen naar ons BUILD programma of de groepslessen. Tijdens een afsluitend adviesgesprek kijken we samen wat het beste bij jou past.
            </p>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/esc-52ZNdPY"
              title="28-Day Kickstart"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-center text-gray-900 mt-6 text-xl font-medium italic">
            Steven, deelnemer kickstart november 2024: 'Houding en techniek zijn heel belangrijk, en daar zijn de trainers hier ongelooflijk goed in.'
          </p>
        </div>
      </section>

      {/* Wat je krijgt */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Wat je krijgt</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ 12 trainingen in 4 weken</h3>
              <p className="text-gray-600">Drie trainingen per week op vaste tijden, zodat het in je schema past.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Kleine groepen (max 6)</h3>
              <p className="text-gray-600">Maximaal 6 personen per groep voor persoonlijke aandacht.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Een goede basis</h3>
              <p className="text-gray-600">Je leert de basis van kracht- en conditietraining en we laten je ervaren dat trainen leuk is!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Basis leefstijladvies</h3>
              <p className="text-gray-600">Naast training krijg je tips over voeding en herstel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start in {volgendeMaand}</h2>
          <p className="text-xl mb-8">
            De Kickstart van {volgendeMaand} heeft nog plekken beschikbaar.
          </p>
          <button
            onClick={openPopup}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Meld je aan
          </button>
        </div>
      </section>
    </div>
  );
}