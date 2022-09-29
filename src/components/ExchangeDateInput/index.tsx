import { useContext } from 'react';

import './index.scss';
import 'react-datepicker/dist/react-datepicker.css';

import ExchangeRatesAppContext from '../../contexts/ExchangeRatesAppContext';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import DatePicker from 'react-datepicker';

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
