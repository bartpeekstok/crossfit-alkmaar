"use client";

import { usePopup } from "../components/PopupContext";

export default function VoedingsadviesPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/voedingsadvies-header.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Voedingsadvies
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Training is maar de helft. Met het juiste voedingsadvies haal je het maximale uit je inspanningen.
          </p>
          <button
            onClick={openPopup}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Gratis intake
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

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar om te starten?</h2>
          <p className="text-xl mb-8">
            Plan een gratis intake en ontdek hoe voedingsadvies jou kan helpen je doelen te bereiken.
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