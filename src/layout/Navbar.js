import ExchangeRelativeSelect from '../components/ExchangeRelativeSelect';
import ExchangeDateInput from '../components/ExchangeDateInput';
import ShowFavoritesButton from '../components/ShowFavoritesButton';

const Navbar = () => {
  return (
    <nav>
      <ExchangeRelativeSelect />
      <ExchangeDateInput />
      <ShowFavoritesButton />
    </nav>
  );
};

export default Navbar;
