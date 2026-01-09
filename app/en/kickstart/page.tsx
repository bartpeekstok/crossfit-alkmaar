"use client";

import { useKickstartPopup } from "../../components/KickstartPopupContext";

export default function KickstartPageEN() {
  const { openPopup } = useKickstartPopup();

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const currentMonthIndex = new Date().getMonth();
  const nextMonth = months[(currentMonthIndex + 1) % 12];

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero */}
      <section
        className="relative text-white py-20 px-6 min-h-[500px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/images/kickstart-header.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            28 Day Kickstart
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            The perfect start to a fitter and stronger life. Build a solid foundation in 4 weeks.
          </p>
          <button
            onClick={openPopup}
            className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Claim your spot for {nextMonth}
          </button>
        </div>
      </section>

      {/* What is the Kickstart */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">What is the 28 Day Kickstart?</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4">
              The Kickstart is specially designed for busy people who want to (re)start training but don't know where to begin. We make training fun, safe, and effective. This way, we build a solid foundation to continue building on.
            </p>
            <p className="mb-4">
              You train in a small group of maximum 6 people, so you get personal attention. We take the time to explain and practice everything properly.
            </p>
            <p>
              After the Kickstart, you can confidently move on to our BUILD program or group classes. During a closing consultation, we'll look together at what suits you best.
            </p>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/esc-52ZNdPY"
              title="28-Day Kickstart"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-center text-gray-900 mt-6 text-xl font-medium italic">
            Steven, Kickstart participant November 2024: 'Posture and technique are very important, and the trainers here are incredibly good at that.'
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What you get</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ 12 sessions in 4 weeks</h3>
              <p className="text-gray-600">Three training sessions per week at fixed times, so it fits your schedule.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Small groups (max 6)</h3>
              <p className="text-gray-600">Maximum 6 people per group for personal attention.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ A solid foundation</h3>
              <p className="text-gray-600">You'll learn the basics of strength and conditioning training and discover that working out is fun!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">✓ Basic lifestyle advice</h3>
              <p className="text-gray-600">Besides training, you'll get tips on nutrition and recovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start in {nextMonth}</h2>
          <p className="text-xl mb-8">
            The {nextMonth} Kickstart still has spots available.
          </p>
          <button
            onClick={openPopup}
            className="inline-block bg-white hover:bg-gray-100 text-blue-900 font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Sign up
          </button>
        </div>
      </section>
    </div>
  );
}
