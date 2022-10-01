import { useState, useEffect } from 'react';
import useNonInitialEffect from '../../hooks/useNonInitialEffect';

import ExchangeRatesAppContext from '../../contexts/ExchangeRatesAppContext';
import appDefaultSettings from './data/appDefaultSettings';
import getCurrenciesExchangeRates from '../../api/getCurrenciesExchangeRates';
import getCurrencyNames from '../../api/getCurrencyNames';
import AppStateInterface from './types/AppState';
import CurrencyInterface from './types/Currency';

const ExchangeRatesApp = ({ children }: { children: JSX.Element }) => {
  const [appState, setAppState] =
    useState<AppStateInterface>(appDefaultSettings);
  const [currencies, setCurrencies] = useState<CurrencyInterface[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>(false);

  useEffect(() => {
    setInitialCurrencies();
  }, []);

  useNonInitialEffect(() => {
    updateCurrenciesExchangeRates();
  }, [appState.exchangeRelativeParam, appState.exchangeDateParam]);

  const setInitialCurrencies = async () => {
    const currencies = await getCurrencies();
    setCurrencies(currencies);
    setIsLoading(false);
  };

  const setCurrenciesExchangeRates = (
    currencies: CurrencyInterface[],
    exchangeRates: { [symbol: string]: number }
  ) => {
    if (!exchangeRates) return currencies;
    currencies.forEach((currency) => {
      let exchangeRate = exchangeRates[currency.symbol];
      if (exchangeRate) {
        currency.rate = exchangeRate;
      } else {
        // API doesn't provide any rate for same as relative exchange so we set it to prevent undefined errors
        currency.rate = 1;
      }
      return currency;
    });
    return currencies;
  };

  const updateCurrenciesExchangeRates = async () => {
    try {
      let exchangeRates = await getCurrenciesExchangeRates(
        appState.exchangeDateParam,
        appState.exchangeRelativeParam
      );
      setCurrencies((prev) => {
        let currencies: CurrencyInterface[] = [...prev];
        currencies = setCurrenciesExchangeRates(currencies, exchangeRates);
        return currencies;
      });
    } catch (err) {
      setError(err);
    }
    return currencies;
  };

  const getCurrencies = async () => {
    try {
      const currencyNames = await getCurrencyNames();
      let currencies = buildCurrenciesFromCurrencyNames(currencyNames);
      let exchangeRates = await getCurrenciesExchangeRates(
        appState.exchangeDateParam,
        appState.exchangeRelativeParam
      );
      currencies = setCurrenciesExchangeRates(currencies, exchangeRates);
      return currencies;
    } catch (err) {
      setError(err);
    }
    return currencies;
  };

  const buildCurrenciesFromCurrencyNames = (currenciesNames: {
    [symbol: string]: string;
  }) => {
    const currenciesArray: CurrencyInterface[] = [];
    if (typeof currenciesNames !== 'object') return currenciesArray;
    Object.keys(currenciesNames).forEach((symbol) => {
      currenciesArray.push({
        symbol,
        name: currenciesNames[symbol],
        isFavorite: false,
      });
    });
    return currenciesArray;
  };

  return (
    <ExchangeRatesAppContext.Provider
      value={{
        currencies,
        setCurrencies,
        appState,
        setAppState,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </ExchangeRatesAppContext.Provider>
  );
};

export default ExchangeRatesApp;
