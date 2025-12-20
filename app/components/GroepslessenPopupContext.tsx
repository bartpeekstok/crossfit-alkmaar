'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface GroepslessenPopupContextType {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const GroepslessenPopupContext = createContext<GroepslessenPopupContextType | undefined>(undefined);

export function GroepslessenPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

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