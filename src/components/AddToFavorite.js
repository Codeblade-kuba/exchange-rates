import { useContext } from 'react';

import { ExchangeRateCardsContext } from '../contexts/ExchangeRateCardsContext';

const AddToFavorite = ({ symbol }) => {
  const { favorites, setFavorites } = useContext(ExchangeRateCardsContext);

  function addToFavorite() {
    if (favorites.includes(symbol)) {
      return setFavorites((prev) => {
        const newArr = [...prev];
        newArr.splice(prev.indexOf(symbol), 1);
        return newArr;
      });
    }
    return setFavorites((current) => [...current, symbol]);
  }

  return (
    <button title="Add to favorite" onClick={() => addToFavorite()}>
      {'<3'}
    </button>
  );
};

export default AddToFavorite;
