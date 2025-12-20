'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface PersonalTrainingPopupContextType {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const PersonalTrainingPopupContext = createContext<PersonalTrainingPopupContextType | undefined>(undefined);

export function PersonalTrainingPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <PersonalTrainingPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </PersonalTrainingPopupContext.Provider>
  );
}

export function usePersonalTrainingPopup() {
  const context = useContext(PersonalTrainingPopupContext);
  if (context === undefined) {
    throw new Error('usePersonalTrainingPopup must be used within a PersonalTrainingPopupProvider');
  }
  return context;
}