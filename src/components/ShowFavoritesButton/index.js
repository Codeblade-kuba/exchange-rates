import React, { useContext } from 'react';

import { AppContext } from '../../contexts/appContext';

const ShowFavoritesButton = () => {
  const { appState, setAppState } = useContext(AppContext);

  const toggleShowFavorites = () => {
    setAppState((prev) => ({ ...prev, showFavorites: !prev.showFavorites }));
  };

  return (
    <button onClick={toggleShowFavorites}>
      {(appState.showFavorites ? 'Hide' : 'Show') + ' favorites'}
    </button>
  );
};

export default ShowFavoritesButton;
