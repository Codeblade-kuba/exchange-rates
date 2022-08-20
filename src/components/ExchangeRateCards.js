import { useContext } from 'react';

import { ExchangeRateCardsContext } from '../contexts/ExchangeRateCardsContext';
import ExchangeRateCard from './ExchangeRateCard';

const ExchangeRateCards = () => {
  const { displayedCurrencies } = useContext(ExchangeRateCardsContext);

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
