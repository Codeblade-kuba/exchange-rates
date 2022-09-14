import React, { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import appDefaultSettings from '../ExchangeRatesApp/data/appDefaultSettings';

const ExchangeDateInput = () => {
  const { appState, setAppState } = useContext(ExchangeRatesAppContext);

  const changeExchangeDateParam = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!setAppState) return;
    setAppState((prev) => {
      const valueToSet = e.target.value || appDefaultSettings.exchangeDateParam;
      return { ...prev, exchangeDateParam: valueToSet };
    });
  };

  const getValueIfDateIsValid = (value: string | undefined) => {
    if (!value) return;
    const date = new Date(value);
    if (date) return value;
  };

  return (
    <>
      <label htmlFor="exchange-date">Exchange date</label>
      <input
        id="exchange-date"
        title="Choose exchange rates date"
        type="date"
        value={getValueIfDateIsValid(appState?.exchangeDateParam)}
        onChange={(e) => changeExchangeDateParam(e)}
      />
    </>
  );
};

export default ExchangeDateInput;
