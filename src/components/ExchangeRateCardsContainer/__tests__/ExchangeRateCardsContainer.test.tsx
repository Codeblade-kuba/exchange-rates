import { screen } from '@testing-library/react';

import renderWithExchangeRatesAppContext from '../../../helpers/renderWithExchangeRatesAppContext';
import ExchangeRateCardsContainer from '..';

const testCurrencies = [
  {
    symbol: 'A',
    name: 'Currency A',
    isFavorite: false,
  },
  {
    symbol: 'C',
    name: 'Currency C',
    isFavorite: false,
  },
  {
    symbol: 'B',
    name: 'Currency B',
    isFavorite: true,
  },
  {
    symbol: 'D',
    name: 'Currency D',
    isFavorite: false,
  },
];

describe('ExchangeRateCardsContainer', () => {
  it('should render cards', () => {
    renderWithExchangeRatesAppContext(<ExchangeRateCardsContainer />, {
      currencies: testCurrencies,
    });
    const exchangeRateCards = screen.getByTestId('exchange-rate-cards');
    expect(exchangeRateCards).toBeInTheDocument();
  });
  it('should show given message', () => {
    renderWithExchangeRatesAppContext(<ExchangeRateCardsContainer />, {
      error: new Error('asd'),
    });
    const errorMessage = screen.getByTestId('error-message');
    expect(errorMessage).toBeInTheDocument();
  });
});
