import AppStateInterface from '../../components/ExchangeRatesApp/types/AppState';
import CurrencyInterface from '../../components/ExchangeRatesApp/types/Currency';

interface ExchangeRatesAppContextInterface {
  currencies: CurrencyInterface[];
  setCurrencies: React.Dispatch<React.SetStateAction<CurrencyInterface[]>>;
  appState: AppStateInterface;
  setAppState: React.Dispatch<React.SetStateAction<AppStateInterface>>;
  isLoading?: boolean;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  error?: unknown;
  setError?: React.Dispatch<React.SetStateAction<unknown>>;
}

export default ExchangeRatesAppContextInterface;
