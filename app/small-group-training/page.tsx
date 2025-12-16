import Link from "next/link";

export default function SmallGroupTrainingPage() {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Small Group Training</h1>
          <p className="text-xl text-gray-300">
            De voordelen van personal training in een kleine groep.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-4">Wat is Small Group Training?</h2>
            <p className="text-gray-600 mb-4">
              Train in een vaste groep van maximaal 6 personen. Je krijgt persoonlijke aandacht én de motivatie van trainen met anderen.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Maximaal 6 personen per groep</li>
              <li>✓ Vaste trainingstijden</li>
              <li>✓ Persoonlijke aandacht</li>
              <li>✓ Motiverende groepsdynamiek</li>
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