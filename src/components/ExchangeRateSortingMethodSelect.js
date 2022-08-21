import { useContext } from 'react';

import { ExchangeRateCardsContext } from '../contexts/ExchangeRateCardsContext';

const ExchangeRateSortingMethodSelect = () => {
  const { sortingMethod, setSortingMethod } = useContext(
    ExchangeRateCardsContext
  );

  const decimalPlacesOptions = ['default', 'alphabetically', 'random'];

  return (
    <select
      name=""
      id=""
      value={sortingMethod}
      onChange={(e) => setSortingMethod(e.target.value)}
    >
      {decimalPlacesOptions.map((val, index) => (
        <option value={val} key={index}>
          {val}
        </option>
      ))}
    </select>
  );
};

export default ExchangeRateSortingMethodSelect;
