import React, { useContext } from 'react';

import './index.scss';
import AddToFavoritesButton from '../AddToFavoritesButton';
import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import CurrencyInterface from '../ExchangeRatesApp/interfaces/Currency';

const ExchangeRateCard = ({ currency }: { currency: CurrencyInterface }) => {
  const { appState } = useContext(ExchangeRatesAppContext);

  const addClassesToExchangeRatesCard = (currency: CurrencyInterface) => {
    let classes = 'exchange-rate-card';
    if (currency.isFavorite) classes += ' favorite';
    return classes;
  };

  const getFixedCurrencyRate = (currency: CurrencyInterface) => {
    if (!currency || !currency.rate) return;
    return currency.rate.toFixed(appState?.decimalPlaces);
  };

  return (
    <article className={addClassesToExchangeRatesCard(currency)}>
      <header>
        <AddToFavoritesButton currency={currency} />
        <h2>{currency.name}</h2>
      </header>
      <section className="exchange-rate-card-infos">
        <div className="exchange-rate-card-symbol-wrapper">
          <label htmlFor={`currency-${currency.symbol}-symbol`}>Symbol:</label>
          <input
            className="exchange-rate-card-symbol"
            id={`currency-${currency.symbol}-symbol`}
            value={currency.symbol}
            type="text"
            readOnly
          />
        </div>
        <div className="exchange-rate-card-rate-wrapper">
          <label htmlFor={`currency-${currency.symbol}-rate`}>Rate:</label>
          <input
            id={`currency-${currency.symbol}-rate`}
            value={getFixedCurrencyRate(currency)}
            type="text"
            readOnly
          />
        </div>
      </section>
    </article>
  );
};

export default ExchangeRateCard;
