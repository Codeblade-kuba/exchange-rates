import React, { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';

const ShowFavoritesButton = () => {
  const { appState, setAppState } = useContext(ExchangeRatesAppContext);

  const toggleShowFavorites = () => {
    setAppState((prev) => ({ ...prev, showFavorites: !prev.showFavorites }));
  };

  return (
    <button onClick={toggleShowFavorites} data-testid="show-favorites-button">
      {(appState.showFavorites ? 'Hide' : 'Show') + ' favorites'}
    </button>
  );
};

export default ShowFavoritesButton;
