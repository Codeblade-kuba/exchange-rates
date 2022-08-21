import React, { useContext } from 'react';

import { ExchangeRateCardsContext } from '../contexts/ExchangeRateCardsContext';

const ExchangeRelativeSelect = () => {
  const {
    displayedCurrencies,
    exchangeRelativeParam,
    setExchangeRelativeParam,
  } = useContext(ExchangeRateCardsContext);

  return (
    <select
      name="Exchange rate relative currency"
      id="exchange-relative-select"
      value={exchangeRelativeParam}
      onChange={(e) => setExchangeRelativeParam(e.target.value)}
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
