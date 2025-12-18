'use client';

import { useKickstartPopup } from './KickstartPopupContext';

interface KickstartButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function KickstartButton({ children, className }: KickstartButtonProps) {
  const { openPopup } = useKickstartPopup();

  return (
    <button
      onClick={openPopup}
      className={className}
    >
      {children}
    </button>
  );
}