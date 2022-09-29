import React, { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import appDefaultSettings from '../ExchangeRatesApp/data/appDefaultSettings';
import { ReactComponent as CachedIcon } from '../../assets/icons/cached.svg';

const ResetButton = () => {
  const { setAppState } = useContext(ExchangeRatesAppContext);

  const resetSettings = () => {
    if (!setAppState) return;
    setAppState(appDefaultSettings);
  };

  return (
    <>
      <CachedIcon />
      <div className="nav-item-action">
        <button title="Reset settings" onClick={resetSettings}>
          Reset
        </button>
      </div>
    </>
  );
};

export default ResetButton;
