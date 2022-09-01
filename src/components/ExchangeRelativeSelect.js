import React, { useContext } from 'react';

import { AppContext } from '../contexts/appContext';

const ExchangeRelativeSelect = () => {
  const { appState, setAppState, displayedCurrencies } = useContext(AppContext);

  return (
    <select
      name="Exchange rate relative currency"
      id="exchange-relative-select"
      value={appState.exchangeRelativeParam}
      onChange={(e) =>
        setAppState((prev) => ({
          ...prev,
          exchangeRelativeParam: e.target.value,
        }))
      }
    >
      {displayedCurrencies.map((currency, index) => (
        <option value={currency.symbol} key={index}>
          {currency.symbol}
        </option>
      ))}
    </select>
  );
};

export default ExchangeRelativeSelect;
