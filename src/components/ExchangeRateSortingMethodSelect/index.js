import { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';

const ExchangeRateSortingMethodSelect = () => {
  const { appState, setAppState } = useContext(ExchangeRatesAppContext);

  const sortingMethods = ['default', 'alphabetically', 'random'];

  return (
    <select
      name=""
      id=""
      value={appState.sortingMethod}
      data-testid="exchange-rate-sorting-method-select"
      onChange={(e) =>
        setAppState((prev) => ({ ...prev, sortingMethod: e.target.value }))
      }
    >
      {sortingMethods.map((val, index) => (
        <option
          value={val}
          key={index}
          data-testid="exchange-rate-sorting-method-select-option"
        >
          {val}
        </option>
      ))}
    </select>
  );
};

export default ExchangeRateSortingMethodSelect;
