"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type Variant = "kennismaking" | "tarieven" | "kickstart";

type ModalState = {
  isOpen: boolean;
  variant: Variant;
  source: string;
  section: string;
  extraFields: Record<string, string>;
};

type LeadModalContextValue = ModalState & {
  open: (opts: {
    source?: string;
    section?: string;
    variant?: Variant;
    extraFields?: Record<string, string>;
  }) => void;
  close: () => void;
};

const LeadModalContext = createContext<LeadModalContextValue | null>(null);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ModalState>({
    isOpen: false,
    variant: "kennismaking",
    source: "",
    section: "",
    extraFields: {},
  });

  const open: LeadModalContextValue["open"] = ({ source, section, variant, extraFields }) => {
    setState({
      isOpen: true,
      variant: variant ?? "kennismaking",
      source: source ?? "",
      section: section ?? "",
      extraFields: extraFields ?? {},
    });
  };

  const close = () => setState((s) => ({ ...s, isOpen: false }));

  return (
    <LeadModalContext.Provider value={{ ...state, open, close }}>
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const ctx = useContext(LeadModalContext);
  if (!ctx) throw new Error("useLeadModal must be used within LeadModalProvider");
  return ctx;
}
