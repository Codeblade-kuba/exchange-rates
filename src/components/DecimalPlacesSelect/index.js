import React, { useContext } from 'react';

import { AppContext } from '../../contexts/appContext';

const DecimalPlacesSelect = () => {
  const { appState, setAppState } = useContext(AppContext);

  const decimalPlacesOptions = [0, 1, 2, 3, 4, 5];

  const changeExchangeRatesDecimalPlaces = (e) => {
    return setAppState((prev) => ({ ...prev, decimalPlaces: e.target.value }));
  };

  return (
    <div>
      <select
        name=""
        id=""
        onChange={(e) => changeExchangeRatesDecimalPlaces(e)}
        value={appState.decimalPlaces}
        data-testid="decimal-places-select"
      >
        {decimalPlacesOptions.map((val, index) => (
          <option
            value={index}
            key={index}
            data-testid="decimal-places-select-option"
          >
            {val}
          </option>
        ))}
      </select>
      <label>Decimal places</label>
    </div>
  );
};

export default DecimalPlacesSelect;
