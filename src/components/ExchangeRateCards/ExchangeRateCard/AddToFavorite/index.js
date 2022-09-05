import { useContext } from 'react';

import { AppContext } from '../../../../contexts/appContext';

const AddToFavorite = ({ currency }) => {
  const { setCurrencies } = useContext(AppContext);

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
    <button title="Add to favorite" onClick={() => toggleFavorite()}>
      {'<3'}
    </button>
  );
};

export default AddToFavorite;
