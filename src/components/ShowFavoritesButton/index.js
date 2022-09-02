import React, { useContext } from 'react';

import { AppContext } from '../../contexts/appContext';

const ShowFavoritesButton = () => {
  const { appState, setAppState } = useContext(AppContext);

  return (
    <button
      onClick={() =>
        setAppState((prev) => ({ ...prev, showFavorites: !prev.showFavorites }))
      }
    >
      {(appState.showFavorites ? 'Hide' : 'Show') + ' favorites'}
    </button>
  );
};

export default ShowFavoritesButton;
