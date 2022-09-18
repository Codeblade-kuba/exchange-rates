import React, { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import appDefaultSettings from '../ExchangeRatesApp/data/appDefaultSettings';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';

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
      <SettingsIcon />
      <div className="nav-item-action">
        <label htmlFor="exchange-date">Date:</label>
        <input
          id="exchange-date"
          title="Choose exchange rates date"
          type="date"
          value={getValueIfDateIsValid(appState?.exchangeDateParam)}
          onChange={(e) => changeExchangeDateParam(e)}
        />
      </div>
    </>
  );
};

export default ExchangeDateInput;
