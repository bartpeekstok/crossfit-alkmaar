"use client";

import Link from "next/link";

export default function KickstartBanner() {
  const maanden = [
    "januari", "februari", "maart", "april", "mei", "juni",
    "juli", "augustus", "september", "oktober", "november", "december"
  ];
  
  const huidigeMaandIndex = new Date().getMonth();
  const huidigeMaand = maanden[huidigeMaandIndex];
  const volgendeMaand = maanden[(huidigeMaandIndex + 1) % 12];

  return (
    <div className="bg-blue-900 text-white py-3 px-6 text-center">
      <p className="text-sm md:text-base">
        <span className="font-semibold">De Kickstart van {huidigeMaand} zit vol!</span>
        {" "}
        <Link 
          href="/kickstart" 
          className="underline hover:text-blue-200 transition font-semibold"
        >
          Claim je plek voor {volgendeMaand} →
        </Link>
      </p>
    </div>
  );
}