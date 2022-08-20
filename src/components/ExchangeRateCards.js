import { useState, useEffect } from 'react';

import ExchangeRateCard from './ExchangeRateCard';
import { ExchangeRateCardsContext } from '../contexts/ExchangeRateCardsContext';

const API_URL = 'https://api.frankfurter.app';

const ExchangeRateCards = () => {
  const [displayedCurrencies, setDisplayedCurrencies] = useState([]);
  const [exchangeRelativeParam, setExchangeRelativeParam] = useState('EUR');
  const [favorites, setFavorites] = useState([]);

  useEffect(
    () => updateDisplayedCurrencies(),
    [exchangeRelativeParam, favorites]
  );

  function updateDisplayedCurrencies() {
    getCurrencies().then((currencies) => setDisplayedCurrencies(currencies));
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
    return fetch(buildAPIURL('/currencies'));
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
    return fetch(buildAPIURL('/latest'))
      .then((response) => response.json())
      .then((response) => response.rates);
  };

  function buildAPIURL(URI) {
    return API_URL + URI + '?from=' + exchangeRelativeParam;
  }

  return (
    <div>
      <select
        name=""
        id=""
        onChange={(e) => setExchangeRelativeParam(e.target.value)}
      >
        {displayedCurrencies.map((currency, index) => (
          <option value={currency.symbol} key={index}>
            {currency.name}
          </option>
        ))}
      </select>
      <ExchangeRateCardsContext.Provider value={{ favorites, setFavorites }}>
        {displayedCurrencies.map((currency, index) => (
          <ExchangeRateCard
            key={index}
            symbol={currency.symbol}
            name={currency.name}
            rate={currency.rate}
            isFavorite={currency.isFavorite}
          />
        ))}
      </ExchangeRateCardsContext.Provider>
    </div>
  );
};

export default ExchangeRateCards;
