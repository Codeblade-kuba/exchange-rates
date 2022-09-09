import { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import ExchangeRateCard from '../ExchangeRateCard';
import { shuffle } from '../../utils/shuffle';
import { useMemo } from 'react';
import { useCallback } from 'react';

const ExchangeRateCards = () => {
  const { appState, currencies } = useContext(ExchangeRatesAppContext);

  const shouldRenderExchangeCard = (currency) => {
    if (appState.showFavorites) {
      if (currency.isFavorite) return true;
      return false;
    }
    return true;
  };

  const sortedCurrencies = useMemo(() => {
    console.log(appState.exchangeRelativeParam);
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
  }, [currencies.length, appState.sortingMethod]);

  return (
    <section data-testid="exchange-rate-cards">
      {sortedCurrencies.map((currency, index) => {
        if (shouldRenderExchangeCard(currency))
          return <ExchangeRateCard key={index} currency={currency} />;
        return false;
      })}
    </section>
  );
};

export default ExchangeRateCards;
