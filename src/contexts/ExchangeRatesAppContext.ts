import { createContext } from 'react';
import appDefaultSettings from '../components/ExchangeRatesApp/data/appDefaultSettings';
import ExchangeRatesAppContextInterface from './types/ExchangeRatesAppContextInterface';

export const ExchangeRatesAppContext =
  createContext<ExchangeRatesAppContextInterface>({
    currencies: [],
    setCurrencies: (state) => {},
    appState: appDefaultSettings,
    setAppState: (state) => {},
  });
