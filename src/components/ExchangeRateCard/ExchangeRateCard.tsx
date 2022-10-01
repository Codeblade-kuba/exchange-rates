import { useContext } from 'react';

import AddToFavoritesButton from '../AddToFavoritesButton';
import ExchangeRatesAppContext from '../../contexts/ExchangeRatesAppContext';
import CurrencyType from '../ExchangeRatesApp/types/Currency';

const ExchangeRateCard = ({
  currency,
}: {
  currency?: CurrencyType;
}): JSX.Element => {
  const { appState } = useContext(ExchangeRatesAppContext);

  const symbol = currency?.symbol || null;
  const name = currency?.name || null;
  const rate = currency?.rate || null;
  const isFavorite = currency?.isFavorite || null;

  const roundNumber = (number: number, decimalPlaces: number) => {
    const modifier = Math.pow(10, decimalPlaces);
    return Math.round(number * modifier) / modifier;
  };

  const getRoundedCurrencyRate = (rate: number | null) => {
    if (!rate) return;
    return roundNumber(rate, appState.decimalPlaces);
  };

  const getCurrencySymbolElement = () => {
    if (symbol) {
      return (
        <input
          className="exchange-rate-card__value"
          id={`currency-${symbol}-symbol`}
          value={symbol}
          type="text"
          tabIndex={-1}
          readOnly
        />
      );
    } else {
      return <div className="exchange-rate-card__value"></div>;
    }
  };

  const getCurrencyRateElement = () => {
    if (rate) {
      return (
        <input
          id={`currency-${symbol}-rate`}
          className="exchange-rate-card__value"
          value={getRoundedCurrencyRate(rate)}
          type="text"
          tabIndex={-1}
          readOnly
        />
      );
    } else {
      return <div className="exchange-rate-card__value"></div>;
    }
  };

  return (
    <article
      className={`exchange-rate-card ${
        isFavorite ? 'exchange-rate-card--favorite' : ''
      } ${!currency ? 'exchange-rate-card--skeleton' : ''}`}
    >
      <header className="exchange-rate-card__header">
        <AddToFavoritesButton currency={currency} />
        <h2 className="exchange-rate-card__title">{name}</h2>
      </header>
      <section className="exchange-rate-card__content">
        <div className="exchange-rate-card__info exchange-rate-card__info--symbol">
          <label htmlFor={`currency-${symbol}-symbol`}>Symbol:</label>
          {getCurrencySymbolElement()}
        </div>
        <div className="exchange-rate-card__info exchange-rate-card__info--rate">
          <label htmlFor={`currency-${symbol}-rate`}>Rate:</label>
          {getCurrencyRateElement()}
        </div>
      </section>
    </article>
  );
};

export default ExchangeRateCard;
