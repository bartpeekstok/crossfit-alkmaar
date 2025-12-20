'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface KickstartFormPopupContextType {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const KickstartFormPopupContext = createContext<KickstartFormPopupContextType | undefined>(undefined);

export function KickstartFormPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <KickstartFormPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </KickstartFormPopupContext.Provider>
  );
}

export function useKickstartFormPopup() {
  const context = useContext(KickstartFormPopupContext);
  if (context === undefined) {
    throw new Error('useKickstartFormPopup must be used within a KickstartFormPopupProvider');
  }
  return context;
}