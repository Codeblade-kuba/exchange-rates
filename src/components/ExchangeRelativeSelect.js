import React, { useContext } from 'react';

import { ExchangeRateCardsContext } from '../contexts/ExchangeRateCardsContext';

const ExchangeRelativeSelect = () => {
  const { appState, currencies } = useContext(ExchangeRateCardsContext);

  return (
    <select
      name="Exchange rate relative currency"
      id="exchange-relative-select"
      value={currencies.exchangeRelativeParam}
      onChange={(e) => appState.setExchangeRelativeParam(e.target.value)}
    >
      {currencies.map((currency, index) => (
        <option value={currency.symbol} key={index}>
          {currency.symbol}
        </option>
      ))}
    </select>
  );
};

export default ExchangeRelativeSelect;
