import Link from "next/link";

export default function ProgrammasPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Onze Programma's
          </h1>
          <p className="text-xl text-gray-300">
            Kies het programma dat bij jouw doelen en niveau past.
          </p>
        </div>
      </section>

      {/* Programma's */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Kickstart */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-900">
              <div className="text-blue-900 font-semibold mb-2">VOOR BEGINNERS</div>
              <h3 className="text-2xl font-bold mb-3">28-Day Kickstart</h3>
              <p className="text-gray-600 mb-6">
                De perfecte start. Leer alle basis bewegingen in 4 weken met persoonlijke begeleiding.
              </p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✓ 8 trainingen in 4 weken</li>
                <li>✓ Max 8 personen per groep</li>
                <li>✓ Alle bewegingen uitgelegd</li>
                <li>✓ Doorstromen naar regulier</li>
              </ul>
              <Link
                href="/kickstart"
                className="block w-full text-center bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 rounded-lg transition"
              >
                Meer over Kickstart
              </Link>
            </div>

            {/* Algemeen */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-gray-500 font-semibold mb-2">VOOR IEDEREEN</div>
              <h3 className="text-2xl font-bold mb-3">Algemeen trainen</h3>
              <p className="text-gray-600 mb-6">
                Onze standaard groepstrainingen. Gevarieerd, uitdagend en schaalbaar.
              </p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✓ Onbeperkt trainen</li>
                <li>✓ Dagelijks wisselende workouts</li>
                <li>✓ Alle niveaus welkom</li>
                <li>✓ Professionele coaching</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition"
              >
                Start nu
              </Link>
            </div>

            {/* BUILD */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-gray-500 font-semibold mb-2">KRACHT FOCUS</div>
              <h3 className="text-2xl font-bold mb-3">BUILD</h3>
              <p className="text-gray-600 mb-6">
                Specifiek krachtprogramma. Focus op sterker worden met barbells.
              </p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✓ 2x per week, vaste tijden</li>
                <li>✓ Max 6 personen</li>
                <li>✓ Progressief schema</li>
                <li>✓ Ideaal voor 40+</li>
              </ul>
              <Link
                href="/contact"
                className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition"
              >
                Meer info
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Niet zeker welk programma?</h2>
          <p className="text-xl mb-8">
            Plan een gratis kennismaking. We helpen je het juiste programma te kiezen.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Gratis kennismaking
          </Link>
        </div>
      </section>
    </div>
  );
}