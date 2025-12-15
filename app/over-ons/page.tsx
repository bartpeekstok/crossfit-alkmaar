export default function OverOnsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Over CrossFit Alkmaar</h1>
          <p className="text-xl text-gray-300">Al 15+ jaar de plek voor serieuze training in Alkmaar</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Ons verhaal</h2>
          <div className="space-y-4 text-gray-600">
            <p>CrossFit Alkmaar is opgericht met één doel: mensen helpen sterker, fitter en gezonder te worden. Niet met beloftes van snelle resultaten, maar met eerlijke, effectieve training onder professionele begeleiding.</p>
            <p>Onze gemiddelde leeftijd is 50+. We geloven dat het nooit te laat is om te beginnen met trainen, en juist op latere leeftijd is krachtraining essentieel voor mobiliteit, gezondheid en kwaliteit van leven.</p>
            <p>Elke training wordt geschaald naar jouw niveau. Of je nu 30 of 70 bent, beginnend of ervaren, wij zorgen dat je veilig en effectief traint.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-700 mb-2">15+</div>
              <p className="text-gray-600">Jaar ervaring</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-700 mb-2">200+</div>
              <p className="text-gray-600">Actieve leden</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-700 mb-2">50+</div>
              <p className="text-gray-600">Gemiddelde leeftijd</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-700 mb-2">5</div>
              <p className="text-gray-600">Ervaren coaches</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Onze Coaches</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Coach Naam</h3>
              <p className="text-gray-600">Head Coach</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Coach Naam</h3>
              <p className="text-gray-600">Coach</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold">Coach Naam</h3>
              <p className="text-gray-600">Coach</p>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-8 italic">(Coach foto's en namen kun je later toevoegen)</p>
        </div>
      </section>

      <section className="py-20 px-6 bg-blue-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kom kennismaken</h2>
          <p className="text-xl mb-8 text-blue-100">Plan een gratis kennismaking en ontdek of CrossFit Alkmaar bij je past.</p>
          <a href="/contact" className="inline-block bg-white hover:bg-gray-100 text-blue-700 font-semibold py-4 px-8 rounded-lg transition text-lg">Plan je gratis kennismaking</a>
        </div>
      </section>
    </div>
  );
}