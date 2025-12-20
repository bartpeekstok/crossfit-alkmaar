"use client";

import { useGroepslessenPopup } from "../components/GroepslessenPopupContext";

export default function GroepslessenPage() {
  const { openPopup } = useGroepslessenPopup();

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/groepslessen-header.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Groepslessen
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Samen trainen, samen groeien. Gevarieerde workouts in een motiverende groep.
          </p>
          <button
            onClick={openPopup}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Gratis intake
          </button>
        </div>
      </section>

      {/* Wat zijn Groepslessen */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Wat zijn Groepslessen?</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              Onze groepslessen zijn de kern van CrossFit Alkmaar. Elke les is anders en combineert kracht, conditie en mobiliteit in een uitdagende workout. Je traint samen met anderen onder begeleiding van een ervaren coach.
            </p>
            <p className="mb-4">
              Elke training wordt aangepast aan jouw niveau. Of je nu beginner bent of al jaren traint, je doet dezelfde workout maar op jouw eigen niveau. Dat maakt het toegankelijk én uitdagend.
            </p>
            <p>
              De energie van de groep en de afwisseling in trainingen zorgen ervoor dat je gemotiveerd blijft en resultaten blijft boeken.
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
              <h3 className="text-xl font-semibold mb-3">✓ Gevarieerde workouts</h3>
              <p className="text-gray-600">Elke dag een andere training. Je weet nooit precies wat je te wachten staat, maar het is altijd effectief.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Professionele coaching</h3>
              <p className="text-gray-600">Ervaren coaches begeleiden elke les en zorgen dat je techniek goed is en je veilig traint.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Schaalbaar voor elk niveau</h3>
              <p className="text-gray-600">Elke oefening kan aangepast worden aan jouw niveau. Beginners en gevorderden trainen samen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Motiverende groepssfeer</h3>
              <p className="text-gray-600">De energie van samen trainen helpt je om door te zetten en het beste uit jezelf te halen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Klaar om te starten?</h2>
          <p className="text-xl mb-8">
            Plan een gratis intake en ervaar zelf de energie van onze groepslessen.
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