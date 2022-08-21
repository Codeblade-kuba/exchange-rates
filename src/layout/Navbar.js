import ExchangeRelativeSelect from '../components/ExchangeRelativeSelect';
import ExchangeDateInput from '../components/ExchangeDateInput';
import ShowFavoritesButton from '../components/ShowFavoritesButton';
import DecimalPlacesInput from '../components/DecimalPlacesInput';

const Navbar = () => {
  return (
    <nav>
      <ExchangeRelativeSelect />
      <ExchangeDateInput />
      <ShowFavoritesButton />
      <DecimalPlacesInput />
    </nav>
  );
};

export default Navbar;
