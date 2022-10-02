import { useContext } from 'react';

import AddToFavoritesButton from './AddToFavoritesButton';
import ExchangeRatesAppContext from '../../../contexts/AppContext';
import CurrencyType from '../ExchangeRatesApp/types/Currency';
import roundNumber from '../../../utils/roundNumber';

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

  const getExchageCardClasses = () => {
    let classes = 'exchange-rate-card';
    if (isFavorite) classes += ' exchange-rate-card--favorite';
    if (!currency) classes += ' exchange-rate-card--skeleton';
    return classes;
  };

  return (
    <article className={getExchageCardClasses()}>
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
