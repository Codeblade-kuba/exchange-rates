import { createContext } from 'react';

import appDefaultSettings from '../components/app/ExchangeRatesApp/data/appDefaultSettings';
import ExchangeRatesAppContextInterface from './types/ExchangeRatesAppContextInterface';

const ExchangeRatesAppContext = createContext<ExchangeRatesAppContextInterface>(
  {
    currencies: [],
    setCurrencies: (state) => {},
    appState: appDefaultSettings,
    setAppState: (state) => {},
  }
);

export default ExchangeRatesAppContext;
