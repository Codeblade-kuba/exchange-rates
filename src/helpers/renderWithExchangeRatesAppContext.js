import { render } from '@testing-library/react';
import { ExchangeRatesAppContext } from '../contexts/ExchangeRatesAppContext';
import { appDefaultSettings } from '../data/appDefaultSettings';

export const renderWithExchangeRatesAppContext = (
  component,
  { appState = {}, currencies = [], error = '' } = {}
) => {
  const extendedDefaultProps = {
    appState: { ...appDefaultSettings, ...appState },
    currencies: [...currencies],
    error: error,
  };
  return render(
    <ExchangeRatesAppContext.Provider value={extendedDefaultProps}>
      {component}
    </ExchangeRatesAppContext.Provider>
  );
};
