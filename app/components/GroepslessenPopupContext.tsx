'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { trackPopupOpen, trackPopupClose } from '../lib/analytics';

interface GroepslessenPopupContextType {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const GroepslessenPopupContext = createContext<GroepslessenPopupContextType | undefined>(undefined);

export function GroepslessenPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => { setIsOpen(true); trackPopupOpen('groepslessen'); };
  const closePopup = () => { setIsOpen(false); trackPopupClose('groepslessen'); };

  return (
    <GroepslessenPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </GroepslessenPopupContext.Provider>
  );
}

export function useGroepslessenPopup() {
  const context = useContext(GroepslessenPopupContext);
  if (context === undefined) {
    throw new Error('useGroepslessenPopup must be used within a GroepslessenPopupProvider');
  }
  return context;
}