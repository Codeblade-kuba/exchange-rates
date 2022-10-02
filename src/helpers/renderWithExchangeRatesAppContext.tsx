import { render } from '@testing-library/react';

import ExchangeRatesAppContext from '../contexts/ExchangeRatesAppContext';
import ExchangeRatesAppContextInterface from '../contexts/types/ExchangeRatesAppContextInterface';
import appDefaultSettings from '../components/app/ExchangeRatesApp/data/appDefaultSettings';
import AppStateInterface from '../components/app/ExchangeRatesApp/types/AppState';
import CurrencyInterface from '../components/app/ExchangeRatesApp/types/Currency';

const renderWithExchangeRatesAppContext = (component: any, props?: object) => {
  const defaultProps: ExchangeRatesAppContextInterface = {
    currencies: [],
    appState: appDefaultSettings,
    error: null,
    setCurrencies: (state: React.SetStateAction<CurrencyInterface[]>) => {},
    setAppState: (state: React.SetStateAction<AppStateInterface>) => {},
  };

  const propsToPass = { ...defaultProps, ...props };

  return render(
    <ExchangeRatesAppContext.Provider value={propsToPass}>
      {component}
    </ExchangeRatesAppContext.Provider>
  );
};

export default renderWithExchangeRatesAppContext;
