'use client';

import { useEffect } from 'react';
import { useKickstartFormPopup } from './KickstartFormPopupContext';

export default function KickstartFormPopup() {
  const { isOpen, closePopup } = useKickstartFormPopup();

  // Load GHL form script when popup opens
  useEffect(() => {
    if (isOpen) {
      // Check if script already exists
      const existingScript = document.querySelector('script[src="https://kilo.gymleadmachine.com/js/form_embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://kilo.gymleadmachine.com/js/form_embed.js';
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePopup();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closePopup]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) closePopup();
      }}
    >
      <div className="bg-white rounded-2xl max-w-lg w-full relative shadow-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            aria-label="Sluiten"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Meld je aan voor de Kickstart
            </h2>
            <p className="text-gray-600 mt-2">
              Vul je gegevens in en we nemen contact op
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 180px)' }}>
          <iframe
            src="https://kilo.gymleadmachine.com/widget/form/4eYltPO80r1rhnhNNrqp"
            style={{ width: '100%', height: '340px', border: 'none', borderRadius: '7px' }}
            id="popup-4eYltPO80r1rhnhNNrqp"
            data-layout="{'id':'POPUP'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="28 day kickstart form"
            data-height="340"
            data-layout-iframe-id="popup-4eYltPO80r1rhnhNNrqp"
            data-form-id="4eYltPO80r1rhnhNNrqp"
            title="28 day kickstart form"
          />
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
          <p className="text-center text-sm text-gray-500">
            4 weken • 2x per week • Kleine groepen
          </p>
        </div>
      </div>
    </div>
  );
}