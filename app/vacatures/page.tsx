"use client";

export default function VacaturesPage() {
  const vacatures = [
    {
      title: "Coach",
      location: "Alkmaar",
      type: "Full time",
    },
    {
      title: "Gym Manager",
      location: "Alkmaar",
      type: "Full time",
    },
    {
      title: "Cliënt Succes Manager",
      location: "Alkmaar",
      type: "Part time",
    },
    {
      title: "Voedingscoach/Diëtist(e)",
      location: "Alkmaar",
      type: "Full time",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 px-6 min-h-[400px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Werken bij CrossFit Alkmaar
          </h1>
          <p className="text-xl text-gray-300">
            Wij tillen samen veel meer dan alleen gewichten
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            Bij CrossFit Alkmaar zijn we altijd op zoek naar helden om ons team te versterken. Ervaring in de sportbranche is mooi meegenomen, maar geen vereiste. We leiden al onze coaches en andere functies intern op.
          </p>
          <p className="text-gray-600">
            Vind je het leuk om met mensen te werken en ze te zien groeien? Laat je gegevens hieronder achter, dan doen we snel samen een kop koffie.
          </p>
        </div>
      </section>

      {/* Missie & Visie */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Missie */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Missie</h2>
              <p className="text-gray-600">
                Bij CrossFit Alkmaar helpen we onze leden elke dag een beetje sterker te worden – niet alleen in de gym, maar ook daarbuiten. We creëren een plek waar iedereen zich welkom voelt, waar hard gewerkt wordt en waar we elkaar motiveren om het beste uit onszelf te halen.
              </p>
            </div>

            {/* Visie */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Visie</h2>
              <p className="text-gray-600">
                Wij geloven dat sport veel meer is dan alleen trainen. Het gaat om zelfvertrouwen, doorzettingsvermogen en samen groeien. Daarom bouwen we aan een community waarin coaches, leden én teamleden elkaar kennen, respecteren en uitdagen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vacatures */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Openstaande vacatures</h2>
          
          <div className="space-y-4">
            {vacatures.map((vacature, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {vacature.title}
                  </h3>
                  <div className="flex gap-6 text-gray-500 text-sm">
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {vacature.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {vacature.type}
                    </span>
                  </div>
                </div>
                <a
                  href="https://kilo.gymleadmachine.com/widget/survey/TIMRkxtc9zfvKxJ3i7oo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 px-6 rounded-lg transition text-center"
                >
                  Solliciteer
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Staat jouw droombaan er niet tussen?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Stuur ons een open sollicitatie. We zijn altijd benieuwd naar gemotiveerde mensen!
          </p>
          <a 
            href="mailto:info@crossfitalkmaar.nl"
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition"
          >
            Stuur een mail
          </a>
        </div>
      </section>
    </div>
  );
}