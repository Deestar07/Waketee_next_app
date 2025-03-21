'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { WakateeUserDetails } from '@/types/UserDetailsInterface';

interface WakateeFacilityOwnerInterfaceProps {
  isMobileNavOpen: boolean;
  handleOpenMobileNav: () => void;
  handleCloseMobileNav: () => void;
  userDetails: WakateeUserDetails | null;
}

const WakateeContextProps: WakateeFacilityOwnerInterfaceProps = {
  isMobileNavOpen: false,
  handleOpenMobileNav: () => {},
  handleCloseMobileNav: () => {},
  userDetails: null,
};

const WakateeContext =
  createContext<WakateeFacilityOwnerInterfaceProps>(WakateeContextProps);

export function WakateeProvider({ children }: { children: React.ReactNode }) {
  const [userDetails, setUserDetails] = useState<WakateeUserDetails | null>(
    null
  );

  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  useEffect(() => {
    const loggedInUser: string | null = localStorage.getItem('UserDetails');

    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUserDetails(user);
    }
  }, []);

  const handleOpenMobileNav = () => {
    setIsMobileNavOpen(true);
  };

  const handleCloseMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <WakateeContext.Provider
      value={{
        userDetails,
        handleCloseMobileNav,
        handleOpenMobileNav,
        isMobileNavOpen,
      }}
    >
      {children}
    </WakateeContext.Provider>
  );
}

export function useWakateeContext() {
  const context = useContext(WakateeContext);
  if (context === undefined) {
    throw new Error('useWakateeContext must be used within WakateeProvider');
  }
  return context;
}
