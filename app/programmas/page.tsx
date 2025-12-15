import Link from "next/link";

export default function ProgrammasPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Onze Programma's</h1>
          <p className="text-xl text-gray-300">Kies het programma dat bij jouw doelen en levensstijl past</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">Voor beginners</span>
              <h2 className="text-3xl font-bold mt-4 mb-4">28-Day Kickstart</h2>
              <p className="text-gray-600 mb-6">De perfecte introductie tot CrossFit. In 4 weken leer je alle basis bewegingen, bouw je conditie op, en leg je een solide fundament voor verdere trainingen.</p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✓ 8 trainingen in 4 weken</li>
                <li>✓ Kleine groepen (max 8 personen)</li>
                <li>✓ Extra begeleiding en uitleg</li>
                <li>✓ Doorstroming naar regulier</li>
              </ul>
              <Link href="/kickstart" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition">Meer over de Kickstart →</Link>
            </div>
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="text-6xl font-bold text-blue-700 mb-2">28</div>
              <div className="text-xl text-gray-600">dagen programma</div>
            </div>
          </div>

          <div className="mb-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">Meest populair</span>
              <h2 className="text-3xl font-bold mt-4 mb-4">Algemeen Trainen</h2>
              <p className="text-gray-600 mb-6">Onze standaard groepstrainingen. Elke dag een andere workout met een mix van kracht, conditie en mobiliteit. Altijd schaalbaar naar jouw niveau.</p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✓ Onbeperkt trainen</li>
                <li>✓ Elke training andere focus</li>
                <li>✓ Begeleiding door ervaren coaches</li>
                <li>✓ Alle niveaus welkom</li>
              </ul>
              <Link href="/contact" className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition">Plan een proefles →</Link>
            </div>
            <div className="bg-green-50 rounded-lg p-8 text-center md:order-1">
              <div className="text-6xl font-bold text-green-700 mb-2">∞</div>
              <div className="text-xl text-gray-600">onbeperkt trainen</div>
            </div>
          </div>

          <div className="mb-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">Krachttraining</span>
              <h2 className="text-3xl font-bold mt-4 mb-4">BUILD</h2>
              <p className="text-gray-600 mb-6">Specifiek krachtprogramma in kleine groepen. Focus op sterker worden met barbells, dumbbells en gestructureerde progressie. Ideaal voor 40+.</p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✓ 2x per week, vaste tijden</li>
                <li>✓ Maximaal 6 personen</li>
                <li>✓ Progressief krachtschema</li>
                <li>✓ Focus op techniek en kracht</li>
              </ul>
              <Link href="/contact" className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition">Meer info aanvragen →</Link>
            </div>
            <div className="bg-purple-50 rounded-lg p-8 text-center">
              <div className="text-6xl font-bold text-purple-700 mb-2">6</div>
              <div className="text-xl text-gray-600">max personen</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Niet zeker welk programma?</h2>
          <p className="text-gray-600 mb-8">Plan een gratis kennismaking. We bespreken je doelen en helpen je het juiste programma te kiezen.</p>
          <Link href="/contact" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-lg transition text-lg">Plan een gratis kennismaking</Link>
        </div>
      </section>
    </div>
  );
}