'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface PricingPopupContextType {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const PricingPopupContext = createContext<PricingPopupContextType | undefined>(undefined);

export function PricingPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <PricingPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </PricingPopupContext.Provider>
  );
}

export function usePricingPopup() {
  const context = useContext(PricingPopupContext);
  if (context === undefined) {
    throw new Error('usePricingPopup must be used within a PricingPopupProvider');
  }
  return context;
}