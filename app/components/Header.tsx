"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePopup } from "./PopupContext";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openPopup } = usePopup();

  return (
    <>
      {/* Fixed header - direct onder de banner */}
      <header className="fixed top-[72px] md:top-[88px] left-0 right-0 bg-gray-900 text-white py-2 md:py-3 px-4 md:px-6 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="CrossFit Alkmaar"
              width={180}
              height={60}
              className="h-10 md:h-14 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Programma's Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="hover:text-gray-300 transition flex items-center gap-1">
                Programma's
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {dropdownOpen && (
                <div className="absolute top-full left-0 bg-gray-900 py-2 min-w-[200px] shadow-lg">
                  <Link href="/kickstart" className="block px-4 py-2 text-sm hover:bg-gray-800 transition">
                    28 Day Kickstart
                  </Link>
                  <Link href="/personal-training" className="block px-4 py-2 text-sm hover:bg-gray-800 transition">
                    Personal Training
                  </Link>
                  <Link href="/small-group-training" className="block px-4 py-2 text-sm hover:bg-gray-800 transition">
                    Small Group Training
                  </Link>
                  <Link href="/groepslessen" className="block px-4 py-2 text-sm hover:bg-gray-800 transition">
                    Groepslessen
                  </Link>
                  <Link href="/voedingsadvies" className="block px-4 py-2 text-sm hover:bg-gray-800 transition">
                    Voedingsadvies
                  </Link>
                </div>
              )}
            </div>

            <Link href="/blog" className="hover:text-gray-300 transition">Blog</Link>
            <Link href="/over-ons" className="hover:text-gray-300 transition">Over ons</Link>
            <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
            <button
              onClick={openPopup}
              className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Gratis intake
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            {/* Programma's Dropdown Mobile */}
            <div className="mb-2">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full flex items-center justify-between py-2 hover:text-gray-300 transition"
              >
                Programma's
                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {dropdownOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link href="/kickstart" className="block py-1 text-sm text-gray-300 hover:text-white transition" onClick={() => setMobileMenuOpen(false)}>
                    28 Day Kickstart
                  </Link>
                  <Link href="/personal-training" className="block py-1 text-sm text-gray-300 hover:text-white transition" onClick={() => setMobileMenuOpen(false)}>
                    Personal Training
                  </Link>
                  <Link href="/small-group-training" className="block py-1 text-sm text-gray-300 hover:text-white transition" onClick={() => setMobileMenuOpen(false)}>
                    Small Group Training
                  </Link>
                  <Link href="/groepslessen" className="block py-1 text-sm text-gray-300 hover:text-white transition" onClick={() => setMobileMenuOpen(false)}>
                    Groepslessen
                  </Link>
                  <Link href="/voedingsadvies" className="block py-1 text-sm text-gray-300 hover:text-white transition" onClick={() => setMobileMenuOpen(false)}>
                    Voedingsadvies
                  </Link>
                </div>
              )}
            </div>

            <Link href="/blog" className="block py-2 hover:text-gray-300 transition" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link href="/over-ons" className="block py-2 hover:text-gray-300 transition" onClick={() => setMobileMenuOpen(false)}>Over ons</Link>
            <Link href="/contact" className="block py-2 hover:text-gray-300 transition" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            
            <button
              onClick={() => {
                openPopup();
                setMobileMenuOpen(false);
              }}
              className="w-full mt-4 bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 px-4 rounded-lg transition"
            >
              Gratis intake
            </button>
          </nav>
        )}
      </header>
      
      {/* Spacer om ruimte te maken voor de fixed header */}
      <div className="h-[56px] md:h-[80px]"></div>
    </>
  );
}