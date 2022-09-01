import { useContext } from 'react';

import { AppContext } from '../contexts/appContext';

const AddToFavorite = ({ symbol }) => {
  const { appState, setAppState } = useContext(AppContext);

  function addToFavorite() {
    if (appState.favorites.includes(symbol)) {
      return setAppState((prev) => {
        const newArr = [...prev.favorites];
        newArr.splice(prev.favorites.indexOf(symbol), 1);
        return { ...prev, favorites: newArr };
      });
    }
    return setAppState((prev) => ({
      ...prev,
      favorites: [...prev.favorites, symbol],
    }));
  }

  return (
    <button title="Add to favorite" onClick={() => addToFavorite()}>
      {'<3'}
    </button>
  );
};

export default AddToFavorite;
