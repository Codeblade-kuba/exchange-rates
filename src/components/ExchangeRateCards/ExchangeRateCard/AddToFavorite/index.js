import { useContext } from 'react';

import { AppContext } from '../../../../contexts/appContext';

const AddToFavorite = ({ symbol }) => {
  const { appState, setAppState } = useContext(AppContext);

  function handleFavorite() {
    if (appState.favorites.includes(symbol)) {
      return removeFromFavorite();
    }
    return addToFavorite();
  }

  function removeFromFavorite() {
    return setAppState((prev) => {
      const newFavoritesArray = [...prev.favorites];
      newFavoritesArray.splice(prev.favorites.indexOf(symbol), 1);
      return { ...prev, favorites: newFavoritesArray };
    });
  }

  function addToFavorite() {
    return setAppState((prev) => ({
      ...prev,
      favorites: [...prev.favorites, symbol],
    }));
  }

  return (
    <button title="Add to favorite" onClick={() => handleFavorite()}>
      {'<3'}
    </button>
  );
};

export default AddToFavorite;
