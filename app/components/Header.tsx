"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePopup } from "./PopupContext";

export default function Header() {
  const [programmasOpen, setProgrammasOpen] = useState(false);
  const [meerInfoOpen, setMeerInfoOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openPopup } = usePopup();

  return (
    <header className="bg-[#1a1a2e] text-white py-4 px-6 relative z-40">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/cfa-logo.png"
            alt="CrossFit Alkmaar"
            width={80}
            height={80}
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Meer Info Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMeerInfoOpen(true)}
            onMouseLeave={() => setMeerInfoOpen(false)}
          >
            <button className="flex items-center hover:text-gray-300 transition">
              Meer info
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {meerInfoOpen && (
              <div className="absolute top-full left-0 bg-[#1a1a2e] py-2 min-w-[200px] shadow-lg">
                <Link href="/rooster" className="block px-4 py-2 hover:bg-[#2a2a4e] transition">
                  Rooster
                </Link>
                <Link href="/tarieven" className="block px-4 py-2 hover:bg-[#2a2a4e] transition">
                  Tarieven
                </Link>
                <Link href="/onze-leden" className="block px-4 py-2 hover:bg-[#2a2a4e] transition">
                  Onze leden
                </Link>
                <Link href="/vacatures" className="block px-4 py-2 hover:bg-[#2a2a4e] transition">
                  Vacatures
                </Link>
              </div>
            )}
          </div>

          {/* Programma's Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProgrammasOpen(true)}
            onMouseLeave={() => setProgrammasOpen(false)}
          >
            <button className="flex items-center hover:text-gray-300 transition">
              Programma's
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {programmasOpen && (
              <div className="absolute top-full left-0 bg-[#1a1a2e] py-2 min-w-[200px] shadow-lg">
                <Link href="/kickstart" className="block px-4 py-2 hover:bg-[#2a2a4e] transition">
                  28 Days Kickstart
                </Link>
                <Link href="/groepslessen" className="block px-4 py-2 hover:bg-[#2a2a4e] transition">
                  Groepslessen
                </Link>
                <Link href="/personal-training" className="block px-4 py-2 hover:bg-[#2a2a4e] transition">
                  Personal Training
                </Link>
                <Link href="/small-group-training" className="block px-4 py-2 hover:bg-[#2a2a4e] transition">
                  Small Group Training
                </Link>
                <Link href="/voedingsadvies" className="block px-4 py-2 hover:bg-[#2a2a4e] transition">
                  Voedingsadvies
                </Link>
              </div>
            )}
          </div>

          <Link href="/blog" className="hover:text-gray-300 transition">
            Blog
          </Link>
          <button
            onClick={openPopup}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
          >
            Gratis intake
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-2">
            {/* Meer Info Mobile */}
            <button
              onClick={() => setMeerInfoOpen(!meerInfoOpen)}
              className="flex items-center justify-between px-4 py-2 hover:bg-[#2a2a4e]"
            >
              Meer info
              <svg className={`w-4 h-4 transition-transform ${meerInfoOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {meerInfoOpen && (
              <div className="pl-4 flex flex-col space-y-2">
                <Link href="/rooster" className="px-4 py-2 hover:bg-[#2a2a4e]">Rooster</Link>
                <Link href="/tarieven" className="px-4 py-2 hover:bg-[#2a2a4e]">Tarieven</Link>
                <Link href="/onze-leden" className="px-4 py-2 hover:bg-[#2a2a4e]">Onze leden</Link>
                <Link href="/vacatures" className="px-4 py-2 hover:bg-[#2a2a4e]">Vacatures</Link>
              </div>
            )}

            {/* Programma's Mobile */}
            <button
              onClick={() => setProgrammasOpen(!programmasOpen)}
              className="flex items-center justify-between px-4 py-2 hover:bg-[#2a2a4e]"
            >
              Programma's
              <svg className={`w-4 h-4 transition-transform ${programmasOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {programmasOpen && (
              <div className="pl-4 flex flex-col space-y-2">
                <Link href="/kickstart" className="px-4 py-2 hover:bg-[#2a2a4e]">28 Days Kickstart</Link>
                <Link href="/groepslessen" className="px-4 py-2 hover:bg-[#2a2a4e]">Groepslessen</Link>
                <Link href="/personal-training" className="px-4 py-2 hover:bg-[#2a2a4e]">Personal Training</Link>
                <Link href="/small-group-training" className="px-4 py-2 hover:bg-[#2a2a4e]">Small Group Training</Link>
                <Link href="/voedingsadvies" className="px-4 py-2 hover:bg-[#2a2a4e]">Voedingsadvies</Link>
              </div>
            )}

            <Link href="/blog" className="px-4 py-2 hover:bg-[#2a2a4e]">Blog</Link>
            <button
              onClick={openPopup}
              className="mx-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
            >
              Gratis intake
            </button>
          </div>
        </div>
      )}
    </header>
  );
}