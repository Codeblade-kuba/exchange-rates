import { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';

const ExchangeRateSortingMethodSelect = () => {
  const { appState, setAppState } = useContext(ExchangeRatesAppContext);

  const sortingMethods = ['default', 'alphabetically', 'random'];

  return (
    <>
      <label htmlFor="sorting-method">Sorting method</label>
      <select
        id="sorting-method"
        value={appState.sortingMethod}
        onChange={(e) =>
          setAppState((prev) => ({ ...prev, sortingMethod: e.target.value }))
        }
      >
        {sortingMethods.map((val, index) => (
          <option value={val} key={index}>
            {val}
          </option>
        ))}
      </select>
    </>
  );
};

export default ExchangeRateSortingMethodSelect;
