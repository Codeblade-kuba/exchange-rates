import { useState } from 'react';

import HeaderContext from '../../contexts/HeaderContext';
import Container from '../../components/ui/Container';
import SkipLinks from './SkipLinks';
import Logo from '../../components/ui/Logo';
import Navbar from '../Navbar';

const Header = (): JSX.Element => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  return (
    <HeaderContext.Provider
      value={{
        mobileNavActive,
        setMobileNavActive,
      }}
    >
      <SkipLinks />
      <header className="main-header">
        <Container>
          <div className="main-header__wrapper">
            <Logo />
            <Navbar />
          </div>
        </Container>
      </header>
    </HeaderContext.Provider>
  );
};

export default Header;
