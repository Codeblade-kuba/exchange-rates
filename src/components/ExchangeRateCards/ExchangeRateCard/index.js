import { useContext } from 'react';

import AddToFavorite from './AddToFavorite';
import { AppContext } from '../../../contexts/appContext';

const ExchangeRateCard = ({ currency }) => {
  const { appState } = useContext(AppContext);

  return (
    <div
      className={
        'exchange-rate-card ' + (currency.isFavorite ? 'favorite' : '')
      }
    >
      <header>
        <AddToFavorite currency={currency} />
        <h4>{currency.name}</h4>
      </header>
      <div>
        <div>
          <span>Symbol:</span>
          <b>{currency.symbol}</b>
        </div>
        <div>
          <span>Rate:</span>
          <b>{currency.rate?.toFixed(appState.decimalPlaces)}</b>
        </div>
      </div>
    </div>
  );
};

export default ExchangeRateCard;
