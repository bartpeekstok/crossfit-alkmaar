export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
          <p className="text-xl text-gray-300">Vragen? Plan een kennismaking of neem contact op.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contactgegevens</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
                <p className="text-gray-600">Straatnaam 123<br />1234 AB Alkmaar</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Telefoon</h3>
                <p className="text-gray-600"><a href="tel:0721234567" className="hover:text-blue-700">072-123 4567</a></p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">E-mail</h3>
                <p className="text-gray-600"><a href="mailto:info@crossfitalkmaar.nl" className="hover:text-blue-700">info@crossfitalkmaar.nl</a></p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Openingstijden</h3>
                <p className="text-gray-600">Ma - Vr: 06:00 - 21:00<br />Za: 08:00 - 12:00<br />Zo: Gesloten</p>
              </div>
            </div>
            <div className="mt-8 bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Google Maps komt hier</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Stuur een bericht</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Naam *</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Je naam" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="je@email.nl" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefoon</label>
                <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="06-12345678" />
              </div>
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Waar ben je in geïnteresseerd?</label>
                <select id="interest" name="interest" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">Selecteer een optie</option>
                  <option value="kennismaking">Gratis kennismaking</option>
                  <option value="kickstart">28-Day Kickstart</option>
                  <option value="algemeen">Algemeen trainen</option>
                  <option value="build">BUILD programma</option>
                  <option value="anders">Anders / vraag</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Bericht</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Vertel ons meer over je doelen of stel je vraag..."></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg transition">Verstuur bericht</button>
              <p className="text-sm text-gray-500">* Verplichte velden. We reageren binnen 24 uur.</p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}