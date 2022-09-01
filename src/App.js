import { useState, useEffect } from 'react';

import { AppContext } from './contexts/appContext';
import { API_URL } from './data/constants';
import { shuffle } from './utils/shuffle';

import Home from './pages/Home';

const defaultAppState = {
  exchangeRelativeParam: 'EUR',
  exchangeDateParam: 'latest',
  favorites: [],
  decimalPlaces: 5,
  sortingMethod: 'default',
  showFavorites: false,
  reset: false,
};

const App = () => {
  const [appState, setAppState] = useState(defaultAppState);
  const [displayedCurrencies, setDisplayedCurrencies] = useState([]);

  useEffect(() => {
    setDisplayedCurrencies([]);
    setAppState(defaultAppState);
  }, [appState.reset]);

  useEffect(updateDisplayedCurrencies, [appState]);

  function updateDisplayedCurrencies() {
    getCurrencies().then((currencies) => setDisplayedCurrencies(currencies));
  }

  const getCurrencies = () => {
    const currencies = getRawCurrenciesObject()
      .then((response) => response.json())
      .then((response) => convertCurrenciesObjectToArray(response))
      .then((response) => updateCurrenciesWithExchangeRates(response))
      .then((response) => updateCurrenciesFavoriteStatus(response))
      .then((response) => {
        if (appState.showFavorites) {
          return response.filter((currency) => currency.isFavorite);
        }
        return response;
      })
      .then((response) => sortCurrencies(response));
    return currencies;
  };

  const getRawCurrenciesObject = () => {
    return fetch(buildAPIURL('currencies'));
  };

  const convertCurrenciesObjectToArray = (currenciesObject) => {
    const currenciesArray = [];
    Object.keys(currenciesObject).forEach((symbol) => {
      currenciesArray.push({
        symbol,
        name: currenciesObject[symbol],
      });
    });
    return currenciesArray;
  };

  const updateCurrenciesWithExchangeRates = (currencies) => {
    return getLatestExchangeRates().then((latestExchangeRates) => {
      currencies.forEach((currency) => {
        let exchangeRate = latestExchangeRates[currency.symbol];
        if (typeof exchangeRate !== 'number') return currency;

        exchangeRate = exchangeRate.toFixed(appState.decimalPlaces);
        currency.rate = exchangeRate;
        return currency;
      });
      return currencies;
    });
  };

  const updateCurrenciesFavoriteStatus = (currencies) => {
    currencies.forEach((currency) => {
      currency.isFavorite = appState.favorites.includes(currency.symbol);
    });
    return currencies;
  };

  const sortCurrencies = (currencies) => {
    switch (appState.sortingMethod) {
      case 'alphabetically':
        return currencies.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
      case 'random':
        return shuffle(currencies);
      default:
        return currencies;
    }
  };

  const getLatestExchangeRates = () => {
    return fetch(buildAPIURL(appState.exchangeDateParam))
      .then((response) => response.json())
      .then((response) => response.rates);
  };

  const buildAPIURL = (URI) => {
    const res = API_URL + '/' + URI + '?from=' + appState.exchangeRelativeParam;
    return res;
  };

  return (
    <AppContext.Provider
      value={{
        displayedCurrencies,
        setDisplayedCurrencies,
        appState,
        setAppState,
      }}
    >
      <Home></Home>
    </AppContext.Provider>
  );
};

export default App;
