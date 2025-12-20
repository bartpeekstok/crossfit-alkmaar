'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface SmallGroupPopupContextType {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const SmallGroupPopupContext = createContext<SmallGroupPopupContextType | undefined>(undefined);

export function SmallGroupPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <SmallGroupPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </SmallGroupPopupContext.Provider>
  );
}

export function useSmallGroupPopup() {
  const context = useContext(SmallGroupPopupContext);
  if (context === undefined) {
    throw new Error('useSmallGroupPopup must be used within a SmallGroupPopupProvider');
  }
  return context;
}