import AppStateInterface from '../../components/ExchangeRatesApp/interfaces/AppState';
import CurrencyInterface from '../../components/ExchangeRatesApp/interfaces/Currency';

interface ExchangeRatesAppContextInterface {
  currencies: CurrencyInterface[];
  setCurrencies: React.Dispatch<React.SetStateAction<CurrencyInterface[]>>;
  appState: AppStateInterface;
  setAppState: React.Dispatch<React.SetStateAction<AppStateInterface>>;
  error?: unknown;
  setError?: React.Dispatch<React.SetStateAction<unknown>>;
}

export default ExchangeRatesAppContextInterface;
