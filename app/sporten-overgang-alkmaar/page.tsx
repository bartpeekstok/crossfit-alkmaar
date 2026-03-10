"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Image from "next/image";
import Link from "next/link";
import TrackedYouTubeEmbed from "../components/TrackedYouTubeEmbed";

export default function SportenOvergangAlkmaarPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="Sporten in de Overgang Alkmaar - CrossFit Alkmaar"
        description="Krachttraining en begeleide fitness speciaal gericht op vrouwen in de overgang. Verbeter je botdichtheid, verminder overgangsklachten en krijg meer energie met professionele coaching in kleine groepen."
        url="https://crossfitalkmaar.com/sporten-overgang-alkmaar"
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
                name: "Waarom is krachttraining belangrijk in de overgang?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Tijdens de overgang daalt het oestrogeenniveau, waardoor botdichtheid afneemt en spiermassa sneller verloren gaat. Krachttraining stimuleert de botopbouw, behoudt spiermassa en helpt bij het reguleren van je hormoonhuishouding. Dit vermindert het risico op osteoporose en houdt je sterker en vitaler.",
                },
              },
              {
                "@type": "Question",
                name: "Is CrossFit geschikt voor vrouwen in de overgang?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absoluut. Elke oefening bij CrossFit Alkmaar is schaalbaar naar jouw niveau. Onze coaches houden rekening met je lichaam en passen de training aan. Je traint in kleine groepen met persoonlijke aandacht, zodat je veilig en effectief beweegt.",
                },
              },
              {
                "@type": "Question",
                name: "Helpt sporten tegen overgangsklachten?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, regelmatig bewegen en krachttraining kunnen overgangsklachten verminderen. Onderzoek toont aan dat sporten helpt bij het verminderen van opvliegers, beter slapen, meer energie, een stabielere stemming en het behouden van een gezond gewicht.",
                },
              },
              {
                "@type": "Question",
                name: "Moet ik al fit zijn om te beginnen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nee, je hoeft helemaal niet fit te zijn. Je start met de Kickstart: persoonlijke introductiesessies waarin je op je eigen tempo alle bewegingen leert. Onze coaches begeleiden je stap voor stap. Je gaat pas naar de groepslessen als jij je er klaar voor voelt.",
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
            name: "Renze — lid bij CrossFit Alkmaar",
            description: "Ik voel me fitter en sterker dan 10 jaar geleden - Lid bij CrossFit Alkmaar deelt zijn ervaring",
            thumbnailUrl: `https://img.youtube.com/vi/iJ6KoiK5QZk/maxresdefault.jpg`,
            uploadDate: "2025-01-01",
            contentUrl: `https://www.youtube.com/watch?v=iJ6KoiK5QZk`,
            embedUrl: `https://www.youtube.com/embed/iJ6KoiK5QZk`,
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="Sporten in de overgang in Alkmaar - krachttraining met begeleiding"
      >
        <Image
          src="/images/sporten-overgang-header.jpg"
          alt="Sporten in de overgang in Alkmaar - krachttraining met begeleiding"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sporten in de Overgang in Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Sterker, fitter en meer energie — juist in deze fase van je leven
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_overgang_hero", "sporten-overgang-alkmaar"); openPopup(); }}
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

      {/* Waarom juist nu bewegen */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Waarom juist nu bewegen zo belangrijk is
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            De overgang brengt grote veranderingen in je lichaam. Door de daling van oestrogeen verlies je sneller botmassa en spierkracht. Je stofwisseling vertraagt, je slaap kan verslechteren en je stemming kan wisselend zijn. Dat is niet iets om je voor te schamen — het overkomt miljoenen vrouwen.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Wat wél in je eigen hand ligt: hoe je hiermee omgaat. En daar speelt beweging een enorme rol. <Link href="/krachttraining-alkmaar" className="text-blue-900 font-semibold hover:underline">Krachttraining</Link> is wetenschappelijk bewezen een van de krachtigste middelen om overgangsklachten te verminderen. Het stimuleert de aanmaak van botweefsel, behoudt je spiermassa, verbetert je slaapkwaliteit en geeft je meer energie.
          </p>
          <p className="text-lg text-gray-700">
            Daarnaast heeft bewegen een positief effect op je mentale gezondheid. Sporten maakt endorfines aan die je humeur verbeteren, stress verminderen en je helpen om je weer meer jezelf te voelen. Je hoeft geen topsporter te zijn — al kleine stappen maken een groot verschil.
          </p>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Wat sporten bij CrossFit Alkmaar je oplevert
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Sterkere botten door krachttraining
              </h3>
              <p className="text-gray-700">
                Krachttraining stimuleert je botopbouw en remt het verlies van botdichtheid. Dit is juist in de overgang essentieel om osteoporose te voorkomen en sterk te blijven.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Meer energie en beter slapen
              </h3>
              <p className="text-gray-700">
                Regelmatig bewegen verbetert je slaapkwaliteit en geeft je overdag meer energie. Veel van onze leden merken al na een paar weken verschil in hoe ze zich voelen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Trainingen aangepast aan jouw lichaam
              </h3>
              <p className="text-gray-700">
                Elke oefening is schaalbaar. Of je nu net begint of al jaren sport — onze coaches passen de training aan zodat het bij jou past. Geen one-size-fits-all aanpak.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                ✅ Begripvolle coaches die luisteren
              </h3>
              <p className="text-gray-700">
                Onze coaches begrijpen waar je doorheen gaat. Ze luisteren, denken mee en zorgen dat je je op je gemak voelt. Je bent hier geen nummer, maar een mens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hoe we je begeleiden */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Hoe we je begeleiden
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Je begint met een gratis kennismakingsgesprek. We luisteren naar je verhaal, je klachten en je doelen. Geen verplichtingen, geen druk — gewoon een eerlijk gesprek.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Daarna start je met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link>: persoonlijke introductiesessies waarin je op je eigen tempo alle bewegingen leert. Je gaat pas naar de <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">groepslessen</Link> als jij je er klaar voor voelt.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            In de groepslessen train je in kleine groepen van maximaal 12 personen. Elke oefening wordt aangepast aan jouw niveau. Heb je behoefte aan nog meer persoonlijke aandacht? Dan is <Link href="/personal-training" className="text-blue-900 font-semibold hover:underline">personal training</Link> een mooie optie.
          </p>
          <p className="text-lg text-gray-700">
            Wil je ook werken aan je voeding? Bekijk dan onze mogelijkheden voor <Link href="/voedingsadvies" className="text-blue-900 font-semibold hover:underline">voedingsadvies</Link>. Een goede combinatie van training en voeding kan je helpen om je nog beter te voelen. Bekijk ook onze <Link href="/tarieven" className="text-blue-900 font-semibold hover:underline">tarieven</Link>.
          </p>
        </div>
      </section>

      {/* AEO Content */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Sporten in de overgang</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Waarom is krachttraining extra belangrijk in de overgang?</h3>
              <p className="text-gray-600">Tijdens de overgang verlies je versneld botmassa en spiermassa door dalende oestrogeenspiegels. <Link href="/krachttraining-alkmaar" className="text-blue-900 font-semibold hover:underline">Krachttraining</Link> remt dit verlies af, verbetert je botdichtheid en helpt bij het behouden van een gezond gewicht. Het is een van de effectiefste dingen die je kunt doen voor je gezondheid in deze fase.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Helpt sporten tegen overgangsklachten?</h3>
              <p className="text-gray-600">Ja. Regelmatig trainen vermindert opvliegers, verbetert je slaapkwaliteit, geeft meer energie en helpt bij stemmingswisselingen. Bij CrossFit Alkmaar passen we de training aan op hoe je je die dag voelt.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is CrossFit niet te zwaar in de overgang?</h3>
              <p className="text-gray-600">Elke oefening bij CrossFit Alkmaar is schaalbaar. Je traint op jouw niveau en jouw tempo. Onze coaches hebben ervaring met leden in de overgang en begrijpen dat sommige dagen anders voelen. Je wordt nooit gedwongen iets te doen dat niet goed voelt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lid aan het woord */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Renze — lid bij CrossFit Alkmaar</h2>
          <p className="text-gray-600 text-center mb-8">&quot;Ik voel me fitter en sterker dan 10 jaar geleden&quot;</p>
          <div className="relative w-full rounded-lg shadow-sm overflow-hidden" style={{ paddingBottom: "56.25%" }}>
            <div className="absolute top-0 left-0 w-full h-full">
              <TrackedYouTubeEmbed videoId="iJ6KoiK5QZk" title="Renze — lid bij CrossFit Alkmaar" />
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
              <h3 className="text-xl font-semibold mb-2">Waarom is krachttraining belangrijk in de overgang?</h3>
              <p className="text-gray-600">Tijdens de overgang daalt je oestrogeenniveau, waardoor je sneller botmassa en spierkracht verliest. <Link href="/krachttraining-alkmaar" className="text-blue-900 font-semibold hover:underline">Krachttraining</Link> stimuleert de botopbouw, behoudt je spiermassa en helpt bij het reguleren van je hormoonhuishouding. Dit vermindert het risico op osteoporose en houdt je sterker en vitaler.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is CrossFit geschikt voor vrouwen in de overgang?</h3>
              <p className="text-gray-600">Absoluut. Elke oefening bij CrossFit Alkmaar is schaalbaar naar jouw niveau. Onze coaches houden rekening met je lichaam en passen de training aan. Je traint in kleine groepen met persoonlijke aandacht, zodat je veilig en effectief beweegt.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Helpt sporten tegen overgangsklachten?</h3>
              <p className="text-gray-600">Ja, regelmatig bewegen en krachttraining kunnen overgangsklachten verminderen. Onderzoek toont aan dat sporten helpt bij het verminderen van opvliegers, beter slapen, meer energie, een stabielere stemming en het behouden van een gezond gewicht.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Moet ik al fit zijn om te beginnen?</h3>
              <p className="text-gray-600">Nee, je hoeft helemaal niet fit te zijn. Je start met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link>: persoonlijke introductiesessies waarin je op je eigen tempo alle bewegingen leert. Onze coaches begeleiden je stap voor stap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Zet de eerste stap — voor jezelf
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            De overgang is uitdagend genoeg. Laat ons je helpen om je weer sterker en energieker te voelen. Plan een vrijblijvend kennismakingsgesprek.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_overgang_footer", "sporten-overgang-alkmaar"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
