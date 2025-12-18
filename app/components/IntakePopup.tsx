"use client";

import { usePopup } from "./PopupContext";

export default function IntakePopup() {
  const { isOpen, closePopup } = usePopup();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={closePopup}
      ></div>
      
      {/* Popup */}
      <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full mx-4 z-[101] overflow-hidden">
        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 text-white hover:text-gray-200 transition z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Blue header */}
        <div style={{ backgroundColor: '#1e3a8a', padding: '20px 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff', textTransform: 'uppercase', margin: 0 }}>
            Laat hier je gegevens achter
          </h2>
          <p style={{ color: '#ffffff', marginTop: '4px', marginBottom: 0 }}>
            We nemen snel contact met je op
          </p>
        </div>

        {/* GHL Form Embed */}
        <div style={{ height: '320px' }}>
          <iframe
            src="https://kilo.gymleadmachine.com/widget/form/peswXaJSSZHHMPxZQ4es"
            style={{ width: '100%', height: '100%', border: 'none' }}
            id="popup-peswXaJSSZHHMPxZQ4es"
            title="Website Form"
          />
        </div>


      </div>
    </div>
  );
}