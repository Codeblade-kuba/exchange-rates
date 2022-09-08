import React, { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import settings from './data/settings';

const DecimalPlacesSelect = () => {
  const { appState, setAppState } = useContext(ExchangeRatesAppContext);

  const changeExchangeRatesDecimalPlaces = (e) => {
    return setAppState((prev) => ({ ...prev, decimalPlaces: e.target.value }));
  };

  return (
    <div>
      <select
        id="decimal-places"
        onChange={(e) => changeExchangeRatesDecimalPlaces(e)}
        value={appState.decimalPlaces}
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
