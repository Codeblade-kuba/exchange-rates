import React, { useState } from 'react';

import './index.scss';
import { HeaderContext } from '../../contexts/HeaderContext';
import Container from '../Container';
import Navbar from '../Navbar';
import NavHamburgerButton from '../../components/NavHamburgerButton';

const Header = () => {
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
      <header className={getHeaderClassNames()}>
        <Container>
          <div className="main-header-wrapper">
            <h1 className="main-header-title">Exchange Rate App</h1>
            <NavHamburgerButton />
            <Navbar />
          </div>
        </Container>
      </header>
    </HeaderContext.Provider>
  );
};

export default Header;
