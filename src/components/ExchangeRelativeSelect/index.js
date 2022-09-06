import React, { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import { appDefaultSettings } from '../../data/appDefaultSettings';

const ExchangeRelativeSelect = () => {
  const { appState, setAppState, currencies } = useContext(
    ExchangeRatesAppContext
  );

  const changeRelativeParam = (e) => {
    setAppState((prev) => ({
      ...prev,
      exchangeRelativeParam: e.target.value,
    }));
  };

  return (
    <select
      name="Exchange rate relative currency"
      value={appState.exchangeRelativeParam}
      data-testid="exchange-relative-select"
      onChange={(e) => changeRelativeParam(e)}
    >
      {currencies.map((currency, index) => (
        <option
          value={currency.symbol}
          key={index}
          label={currency.symbol}
          data-testid={'exchange-relative-select-option-' + currency.symbol}
        >
          {currency.symbol}
        </option>
      ))}
    </select>
  );
};

export default ExchangeRelativeSelect;
