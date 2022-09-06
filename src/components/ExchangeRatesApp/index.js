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
    const currencies = await getCurrencies();
    setCurrencies(currencies);
  };

  const getCurrenciesExchangeRates = async () => {
    let exchangeRates = await fetch(
      buildAPIURL(appState.exchangeDateParam, appState.exchangeRelativeParam)
    );
    exchangeRates = await exchangeRates.json();
    return exchangeRates.rates;
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
    let exchangeRates = await getCurrenciesExchangeRates();
    setCurrencies((prev) => {
      let currencies = [...prev];
      currencies = setCurrenciesExchangeRates(currencies, exchangeRates);
      return currencies;
    });
  };

  const getCurrencies = async () => {
    const currencyNames = await getCurrencyNames();
    let currencies = buildCurrenciesFromCurrencyNames(currencyNames);
    let exchangeRates = await getCurrenciesExchangeRates();
    currencies = setCurrenciesExchangeRates(currencies, exchangeRates);
    return currencies;
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
