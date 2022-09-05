import ExchangeRelativeSelect from '../components/ExchangeRelativeSelect';
import ExchangeDateInput from '../components/ExchangeDateInput';
import ShowFavoritesButton from '../components/ShowFavoritesButton';
import DecimalPlacesSelect from '../components/DecimalPlacesSelect';
import ExchangeRateSortingMethodSelect from '../components/ExchangeRateSortingMethodSelect';
import ResetAppButton from '../components/ResetAppButton';

const Navbar = () => {
  return (
    <nav>
      <ExchangeRelativeSelect />
      <ExchangeDateInput />
      <ShowFavoritesButton />
      <DecimalPlacesSelect />
      <ExchangeRateSortingMethodSelect />
      <ResetAppButton />
    </nav>
  );
};

export default Navbar;
