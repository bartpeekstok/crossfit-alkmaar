import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">CrossFit Alkmaar</h3>
            <p className="mb-4">Al 15+ jaar de plek voor serieuze training in Alkmaar. Professionele begeleiding voor alle niveaus en leeftijden.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Programma's</h4>
            <ul className="space-y-2">
              <li><Link href="/kickstart" className="hover:text-white transition">28-Day Kickstart</Link></li>
              <li><Link href="/programmas" className="hover:text-white transition">Algemeen trainen</Link></li>
              <li><Link href="/programmas" className="hover:text-white transition">BUILD</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Straatnaam 123</li>
              <li>1234 AB Alkmaar</li>
              <li><a href="tel:0721234567" className="hover:text-white transition">072-123 4567</a></li>
              <li><a href="mailto:info@crossfitalkmaar.nl" className="hover:text-white transition">info@crossfitalkmaar.nl</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} CrossFit Alkmaar. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}