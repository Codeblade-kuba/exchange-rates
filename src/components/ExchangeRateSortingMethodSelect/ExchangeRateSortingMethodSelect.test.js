import { screen } from '@testing-library/react';
import { renderWithAppContext } from '../../utils/renderWithAppContext';
import ExchangeRateSortingMethodSelect from '.';

test('ExchangeRateSortingMethodSelect should be rendered', () => {
  renderWithAppContext(<ExchangeRateSortingMethodSelect />);
  const exchangeRateSortingMethodSelect = screen.getByTestId(
    'exchange-rate-sorting-method-select'
  );
  expect(exchangeRateSortingMethodSelect).toBeInTheDocument();
});

test('ExchangeRateSortingMethodSelect should have proper initial value', () => {
  renderWithAppContext(<ExchangeRateSortingMethodSelect />);
  const exchangeRateSortingMethodSelect = screen.getByTestId(
    'exchange-rate-sorting-method-select'
  );
  expect(exchangeRateSortingMethodSelect).toHaveValue('default');
});

test('ExchangeRateSortingMethodSelect options should have proper length', () => {
  renderWithAppContext(<ExchangeRateSortingMethodSelect />);
  const exchangeRateSortingMethodSelect = screen.getAllByTestId(
    'exchange-rate-sorting-method-select-option'
  );
  expect(exchangeRateSortingMethodSelect).toHaveLength(3);
});
