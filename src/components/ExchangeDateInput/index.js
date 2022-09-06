import React, { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import { appDefaultSettings } from '../../data/appDefaultSettings';

const ExchangeDateInput = () => {
  const { appState, setAppState } = useContext(ExchangeRatesAppContext);

  const changeExchangeDateParam = (e) => {
    setAppState((prev) => {
      const valueToSet = e.target.value || appDefaultSettings.exchangeDateParam;
      return { ...prev, exchangeDateParam: valueToSet };
    });
  };

  const getValueIfDateIsValid = (value) => {
    const date = new Date(value);
    if (date instanceof Date && !isNaN(date)) return value;
    return '';
  };

  return (
    <input
      type="date"
      value={getValueIfDateIsValid(appState.exchangeDateParam)}
      onChange={(e) => changeExchangeDateParam(e)}
      data-testid="exchange-date-input"
    />
  );
};

export default ExchangeDateInput;
