import React, { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import appDefaultSettings from '../ExchangeRatesApp/data/appDefaultSettings';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import getDateString from '../../helpers/getDateString';

const ExchangeDateInput = () => {
  const { appState, setAppState } = useContext(ExchangeRatesAppContext);

  const changeExchangeDateParam = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!setAppState) return;
    setAppState((prev) => {
      const valueToSet = e.target.value || appDefaultSettings.exchangeDateParam;
      return { ...prev, exchangeDateParam: valueToSet };
    });
  };

  const getDateValue = (value: string) => {
    const date: any = new Date(value);
    if (!isNaN(date) && date instanceof Date) {
      return value;
    } else {
      return getDateString();
    }
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
          value={getDateValue(appState.exchangeDateParam)}
          onChange={(e) => changeExchangeDateParam(e)}
        />
      </div>
    </>
  );
};

export default ExchangeDateInput;
