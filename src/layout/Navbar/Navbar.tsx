import NavHamburgerButton from './NavHamburgerButton';
import ExchangeRelativeSelect from '../../components/appSettings/ExchangeRelativeSelect';
import ExchangeDateInput from '../../components/appSettings/ExchangeDateInput';
import ShowFavoritesButton from '../../components/appSettings/ShowFavoritesButton';
import DecimalPlacesSelect from '../../components/appSettings/DecimalPlacesSelect';
import RatesSortingMethodSelect from '../../components/appSettings/RatesSortingMethodSelect';
import ResetButton from '../../components/appSettings/ResetButton';
import CloseMobileNavButton from './CloseMobileNavButton';

const navbarComponents = [
  <ExchangeRelativeSelect />,
  <ExchangeDateInput />,
  <ShowFavoritesButton />,
  <DecimalPlacesSelect />,
  <RatesSortingMethodSelect />,
  <ResetButton />,
];

const Navbar = (): JSX.Element => {
  return (
    <>
      <NavHamburgerButton />
      <nav className="navbar">
        <CloseMobileNavButton />
        <ul className="navbar-list">
          {navbarComponents.map((component, index) => (
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
