import React, { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import settings from './data/settings';

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
    <div>
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
      <label htmlFor="decimal-places">Decimal places</label>
    </div>
  );
};

export default DecimalPlacesSelect;
