import { useContext } from 'react';

import ExchangeRatesAppContext from '../../contexts/ExchangeRatesAppContext';
import CurrencyInterface from '../ExchangeRatesApp/interfaces/Currency';
import { ReactComponent as HeartIcon } from '../../assets/icons/favorite.svg';

const AddToFavoritesButton = ({
  currency,
}: {
  currency?: CurrencyInterface;
}) => {
  const { setCurrencies } = useContext(ExchangeRatesAppContext);

  function toggleFavorite() {
    if (!currency) return;
    setCurrencies((prev) => {
      const prevCopy = [...prev];
      prevCopy.forEach((prevCurrency) => {
        if (prevCurrency.symbol === currency.symbol) {
          prevCurrency.isFavorite = !prevCurrency.isFavorite;
        }
      });
      return prevCopy;
    });
  }

  return (
    <button
      className="add-to-favorite"
      title="Add to favorite"
      onClick={() => toggleFavorite()}
      data-testid="add-to-favorite-button"
    >
      <HeartIcon />
    </button>
  );
};

export default AddToFavoritesButton;
