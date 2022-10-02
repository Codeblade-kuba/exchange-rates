import { useContext } from 'react';

import ExchangeRatesAppContext from '../../../../contexts/AppContext';
import CurrencyInterface from '../../ExchangeRatesApp/types/Currency';
import { ReactComponent as HeartIcon } from '../../../../assets/icons/favorite.svg';

const AddToFavoritesButton = ({
  currency,
}: {
  currency?: CurrencyInterface;
}): JSX.Element => {
  const { setCurrencies } = useContext(ExchangeRatesAppContext);
  const isSkeleton = !currency;

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

  if (isSkeleton) {
    return (
      <div className="add-to-favorite">
        <HeartIcon />
      </div>
    );
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
