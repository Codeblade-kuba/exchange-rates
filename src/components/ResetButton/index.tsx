import React, { useContext, useEffect, useState } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import appDefaultSettings from '../ExchangeRatesApp/data/appDefaultSettings';
import { ReactComponent as CachedIcon } from '../../assets/icons/cached.svg';

const ResetButton = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { appState, setAppState } = useContext(ExchangeRatesAppContext);

  useEffect(() => {
    if (appState === appDefaultSettings) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
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
