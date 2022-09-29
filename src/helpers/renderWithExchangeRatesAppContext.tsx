import { render } from '@testing-library/react';

import ExchangeRatesAppContext from '../contexts/ExchangeRatesAppContext';
import appDefaultSettings from '../components/ExchangeRatesApp/data/appDefaultSettings';
import AppStateInterface from '../components/ExchangeRatesApp/interfaces/AppState';
import CurrencyInterface from '../components/ExchangeRatesApp/interfaces/Currency';

const renderWithExchangeRatesAppContext = (component: any, props?: object) => {
  const defaultProps = {
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
