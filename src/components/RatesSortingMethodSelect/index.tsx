import React, { useContext, useState } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import { ReactComponent as FilterListIcon } from '../../assets/icons/filter-list.svg';

const RatesSortingMethodSelect = () => {
  const { appState, setAppState } = useContext(ExchangeRatesAppContext);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const sortingMethods = ['default', 'alphabetically', 'random'];

  const changeSortingMethod = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!setAppState) return;
    setAppState((prev) => ({ ...prev, sortingMethod: e.target.value }));
  };

  const toggleDropdownOpen = () => {
    setDropdownOpen((prev) => !prev);
  };

  const setDropdownItem = (e: React.MouseEvent<HTMLLIElement>) => {
    let target = e.target as HTMLLIElement;
    let value = target.dataset.value!;

    if (!setAppState) return;
    setAppState((prev) => ({ ...prev, sortingMethod: value }));

    setDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <FilterListIcon />
      <div className="nav-item-action">
        <div className="custom-select">
          <button
            className="custom-select-button"
            type="button"
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen}
            onClick={toggleDropdownOpen}
            title="Open sorting method options"
          >
            <span className="custom-select-label">Sorting:</span>{' '}
            <span className="custom-select-value">
              {appState?.sortingMethod}
            </span>
          </button>
          <ul
            className={`custom-select-dropdown ${dropdownOpen ? 'open' : ''}`}
            tabIndex={-1}
            role="listbox"
            aria-activedescendant={appState?.sortingMethod}
          >
            {sortingMethods.map((val, index) => (
              <li
                className="custom-select-option"
                onClick={setDropdownItem}
                key={index}
                data-value={val}
                tabIndex={0}
                role="option"
                aria-selected={appState?.sortingMethod === val}
              >
                {val}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RatesSortingMethodSelect;
