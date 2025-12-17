import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Socials */}
        <div>
          <div className="flex gap-4 items-center mb-4">
            <Image
              src="/images/logo.png"
              alt="CrossFit Alkmaar"
              width={80}
              height={80}
              className="h-16 w-auto"
            />
            <Image
              src="/images/crossfit-logo.png"
              alt="CrossFit"
              width={80}
              height={80}
              className="h-16 w-auto opacity-70"
            />
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://www.instagram.com/crossfitalkmaar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/crossfitalkmaar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Openingstijden */}
        <div>
          <h3 className="font-bold text-lg mb-4">OPENINGSTIJDEN</h3>
          <div className="space-y-1 text-gray-300 text-sm">
            <div className="flex justify-between max-w-[180px]">
              <span>Ma</span>
              <span>06:30 - 22:00</span>
            </div>
            <div className="flex justify-between max-w-[180px]">
              <span>Di</span>
              <span>06:30 - 21:00</span>
            </div>
            <div className="flex justify-between max-w-[180px]">
              <span>Wo</span>
              <span>06:30 - 21:00</span>
            </div>
            <div className="flex justify-between max-w-[180px]">
              <span>Do</span>
              <span>06:30 - 21:00</span>
            </div>
            <div className="flex justify-between max-w-[180px]">
              <span>Vr</span>
              <span>06:30 - 21:00</span>
            </div>
            <div className="flex justify-between max-w-[180px]">
              <span>Za</span>
              <span>08:00 - 12:30</span>
            </div>
            <div className="flex justify-between max-w-[180px]">
              <span>Zo</span>
              <span>08:00 - 12:30</span>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">CONTACT</h3>
          <div className="space-y-3 text-gray-300">
            <div>
              <p className="text-blue-400 text-sm">TELEFOON</p>
              <a href="tel:+31970102574​79" className="hover:text-white transition">+31 970 102 57479</a>
            </div>
            <div>
              <p className="text-blue-400 text-sm">EMAIL</p>
              <a href="mailto:info@crossfitalkmaar.nl" className="hover:text-white transition">info@crossfitalkmaar.nl</a>
            </div>
          </div>
        </div>

        {/* Locatie */}
        <div>
          <h3 className="font-bold text-lg mb-4">LOCATIE</h3>
          <div className="text-gray-300">
            <p className="text-blue-400 text-sm">ADRES</p>
            <p>CrossFit Alkmaar</p>
            <p>Phoenixstraat 33</p>
            <p>1812 PP Alkmaar</p>
            <a 
              href="https://maps.google.com/?q=Phoenixstraat+33+1812+PP+Alkmaar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block"
            >
              Bekijk op Google Maps →
            </a>
          </div>
        </div>
      </div>

      {/* Copyright & Privacy */}
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} CrossFit Alkmaar. Alle rechten voorbehouden.</p>
        <Link 
          href="/privacy" 
          className="text-gray-500 hover:text-white transition mt-2 inline-block"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}