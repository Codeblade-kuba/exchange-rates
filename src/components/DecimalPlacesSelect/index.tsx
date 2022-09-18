import React, { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import settings from './data/settings';
import { ReactComponent as VisibilityIcon } from '../../assets/icons/visibility.svg';

const DecimalPlacesSelect = () => {
  const { appState, setAppState } = useContext(ExchangeRatesAppContext);

  const changeExchangeRatesDecimalPlaces = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (!setAppState) return;
    setAppState((prev) => ({
      ...prev,
      decimalPlaces: parseInt(e.target.value),
    }));
  };

  return (
    <>
      <VisibilityIcon />
      <div className="nav-item-action">
        <label htmlFor="decimal-places">Decimal places:</label>
        <select
          id="decimal-places"
          value={appState?.decimalPlaces}
          onChange={changeExchangeRatesDecimalPlaces}
        >
          {settings.options.map((val, index) => (
            <option value={index} key={index}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default DecimalPlacesSelect;
