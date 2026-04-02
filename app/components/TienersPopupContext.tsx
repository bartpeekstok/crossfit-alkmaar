'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { trackPopupOpen, trackPopupClose } from '../lib/analytics';

interface TienersPopupContextType {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const TienersPopupContext = createContext<TienersPopupContextType | undefined>(undefined);

export function TienersPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => { setIsOpen(true); trackPopupOpen('tieners'); };
  const closePopup = () => { setIsOpen(false); trackPopupClose('tieners'); };

  return (
    <TienersPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </TienersPopupContext.Provider>
  );
}

export function useTienersPopup() {
  const context = useContext(TienersPopupContext);
  if (context === undefined) {
    throw new Error('useTienersPopup must be used within a TienersPopupProvider');
  }
  return context;
}
