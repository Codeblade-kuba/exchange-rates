import ExchangeRelativeSelect from '../components/ExchangeRelativeSelect';
import ExchangeDateInput from '../components/ExchangeDateInput';
import ShowFavoritesButton from '../components/ShowFavoritesButton';
import DecimalPlacesSelect from '../components/DecimalPlacesSelect';
import ExchangeRateSortingMethodSelect from '../components/ExchangeRateSortingMethodSelect';
import ResetAppButton from '../components/ResetAppButton';

const componentsToIncludeInNav = [
  <ExchangeRelativeSelect />,
  <ExchangeDateInput />,
  <ShowFavoritesButton />,
  <DecimalPlacesSelect />,
  <ExchangeRateSortingMethodSelect />,
  <ResetAppButton />,
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
