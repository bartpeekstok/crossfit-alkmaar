import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact
          </h1>
          <p className="text-xl text-gray-300">
            Heb je vragen of wil je langskomen? Neem contact met ons op.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Onze gegevens</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-900">Adres</h3>
                  <p>Robonsbosweg 7</p>
                  <p>1816 MK Alkmaar</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Telefoon</h3>
                  <p><a href="tel:0729200812" className="text-blue-900 hover:underline">072-9200812</a></p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p><a href="mailto:info@crossfitalkmaar.nl" className="text-blue-900 hover:underline">info@crossfitalkmaar.nl</a></p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Openingstijden</h3>
                  <p>Maandag - Vrijdag: 06:00 - 21:00</p>
                  <p>Zaterdag: 08:00 - 12:00</p>
                  <p>Zondag: Gesloten</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Stuur een bericht</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="naam" className="block text-sm font-medium text-gray-700 mb-1">Naam</label>
                  <input
                    type="text"
                    id="naam"
                    name="naam"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="telefoon" className="block text-sm font-medium text-gray-700 mb-1">Telefoon</label>
                  <input
                    type="tel"
                    id="telefoon"
                    name="telefoon"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="bericht" className="block text-sm font-medium text-gray-700 mb-1">Bericht</label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 rounded-lg transition"
                >
                  Verstuur bericht
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Locatie</h2>
          <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Google Maps hier</p>
          </div>
        </div>
      </section>
    </div>
  );
}