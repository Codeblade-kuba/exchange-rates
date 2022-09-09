import ExchangeRelativeSelect from '../components/ExchangeRelativeSelect';
import ExchangeDateInput from '../components/ExchangeDateInput';
import ShowFavoritesButton from '../components/ShowFavoritesButton';
import DecimalPlacesSelect from '../components/DecimalPlacesSelect';
import RatesSortingMethodSelect from '../components/RatesSortingMethodSelect';
import ResetButton from '../components/ResetButton';

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
    <nav>
      <ul>
        {componentsToIncludeInNav.map((component, index) => (
          <li key={index}>{component}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
