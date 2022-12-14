import { useContext } from 'react';

import CustomSelect from '../../ui/CustomSelect';
import ExchangeRatesAppContext from '../../../contexts/AppContext';
import settings from './data/settings';
import { ReactComponent as VisibilityIcon } from '../../../assets/icons/visibility.svg';

const DecimalPlacesSelect = (): JSX.Element => {
  const { appState, setAppState } = useContext(ExchangeRatesAppContext);

  const changeExchangeRatesDecimalPlaces = (index: number) => {
    setAppState((prev) => ({
      ...prev,
      decimalPlaces: settings.options[index],
    }));
  };

  return (
    <>
      <VisibilityIcon />
      <div className="nav-item-action">
        <CustomSelect
          id="decimal-places"
          label="Decimal places"
          initial={settings.options.indexOf(appState.decimalPlaces)}
          options={settings.options}
          callback={changeExchangeRatesDecimalPlaces}
        />
      </div>
    </>
  );
};

export default DecimalPlacesSelect;
