import { screen } from '@testing-library/react';

import renderWithExchangeRatesAppContext from '../../../helpers/renderWithExchangeRatesAppContext';
import ExchangeRateCard from '..';

const testCurrency = {
  name: 'testName',
  symbol: 'TNM',
  rate: 1.23456,
  isFavorite: false,
};

describe('ExchangeRateCard', () => {
  it('should be rendered', () => {
    renderWithExchangeRatesAppContext(
      <ExchangeRateCard currency={testCurrency} />
    );
    const exchangeRateCard = screen.getByRole('article');
    expect(exchangeRateCard).toBeInTheDocument();
  });

  it('initally should not have favorite class', () => {
    renderWithExchangeRatesAppContext(
      <ExchangeRateCard currency={testCurrency} />
    );
    const exchangeRateCard = screen.getByRole('article');
    expect(exchangeRateCard).not.toHaveClass('favorite');
  });

  it('should have favorite class when currency isFavorite', () => {
    renderWithExchangeRatesAppContext(
      <ExchangeRateCard currency={{ ...testCurrency, isFavorite: true }} />
    );
    const exchangeRateCard = screen.getByRole('article');
    expect(exchangeRateCard).toHaveClass('favorite');
  });

  it('should show proper exchange rate', () => {
    renderWithExchangeRatesAppContext(
      <ExchangeRateCard currency={testCurrency} />
    );
    const exchangeRateCardRate = screen.getByLabelText(/rate/i);
    expect(exchangeRateCardRate).toHaveValue(testCurrency.rate.toString());
  });
});
