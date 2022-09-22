import React, { useState } from 'react';

import './index.scss';
import { HeaderContext } from '../../contexts/HeaderContext';
import Container from '../Container';
import Navbar from '../Navbar';
import NavHamburgerButton from '../../components/NavHamburgerButton';
import logo from '../../assets/images/logo.svg';

const Header = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const getHeaderClassNames = () => {
    let className = 'main-header';
    if (mobileNavActive) className += ' mobile-nav-open';
    return className;
  };

  return (
    <>
      <div className="skip-links">
        <a className="skip-link" href="#content">
          Go to content
        </a>
        <a className="skip-link" href="#footer">
          Go to footer
        </a>
      </div>
      <HeaderContext.Provider
        value={{
          mobileNavActive,
          setMobileNavActive,
        }}
      >
        <header className={getHeaderClassNames()}>
          <Container>
            <div className="main-header-wrapper">
              <h1 className="main-header-title">
                <a href="/">
                  <img
                    className="main-header-logo"
                    src={logo}
                    alt="Logo of Exchange Rates"
                  />
                </a>
              </h1>
              <NavHamburgerButton />
              <Navbar />
            </div>
          </Container>
        </header>
      </HeaderContext.Provider>
    </>
  );
};

export default Header;
