"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aanbodOpen, setAanbodOpen] = useState(false);

  return (
    <>
      {/* Spacer for banner + header */}
      <div className="h-[124px] md:h-[132px]"></div>
      
      <header className="fixed top-[44px] md:top-[52px] left-0 right-0 z-[60] bg-gray-900 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl md:text-2xl font-bold whitespace-nowrap">CrossFit Alkmaar</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* Aanbod Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setAanbodOpen(!aanbodOpen)}
                  className="flex items-center hover:text-gray-300 transition font-medium"
                >
                  Aanbod
                  <svg
                    className={`ml-1 w-4 h-4 transition-transform ${aanbodOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {aanbodOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-[100]">
                    <Link
                      href="/groepslessen"
                      className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition"
                      onClick={() => setAanbodOpen(false)}
                    >
                      <span className="font-medium">Groepslessen</span>
                      <span className="block text-sm text-gray-500">Samen trainen in een groep</span>
                    </Link>
                    <Link
                      href="/personal-training"
                      className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition"
                      onClick={() => setAanbodOpen(false)}
                    >
                      <span className="font-medium">Personal Training</span>
                      <span className="block text-sm text-gray-500">1-op-1 begeleiding</span>
                    </Link>
                    <Link
                      href="/small-group-training"
                      className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition"
                      onClick={() => setAanbodOpen(false)}
                    >
                      <span className="font-medium">Small Group Training</span>
                      <span className="block text-sm text-gray-500">Training in kleine groepen</span>
                    </Link>
                    <Link
                      href="/voedingsadvies"
                      className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition"
                      onClick={() => setAanbodOpen(false)}
                    >
                      <span className="font-medium">Voedingsadvies</span>
                      <span className="block text-sm text-gray-500">Persoonlijk voedingsplan</span>
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/over-ons" className="hover:text-gray-300 transition font-medium">
                Over Ons
              </Link>
              <Link href="/tarieven" className="hover:text-gray-300 transition font-medium">
                Tarieven
              </Link>
              <Link href="/rooster" className="hover:text-gray-300 transition font-medium">
                Rooster
              </Link>
              <Link href="/contact" className="hover:text-gray-300 transition font-medium">
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-700">
              <nav className="flex flex-col space-y-2">
                {/* Aanbod Section */}
                <div className="py-2">
                  <span className="block px-2 text-gray-400 text-sm font-medium mb-2">Aanbod</span>
                  <Link
                    href="/groepslessen"
                    className="block py-2 px-4 hover:bg-gray-800 rounded-lg transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Groepslessen
                  </Link>
                  <Link
                    href="/personal-training"
                    className="block py-2 px-4 hover:bg-gray-800 rounded-lg transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Personal Training
                  </Link>
                  <Link
                    href="/small-group-training"
                    className="block py-2 px-4 hover:bg-gray-800 rounded-lg transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Small Group Training
                  </Link>
                  <Link
                    href="/voedingsadvies"
                    className="block py-2 px-4 hover:bg-gray-800 rounded-lg transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Voedingsadvies
                  </Link>
                </div>

                <div className="border-t border-gray-700 pt-2">
                  <Link
                    href="/over-ons"
                    className="block py-2 px-2 hover:bg-gray-800 rounded-lg transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Over Ons
                  </Link>
                  <Link
                    href="/tarieven"
                    className="block py-2 px-2 hover:bg-gray-800 rounded-lg transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Tarieven
                  </Link>
                  <Link
                    href="/rooster"
                    className="block py-2 px-2 hover:bg-gray-800 rounded-lg transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Rooster
                  </Link>
                  <Link
                    href="/contact"
                    className="block py-2 px-2 hover:bg-gray-800 rounded-lg transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}