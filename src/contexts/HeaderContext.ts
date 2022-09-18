import { createContext } from 'react';

interface HeaderContextInterface {
  mobileNavActive?: boolean;
  setMobileNavActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderContext = createContext<HeaderContextInterface>({});
