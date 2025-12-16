"use client";

import { usePopup } from "../components/PopupContext";

export default function VacaturesPage() {
  const { openPopup } = usePopup();

  const vacatures = [
    {
      title: "COACH",
      location: "Alkmaar",
      type: "Full time",
    },
    {
      title: "GYM MANAGER",
      location: "Alkmaar",
      type: "Full time",
    },
    {
      title: "CLIËNT SUCCES MANAGER",
      location: "Alkmaar",
      type: "Part time",
    },
    {
      title: "VOEDINGSCOACH/DIËTIST(E)",
      location: "Alkmaar",
      type: "Full time",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section
        className="relative text-white py-24 px-6 min-h-[500px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase">
            Team CrossFit Alkmaar
          </h1>
          <p className="text-xl text-gray-300">
            Wij tillen samen veel meer dan alleen gewichten
          </p>
        </div>
      </section>

      {/* Missie Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-6 uppercase">Missie</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Bij CrossFit Alkmaar helpen we onze leden elke dag een beetje sterker te worden – niet alleen in de gym, maar ook daarbuiten. We creëren een plek waar iedereen zich welkom voelt, waar hard gewerkt wordt en waar we elkaar motiveren om het beste uit onszelf te halen.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/hero.jpg" 
                alt="Missie CrossFit Alkmaar" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 bg-blue-900 text-white text-4xl font-bold px-4 py-2">
                01
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visie Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="/images/hero.jpg" 
                alt="Visie CrossFit Alkmaar" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-4 right-4 bg-blue-900 text-white text-4xl font-bold px-4 py-2">
                02
              </div>
            </div>
            <div className="text-white order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 uppercase">Visie</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Wij geloven dat sport veel meer is dan alleen trainen. Het gaat om zelfvertrouwen, doorzettingsvermogen en samen groeien. Daarom bouwen we aan een community waarin coaches, leden én teamleden elkaar kennen, respecteren en uitdagen. Of je nu net begint of al jaren traint – bij ons hoor je erbij.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Werken bij Section */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 uppercase">
            Werken bij CrossFit Alkmaar
          </h2>
          <p className="text-gray-300 text-center mb-4 text-lg">
            Bij CrossFit Alkmaar zijn we altijd op zoek naar helden om ons team te versterken. Ervaring in de sportbranche is mooi meegenomen, maar geen vereiste. We leiden al onze coaches en andere functies intern op.
          </p>
          <p className="text-gray-400 text-center mb-12">
            Vind je het leuk om met mensen te werken en ze te zien groeien? Laat je gegevens hieronder achter, dan doen we snel samen een kop koffie.
          </p>

          {/* Job Listings */}
          <div className="space-y-4">
            {vacatures.map((vacature, index) => (
              <div 
                key={index}
                className="bg-gray-900 rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <h3 className="text-white font-bold text-lg uppercase mb-2">
                    {vacature.title}
                  </h3>
                  <div className="flex gap-6 text-gray-400 text-sm">
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
                <button
                  onClick={openPopup}
                  className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 px-6 rounded transition text-sm uppercase tracking-wide"
                >
                  Laat je gegevens achter
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-3xl mx-auto text-center text-white">
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