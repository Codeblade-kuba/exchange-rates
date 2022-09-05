import { screen } from '@testing-library/react';
import { renderWithExchangeRatesAppContext } from '../../utils/renderWithExchangeRatesAppContext';
import ExchangeRateSortingMethodSelect from '.';

test('ExchangeRateSortingMethodSelect should be rendered', () => {
  renderWithExchangeRatesAppContext(<ExchangeRateSortingMethodSelect />);
  const exchangeRateSortingMethodSelect = screen.getByTestId(
    'exchange-rate-sorting-method-select'
  );
  expect(exchangeRateSortingMethodSelect).toBeInTheDocument();
});

test('ExchangeRateSortingMethodSelect should have proper initial value', () => {
  renderWithExchangeRatesAppContext(<ExchangeRateSortingMethodSelect />);
  const exchangeRateSortingMethodSelect = screen.getByTestId(
    'exchange-rate-sorting-method-select'
  );
  expect(exchangeRateSortingMethodSelect).toHaveValue('default');
});

test('ExchangeRateSortingMethodSelect options should have proper length', () => {
  renderWithExchangeRatesAppContext(<ExchangeRateSortingMethodSelect />);
  const exchangeRateSortingMethodSelect = screen.getAllByTestId(
    'exchange-rate-sorting-method-select-option'
  );
  expect(exchangeRateSortingMethodSelect).toHaveLength(3);
});
