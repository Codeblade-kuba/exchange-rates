import { screen } from '@testing-library/react';
import renderWithExchangeRatesAppContext from '../../../helpers/renderWithExchangeRatesAppContext';
import ExchangeRateCardsContainer from '..';

describe('ExchangeRateCardsContainer', () => {
  it('should render cards', () => {
    renderWithExchangeRatesAppContext(<ExchangeRateCardsContainer />);
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
