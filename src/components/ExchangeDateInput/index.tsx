import React, { useContext, useState } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import appDefaultSettings from '../ExchangeRatesApp/data/appDefaultSettings';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import getDateString from '../../helpers/getDateString';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ExchangeDateInput = () => {
  const { appState, setAppState } = useContext(ExchangeRatesAppContext);

  // const changeExchangeDateParam = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (!setAppState) return;
  //   setAppState((prev) => {
  //     const valueToSet = e.target.value || appDefaultSettings.exchangeDateParam;
  //     return { ...prev, exchangeDateParam: valueToSet };
  //   });
  // };

  const changeExchangeDateParam = (date: Date) => {
    setAppState((prev) => {
      return { ...prev, exchangeDateParam: date };
    });
  };

  return (
    <>
      <SettingsIcon />
      <div className="nav-item-action">
        <label htmlFor="exchange-date">Date:</label>
        <DatePicker
          dateFormat="dd.MM.yyyy"
          selected={appState.exchangeDateParam}
          onChange={changeExchangeDateParam}
        />
      </div>
    </>
  );
};

export default ExchangeDateInput;
