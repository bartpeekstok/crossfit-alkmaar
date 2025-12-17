import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-900">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">
          Pagina niet gevonden
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Oeps! De pagina die je zoekt bestaat niet of is verplaatst. 
          Geen zorgen, je kunt altijd terug naar onze homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition"
          >
            Naar homepage
          </Link>
          <Link
            href="/intake"
            className="bg-white hover:bg-gray-50 text-blue-900 font-semibold py-3 px-8 rounded-lg border border-blue-900 transition"
          >
            Plan een intake
          </Link>
        </div>
      </div>
    </div>
  );
}