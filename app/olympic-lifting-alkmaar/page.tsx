"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Image from "next/image";
import Link from "next/link";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";

export default function OlympicLiftingAlkmaarPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="Olympic Lifting Alkmaar - CrossFit Alkmaar"
        description="Olympic lifting in Alkmaar met professionele coaching. Leer de snatch en clean & jerk onder begeleiding. Voor beginners en gevorderden."
        url="https://crossfitalkmaar.com/olympic-lifting-alkmaar"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Wat is olympic lifting?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Olympic lifting (olympisch gewichtheffen) bestaat uit twee explosieve liften: de snatch en de clean & jerk. Het draait om techniek, snelheid en kracht. Bij CrossFit Alkmaar leer je beide liften stap voor stap onder professionele begeleiding.",
                },
              },
              {
                "@type": "Question",
                name: "Is olympic lifting gevaarlijk?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nee, mits je het onder goede begeleiding leert. Bij CrossFit Alkmaar bouwen we de techniek stap voor stap op. We gebruiken bumper plates en platforms, en onze coaches letten op correcte uitvoering. Zo leer je veilig en effectief liften.",
                },
              },
              {
                "@type": "Question",
                name: "Moet ik al sterk zijn om te beginnen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nee. Olympic lifting draait meer om techniek dan om brute kracht. Iedereen begint met een lege barbell of PVC-pijp om de bewegingspatronen te leren. De kracht bouw je geleidelijk op naarmate je techniek verbetert.",
                },
              },
              {
                "@type": "Question",
                name: "Hoe leer ik de snatch en clean & jerk?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bij CrossFit Alkmaar leer je de snatch en clean & jerk via een stap-voor-stap aanpak. We breken elke lift op in deelbewegingen die je apart oefent. Start met de Kickstart om de basisbewegingenpatronen te leren, en bouw daarna verder op in de groepslessen.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthClub",
            "@id": "https://crossfitalkmaar.com/#organization",
            name: "CrossFit Alkmaar",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              bestRating: "5",
              worstRating: "1",
              ratingCount: "260",
              reviewCount: "260",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Simone — lid bij CrossFit Alkmaar",
            description: "Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar - Lid bij CrossFit Alkmaar deelt haar ervaring",
            thumbnailUrl: "https://img.youtube.com/vi/14v6cnGlI7g/maxresdefault.jpg",
            uploadDate: "2025-01-01",
            contentUrl: "https://www.youtube.com/watch?v=14v6cnGlI7g",
            embedUrl: "https://www.youtube.com/embed/14v6cnGlI7g",
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="Olympic lifting Alkmaar - snatch en clean and jerk bij CrossFit Alkmaar"
      >
        <Image
          src="/images/CFA-feb-lowres-03 (2).jpg"
          alt="Olympic lifting Alkmaar - snatch en clean and jerk bij CrossFit Alkmaar"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Olympic Lifting Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Leer de snatch en clean &amp; jerk onder professionele begeleiding. Voor beginners en gevorderden.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_oly_hero", "olympic-lifting"); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Google Reviews */}
      <div className="bg-white py-3 text-center">
        <p className="text-gray-700 text-sm">
          <span className="text-yellow-500">★★★★★</span> <span className="font-semibold">5.0</span> — 260+ Google reviews
        </p>
      </div>

      {/* Wat is olympic lifting */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Wat is olympic lifting?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Olympic lifting — ook wel olympisch gewichtheffen — bestaat uit twee explosieve liften: de <strong>snatch</strong> en de <strong>clean &amp; jerk</strong>. Bij de snatch breng je de barbell in één vloeiende beweging van de grond naar boven je hoofd. Bij de clean &amp; jerk til je de barbell eerst naar je schouders (clean) en druk je hem daarna boven je hoofd (jerk).
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Deze liften zijn de ultieme test van <strong>explosiviteit</strong>, <strong>coördinatie</strong> en <strong>kracht</strong>. Ze verbeteren je atletisch vermogen, mobiliteit en lichaamsbewustzijn als geen andere oefening.
          </p>
          <p className="text-lg text-gray-700">
            Bij CrossFit Alkmaar is olympic lifting een vast onderdeel van onze training. Of je nu voor het eerst een barbell oppakt of je PR wilt verbeteren — onze coaches begeleiden je bij elke stap.
          </p>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Waarom olympic lifting bij CrossFit Alkmaar?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Professionele techniekcoaching
              </h3>
              <p className="text-gray-700">
                Onze coaches zijn getraind in olympisch gewichtheffen en helpen je de snatch en clean &amp; jerk met de juiste techniek uit te voeren. Zo haal je het maximale uit elke lift.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Stap-voor-stap opbouw
              </h3>
              <p className="text-gray-700">
                We breken elke lift op in deelbewegingen. Eerst leer je de posities en het bewegingspatroon, daarna voeg je snelheid en gewicht toe. Zo bouw je een solide technische basis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Geschikt voor beginners
              </h3>
              <p className="text-gray-700">
                Je hoeft geen ervaring te hebben. Iedereen begint met een lege barbell of PVC-pijp. De kracht en techniek bouw je geleidelijk op onder begeleiding van onze coaches.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Olympische faciliteiten
              </h3>
              <p className="text-gray-700">
                We beschikken over bumper plates, olympische barbells en lifting platforms. Alles wat je nodig hebt om veilig en effectief te liften, staat klaar in onze box.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe we olympic lifting leren */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Hoe we olympic lifting leren
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Olympic lifting leer je niet in één dag. Daarom hanteren we een progressieve aanpak: we starten met de basisbewegingen en bouwen stap voor stap op naar de volledige lift. Elke les bevat techniekwerk zodat je continu verbetert.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Nieuwe leden starten met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> om de fundamentele bewegingspatronen te leren, waaronder de basis van olympic lifting. Daarna sluit je aan bij de <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">groepslessen</Link> waar olympic lifting regelmatig in de programmering terugkomt.
          </p>
          <p className="text-lg text-gray-700">
            Olympic lifting bouwt ook fantastische <Link href="/krachttraining-alkmaar" className="text-blue-900 font-semibold hover:underline">kracht</Link> op. De combinatie van explosieve liften en functionele training maakt je een completere atleet. Bekijk onze <Link href="/tarieven" className="text-blue-900 font-semibold hover:underline">tarieven</Link> om te starten.
          </p>
        </div>
      </section>

      {/* AEO Content */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Wat is olympic lifting?</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat is olympic lifting en wat leer je ermee?</h3>
              <p className="text-gray-600">Olympic lifting omvat twee liften: de snatch en de clean &amp; jerk. Het zijn technische, explosieve bewegingen die kracht, snelheid en coördinatie trainen. Bij CrossFit Alkmaar leer je deze liften stap voor stap onder professionele begeleiding.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is olympic lifting gevaarlijk?</h3>
              <p className="text-gray-600">Niet met goede begeleiding. Bij CrossFit Alkmaar bouw je de techniek op van licht naar zwaar, met een coach die elke rep bewaakt. We gebruiken bumper plates en platforms zodat je veilig kunt trainen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Moet je al sterk zijn om met olympic lifting te beginnen?</h3>
              <p className="text-gray-600">Nee. Olympic lifting gaat eerst over techniek, daarna over gewicht. Bij CrossFit Alkmaar beginnen veel leden met een lege barbell of zelfs een PVC-pijp om de bewegingspatronen te leren.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lid aan het woord */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Simone — lid bij CrossFit Alkmaar</h2>
          <p className="text-gray-600 text-center mb-8">&quot;Het zijn gewoon allemaal leuke mensen. Iedereen motiveert elkaar&quot;</p>
          <div className="relative w-full rounded-lg shadow-sm overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <div className="absolute top-0 left-0 w-full h-full">
              <TrackedYouTubeEmbed videoId="14v6cnGlI7g" title="Simone — lid bij CrossFit Alkmaar" />
            </div>
          </div>
          <p className="text-center mt-6">
            <Link href="/onze-leden" className="text-blue-900 font-semibold hover:underline">Bekijk meer verhalen van onze leden →</Link>
          </p>
        </div>
      </section>

      {/* Veelgestelde vragen */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde vragen</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat is olympic lifting?</h3>
              <p className="text-gray-600">Olympic lifting (olympisch gewichtheffen) bestaat uit twee explosieve liften: de snatch en de clean &amp; jerk. Het draait om techniek, snelheid en kracht. Bij CrossFit Alkmaar leer je beide liften stap voor stap onder professionele begeleiding.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is olympic lifting gevaarlijk?</h3>
              <p className="text-gray-600">Nee, mits je het onder goede begeleiding leert. Bij CrossFit Alkmaar bouwen we de techniek stap voor stap op. We gebruiken bumper plates en platforms, en onze coaches letten op correcte uitvoering. Zo leer je veilig en effectief liften.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Moet ik al sterk zijn om te beginnen?</h3>
              <p className="text-gray-600">Nee. Olympic lifting draait meer om techniek dan om brute kracht. Iedereen begint met een lege barbell of PVC-pijp om de bewegingspatronen te leren. De kracht bouw je geleidelijk op naarmate je techniek verbetert.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoe leer ik de snatch en clean &amp; jerk?</h3>
              <p className="text-gray-600">Bij CrossFit Alkmaar leer je de snatch en clean &amp; jerk via een stap-voor-stap aanpak. We breken elke lift op in deelbewegingen die je apart oefent. Start met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> om de basisbewegingen te leren, en bouw daarna verder op in de <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">groepslessen</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Klaar om olympic lifting te leren?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Plan een gratis kennismaking en ontdek hoe onze coaches je de snatch en clean &amp; jerk leren.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_oly_footer", "olympic-lifting"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
