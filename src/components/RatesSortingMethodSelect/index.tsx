import React, { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';

const RatesSortingMethodSelect = () => {
  const { appState, setAppState } = useContext(ExchangeRatesAppContext);

  const sortingMethods = ['default', 'alphabetically', 'random'];

  const changeSortingMethod = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!setAppState) return;
    setAppState((prev) => ({ ...prev, sortingMethod: e.target.value }));
  };

  return (
    <>
      <label htmlFor="sorting-method">Sorting method</label>
      <select
        id="sorting-method"
        value={appState?.sortingMethod}
        onChange={changeSortingMethod}
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

export default RatesSortingMethodSelect;
