import React, { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import appDefaultSettings from '../ExchangeRatesApp/data/appDefaultSettings';

const ResetButton = () => {
  const { setAppState } = useContext(ExchangeRatesAppContext);

  const resetSettings = () => {
    if (!setAppState) return;
    setAppState(appDefaultSettings);
  };

  return (
    <button title="Reset settings" onClick={resetSettings}>
      Reset
    </button>
  );
};

export default ResetButton;
