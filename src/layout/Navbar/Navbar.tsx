import { useContext, useEffect } from 'react';

import HeaderContext from '../../contexts/HeaderContext';
import NavHamburgerButton from './NavHamburgerButton';
import CloseMobileNavButton from './CloseMobileNavButton';
import NavbarItems from './data/NavbarItems';

const Navbar = (): JSX.Element => {
  const { mobileNavActive } = useContext(HeaderContext);

  useEffect(() => {
    const body = document.querySelector('body')!;
    if (mobileNavActive) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }, [mobileNavActive]);

  const getNavbarClasses = () => {
    let classes = 'navbar';
    if (mobileNavActive) classes += ' navbar--active';
    return classes;
  };

  return (
    <>
      <NavHamburgerButton />
      <nav className={getNavbarClasses()}>
        <CloseMobileNavButton />
        <ul className="navbar-list">
          {NavbarItems.map((component, index) => (
            <li className="navbar-item" key={index}>
              {component}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
