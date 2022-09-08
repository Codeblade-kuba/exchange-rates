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
    <>
      <label htmlFor="exchange-date">Exchange date</label>
      <input
        id="exchange-date"
        title="Choose exchange rates date"
        type="date"
        value={getValueIfDateIsValid(appState.exchangeDateParam)}
        onChange={(e) => changeExchangeDateParam(e)}
      />
    </>
  );
};

export default ExchangeDateInput;
