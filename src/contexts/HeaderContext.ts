import { createContext } from 'react';

import HeaderContextInterface from './types/HeaderContext';

const HeaderContext = createContext<HeaderContextInterface>({
  mobileNavActive: false,
  setMobileNavActive: (state) => {},
});

export default HeaderContext;
