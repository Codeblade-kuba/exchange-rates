import { useContext } from 'react';

import ExchangeRatesAppContext from '../../../contexts/AppContext';
import { ReactComponent as FilterListIcon } from '../../../assets/icons/filter-list.svg';
import CustomSelect from '../../ui/CustomSelect';

const RatesSortingMethodSelect = (): JSX.Element => {
  const { appState, setAppState } = useContext(ExchangeRatesAppContext);

  const sortingMethods = ['default', 'alphabetically', 'random'];

  const changeSortingMethod = (index: number) => {
    setAppState((prev) => ({ ...prev, sortingMethod: sortingMethods[index] }));
  };

  return (
    <>
      <FilterListIcon />
      <div className="nav-item-action">
        <CustomSelect
          id="sorting"
          label="Sorting"
          initial={sortingMethods.indexOf(appState.sortingMethod)}
          options={sortingMethods}
          callback={changeSortingMethod}
        />
      </div>
    </>
  );
};

export default RatesSortingMethodSelect;
