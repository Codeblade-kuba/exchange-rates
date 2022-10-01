import { useContext } from 'react';

import ExchangeRatesAppContext from '../../contexts/ExchangeRatesAppContext';
import CustomSelect from '../CustomSelect';
import { ReactComponent as BuildIcon } from '../../assets/icons/build.svg';

const ExchangeRelativeSelect = (): JSX.Element => {
  const { appState, setAppState, currencies } = useContext(
    ExchangeRatesAppContext
  );

  const changeRelativeParam = (index: number) => {
    setAppState((prev) => ({
      ...prev,
      exchangeRelativeParam: currencies[index].symbol,
    }));
  };

  const getCurrencySymbols = () => {
    const symbols: string[] = [];
    currencies.forEach((currency) => {
      symbols.push(currency.symbol);
    });
    return symbols;
  };

  const getIndexOfCurrencyWithSymbol = (symbol: string) => {
    let foundIndex: number = -1;
    currencies.forEach((currency, index) => {
      if (currency.symbol === symbol) {
        foundIndex = index;
      }
    });
    return foundIndex;
  };

  return (
    <>
      <BuildIcon />
      <div className="nav-item-action">
        <CustomSelect
          id="base"
          label="Base"
          initial={getIndexOfCurrencyWithSymbol(appState.exchangeRelativeParam)}
          options={getCurrencySymbols()}
          callback={changeRelativeParam}
        />
      </div>
    </>
  );
};

export default ExchangeRelativeSelect;
