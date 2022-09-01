import React, { useContext } from 'react';

import { AppContext } from '../contexts/appContext';

const DecimalPlacesInput = () => {
  const { appState, setAppState } = useContext(AppContext);

  const decimalPlacesOptions = [0, 1, 2, 3, 4, 5];

  return (
    <div>
      <select
        name=""
        id=""
        onChange={(e) =>
          setAppState((prev) => ({ ...prev, decimalPlaces: e.target.value }))
        }
        value={appState.decimalPlaces}
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
