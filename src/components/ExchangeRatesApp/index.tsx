import React, { useState, useEffect, useRef } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import appDefaultSettings from './data/appDefaultSettings';
import getCurrenciesExchangeRates from '../../api/getCurrenciesExchangeRates';
import getCurrencyNames from '../../api/getCurrencyNames';
import AppStateInterface from './interfaces/AppState';
import CurrencyInterface from './interfaces/Currency';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const useNonInitialEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList | undefined
) => {
  const initialRender = useRef(true);

  useEffect(() => {
    let effectReturns: void | (() => void) = () => {};
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      effectReturns = effect();
    }
    if (effectReturns && typeof effectReturns === 'function') {
      return effectReturns;
    }
  }, deps);
};

const ExchangeRatesApp = ({ children }: Props) => {
  const [appState, setAppState] =
    useState<AppStateInterface>(appDefaultSettings);
  const [currencies, setCurrencies] = useState<CurrencyInterface[]>();
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    setInitialCurrencies();
  }, []);

  useNonInitialEffect(() => {
    updateCurrenciesExchangeRates();
  }, [appState.exchangeRelativeParam, appState.exchangeDateParam]);

  const setInitialCurrencies = async () => {
    const currencies = await getCurrencies();
    setCurrencies(currencies);
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
        if (!prev) {
          return undefined;
        }
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
    <div data-testid="exchange-rate-app">
      <ExchangeRatesAppContext.Provider
        value={{
          currencies,
          setCurrencies,
          appState,
          setAppState,
          error,
          setError,
        }}
      >
        {children}
      </ExchangeRatesAppContext.Provider>
    </div>
  );
};

export default ExchangeRatesApp;
