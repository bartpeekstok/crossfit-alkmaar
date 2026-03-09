"use client";

import Image from "next/image";
import Link from "next/link";
import { usePopup } from "../components/PopupContext";
import { usePricingPopup } from "../components/PricingPopupContext";
import { trackCTAClick } from "../lib/analytics";

export default function TarievenPage() {
  const { openPopup } = usePopup();
  const { openPopup: openPricingPopup } = usePricingPopup();

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[400px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tarieven</h1>
          <p className="text-xl text-gray-300 mb-8">
            Persoonlijke coaching in kleine groepen, een warme community en maandelijks opzegbare memberships. Geen verborgen kosten.
          </p>
          <button
            onClick={() => { trackCTAClick('gratis_intake_tarieven_hero', 'tarieven'); openPopup(); }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>

      {/* Waarom investeren */}
      <section className="py-12 px-6 bg-gray-200">
        <div className="max-w-5xl mx-auto text-gray-700 leading-relaxed space-y-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Waarom investeren in coaching?</h2>
          <p>Bij een reguliere sportschool betaal je voor toegang tot een zaal. Bij CrossFit Alkmaar investeer je in begeleiding, resultaat en een community die je verder brengt.</p>
          <p>Elke training wordt gegeven door een professionele coach, in kleine groepen van maximaal 6 tot 12 personen. Je hoeft zelf geen programma te bedenken &mdash; dat doen wij. Onze coaches letten op jouw techniek, passen het programma aan op jouw niveau en houden je progressie bij met 90 day check ins.</p>
          <p>Daarnaast krijg je er iets bij wat geen sportschool kan bieden: een hechte community die je motiveert om te blijven komen. Geen ronddwalen in een drukke zaal, maar gerichte training met mensen die hetzelfde doel hebben. En als je er een tijdje niet bent geweest? Dan nemen we persoonlijk contact met je op &mdash; geen geautomatiseerd mailtje, maar een coach die even checkt hoe het gaat.</p>
          <p className="font-semibold text-gray-900">Dat is waar je in investeert. Niet in een pasje, maar in je gezondheid.</p>
        </div>
      </section>

      {/* Groepslessen */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Groepslessen</h2>
          <p className="text-center text-gray-600 mb-8">Inclusief 90 day check ins met een coach. Geschikt voor elk niveau.</p>
          <div className="mb-10 bg-blue-900 rounded-2xl shadow-lg p-8 md:p-10 max-w-4xl mx-auto text-white">
            <p className="font-bold text-xl md:text-2xl mb-6 text-center">Alle groepslesabonnementen inclusief:</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Professionele coaches</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Max 12 deelnemers per les</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>90 day check ins met een coach</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Geschikt voor elk niveau</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Groot rooster, flexibel plannen</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>SportBit app</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Gratis koffie en thee</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Kleedkamers en douches</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Gratis parkeren</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>CrossFit, Hyrox en Strength</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-center border border-gray-200">
              <p className="text-gray-600 text-sm font-medium uppercase tracking-wide mb-3">2x per week</p>
              <p className="text-4xl font-bold text-blue-900">€99,95</p>
              <p className="text-gray-500 text-sm mt-1">per maand</p>
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-center border-2 border-blue-900 relative">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-900 text-white text-xs font-semibold px-4 py-1.5 rounded-full">Populair</span>
              <p className="text-gray-600 text-sm font-medium uppercase tracking-wide mb-3">3x per week</p>
              <p className="text-4xl font-bold text-blue-900">€127,50</p>
              <p className="text-gray-500 text-sm mt-1">per maand</p>
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-center border border-gray-200">
              <p className="text-gray-600 text-sm font-medium uppercase tracking-wide mb-3">Onbeperkt</p>
              <p className="text-4xl font-bold text-blue-900">€159,95</p>
              <p className="text-gray-500 text-sm mt-1">per maand</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/groepslessen" className="text-blue-900 font-semibold hover:underline">Meer over groepslessen &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="py-8 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/groepslessen-header.jpg" alt="Groepslessen bij CrossFit Alkmaar" fill className="object-cover object-[center_35%]" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button
                onClick={() => { trackCTAClick('pricing_tarieven_groepslessen_img', 'tarieven'); openPricingPopup(); }}
                className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer text-lg"
              >
                Start met groepslessen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BUILD Small Group */}
      <section className="py-12 px-6 bg-gray-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">BUILD Small Group Training</h2>
          <p className="text-center text-gray-600 mb-8">Semi personal training in een vaste groep van maximaal 6 personen.</p>
          <div className="mb-10 bg-blue-900 rounded-2xl shadow-lg p-8 md:p-10 max-w-4xl mx-auto text-white">
            <p className="font-bold text-xl md:text-2xl mb-2 text-center">BUILD inclusief:</p>
            <p className="text-blue-200 text-base mb-6 text-center">Alles van groepslessen, plus:</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Max 6 deelnemers per training</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Programma op maat</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Vaste groep, vaste coaches</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Je plek is altijd gereserveerd</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Persoonlijke aandacht in een groep</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Voordeliger dan personal training</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-center border border-gray-200">
              <p className="text-gray-600 text-sm font-medium uppercase tracking-wide mb-3">2x per week</p>
              <p className="text-4xl font-bold text-blue-900">€245</p>
              <p className="text-gray-500 text-sm mt-1">per maand</p>
              <div className="mt-4 space-y-1 text-gray-700">
                <p className="text-sm"><span className="text-blue-900 font-bold">&#8226;</span> 2 BUILD trainingen</p>
                <p className="text-sm"><span className="text-blue-900 font-bold">&#8226;</span> 1 groepsles</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-center border border-gray-200">
              <p className="text-gray-600 text-sm font-medium uppercase tracking-wide mb-3">3x per week</p>
              <p className="text-4xl font-bold text-blue-900">€367,50</p>
              <p className="text-gray-500 text-sm mt-1">per maand</p>
              <div className="mt-4 space-y-1 text-gray-700">
                <p className="text-sm"><span className="text-blue-900 font-bold">&#8226;</span> 3 BUILD trainingen</p>
                <p className="text-sm"><span className="text-blue-900 font-bold">&#8226;</span> 2 groepslessen</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/small-group-training" className="text-blue-900 font-semibold hover:underline">Meer over BUILD &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="py-8 px-6 bg-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/small-group-training-header.jpg" alt="BUILD Small Group Training" fill className="object-cover object-top" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button
                onClick={() => { trackCTAClick('pricing_tarieven_build_img', 'tarieven'); openPricingPopup(); }}
                className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer text-lg"
              >
                Start met BUILD training
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Kickstart */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">28 Day Kickstart</h2>
          <p className="text-center text-gray-600 mb-8">Nieuw hier? Iedereen start met de Kickstart. In vier weken leggen we samen een solide basis.</p>
          <div className="mb-10 bg-blue-900 rounded-2xl shadow-lg p-8 md:p-10 max-w-4xl mx-auto text-white">
            <p className="font-bold text-xl md:text-2xl mb-6 text-center">Kickstart inclusief:</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>12 trainingen in 4 weken</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Max 6 deelnemers per groep</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Basis lifestyle advies</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Leer de juiste techniek</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Aandacht voor jouw doelen</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Een veilige start</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Geschikt voor beginners en gevorderden</p>
              <p className="flex items-center gap-3"><svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>Eindgesprek met advies</p>
            </div>
          </div>
          <div className="max-w-sm mx-auto">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 text-center border border-gray-200">
              <p className="text-gray-600 text-sm font-medium uppercase tracking-wide mb-3">4 weken</p>
              <p className="text-4xl font-bold text-blue-900">€500</p>
              <p className="text-gray-500 text-sm mt-1">eenmalig</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/kickstart" className="text-blue-900 font-semibold hover:underline">Meer over de Kickstart &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="py-8 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/kickstart-header.jpg" alt="28 Day Kickstart" fill className="object-cover object-[center_15%]" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button
                onClick={() => { trackCTAClick('pricing_tarieven_kickstart_img', 'tarieven'); openPricingPopup(); }}
                className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer text-lg"
              >
                Start je Kickstart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Benieuwd welk programma bij jou past?</h2>
          <p className="text-xl mb-8">Plan een gratis kennismaking. We bespreken je doelen en adviseren het beste programma.</p>
          <button
            onClick={() => { trackCTAClick('gratis_intake_tarieven', 'tarieven'); openPopup(); }}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg cursor-pointer"
          >
            Plan je gratis kennismaking
          </button>
        </div>
      </section>
    </div>
  );
}
