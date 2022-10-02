import { useContext } from 'react';

import ExchangeRatesAppContext from '../../../contexts/AppContext';
import { ReactComponent as HeartIcon } from '../../../assets/icons/favorite.svg';

const ShowFavoritesButton = (): JSX.Element => {
  const { appState, setAppState } = useContext(ExchangeRatesAppContext);

  const toggleShowFavorites = () => {
    setAppState((prev) => ({ ...prev, showFavorites: !prev.showFavorites }));
  };

  return (
    <>
      <HeartIcon />
      <div className="nav-item-action">
        <button onClick={toggleShowFavorites} title="Toggle favorites">
          {(appState.showFavorites ? 'Hide' : 'Show') + ' favorites'}
        </button>
      </div>
    </>
  );
};

export default ShowFavoritesButton;
