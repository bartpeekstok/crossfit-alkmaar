"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Image from "next/image";
import Link from "next/link";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";

export default function SportschoolBegeleidingAlkmaarPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="Sportschool met Begeleiding Alkmaar - CrossFit Alkmaar"
        description="Sportschool met professionele begeleiding in Alkmaar. Altijd een coach naast je, in kleine groepen van max 12 personen."
        url="https://crossfitalkmaar.com/sportschool-begeleiding-alkmaar"
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
                name: "Wat is het verschil met een gewone sportschool?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bij een gewone sportschool train je alleen tussen de apparaten. Bij CrossFit Alkmaar wordt elke training begeleid door een professionele coach, in kleine groepen van maximaal 12 personen. Je krijgt persoonlijke feedback op techniek en uitvoering.",
                },
              },
              {
                "@type": "Question",
                name: "Krijg ik persoonlijke aandacht in een groepsles?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja. Doordat onze groepen maximaal 12 personen zijn, kent de coach je naam, je doelen en je aandachtspunten. Elke oefening wordt aangepast op jouw niveau.",
                },
              },
              {
                "@type": "Question",
                name: "Moet ik al ervaring hebben?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nee. Iedereen start met de 28 Day Kickstart waarin je de basis leert in kleine groepen van max 6 personen. Zo sta je nooit onvoorbereid in een groepsles.",
                },
              },
              {
                "@type": "Question",
                name: "Hoe ziet de begeleiding eruit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Elke les staat een coach voor de groep die de training uitlegt, voordoet en je persoonlijk corrigeert. Daarnaast heb je elke 90 dagen een check-in met je coach om je voortgang te bespreken.",
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
            name: "Steven — lid bij CrossFit Alkmaar",
            description: "Houding en techniek, daar zijn de trainers hier ongelooflijk goed in - Lid bij CrossFit Alkmaar deelt zijn ervaring",
            thumbnailUrl: `https://img.youtube.com/vi/esc-52ZNdPY/maxresdefault.jpg`,
            uploadDate: "2025-01-01",
            contentUrl: `https://www.youtube.com/watch?v=esc-52ZNdPY`,
            embedUrl: `https://www.youtube.com/embed/esc-52ZNdPY`,
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="Sportschool met begeleiding Alkmaar - CrossFit Alkmaar coaching tijdens groepstraining"
      >
        <Image
          src="/images/CFA-januari-lowres-34.jpg"
          alt="Sportschool met begeleiding Alkmaar - CrossFit Alkmaar coaching tijdens groepstraining"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sportschool met Begeleiding in Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Bij CrossFit Alkmaar train je altijd onder leiding van een professionele coach. Geen rondje apparaten in je eentje, maar begeleide training met persoonlijke aandacht.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_begeleiding_hero", "sportschool-begeleiding-alkmaar"); openPopup(); }}
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

      {/* Waarom begeleiding het verschil maakt */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Waarom begeleiding het verschil maakt
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Bij de meeste sportscholen in Alkmaar krijg je een introductie, en daarna ben je op jezelf aangewezen. Je loopt rond tussen de apparaten, kijkt wat filmpjes op je telefoon en hoopt dat je het goed doet. Herkenbaar?
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Bij CrossFit Alkmaar is dat fundamenteel anders. Elke training wordt begeleid door een professionele coach die naast je staat. Niet op een schermpje, niet via een app — maar echt naast je. Die coach ziet of je houding klopt, past oefeningen aan op jouw niveau en zorgt dat je veilig en effectief traint.
          </p>
          <p className="text-lg text-gray-700">
            Het resultaat? Je behaalt sneller resultaat, voorkomt blessures en je hoeft nooit meer zelf te bedenken wat je gaat doen. Dat regelen wij.
          </p>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Wat onze begeleiding inhoudt
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Altijd een coach naast je
              </h3>
              <p className="text-gray-700">
                Elke les staat een coach voor de groep. Geen scherm met instructies, maar een professional die voordoet, uitlegt en je persoonlijk corrigeert.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Techniek en veiligheid voorop
              </h3>
              <p className="text-gray-700">
                Onze coaches letten op je houding en techniek bij elke oefening. Zo train je effectief en voorkom je blessures — ook als je net begint.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Programma op maat
              </h3>
              <p className="text-gray-700">
                Elke oefening is schaalbaar naar jouw niveau. Of je nu 25 bent of 65, beginner of gevorderd — de coach past de training aan zodat het voor jou werkt.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ 90 Day Check-ins
              </h3>
              <p className="text-gray-700">
                Elke 90 dagen zit je met je coach om je voortgang te bespreken. Wat gaat goed, wat kan beter, en hoe passen we je training aan op je doelen?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe werkt het */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Hoe werkt het?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Iedereen begint met een gratis kennismaking. Daarna start je met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">28 Day Kickstart</Link> — een persoonlijk traject in kleine groepen van max 6 personen. Hier leer je alle basisbewegingen onder intensieve begeleiding.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Na de Kickstart sluit je aan bij de <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">groepslessen</Link> waar je in groepen van max 12 traint. Elke les is anders, altijd begeleid, en je kunt kiezen uit meerdere tijdstippen per dag.
          </p>
          <p className="text-lg text-gray-700">
            Wil je nog meer persoonlijke aandacht? Bekijk onze <Link href="/personal-training" className="text-blue-900 font-semibold hover:underline">personal training</Link> voor 1-op-1 coaching met je eigen programma.
          </p>
        </div>
      </section>

      {/* AEO Content */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Waarom kies je voor begeleiding?</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat is het verschil tussen trainen met en zonder begeleiding?</h3>
              <p className="text-gray-600">Zonder begeleiding maak je vaker techniekfouten, train je niet optimaal en verlies je sneller motivatie. Met een coach krijg je correcties in real-time, een programma dat werkt, en iemand die je verantwoordelijk houdt.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoe ziet begeleiding er uit bij CrossFit Alkmaar?</h3>
              <p className="text-gray-600">Je start met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> (4 weken, groep van max 6) waar je alle technieken leert. Daarna train je in groepslessen van max 12 met een coach die je kent. Elke 90 dagen heb je een check-in om je voortgang te bespreken en doelen bij te stellen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is begeleid trainen niet veel duurder?</h3>
              <p className="text-gray-600">Per sessie betaal je bij CrossFit Alkmaar minder dan bij een personal trainer, maar krijg je veel meer dan bij een gewone sportschool. Je krijgt coaching, programmering, en 90 day check-ins — allemaal inbegrepen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video testimonial */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Steven — lid bij CrossFit Alkmaar</h2>
          <p className="text-gray-600 text-center mb-8">&quot;Houding en techniek, daar zijn de trainers hier ongelooflijk goed in&quot;</p>
          <div className="relative w-full rounded-lg shadow-sm overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <div className="absolute top-0 left-0 w-full h-full">
              <TrackedYouTubeEmbed videoId="esc-52ZNdPY" title="Steven — lid bij CrossFit Alkmaar" />
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
              <h3 className="text-xl font-semibold mb-2">Wat is het verschil met een gewone sportschool?</h3>
              <p className="text-gray-600">Bij een gewone sportschool train je alleen tussen de apparaten. Bij CrossFit Alkmaar wordt elke training begeleid door een professionele coach, in kleine groepen van maximaal 12 personen. Je krijgt persoonlijke feedback op techniek en uitvoering.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Krijg ik persoonlijke aandacht in een groepsles?</h3>
              <p className="text-gray-600">Ja. Doordat onze groepen maximaal 12 personen zijn, kent de coach je naam, je doelen en je aandachtspunten. Elke oefening wordt aangepast op jouw niveau.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Moet ik al ervaring hebben?</h3>
              <p className="text-gray-600">Nee. Iedereen start met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">28 Day Kickstart</Link> waarin je de basis leert in kleine groepen van max 6 personen. Zo sta je nooit onvoorbereid in een groepsles.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoe ziet de begeleiding eruit?</h3>
              <p className="text-gray-600">Elke les staat een coach voor de groep die de training uitlegt, voordoet en je persoonlijk corrigeert. Daarnaast heb je elke 90 dagen een check-in met je coach om je voortgang te bespreken. Bekijk onze <Link href="/tarieven" className="text-blue-900 font-semibold hover:underline">tarieven</Link> om te starten.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ervaar het verschil van begeleide training
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Plan een gratis kennismaking en ontdek hoe het is om te trainen met een coach naast je.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_begeleiding_footer", "sportschool-begeleiding-alkmaar"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
