import { render } from '@testing-library/react';

import AppContext from '../contexts/AppContext';
import AppContextType from '../contexts/types/AppContext';
import appDefaultSettings from '../components/app/ExchangeRatesApp/data/appDefaultSettings';
import AppStateInterface from '../components/app/ExchangeRatesApp/types/AppState';
import CurrencyInterface from '../components/app/ExchangeRatesApp/types/Currency';

const renderWithAppContext = (component: any, props?: object) => {
  const defaultProps: AppContextType = {
    currencies: [],
    appState: appDefaultSettings,
    error: null,
    setCurrencies: (state: React.SetStateAction<CurrencyInterface[]>) => {},
    setAppState: (state: React.SetStateAction<AppStateInterface>) => {},
  };

  const propsToPass = { ...defaultProps, ...props };

  return render(
    <AppContext.Provider value={propsToPass}>{component}</AppContext.Provider>
  );
};

export default renderWithAppContext;
