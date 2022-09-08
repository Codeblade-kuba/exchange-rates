import { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import ExchangeRateCard from '../ExchangeRateCard';
import { shuffle } from '../../utils/shuffle';

const ExchangeRateCards = () => {
  const { appState, currencies } = useContext(ExchangeRatesAppContext);

  const shouldRenderExchangeCard = (currency) => {
    if (appState.showFavorites) {
      if (currency.isFavorite) return true;
      return false;
    }
    return true;
  };

  const getSortedCurrencies = () => {
    let sortedCurrencies = [...currencies];
    switch (appState.sortingMethod) {
      case 'alphabetically':
        sortedCurrencies = sortedCurrencies.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
        break;
      case 'random':
        sortedCurrencies = shuffle(sortedCurrencies);
        break;
      default:
        break;
    }
    return sortedCurrencies;
  };

  return (
    <div data-testid="exchange-rate-cards">
      {getSortedCurrencies().map((currency, index) => {
        if (shouldRenderExchangeCard(currency))
          return <ExchangeRateCard key={index} currency={currency} />;
        return false;
      })}
    </div>
  );
};

export default ExchangeRateCards;
