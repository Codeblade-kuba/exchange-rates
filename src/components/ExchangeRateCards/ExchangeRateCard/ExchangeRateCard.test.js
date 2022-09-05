import { screen } from '@testing-library/react';
import { renderWithExchangeRatesAppContext } from '../../../utils/renderWithExchangeRatesAppContext';
import ExchangeRateCard from '.';

const testCurrency = {
  name: 'testName',
  symbol: 'TNM',
  rate: 1.2345,
  isFavorite: false,
};

test('ExchangeRateCard should be rendered', () => {
  renderWithExchangeRatesAppContext(
    <ExchangeRateCard currency={testCurrency} />
  );
  const exchangeRateCard = screen.getByTestId('exchange-rate-card');
  expect(exchangeRateCard).toBeInTheDocument();
});

test('ExchangeRateCard initally should not have favorite class', () => {
  renderWithExchangeRatesAppContext(
    <ExchangeRateCard currency={testCurrency} />
  );
  const exchangeRateCard = screen.getByTestId('exchange-rate-card');
  expect(exchangeRateCard).not.toHaveClass('favorite');
});

test('ExchangeRateCard should have favorite class when currency isFavorite', () => {
  renderWithExchangeRatesAppContext(
    <ExchangeRateCard currency={{ ...testCurrency, isFavorite: true }} />
  );
  const exchangeRateCard = screen.getByTestId('exchange-rate-card');
  expect(exchangeRateCard).toHaveClass('favorite');
});

test('ExchangeRateCard should show proper exchange rate', () => {
  renderWithExchangeRatesAppContext(
    <ExchangeRateCard currency={testCurrency} />
  );
  const exchangeRateCardRate = screen.getByTestId('exchange-rate-card-rate');
  expect(exchangeRateCardRate).toHaveTextContent(testCurrency.rate.toString());
});
