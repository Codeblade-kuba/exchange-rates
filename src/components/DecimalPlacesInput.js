import React, { useContext, useState } from 'react';

import { ExchangeRateCardsContext } from '../contexts/ExchangeRateCardsContext';

const DecimalPlacesInput = () => {
  const { decimalPlaces, setDecimalPlaces } = useContext(
    ExchangeRateCardsContext
  );

  const decimalPlacesOptions = [0, 1, 2, 3, 4, 5];

  return (
    <div>
      <select
        name=""
        id=""
        onChange={(e) => setDecimalPlaces(e.target.value)}
        value={decimalPlaces}
      >
        {decimalPlacesOptions.map((val, index) => (
          <option value={index} key={index}>
            {val}
          </option>
        ))}
      </select>
      <label>Decimal places</label>
    </div>
  );
};

export default DecimalPlacesInput;
