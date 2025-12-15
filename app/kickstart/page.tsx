export default function KickstartPage() {
  const maanden = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
  const huidigeMaandIndex = new Date().getMonth();
  const volgendeMaand = maanden[(huidigeMaandIndex + 1) % 12];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-blue-700 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">28-Day Kickstart</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">De perfecte start voor iedereen die wil beginnen met CrossFit</p>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 max-w-md mx-auto">
            <p className="text-lg font-semibold mb-2">Volgende Kickstart: {volgendeMaand}</p>
            <p className="text-blue-100 mb-4">Beperkt aantal plekken beschikbaar</p>
            <a href="#aanmelden" className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition">Claim je plek →</a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Wat is de 28-Day Kickstart?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">De 28-Day Kickstart is speciaal ontworpen voor mensen die nieuw zijn bij CrossFit of al een tijdje niet hebben gesport. In 4 weken leer je alle basis bewegingen, bouw je conditie op, en leg je een solide fundament.</p>
              <p className="text-gray-600">Je traint in een kleine groep van maximaal 8 personen, met extra begeleiding en persoonlijke aandacht van onze ervaren coaches.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Dit krijg je:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span>8 trainingen in 4 weken</li>
                <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span>Kleine groep (max 8 personen)</li>
                <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span>Uitleg van alle basis bewegingen</li>
                <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span>Persoonlijke aandacht en correcties</li>
                <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span>Voedingsadvies en tips</li>
                <li className="flex items-start"><span className="text-blue-700 mr-2">✓</span>Doorstroming naar reguliere lessen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Voor wie is de Kickstart?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🆕</div>
              <h3 className="text-xl font-semibold mb-2">Beginners</h3>
              <p className="text-gray-600">Je hebt nog nooit CrossFit gedaan en wilt een goede basis leggen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">⏸️</div>
              <h3 className="text-xl font-semibold mb-2">Heropstarters</h3>
              <p className="text-gray-600">Je hebt een tijdje niet gesport en wilt veilig weer beginnen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-semibold mb-2">50+ sporters</h3>
              <p className="text-gray-600">Je wilt fitter worden met trainingen aangepast aan jouw niveau.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="aanmelden" className="py-20 px-6 bg-blue-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start in {volgendeMaand} met de Kickstart</h2>
          <p className="text-xl mb-8 text-blue-100">Maximaal 8 plekken per maand. Schrijf je nu in!</p>
          <a href="/contact" className="inline-block bg-white hover:bg-gray-100 text-blue-700 font-semibold py-4 px-8 rounded-lg transition text-lg">Meld je aan voor {volgendeMaand}</a>
        </div>
      </section>
    </div>
  );
}