import { useState } from 'react';

import HeaderContext from '../../contexts/HeaderContext';
import Container from '../../components/ui/Container';
import SkipLinks from './SkipLinks';
import Logo from '../../components/ui/Logo';
import Navbar from '../Navbar';
import NavHamburgerButton from '../Navbar/NavHamburgerButton';

const Header = (): JSX.Element => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const getHeaderClassNames = () => {
    let className = 'main-header';
    if (mobileNavActive) className += ' mobile-nav-open';
    return className;
  };

  return (
    <HeaderContext.Provider
      value={{
        mobileNavActive,
        setMobileNavActive,
      }}
    >
      <SkipLinks />
      <header className={getHeaderClassNames()}>
        <Container>
          <div className="main-header-wrapper">
            <Logo />
            <Navbar />
          </div>
        </Container>
      </header>
    </HeaderContext.Provider>
  );
};

export default Header;
