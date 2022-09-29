import { createContext } from 'react';

import HeaderContextInterface from './types/HeaderContextInterface';

const HeaderContext = createContext<HeaderContextInterface>({
  mobileNavActive: false,
  setMobileNavActive: (state) => {},
});

export default HeaderContext;
