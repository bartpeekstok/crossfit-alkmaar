"use client";

import Link from "next/link";

export default function KickstartBanner() {
  const maanden = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
  const huidigeMaandIndex = new Date().getMonth();
  const huidigeMaand = maanden[huidigeMaandIndex];
  const volgendeMaand = maanden[(huidigeMaandIndex + 1) % 12];

  return (
    <div className="bg-blue-700 text-white py-3 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
        <p className="text-sm sm:text-base">
          <span className="font-semibold">🔥 De Kickstart van {huidigeMaand} zit vol!</span>
        </p>
        <Link href="/kickstart" className="bg-white text-blue-700 hover:bg-gray-100 font-semibold text-sm px-4 py-2 rounded-lg transition">
          Claim je plek voor {volgendeMaand} →
        </Link>
      </div>
    </div>
  );
}