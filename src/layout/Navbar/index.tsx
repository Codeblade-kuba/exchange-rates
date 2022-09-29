import React from 'react';

import ExchangeRelativeSelect from '../../components/ExchangeRelativeSelect';
import ExchangeDateInput from '../../components/ExchangeDateInput';
import ShowFavoritesButton from '../../components/ShowFavoritesButton';
import DecimalPlacesSelect from '../../components/DecimalPlacesSelect';
import RatesSortingMethodSelect from '../../components/RatesSortingMethodSelect';
import ResetButton from '../../components/ResetButton';
import CloseMobileNavButton from '../../components/CloseMobileNavButton';

const componentsToIncludeInNav = [
  <ExchangeRelativeSelect />,
  <ExchangeDateInput />,
  <ShowFavoritesButton />,
  <DecimalPlacesSelect />,
  <RatesSortingMethodSelect />,
  <ResetButton />,
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <CloseMobileNavButton />
      <ul className="navbar-list">
        {componentsToIncludeInNav.map((component, index) => (
          <li className="navbar-item" key={index}>
            {component}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
