import { useContext } from 'react';

import AddToFavoriteButton from '../AddToFavoriteButton';
import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';

const ExchangeRateCard = ({ currency }) => {
  const { appState } = useContext(ExchangeRatesAppContext);

  const addClassesToExchangeRatesCard = (currency) => {
    let classes = 'exchange-rate-card';
    if (currency.isFavorite) classes += ' favorite';
    return classes;
  };

  const getFixedCurrencyRate = (currency) => {
    if (typeof currency.rate === 'number') {
      return currency.rate.toFixed(appState.decimalPlaces);
    }
    return currency.rate;
  };

  return (
    <article className={addClassesToExchangeRatesCard(currency)}>
      <header>
        <AddToFavoriteButton currency={currency} />
        <h4>{currency.name}</h4>
      </header>
      <div>
        <div>
          <label htmlFor={`currency-${currency.symbol}-symbol`}>Symbol:</label>
          <input
            id={`currency-${currency.symbol}-symbol`}
            value={currency.symbol}
            type="text"
            readOnly
          />
        </div>
        <div>
          <label htmlFor={`currency-${currency.symbol}-rate`}>Rate:</label>
          <input
            id={`currency-${currency.symbol}-rate`}
            value={getFixedCurrencyRate(currency)}
            type="text"
            readOnly
          />
        </div>
      </div>
    </article>
  );
};

export default ExchangeRateCard;
