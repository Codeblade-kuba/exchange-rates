import React, { useContext, useState } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import appDefaultSettings from '../ExchangeRatesApp/data/appDefaultSettings';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import getDateString from '../../helpers/getDateString';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './index.scss';

const ExchangeDateInput = () => {
  const { appState, setAppState } = useContext(ExchangeRatesAppContext);

  const changeExchangeDateParam = (date: Date) => {
    let dateToSet = date || new Date();
    setAppState((prev) => {
      return { ...prev, exchangeDateParam: dateToSet };
    });
  };

  return (
    <>
      <SettingsIcon />
      <div className="nav-item-action">
        <label htmlFor="exchange-date">Date:</label>
        <DatePicker
          id="exchange-date"
          dateFormat="dd.MM.yyyy"
          selected={appState.exchangeDateParam}
          onChange={changeExchangeDateParam}
        />
      </div>
    </>
  );
};

export default ExchangeDateInput;
