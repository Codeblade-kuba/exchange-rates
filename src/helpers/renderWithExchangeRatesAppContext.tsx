import { render } from '@testing-library/react';
import { ExchangeRatesAppContext } from '../contexts/ExchangeRatesAppContext';
import appDefaultSettings from '../components/ExchangeRatesApp/data/appDefaultSettings';
import AppStateInterface from '../components/ExchangeRatesApp/interfaces/AppState';
import CurrencyInterface from '../components/ExchangeRatesApp/interfaces/Currency';

const renderWithExchangeRatesAppContext = (
  component: any,
  {
    appState,
    currencies,
    error,
  }: {
    appState?: AppStateInterface;
    currencies?: CurrencyInterface[];
    error?: unknown;
  } = {}
) => {
  if (!appState) {
    appState = { ...appDefaultSettings };
  } else {
    appState = { ...appDefaultSettings, ...appState };
  }
  if (!currencies) currencies = [];
  if (!error) error = null;
  const extendedDefaultProps = { appState, currencies, error };

  console.log(extendedDefaultProps.error);

  return render(
    <ExchangeRatesAppContext.Provider value={extendedDefaultProps}>
      {component}
    </ExchangeRatesAppContext.Provider>
  );
};

export default renderWithExchangeRatesAppContext;
