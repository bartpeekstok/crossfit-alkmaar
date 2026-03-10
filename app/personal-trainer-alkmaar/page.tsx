"use client";

import { usePopup } from "../components/PopupContext";
import { trackCTAClick } from "../lib/analytics";
import ServiceSchema from "../components/ServiceSchema";
import Link from "next/link";

export default function PersonalTrainerAlkmaarPage() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      <ServiceSchema
        name="Personal Trainer Alkmaar - CrossFit Alkmaar"
        description="Personal training met gecertificeerde coaches in Alkmaar. Individueel of in kleine groepen, afgestemd op jouw doelen."
        url="https://crossfitalkmaar.com/personal-trainer-alkmaar"
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
                name: "Wat doet een personal trainer bij CrossFit Alkmaar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Onze personal trainers maken een programma op maat, begeleiden je 1-op-1 en helpen je bij specifieke doelen zoals afvallen, krachtopbouw of revalidatie.",
                },
              },
              {
                "@type": "Question",
                name: "Hoe vaak train ik met een personal trainer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dat bepaal je zelf. De meeste leden kiezen voor 1-2 sessies per week, vaak gecombineerd met groepslessen.",
                },
              },
              {
                "@type": "Question",
                name: "Wat kost personal training?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Neem contact op voor onze tarieven. We bieden losse sessies en pakketten aan. De kennismaking is altijd gratis.",
                },
              },
              {
                "@type": "Question",
                name: "Is personal training geschikt voor beginners?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Zeer geschikt. Je krijgt alle aandacht en leert de basis op jouw tempo, zonder de druk van een groep.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        role="img"
        aria-label="Personal trainer Alkmaar - persoonlijke begeleiding bij CrossFit Alkmaar"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/personal-training-header.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src="/images/personal-training-header.jpg" alt="Personal trainer Alkmaar - persoonlijke begeleiding bij CrossFit Alkmaar" className="sr-only" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Personal Trainer Alkmaar
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Een coach die volledig op jou focust. Jouw doelen, jouw tempo, jouw resultaat.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_pt_hero", "personal-trainer-alkmaar"); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Waarom personal training */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Waarom een personal trainer bij CrossFit Alkmaar?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Bij een personal trainer denk je misschien aan dure sessies in een commerciële gym. Bij CrossFit Alkmaar werkt het anders. Onze coaches zijn gecertificeerd en gespecialiseerd in functionele fitness — en je krijgt altijd persoonlijke aandacht.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Of je nu kiest voor 1-op-1 personal training of onze <Link href="/small-group-training" className="text-blue-900 font-semibold hover:underline">small group training</Link> (max 4 personen): je traint altijd met een plan dat is afgestemd op jouw doelen, je niveau en eventuele blessures.
          </p>
          <p className="text-lg text-gray-700">
            Geen standaard schema van internet, maar een coach die naast je staat, je techniek corrigeert en je verder helpt dan je zelf zou komen.
          </p>
        </div>
      </section>

      {/* Opties */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Personal training opties
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                1-op-1 Personal Training
              </h3>
              <p className="text-gray-700">
                Volledige aandacht van je coach. Ideaal als je specifieke doelen hebt, revalidatie combineert met training, of gewoon het snelste resultaat wilt.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Small Group Training (max 4)
              </h3>
              <p className="text-gray-700">
                Dezelfde persoonlijke aanpak, maar samen met een klein groepje. Je profiteert van de energie van de groep én de aandacht van je coach.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Kickstart Traject
              </h3>
              <p className="text-gray-700">
                Nieuw bij CrossFit? Start met de <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Kickstart</Link>: persoonlijke sessies waarin je de basis leert voordat je naar groepslessen gaat.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Voedingsbegeleiding
              </h3>
              <p className="text-gray-700">
                Combineer training met <Link href="/voedingsadvies" className="text-blue-900 font-semibold hover:underline">voedingsadvies</Link> voor maximaal resultaat. Onze coaches helpen je met een plan dat past bij jouw leefstijl.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Voor wie is personal training?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Personal training is voor iedereen die meer begeleiding wil. Of je nu wilt afvallen, sterker worden, revalideren na een blessure, of je voorbereiden op een specifiek doel — onze coaches maken het persoonlijk.
          </p>
          <p className="text-lg text-gray-700">
            Onze personal trainers werken met leden van 20 tot 70+ jaar. Het maakt niet uit waar je staat, het gaat erom waar je naartoe wilt.
          </p>
        </div>
      </section>

      {/* Veelgestelde vragen */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Veelgestelde vragen</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat doet een personal trainer bij CrossFit Alkmaar?</h3>
              <p className="text-gray-600">Onze personal trainers maken een programma op maat, begeleiden je 1-op-1 en helpen je bij specifieke doelen zoals afvallen, krachtopbouw of revalidatie.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Hoe vaak train ik met een personal trainer?</h3>
              <p className="text-gray-600">Dat bepaal je zelf. De meeste leden kiezen voor 1-2 sessies per week, vaak gecombineerd met groepslessen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Wat kost personal training?</h3>
              <p className="text-gray-600">Neem contact op voor onze tarieven. We bieden losse sessies en pakketten aan. De kennismaking is altijd gratis.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Is personal training geschikt voor beginners?</h3>
              <p className="text-gray-600">Zeer geschikt. Je krijgt alle aandacht en leert de basis op jouw tempo, zonder de druk van een groep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Gratis kennismakingsgesprek
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Benieuwd wat een personal trainer voor jou kan betekenen? Plan een vrijblijvend gesprek.
          </p>
          <button
            onClick={() => { trackCTAClick("gratis_intake_pt_footer", "personal-trainer-alkmaar"); openPopup(); }}
            className="bg-white text-blue-900 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
