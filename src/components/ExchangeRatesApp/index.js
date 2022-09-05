import { useState, useEffect } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import { API_URL } from '../../data/constants';
import { appDefaultSettings } from '../../data/appDefaultSettings';

const ExchangeRatesApp = (props) => {
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
  );
};

export default ExchangeRatesApp;
