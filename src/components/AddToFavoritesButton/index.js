import { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';

const AddToFavoritesButton = ({ currency }) => {
  const { setCurrencies } = useContext(ExchangeRatesAppContext);

  function toggleFavorite() {
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
      title="Add to favorite"
      onClick={() => toggleFavorite()}
      data-testid="add-to-favorite-button"
    >
      {'<3'}
    </button>
  );
};

export default AddToFavoritesButton;
