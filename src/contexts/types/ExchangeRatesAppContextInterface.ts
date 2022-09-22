import AppStateInterface from '../../components/ExchangeRatesApp/interfaces/AppState';
import CurrencyInterface from '../../components/ExchangeRatesApp/interfaces/Currency';

export default interface ExchangeRatesAppContextInterface {
  currencies: CurrencyInterface[];
  setCurrencies: React.Dispatch<React.SetStateAction<CurrencyInterface[]>>;
  appState: AppStateInterface;
  setAppState: React.Dispatch<React.SetStateAction<AppStateInterface>>;
  error?: unknown;
  setError?: React.Dispatch<React.SetStateAction<unknown>>;
}
