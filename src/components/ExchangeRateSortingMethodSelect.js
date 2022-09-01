import { useContext } from 'react';

import { AppContext } from '../contexts/appContext';

const ExchangeRateSortingMethodSelect = () => {
  const { appState, setAppState } = useContext(AppContext);

  const sortingMethods = ['default', 'alphabetically', 'random'];

  return (
    <select
      name=""
      id=""
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
  );
};

export default ExchangeRateSortingMethodSelect;
