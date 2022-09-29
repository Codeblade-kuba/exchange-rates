import { useContext } from 'react';

import './index.scss';

import AddToFavoritesButton from '../AddToFavoritesButton';
import ExchangeRatesAppContext from '../../contexts/ExchangeRatesAppContext';
import CurrencyInterface from '../ExchangeRatesApp/interfaces/Currency';

const ExchangeRateCard = ({ currency }: { currency: CurrencyInterface }) => {
  const { appState } = useContext(ExchangeRatesAppContext);

  const addClassesToExchangeRatesCard = (currency: CurrencyInterface) => {
    let classes = 'exchange-rate-card';
    if (currency.isFavorite) classes += ' favorite';
    return classes;
  };

  const roundNumber = (number: number, decimalPlaces: number) => {
    const modifier = Math.pow(10, decimalPlaces);
    return Math.round(number * modifier) / modifier;
  };

  const getRoundedCurrencyRate = (currency: CurrencyInterface) => {
    if (!currency.rate) return;
    return roundNumber(currency.rate, appState.decimalPlaces);
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
            tabIndex={-1}
            readOnly
          />
        </div>
        <div className="exchange-rate-card-rate-wrapper">
          <label htmlFor={`currency-${currency.symbol}-rate`}>Rate:</label>
          <input
            id={`currency-${currency.symbol}-rate`}
            value={getRoundedCurrencyRate(currency)}
            type="text"
            tabIndex={-1}
            readOnly
          />
        </div>
      </section>
    </article>
  );
};

export default ExchangeRateCard;
