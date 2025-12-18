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
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 z-[101]" style={{ height: '400px' }}>
        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* GHL Form Embed */}
        <iframe
          src="https://kilo.gymleadmachine.com/widget/form/peswXaJSSZHHMPxZQ4es"
          style={{ width: '100%', height: '100%', border: 'none', borderRadius: '7px' }}
          id="popup-peswXaJSSZHHMPxZQ4es"
          title="Website Form"
        />
      </div>
    </div>
  );
}