import { useState, useEffect } from 'react';

import ExchangeRateCard from './ExchangeRateCard';
import { ExchangeRateCardsContext } from '../contexts/ExchangeRateCardsContext';

const API_URL = 'https://api.frankfurter.app';

const ExchangeRateCards = () => {
  const [displayedCurrencies, setDisplayedCurrencies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => updateDisplayedCurrencies(), [favorites]);

  function updateDisplayedCurrencies() {
    getCurrencies().then((currencies) => setDisplayedCurrencies(currencies));
  }

  const getCuerrencies = () => {
    const currencyNames = getCurrencyNames();
    const latestExchangeRates = getLatestExchangeRates();

    return Promise.all([latestExchangeRates, currencyNames]).then(
      ([latestExchangeRates, currencyNames]) => {
        let resultCurrenciesArray = [];
        Object.keys(latestExchangeRates).forEach((symbol) => {
          resultCurrenciesArray.push({
            symbol,
            name: currencyNames[symbol],
            rate: latestExchangeRates[symbol],
            favorite: favorites.includes(symbol),
          });
        });
        return resultCurrenciesArray;
      }
    );
  };

  const getCurrencies = () => {
    return fetch(API_URL + '/currencies')
      .then((response) => response.json())
      .then((response) => convertCurrenciesObjectToArray(response));
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

  const getLatestExchangeRates = () => {
    return fetch(API_URL + '/latest')
      .then((response) => response.json())
      .then((response) => response.rates);
  };

  return (
    <div>
      <ExchangeRateCardsContext.Provider value={{ favorites, setFavorites }}>
        {displayedCurrencies.map((currency, key) => (
          <ExchangeRateCard
            key={key}
            symbol={currency.symbol}
            name={currency.name}
            rate={currency.rate}
            favorite={currency.favorite}
          />
        ))}
      </ExchangeRateCardsContext.Provider>
    </div>
  );
};

export default ExchangeRateCards;
