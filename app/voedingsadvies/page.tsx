import Link from "next/link";

export default function VoedingsadviesPage() {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Voedingsadvies</h1>
          <p className="text-xl text-gray-300">
            Optimaliseer je resultaten met persoonlijk voedingsadvies.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-4">Waarom voedingsadvies?</h2>
            <p className="text-gray-600 mb-4">
              Training is maar de helft van het verhaal. Met het juiste voedingsadvies haal je het maximale uit je inspanningen.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Persoonlijk voedingsplan</li>
              <li>✓ Afgestemd op jouw doelen</li>
              <li>✓ Praktische tips voor elke dag</li>
              <li>✓ Begeleiding door experts</li>
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