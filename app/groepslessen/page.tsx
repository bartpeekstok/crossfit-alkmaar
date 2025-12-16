import Link from "next/link";

export default function GroepslessenPage() {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Groepslessen</h1>
          <p className="text-xl text-gray-300">
            Gevarieerde trainingen in een motiverende groep. Schaalbaar naar jouw niveau.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-4">Wat zijn groepslessen?</h2>
            <p className="text-gray-600 mb-4">
              Onze groepslessen zijn gevarieerde trainingen waarbij je samen met anderen traint onder begeleiding van ervaren coaches. Elke training is anders en wordt aangepast aan jouw niveau.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ De beste coaches van Alkmaar</li>
              <li>✓ Flexibel in- en uitschrijven</li>
              <li>✓ Ontmoet nieuwe vrienden</li>
              <li>✓ Voor alle niveaus</li>
            </ul>
          </div>

          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-block bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}