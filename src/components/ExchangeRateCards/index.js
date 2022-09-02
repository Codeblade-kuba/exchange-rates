import { useContext } from 'react';

import { AppContext } from '../../contexts/appContext';
import ExchangeRateCard from './ExchangeRateCard';

const ExchangeRateCards = () => {
  const { displayedCurrencies } = useContext(AppContext);

  return (
    <div>
      {displayedCurrencies.map((currency, index) => (
        <ExchangeRateCard
          key={index}
          symbol={currency.symbol}
          name={currency.name}
          rate={currency.rate}
          isFavorite={currency.isFavorite}
        />
      ))}
    </div>
  );
};

export default ExchangeRateCards;
