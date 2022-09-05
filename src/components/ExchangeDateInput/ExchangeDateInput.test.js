import { screen } from '@testing-library/react';
import { renderWithExchangeRatesAppContext } from '../../utils/renderWithExchangeRatesAppContext';
import ExchangeDateInput from '.';

test('ExchangeDateInput should be rendered', () => {
  renderWithExchangeRatesAppContext(<ExchangeDateInput />);
  const exchangeDateInput = screen.getByTestId('exchange-date-input');
  expect(exchangeDateInput).toBeInTheDocument();
});

test('ExchangeDateInput should have empty initial value', () => {
  renderWithExchangeRatesAppContext(<ExchangeDateInput />);
  const exchangeDateInput = screen.getByTestId('exchange-date-input');
  expect(exchangeDateInput).toHaveValue('');
});
