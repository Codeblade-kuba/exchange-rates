import { useContext, useMemo } from 'react';

import './index.scss';

import ExchangeRatesAppContext from '../../contexts/ExchangeRatesAppContext';
import ExchangeRateCard from '../ExchangeRateCard';
import { shuffle } from '../../utils/shuffle';
import CurrencyInterface from '../ExchangeRatesApp/interfaces/Currency';

const ExchangeRateCards = () => {
  const { appState, currencies, isLoading } = useContext(
    ExchangeRatesAppContext
  );

  const sortedCurrencies = useMemo(() => {
    if (!currencies.length) return currencies;
    let sortedCurrencies = [...currencies];
    switch (appState?.sortingMethod) {
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
  }, [currencies, appState.sortingMethod]);

  const getCurrenciesToDisplay = () => {
    if (!appState.showFavorites) {
      return sortedCurrencies;
    }
    return sortedCurrencies.filter((currency) => currency.isFavorite);
  };

  const getArrayWithLength = (length: number) => {
    return Array(length).fill(0);
  };

  if (getCurrenciesToDisplay().length) {
    return (
      <section
        className="exchange-rate-cards"
        data-testid="exchange-rate-cards"
      >
        {getCurrenciesToDisplay().map((currency, index) => {
          return <ExchangeRateCard key={index} currency={currency} />;
        })}
      </section>
    );
  } else if (isLoading) {
    return (
      <section
        className="exchange-rate-cards"
        data-testid="exchange-rate-cards"
      >
        {getArrayWithLength(16).map((value, index) => {
          return <ExchangeRateCard key={index} />;
        })}
      </section>
    );
  } else {
    return <h2 className="alert">There are no currencies to display...</h2>;
  }
};

export default ExchangeRateCards;
