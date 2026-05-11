"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Image from "next/image";
import Link from "next/link";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";
import Script from "next/script";

export default function AfvallenMetSportAlkmaarPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="Afvallen met Sport in Alkmaar - CrossFit Alkmaar"
        description="Duurzaam afvallen door sport bij CrossFit Alkmaar. Combineer krachttraining en conditie met professionele coaching en voedingsadvies."
        url="https://crossfitalkmaar.com/afvallen-met-sport-alkmaar"
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
                name: "Kan ik afvallen met CrossFit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Zeker. CrossFit combineert krachttraining met hoge-intensiteit conditietraining. Daardoor verbrand je niet alleen tijdens de training calorieën, maar ook daarna — doordat je spiermassa opbouwt die je stofwisseling verhoogt.",
                },
              },
              {
                "@type": "Question",
                name: "Hoe snel zie ik resultaat?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "De meeste leden merken binnen 4 tot 6 weken verschil in energie, kracht en lichaamsamenstelling. Duurzaam afvallen gaat niet om snel gewicht verliezen, maar om een blijvende verandering in je levensstijl.",
                },
              },
              {
                "@type": "Question",
                name: "Moet ik ook mijn voeding aanpassen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Voeding speelt een grote rol bij afvallen. Bij CrossFit Alkmaar krijg je voedingsadvies als onderdeel van je traject. Geen strenge diëten, maar praktische richtlijnen die passen bij jouw leven.",
                },
              },
              {
                "@type": "Question",
                name: "Is CrossFit niet te zwaar als ik overgewicht heb?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nee. Elke oefening wordt aangepast aan jouw niveau en mogelijkheden. Onze coaches zorgen ervoor dat je veilig traint en stap voor stap opbouwt. Veel van onze leden zijn begonnen met overgewicht en trainen nu meerdere keren per week.",
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
              ratingCount: "273",
              reviewCount: "273",
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
            name: "Jarrald — lid bij CrossFit Alkmaar",
            description: "Ik ben 20 kilo afgevallen en voel me fitter dan ooit - Lid bij CrossFit Alkmaar deelt zijn ervaring",
            thumbnailUrl: "https://img.youtube.com/vi/1qhbmRPtysU/maxresdefault.jpg",
            uploadDate: "2025-01-01",
            contentUrl: "https://www.youtube.com/watch?v=1qhbmRPtysU",
            embedUrl: "https://www.youtube.com/embed/1qhbmRPtysU",
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="Afvallen met sport in Alkmaar - duurzaam resultaat bij CrossFit Alkmaar"
      >
        <Image
          src="/images/CFA-december-lowres-21.jpg"
          alt="Afvallen met sport in Alkmaar - duurzaam resultaat bij CrossFit Alkmaar"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Afvallen met Sport in Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Duurzaam gewichtsverlies door de juiste combinatie van krachttraining, conditie en voeding. Geen crashdieet, maar blijvend resultaat.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_afvallen_sport_hero", "afvallen-met-sport-alkmaar"); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Waarom crashdiëten niet werken */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Waarom crashdiëten niet werken
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Minder eten en meer cardio — het klinkt logisch, maar het werkt niet op de lange termijn. Je lichaam past zich aan, je stofwisseling vertraagt en zodra je stopt val je terug in oude patronen. Het jojo-effect is geen gebrek aan wilskracht, maar een voorspelbaar gevolg van een verkeerde aanpak.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Duurzaam afvallen vraagt om een andere strategie: <strong>spiermassa opbouwen</strong> zodat je lichaam in rust meer calorieën verbrandt, <strong>gevarieerd trainen</strong> zodat je gemotiveerd blijft, en <strong>je voeding aanpassen</strong> zonder extreme restricties.
          </p>
          <p className="text-lg text-gray-700">
            Bij CrossFit Alkmaar combineren we precies die drie pijlers. Onze <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">groepslessen</Link> zijn ontworpen om je lichaam op de juiste manier uit te dagen — elke dag anders, altijd effectief.
          </p>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <Script src="https://ghl.crossfitalkmaar.com/reputation/assets/review-widget.js" strategy="lazyOnload" />
          <iframe
            className="lc_reviews_widget"
            src="https://ghl.crossfitalkmaar.com/reputation/widgets/review_widget/elOOWDMoCEHJO4WhphRj"
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: '100%', width: '100%' }}
            title="Google Reviews"
          ></iframe>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Waarom sporten bij CrossFit Alkmaar werkt
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Krachttraining versnelt je stofwisseling
              </h3>
              <p className="text-gray-700">
                Meer spiermassa betekent een hogere basale stofwisseling. Je verbrandt meer calorieën, ook op de dagen dat je niet traint. Krachttraining is de meest onderschatte manier om af te vallen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Gevarieerde training houdt je gemotiveerd
              </h3>
              <p className="text-gray-700">
                Geen twee trainingen zijn hetzelfde. De afwisseling houdt je scherp en voorkomt dat je in een sleur raakt — de belangrijkste reden waarom mensen stoppen met sporten.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Voedingsadvies inbegrepen
              </h3>
              <p className="text-gray-700">
                Training alleen is niet genoeg. Onze <Link href="/voedingsadvies" className="text-blue-900 font-semibold hover:underline">voedingscoaches</Link> helpen je met een eetpatroon dat past bij jouw leven — geen strenge diëten, wel duurzaam resultaat.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Professionele coaching
              </h3>
              <p className="text-gray-700">
                Elke les wordt begeleid door een ervaren coach in groepen van maximaal 12 personen. Je krijgt persoonlijke aandacht, correctie op techniek en een trainingsplan dat bij jou past.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Onze aanpak */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Onze aanpak: training én voeding
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Afvallen met sport werkt het beste als je training en voeding combineert. Daarom bieden we naast onze trainingen ook <Link href="/voedingsadvies" className="text-blue-900 font-semibold hover:underline">voedingsadvies</Link> aan. Geen caloriëntellen of maaltijdplannen, maar praktische richtlijnen die passen bij jouw situatie.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Je start met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link>: een persoonlijk introductietraject waarin je de basistechnieken leert, je doelen bespreekt en een plan maakt. Zo begin je met vertrouwen en bouw je op in je eigen tempo.
          </p>
          <p className="text-lg text-gray-700">
            Bekijk onze <Link href="/meer-info#tarieven" className="text-blue-900 font-semibold hover:underline">tarieven</Link> of plan direct een gratis kennismakingsgesprek om te ontdekken wat het beste bij je past.
          </p>
        </div>
      </section>

      {/* AEO Content */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Hoe val je af door te sporten?</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Welke sport is het beste om af te vallen?</h3>
              <p className="text-gray-600">Een combinatie van kracht- en conditietraining. Krachttraining bouwt spiermassa die je stofwisseling verhoogt, conditietraining verbrandt calorieën. Bij CrossFit Alkmaar combineer je beide in elke les.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoeveel moet je sporten om af te vallen?</h3>
              <p className="text-gray-600">Twee tot drie keer per week trainen, gecombineerd met gezonde voeding, is genoeg voor duurzaam resultaat. Bij CrossFit Alkmaar bieden we ook <Link href="/voedingsadvies" className="text-blue-900 font-semibold hover:underline">voedingsadvies</Link> aan om je resultaten te versnellen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Waarom is alleen cardio niet genoeg om af te vallen?</h3>
              <p className="text-gray-600">Alleen cardio verbrand calorieën, maar je verliest ook spiermassa waardoor je stofwisseling daalt. Met krachttraining behoud je spieren en verbrand je ook in rust meer. Bij CrossFit Alkmaar train je altijd een mix van kracht en conditie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video testimonial - Jarrald */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Jarrald — lid bij CrossFit Alkmaar</h2>
          <p className="text-gray-600 text-center mb-8">&quot;Ik ben 20 kilo afgevallen en voel me fitter dan ooit&quot;</p>
          <div className="relative w-full rounded-lg shadow-sm overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <div className="absolute top-0 left-0 w-full h-full">
              <TrackedYouTubeEmbed videoId="1qhbmRPtysU" title="Jarrald — lid bij CrossFit Alkmaar" />
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
              <h3 className="text-xl font-semibold mb-2">Kan ik afvallen met CrossFit?</h3>
              <p className="text-gray-600">Zeker. CrossFit combineert krachttraining met hoge-intensiteit conditietraining. Daardoor verbrand je niet alleen tijdens de training calorieën, maar ook daarna — doordat je spiermassa opbouwt die je stofwisseling verhoogt.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoe snel zie ik resultaat?</h3>
              <p className="text-gray-600">De meeste leden merken binnen 4 tot 6 weken verschil in energie, kracht en lichaamsamenstelling. Duurzaam afvallen gaat niet om snel gewicht verliezen, maar om een blijvende verandering in je levensstijl.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Moet ik ook mijn voeding aanpassen?</h3>
              <p className="text-gray-600">Voeding speelt een grote rol bij afvallen. Bij CrossFit Alkmaar krijg je <Link href="/voedingsadvies" className="text-blue-900 font-semibold hover:underline">voedingsadvies</Link> als onderdeel van je traject. Geen strenge diëten, maar praktische richtlijnen die passen bij jouw leven.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is CrossFit niet te zwaar als ik overgewicht heb?</h3>
              <p className="text-gray-600">Nee. Elke oefening wordt aangepast aan jouw niveau en mogelijkheden. Onze coaches zorgen ervoor dat je veilig traint en stap voor stap opbouwt. Begin met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link> en bouw op in je eigen tempo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Klaar om duurzaam af te vallen?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Plan een gratis kennismakingsgesprek en ontdek hoe sport je kan helpen bij gezond en blijvend gewichtsverlies.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_afvallen_sport_footer", "afvallen-met-sport-alkmaar"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
