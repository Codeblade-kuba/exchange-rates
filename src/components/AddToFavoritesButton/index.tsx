import { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import CurrencyInterface from '../ExchangeRatesApp/interfaces/Currency';

const AddToFavoritesButton = ({
  currency,
}: {
  currency: CurrencyInterface;
}) => {
  const { setCurrencies } = useContext(ExchangeRatesAppContext);

  function toggleFavorite() {
    if (!setCurrencies) return;
    setCurrencies((prev) => {
      if (!prev) return;
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
      title="Add to favorite"
      onClick={() => toggleFavorite()}
      data-testid="add-to-favorite-button"
    >
      {'<3'}
    </button>
  );
};

export default AddToFavoritesButton;
