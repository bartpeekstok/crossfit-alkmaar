"use client";

import { createContext, useContext, useState, ReactNode } from "react";

const PopupContext = createContext<{
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}>({
  isOpen: false,
  openPopup: () => {},
  closePopup: () => {},
});

export function PopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PopupContext.Provider
      value={{
        isOpen,
        openPopup: () => setIsOpen(true),
        closePopup: () => setIsOpen(false),
      }}
    >
      {children}
      
      {/* Popup - helemaal onderaan, boven ALLES */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
          <div className="relative w-full max-w-lg bg-blue-900 rounded-lg overflow-hidden shadow-2xl">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-blue-900 text-white text-center py-6 px-8">
              <h2 className="text-2xl font-bold mb-2">VUL HIER JE GEGEVENS IN OM VAN START TE GAAN</h2>
              <p className="text-gray-300">Neem de eerste stap op weg naar jouw fitness doelen</p>
            </div>
            <div className="bg-white p-6">
              <iframe src="https://kilo.gymleadmachine.com/widget/form/peswXaJSSZHHMPxZQ4es" style={{ width: "100%", height: "350px", border: "none" }} title="Website Form"></iframe>
            </div>
          </div>
        </div>
      )}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  return useContext(PopupContext);
}