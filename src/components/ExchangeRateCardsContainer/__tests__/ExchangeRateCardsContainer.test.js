import { screen } from '@testing-library/react';
import { renderWithExchangeRatesAppContext } from '../../../helpers/renderWithExchangeRatesAppContext';
import ExchangeRateCardsContainer from '..';

describe('ExchangeRateCardsContainer', () => {
  it('should render cards', () => {
    renderWithExchangeRatesAppContext(<ExchangeRateCardsContainer />);
    const exchangeRateCards = screen.getByTestId('exchange-rate-cards');
    expect(exchangeRateCards).toBeInTheDocument();
  });
  it('should show given message', () => {
    renderWithExchangeRatesAppContext(<ExchangeRateCardsContainer />, {
      error: 'Error',
    });
    const exchangeRateCards = screen.getByTestId('error-message');
    expect(exchangeRateCards).toBeInTheDocument();
  });
});
