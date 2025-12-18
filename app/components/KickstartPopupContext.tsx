'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface KickstartPopupContextType {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const KickstartPopupContext = createContext<KickstartPopupContextType | undefined>(undefined);

export function KickstartPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <KickstartPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </KickstartPopupContext.Provider>
  );
}

export function useKickstartPopup() {
  const context = useContext(KickstartPopupContext);
  if (context === undefined) {
    throw new Error('useKickstartPopup must be used within a KickstartPopupProvider');
  }
  return context;
}