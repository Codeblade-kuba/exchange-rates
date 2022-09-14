import { createContext } from 'react';
import AppStateInterface from '../components/ExchangeRatesApp/interfaces/AppState';
import CurrencyInterface from '../components/ExchangeRatesApp/interfaces/Currency';

interface ExchangeRatesAppContextInterface {
  currencies?: CurrencyInterface[] | undefined;
  setCurrencies?: React.Dispatch<
    React.SetStateAction<CurrencyInterface[] | undefined>
  >;
  appState?: AppStateInterface;
  setAppState?: React.Dispatch<React.SetStateAction<AppStateInterface>>;
  error?: unknown;
  setError?: React.Dispatch<React.SetStateAction<unknown>>;
}

export const ExchangeRatesAppContext =
  createContext<ExchangeRatesAppContextInterface>({});
