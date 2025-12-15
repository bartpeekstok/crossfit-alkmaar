import Link from "next/link";

export default function KickstartPage() {
  const maanden = [
    "januari", "februari", "maart", "april", "mei", "juni",
    "juli", "augustus", "september", "oktober", "november", "december"
  ];
  
  const huidigeMaandIndex = new Date().getMonth();
  const volgendeMaand = maanden[(huidigeMaandIndex + 1) % 12];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            28-Day Kickstart
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            De perfecte start voor iedereen die wil beginnen met CrossFit. In 4 weken bouw je een sterke basis op.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition"
          >
            Claim je plek voor {volgendeMaand}
          </Link>
        </div>
      </section>

      {/* Wat is de Kickstart */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Wat is de 28-Day Kickstart?</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              De Kickstart is speciaal ontworpen voor mensen die nieuw zijn bij CrossFit. Gedurende 4 weken krijg je 8 trainingen waarin je alle basis bewegingen leert, onder begeleiding van ervaren coaches.
            </p>
            <p className="mb-4">
              Je traint in een kleine groep van maximaal 8 personen, zodat je persoonlijke aandacht krijgt. We nemen de tijd om elke beweging goed uit te leggen en te oefenen.
            </p>
            <p>
              Na de Kickstart kun je met vertrouwen doorstromen naar onze reguliere groepstrainingen.
            </p>
          </div>
        </div>
      </section>

      {/* Wat je krijgt */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Wat je krijgt</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">✓ 8 trainingen in 4 weken</h3>
              <p className="text-gray-600">Twee trainingen per week op vaste tijden, zodat het in je schema past.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">✓ Kleine groepen</h3>
              <p className="text-gray-600">Maximaal 8 personen per groep voor persoonlijke aandacht.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">✓ Alle basis bewegingen</h3>
              <p className="text-gray-600">Je leert squats, deadlifts, presses en olympische liften veilig uitvoeren.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">✓ Ervaren coaches</h3>
              <p className="text-gray-600">Onze coaches hebben jarenlange ervaring met beginners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start in {volgendeMaand}</h2>
          <p className="text-xl mb-8">
            De Kickstart van {volgendeMaand} heeft nog plekken beschikbaar. Schrijf je nu in!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Meld je aan
          </Link>
        </div>
      </section>
    </div>
  );
}