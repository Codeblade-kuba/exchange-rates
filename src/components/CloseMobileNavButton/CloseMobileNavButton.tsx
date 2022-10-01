import { useContext } from 'react';

import HeaderContext from '../../contexts/HeaderContext';

const CloseMobileNavButton = (): JSX.Element => {
  const { setMobileNavActive } = useContext(HeaderContext);

  const toggleMobileNav = () => {
    setMobileNavActive((prev) => !prev);
  };

  return (
    <button
      className="mobile-nav-close"
      onClick={toggleMobileNav}
      title="Close mobile navigation"
    ></button>
  );
};

export default CloseMobileNavButton;
