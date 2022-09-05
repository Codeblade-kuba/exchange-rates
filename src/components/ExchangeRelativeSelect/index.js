import React, { useContext } from 'react';

import { AppContext } from '../../contexts/appContext';

const ExchangeRelativeSelect = () => {
  const { appState, setAppState, currencies } = useContext(AppContext);

  const changeRelativeParam = (e) => {
    setAppState((prev) => ({
      ...prev,
      exchangeRelativeParam: e.target.value,
    }));
  };

  return (
    <select
      name="Exchange rate relative currency"
      id="exchange-relative-select"
      data-testid="exchange-relative-select"
      value={appState.exchangeRelativeParam}
      onChange={(e) => changeRelativeParam(e)}
    >
      {currencies.map((currency, index) => (
        <option
          value={currency.symbol}
          key={index}
          data-testid="exchange-relative-select-option"
        >
          {currency.symbol}
        </option>
      ))}
    </select>
  );
};

export default ExchangeRelativeSelect;
