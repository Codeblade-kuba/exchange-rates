import { useContext } from 'react';

import './index.scss';

import HeaderContext from '../../contexts/HeaderContext';

const NavHamburgerButton = () => {
  const { setMobileNavActive } = useContext(HeaderContext);

  const toggleMobileNav = () => {
    if (!setMobileNavActive) return;
    setMobileNavActive((prev) => !prev);
  };

  return (
    <button
      className="nav-hamburger-button"
      onClick={toggleMobileNav}
      title="Open mobile navigation"
    >
      <span className="nav-hamburger-button__dash"></span>
    </button>
  );
};

export default NavHamburgerButton;
