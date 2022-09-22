import { render } from '@testing-library/react';
import { ExchangeRatesAppContext } from '../contexts/ExchangeRatesAppContext';
import ExchangeRatesAppContextInterface from '../contexts/types/ExchangeRatesAppContextInterface';
import appDefaultSettings from '../components/ExchangeRatesApp/data/appDefaultSettings';
import AppStateInterface from '../components/ExchangeRatesApp/interfaces/AppState';
import CurrencyInterface from '../components/ExchangeRatesApp/interfaces/Currency';

const renderWithExchangeRatesAppContext = (
  component: any,
  { currencies, appState, error }: ExchangeRatesAppContextInterface = {
    currencies: [],
    appState: appDefaultSettings,
    error: null,
    setCurrencies: (state: React.SetStateAction<CurrencyInterface[]>) => {},
    setAppState: (state: React.SetStateAction<AppStateInterface>) => {},
  }
) => {
  if (!appState) {
    appState = { ...appDefaultSettings };
  } else {
    appState = { ...appDefaultSettings, ...appState };
  }
  if (!currencies) currencies = [];
  if (!error) error = null;

  const extendedDefaultProps = {
    appState,
    currencies,
    error,
    setCurrencies: (state: React.SetStateAction<CurrencyInterface[]>) => {},
    setAppState: (state: React.SetStateAction<AppStateInterface>) => {},
  };

  return render(
    <ExchangeRatesAppContext.Provider value={extendedDefaultProps}>
      {component}
    </ExchangeRatesAppContext.Provider>
  );
};

export default renderWithExchangeRatesAppContext;
