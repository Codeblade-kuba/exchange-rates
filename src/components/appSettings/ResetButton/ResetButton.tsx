import { useContext, useEffect, useState } from 'react';

import ExchangeRatesAppContext from '../../../contexts/AppContext';
import appDefaultSettings from '../../app/ExchangeRatesApp/data/appDefaultSettings';
import { ReactComponent as CachedIcon } from '../../../assets/icons/cached.svg';

const ResetButton = (): JSX.Element => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { appState, setAppState } = useContext(ExchangeRatesAppContext);

  useEffect(() => {
    if (appState === appDefaultSettings) {
      setIsDisabled(true);
    }
    setIsDisabled(false);
  }, [appState]);

  const resetSettings = () => {
    if (!setAppState) return;
    setAppState(appDefaultSettings);
  };

  return (
    <>
      <CachedIcon className={isDisabled ? 'disabled' : ''} />
      <div className="nav-item-action">
        <button
          title="Reset settings"
          onClick={resetSettings}
          disabled={isDisabled}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default ResetButton;
