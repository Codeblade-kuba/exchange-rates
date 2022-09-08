import { useState, useEffect, useRef } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import { appDefaultSettings } from '../../data/appDefaultSettings';
import getCurrenciesExchangeRates from './api/getCurrenciesExchangeRates';
import getCurrencyNames from './api/getCurrencyNames';

const useNonInitialEffect = (effect, deps = []) => {
  const initialRender = useRef(true);

  useEffect(() => {
    let effectReturns = () => {};
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

const ExchangeRatesApp = (props) => {
  const [appState, setAppState] = useState(appDefaultSettings);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    setInitialCurrencies();
  }, []);

  useNonInitialEffect(() => {
    updateCurrenciesExchangeRates();
  }, [appState.exchangeRelativeParam, appState.exchangeDateParam]);

  // useEffect(() => {
  //   updateCurrenciesExchangeRates();
  // }, [appState.exchangeRelativeParam, appState.exchangeDateParam]);

  const setInitialCurrencies = async () => {
    const currencies = await getCurrencies();
    setCurrencies(currencies);
  };

  const setCurrenciesExchangeRates = (currencies, exchangeRates) => {
    if (!exchangeRates) return false;
    currencies.forEach((currency) => {
      let exchangeRate = exchangeRates[currency.symbol];
      if (typeof exchangeRate === 'number') {
        currency.rate = exchangeRate;
      } else {
        // API doesn't provide any rate for same as relative exchange so we set it to prevent undefined errors
        currency.rate = 'Current';
      }
      return currency;
    });
    return currencies;
  };

  const updateCurrenciesExchangeRates = async () => {
    let exchangeRates = await getCurrenciesExchangeRates(
      appState.exchangeDateParam,
      appState.exchangeRelativeParam
    );
    setCurrencies((prev) => {
      let currencies = [...prev];
      currencies = setCurrenciesExchangeRates(currencies, exchangeRates);
      return currencies;
    });
  };

  const getCurrencies = async () => {
    const currencyNames = await getCurrencyNames();
    let currencies = buildCurrenciesFromCurrencyNames(currencyNames);
    let exchangeRates = await getCurrenciesExchangeRates(
      appState.exchangeDateParam,
      appState.exchangeRelativeParam
    );
    currencies = setCurrenciesExchangeRates(currencies, exchangeRates);
    return currencies;
  };

  const buildCurrenciesFromCurrencyNames = (currenciesNames) => {
    const currenciesArray = [];
    if (typeof currenciesNames !== 'object') return currenciesArray;
    Object.keys(currenciesNames).forEach((symbol) => {
      currenciesArray.push({
        symbol,
        name: currenciesNames[symbol],
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
        }}
      >
        {props.children}
      </ExchangeRatesAppContext.Provider>
    </div>
  );
};

export default ExchangeRatesApp;
