"use client";

import Link from "next/link";
import Script from "next/script";
import { usePopup } from "../components/PopupContext";

export default function HomePageEN() {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 px-6 min-h-[600px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get stronger and fitter here
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-300">
            Small groups, professional coaches, scalable to any level.
          </p>
          <p className="text-lg mb-8 text-gray-400">
            Whether you're 30, 50, or 60+, haven't exercised in a while, or want to get back into it: we help you get stronger safely and effectively.
          </p>
          <button
            onClick={openPopup}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition cursor-pointer"
          >
            Free intro
          </button>
        </div>
      </section>

      {/* How it works - 3 steps */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How training at CrossFit Alkmaar works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <button onClick={openPopup} className="flex flex-col items-center text-center hover:scale-105 transition cursor-pointer">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Free intro</h3>
              <p className="text-gray-600">Come by for a free intro. We'd love to hear about your goals, what you've been struggling with, and what you've tried before.</p>
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Personal training plan</h3>
              <p className="text-gray-600">Every workout is adapted to your level, goals, and any limitations. You always train under the guidance of professional coaches.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">See and feel results</h3>
              <p className="text-gray-600">Within weeks you'll feel stronger, more energetic, and fitter. Every three months you have a check-in with one of the coaches to adjust your plan as needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video - Jarrald */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/1qhbmRPtysU" title="CrossFit Alkmaar" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <p className="text-center text-gray-900 mt-6 text-xl font-medium italic">
            Jarrald (Kickstart participant Nov 2024): 'Was a long-time sponsor of gyms I never went to, now lost 20 kilos.'
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Choose the program that fits you</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Training for everyone at every level.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-3">28 Day Kickstart</h3>
              <p className="text-gray-600 mb-6">This is where everyone starts. In four weeks, we build a solid foundation together.</p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✓ Get stronger and fitter</li>
                <li>✓ Structure and accountability</li>
                <li>✓ Small groups (max 6)</li>
                <li>✓ Basic lifestyle advice</li>
              </ul>
              <Link href="/en/kickstart" className="block w-full text-center bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 rounded-lg transition">More info</Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-3">BUILD</h3>
              <p className="text-gray-600 mb-6">Semi-personal training in a fixed group.</p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✓ Benefits of personal training</li>
                <li>✓ In a fixed group of max 6</li>
                <li>✓ Structured schedule</li>
                <li>✓ With your regular coaches</li>
              </ul>
              <Link href="/small-group-training" className="block w-full text-center bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 rounded-lg transition">More info</Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-2xl font-bold mb-3">Group Classes</h3>
              <p className="text-gray-600 mb-6">Varied, challenging, and always scalable to your level.</p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>✓ The best coaches in Alkmaar</li>
                <li>✓ Flexible booking</li>
                <li>✓ Meet new friends</li>
                <li>✓ For all levels</li>
              </ul>
              <Link href="/groepslessen" className="block w-full text-center bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 rounded-lg transition">More info</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Card */}
      <section className="py-12 px-6 bg-gray-200">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
            <button
              onClick={openPopup}
              className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-10 text-lg rounded-lg transition cursor-pointer"
            >
              Free intro
            </button>
          </div>
        </div>
      </section>

      {/* Video - Bert */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/a2zbZIlU27Y" title="CrossFit Alkmaar" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <p className="text-center text-gray-900 mt-6 text-xl font-medium italic">
            Bert (member for 2 years): 'I have to say, I didn't expect to enjoy it as much as I do now'
          </p>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What our members say</h2>
          <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-441b4eee-fe67-40af-9775-caf184c8ed7f" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">CrossFit Alkmaar in numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <a
              href="https://www.google.com/search?q=crossfit+alkmaar#lrd=0x47cf573834f8b5b7:0x4a55c3c9c9a67e0e,1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center hover:scale-105 transition cursor-pointer"
            >
              <div className="text-5xl font-bold text-blue-900 mb-2">260+</div>
              <p className="text-gray-600">Google Reviews ⭐</p>
            </a>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">300+</div>
              <p className="text-gray-600">Active members</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">12+</div>
              <p className="text-gray-600">Years experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">35+</div>
              <p className="text-gray-600">Average age</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-900 mb-2">15K</div>
              <p className="text-gray-600">Cups of coffee/year ☕</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">I'm not fit enough to start</h3>
              <p className="text-gray-600">That's exactly why you should start. Every workout is scaled to your level.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">I don't have time to train 5x a week</h3>
              <p className="text-gray-600">You don't have to. Many members train 2-3x per week and see great results.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Am I too old to start training?</h3>
              <p className="text-gray-600">Absolutely not. Our average age is 35+. We have members from 20 to 70+ training safely.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What if I have injuries or limitations?</h3>
              <p className="text-gray-600">We adapt movements or choose alternatives. Our coaches have experience with rehabilitation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start?</h2>
          <p className="text-xl mb-8">Book a free intro. No obligations.</p>
          <button
            onClick={openPopup}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg cursor-pointer"
          >
            Free intro
          </button>
        </div>
      </section>
    </div>
  );
}
