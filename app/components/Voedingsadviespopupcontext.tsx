'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface VoedingsadviesPopupContextType {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const VoedingsadviesPopupContext = createContext<VoedingsadviesPopupContextType | undefined>(undefined);

export function VoedingsadviesPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <VoedingsadviesPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </VoedingsadviesPopupContext.Provider>
  );
}

export function useVoedingsadviesPopup() {
  const context = useContext(VoedingsadviesPopupContext);
  if (context === undefined) {
    throw new Error('useVoedingsadviesPopup must be used within a VoedingsadviesPopupProvider');
  }
  return context;
}