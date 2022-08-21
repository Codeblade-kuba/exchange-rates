import { useState, useEffect } from 'react';

import { ExchangeRateCardsContext } from './contexts/ExchangeRateCardsContext';

import Home from './pages/Home';

const API_URL = 'https://api.frankfurter.app';

function shuffle(array) {
  var m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

const App = () => {
  const [displayedCurrencies, setDisplayedCurrencies] = useState([]);
  const [exchangeRelativeParam, setExchangeRelativeParam] = useState('EUR');
  const [exchangeDateParam, setExchangeDateParam] = useState('latest');
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [decimalPlaces, setDecimalPlaces] = useState(5);
  const [sortingMethod, setSortingMethod] = useState('default');
  const [reset, setReset] = useState(false);

  useEffect(() => {
    setDisplayedCurrencies([]);
    setExchangeRelativeParam('EUR');
    setExchangeDateParam('latest');
    setFavorites([]);
    setShowFavorites(false);
    setDecimalPlaces(5);
    setSortingMethod('default');
    setReset(false);
  }, [reset]);

  useEffect(
    () => updateDisplayedCurrencies(),
    [
      exchangeRelativeParam,
      exchangeDateParam,
      showFavorites,
      favorites,
      decimalPlaces,
      sortingMethod,
      reset,
    ]
  );

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
        if (showFavorites) {
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

        exchangeRate = exchangeRate.toFixed(decimalPlaces);
        currency.rate = exchangeRate;
        return currency;
      });
      return currencies;
    });
  };

  const updateCurrenciesFavoriteStatus = (currencies) => {
    currencies.forEach((currency) => {
      currency.isFavorite = favorites.includes(currency.symbol);
    });
    return currencies;
  };

  const sortCurrencies = (currencies) => {
    switch (sortingMethod) {
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
    return fetch(buildAPIURL(exchangeDateParam))
      .then((response) => response.json())
      .then((response) => response.rates);
  };

  const buildAPIURL = (URI) => {
    const res = API_URL + '/' + URI + '?from=' + exchangeRelativeParam;
    return res;
  };

  return (
    <ExchangeRateCardsContext.Provider
      value={{
        displayedCurrencies,
        setDisplayedCurrencies,
        exchangeRelativeParam,
        setExchangeRelativeParam,
        exchangeDateParam,
        setExchangeDateParam,
        favorites,
        setFavorites,
        showFavorites,
        setShowFavorites,
        decimalPlaces,
        setDecimalPlaces,
        sortingMethod,
        setSortingMethod,
        setReset,
      }}
    >
      <Home></Home>
    </ExchangeRateCardsContext.Provider>
  );
};

export default App;
