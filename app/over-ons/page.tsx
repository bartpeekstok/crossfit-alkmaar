import Link from "next/link";

export default function OverOnsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Over CrossFit Alkmaar
          </h1>
          <p className="text-xl text-gray-300">
            Al meer dan 15 jaar de plek voor serieuze training in Alkmaar.
          </p>
        </div>
      </section>

      {/* Ons verhaal */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Ons verhaal</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              CrossFit Alkmaar is opgericht met één doel: mensen helpen sterker en gezonder te worden, ongeacht hun leeftijd of achtergrond.
            </p>
            <p className="mb-4">
              Wij geloven dat iedereen kan trainen. Of je nu 25 bent of 65, beginnend of ervaren - wij passen de training aan op jouw niveau.
            </p>
            <p>
              Met onze ervaren coaches en persoonlijke aanpak zorgen we ervoor dat je veilig en effectief traint. Geen ego's, wel resultaat.
            </p>
          </div>
        </div>
      </section>

      {/* Cijfers */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-900 mb-2">15+</div>
              <p className="text-gray-600">Jaar ervaring</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-900 mb-2">200+</div>
              <p className="text-gray-600">Actieve leden</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-900 mb-2">50+</div>
              <p className="text-gray-600">Gemiddelde leeftijd</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Ons team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Coach 1</h3>
              <p className="text-gray-600">Head Coach</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Coach 2</h3>
              <p className="text-gray-600">Coach</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Kom kennismaken</h2>
          <p className="text-xl mb-8">
            Benieuwd naar onze box en ons team? Plan een gratis kennismaking.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Plan een bezoek
          </Link>
        </div>
      </section>
    </div>
  );
}