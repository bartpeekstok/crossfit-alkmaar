"use client";

import { useKickstartPopup } from "../../components/KickstartPopupContext";

export default function KickstartPageDE() {
  const { openPopup } = useKickstartPopup();

  const monate = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"
  ];

  const aktuellerMonatIndex = new Date().getMonth();
  const naechsterMonat = monate[(aktuellerMonatIndex + 1) % 12];

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
            28 Day Kickstart
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Der perfekte Start in ein fitteres und stärkeres Leben. Baue in 4 Wochen eine solide Basis auf.
          </p>
          <button
            onClick={openPopup}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Sichere dir deinen Platz für {naechsterMonat}
          </button>
        </div>
      </section>

      {/* Was ist der Kickstart */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Was ist der 28 Day Kickstart?</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              Der Kickstart wurde speziell für beschäftigte Menschen entwickelt, die (wieder) mit dem Training beginnen möchten, aber nicht wissen, wo sie anfangen sollen. Wir machen Training spaßig, sicher und effektiv. So bauen wir eine gute Basis auf, auf der wir weiter aufbauen können.
            </p>
            <p className="mb-4">
              Du trainierst in einer kleinen Gruppe von maximal 6 Personen, sodass du persönliche Aufmerksamkeit bekommst. Wir nehmen uns die Zeit, alles gut zu erklären und zu üben.
            </p>
            <p>
              Nach dem Kickstart kannst du selbstbewusst zu unserem BUILD-Programm oder den Gruppenkursen wechseln. Bei einem abschließenden Beratungsgespräch schauen wir gemeinsam, was am besten zu dir passt.
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
            Steven, Kickstart-Teilnehmer November 2024: 'Haltung und Technik sind sehr wichtig, und die Trainer hier sind unglaublich gut darin.'
          </p>
        </div>
      </section>

      {/* Was du bekommst */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Was du bekommst</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ 12 Trainingseinheiten in 4 Wochen</h3>
              <p className="text-gray-600">Drei Trainingseinheiten pro Woche zu festen Zeiten, damit es in deinen Zeitplan passt.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Kleine Gruppen (max. 6)</h3>
              <p className="text-gray-600">Maximal 6 Personen pro Gruppe für persönliche Aufmerksamkeit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Eine solide Basis</h3>
              <p className="text-gray-600">Du lernst die Grundlagen des Kraft- und Konditionstrainings und erlebst, dass Training Spaß macht!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Grundlegende Lifestyle-Beratung</h3>
              <p className="text-gray-600">Neben dem Training bekommst du Tipps zu Ernährung und Erholung.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Starte im {naechsterMonat}</h2>
          <p className="text-xl mb-8">
            Der {naechsterMonat}-Kickstart hat noch Plätze frei.
          </p>
          <button
            onClick={openPopup}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Jetzt anmelden
          </button>
        </div>
      </section>
    </div>
  );
}
