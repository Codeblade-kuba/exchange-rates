import { useState, useEffect } from 'react';

import { ExchangeRateCardsContext } from './contexts/ExchangeRateCardsContext';

import Home from './pages/Home';

const API_URL = 'https://api.frankfurter.app';

const App = () => {
  const [displayedCurrencies, setDisplayedCurrencies] = useState([]);
  const [exchangeRelativeParam, setExchangeRelativeParam] = useState('EUR');
  const [exchangeDateParam, setExchangeDateParam] = useState('latest');
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(
    () => updateDisplayedCurrencies(),
    [exchangeRelativeParam, exchangeDateParam, showFavorites, favorites]
  );

  function updateDisplayedCurrencies() {
    if (showFavorites) {
      getCurrencies()
        .then((currencies) =>
          currencies.filter((currency) => currency.isFavorite)
        )
        .then((currencies) => setDisplayedCurrencies(currencies));
      getCurrencies().then((currencies) => setDisplayedCurrencies(currencies));
    } else {
      getCurrencies().then((currencies) => setDisplayedCurrencies(currencies));
    }
  }

  const getCurrencies = () => {
    const currencies = getRawCurrenciesObject()
      .then((response) => response.json())
      .then((response) => convertCurrenciesObjectToArray(response))
      .then((response) => updateCurrenciesWithExchangeRates(response))
      .then((response) => updateCurrenciesFavoriteStatus(response));
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
        currency.rate = latestExchangeRates[currency.symbol];
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
      }}
    >
      {console.log(showFavorites)}
      <Home></Home>
    </ExchangeRateCardsContext.Provider>
  );
};

export default App;
