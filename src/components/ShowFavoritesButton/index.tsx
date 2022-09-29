import React, { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import { ReactComponent as HeartIcon } from '../../assets/icons/favorite.svg';

const ShowFavoritesButton = () => {
  const { appState, setAppState } = useContext(ExchangeRatesAppContext);

  const toggleShowFavorites = () => {
    if (!setAppState) return;
    setAppState((prev) => ({ ...prev, showFavorites: !prev.showFavorites }));
  };

  return (
    <>
      <HeartIcon />
      <div className="nav-item-action">
        <button onClick={toggleShowFavorites} title="Toggle favorites">
          {(appState?.showFavorites ? 'Hide' : 'Show') + ' favorites'}
        </button>
      </div>
    </>
  );
};

export default ShowFavoritesButton;
