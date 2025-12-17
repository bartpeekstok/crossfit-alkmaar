"use client";

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[300px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-300">Laatst bijgewerkt: december 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-gray-600">
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Wie zijn wij?</h2>
              <p>
                CrossFit Alkmaar is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
              </p>
              <p>
                <strong>Contactgegevens:</strong><br />
                CrossFit Alkmaar<br />
                Herculesstraat 71<br />
                1812 PD Alkmaar<br />
                info@crossfitalkmaar.nl
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Welke gegevens verzamelen wij?</h2>
              <p>Wij verzamelen de volgende persoonsgegevens:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Naam</li>
                <li>E-mailadres</li>
                <li>Telefoonnummer</li>
                <li>Gegevens die je invult in ons contactformulier</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Waarom verzamelen wij deze gegevens?</h2>
              <p>Wij verwerken jouw persoonsgegevens voor de volgende doelen:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Om contact met je op te nemen over een gratis intake of kennismaking</li>
                <li>Om je te informeren over onze diensten</li>
                <li>Om je vragen te beantwoorden</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Cookies</h2>
              <p>
                Onze website maakt gebruik van cookies. Een cookie is een klein tekstbestand dat bij je bezoek aan onze website wordt opgeslagen op je computer, tablet of smartphone.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Functionele cookies</h3>
              <p>Deze cookies zijn noodzakelijk voor het functioneren van de website.</p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Analytische cookies</h3>
              <p>Wij kunnen analytische cookies gebruiken om het gebruik van de website te analyseren en te verbeteren.</p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Cookies van derde partijen</h3>
              <p>Onze website maakt gebruik van:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>YouTube:</strong> Voor het tonen van video's. YouTube kan cookies plaatsen.</li>
                <li><strong>Elfsight:</strong> Voor het tonen van Google Reviews. Elfsight kan cookies plaatsen.</li>
              </ul>
              <p>
                Je kunt cookies uitschakelen via je browserinstellingen. Let op: hierdoor werken sommige onderdelen van de website mogelijk niet optimaal.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Hoe lang bewaren wij gegevens?</h2>
              <p>
                Wij bewaren je persoonsgegevens niet langer dan strikt noodzakelijk is. Gegevens die je via het contactformulier instuurt, bewaren wij maximaal 1 jaar.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Delen met derden</h2>
              <p>
                Wij delen je gegevens niet met derden, tenzij dit noodzakelijk is voor de uitvoering van onze diensten of wanneer wij hiertoe wettelijk verplicht zijn.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Jouw rechten</h2>
              <p>Je hebt het recht om:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Je persoonsgegevens in te zien</li>
                <li>Je persoonsgegevens te laten corrigeren</li>
                <li>Je persoonsgegevens te laten verwijderen</li>
                <li>Bezwaar te maken tegen de verwerking van je persoonsgegevens</li>
              </ul>
              <p>
                Neem hiervoor contact met ons op via info@crossfitalkmaar.nl.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Beveiliging</h2>
              <p>
                Wij nemen passende maatregelen om misbruik, verlies, onbevoegde toegang en andere ongewenste handelingen met persoonsgegevens tegen te gaan.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Vragen?</h2>
              <p>
                Heb je vragen over deze privacyverklaring of over hoe wij omgaan met je gegevens? Neem dan contact met ons op via info@crossfitalkmaar.nl.
              </p>

            </div>
          </div>

          {/* Back link */}
          <div className="mt-8 text-center">
            <Link 
              href="/"
              className="text-blue-900 font-semibold hover:underline"
            >
              ← Terug naar home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}