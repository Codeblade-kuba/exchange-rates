import { useState, useEffect, useMemo } from 'react';

import { AppContext } from './contexts/appContext';
import { API_URL } from './data/constants';
import { appDefaultSettings } from './data/appDefaultSettings';

import Home from './pages/Home';

const App = () => {
  const [appState, setAppState] = useState(appDefaultSettings);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    setInitialCurrencies();
  }, []);

  useEffect(() => {
    updateCurrenciesExchangeRates();
  }, [appState.exchangeRelativeParam, appState.exchangeDateParam]);

  const setInitialCurrencies = async () => {
    let currencies = await getCurrencies();
    setCurrencies(currencies);
    updateCurrenciesExchangeRates();
  };

  const getCurrenciesExchangeRates = async () => {
    let exchangeRates = await fetch(
      buildAPIURL(appState.exchangeDateParam, appState.exchangeRelativeParam)
    );
    exchangeRates = await exchangeRates.json();
    return exchangeRates.rates;
  };

  const updateCurrenciesExchangeRates = async () => {
    let exchangeRates = await getCurrenciesExchangeRates();
    if (!exchangeRates) return false;
    setCurrencies((prev) => {
      const _currencies = [...prev];
      _currencies.forEach((currency) => {
        let exchangeRate = exchangeRates[currency.symbol];
        if (typeof exchangeRate !== 'number') return currency;
        currency.rate = exchangeRate;
        return currency;
      });
      return _currencies;
    });
  };

  const getCurrencies = async () => {
    const currencyNames = await getCurrencyNames();
    return buildCurrenciesFromCurrencyNames(currencyNames);
  };

  const getCurrencyNames = async () => {
    const currencyNames = await fetch(buildAPIURL('currencies'));
    return currencyNames.json();
  };

  const buildCurrenciesFromCurrencyNames = (currenciesNames) => {
    const currenciesArray = [];
    Object.keys(currenciesNames).forEach((symbol) => {
      currenciesArray.push({
        symbol,
        name: currenciesNames[symbol],
      });
    });
    return currenciesArray;
  };

  const buildAPIURL = (URI, relativeParam = null) => {
    let builtURL = API_URL + '/' + URI;
    if (relativeParam) {
      builtURL += '?from=' + relativeParam;
    }
    return builtURL;
  };

  return (
    <AppContext.Provider
      value={{
        currencies,
        setCurrencies,
        appState,
        setAppState,
      }}
    >
      <Home></Home>
    </AppContext.Provider>
  );
};

export default App;
