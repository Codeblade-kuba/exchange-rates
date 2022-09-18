import React, { useContext, useState } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import { ReactComponent as FilterListIcon } from '../../assets/icons/filter-list.svg';
import CustomSelect from '../CustomSelect';

const RatesSortingMethodSelect = () => {
  const { appState, setAppState } = useContext(ExchangeRatesAppContext);

  const sortingMethods = ['default', 'alphabetically', 'random'];

  const changeSortingMethod = (index: number) => {
    if (!setAppState) return;
    setAppState((prev) => ({ ...prev, sortingMethod: sortingMethods[index] }));
  };

  return (
    <>
      <FilterListIcon />
      <div className="nav-item-action">
        <CustomSelect
          label="Sorting"
          initial={sortingMethods.indexOf('default')}
          options={sortingMethods}
          callback={changeSortingMethod}
        />
      </div>
    </>
  );
};

export default RatesSortingMethodSelect;
