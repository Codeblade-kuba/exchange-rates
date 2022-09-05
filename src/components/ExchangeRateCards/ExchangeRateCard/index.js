import { useContext } from 'react';

import AddToFavoriteButton from '../../AddToFavoriteButton';
import { ExchangeRatesAppContext } from '../../../contexts/ExchangeRatesAppContext';

const ExchangeRateCard = ({ currency }) => {
  const { appState } = useContext(ExchangeRatesAppContext);

  const addClassesToExchangeRatesCard = (currency) => {
    let classes = 'exchange-rate-card';
    if (currency.isFavorite) classes += ' favorite';
    return classes;
  };

  const getFixedCurrencyRate = (currency) => {
    if (currency.rate) {
      return currency.rate.toFixed(appState.decimalPlaces);
    }
    return '';
  };

  return (
    <div
      className={addClassesToExchangeRatesCard(currency)}
      data-testid="exchange-rate-card"
    >
      <header>
        <AddToFavoriteButton currency={currency} />
        <h4>{currency.name}</h4>
      </header>
      <div>
        <div>
          <span>Symbol:</span>
          <b>{currency.symbol}</b>
        </div>
        <div>
          <span>Rate:</span>
          <b data-testid="exchange-rate-card-rate">
            {getFixedCurrencyRate(currency)}
          </b>
        </div>
      </div>
    </div>
  );
};

export default ExchangeRateCard;
