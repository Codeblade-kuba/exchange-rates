import ExchangeRelativeSelect from '../components/ExchangeRelativeSelect';
import ExchangeDateInput from '../components/ExchangeDateInput';
import ShowFavoritesButton from '../components/ShowFavoritesButton';
import DecimalPlacesInput from '../components/DecimalPlacesInput';
import ExchangeRateSortingMethodSelect from '../components/ExchangeRateSortingMethodSelect';
import ResetAppButton from '../components/ResetAppButton';

const Navbar = () => {
  return (
    <nav>
      <ExchangeRelativeSelect />
      <ExchangeDateInput />
      <ShowFavoritesButton />
      <DecimalPlacesInput />
      <ExchangeRateSortingMethodSelect />
      <ResetAppButton />
    </nav>
  );
};

export default Navbar;
