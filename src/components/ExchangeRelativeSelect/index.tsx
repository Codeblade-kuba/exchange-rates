import React, { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';

const ExchangeRelativeSelect = () => {
  const { appState, setAppState, currencies } = useContext(
    ExchangeRatesAppContext
  );

  const changeRelativeParam = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!setAppState) return;
    setAppState((prev) => ({
      ...prev,
      exchangeRelativeParam: e.target.value,
    }));
  };

  return (
    <>
      <label htmlFor="exchange-relative">Relative currency</label>
      <select
        id="exchange-relative"
        title="Choose exchange rates relative currency"
        value={appState?.exchangeRelativeParam}
        onChange={(e) => changeRelativeParam(e)}
      >
        {currencies?.map((currency, index) => (
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
    </>
  );
};

export default ExchangeRelativeSelect;
