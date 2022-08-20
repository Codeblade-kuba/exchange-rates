import React, { useContext } from 'react';

import { ExchangeRateCardsContext } from '../contexts/ExchangeRateCardsContext';

const ShowFavoritesButton = () => {
  const { showFavorites, setShowFavorites } = useContext(
    ExchangeRateCardsContext
  );

  return (
    <button onClick={() => setShowFavorites(!showFavorites)}>
      Show favorites
    </button>
  );
};

export default ShowFavoritesButton;
