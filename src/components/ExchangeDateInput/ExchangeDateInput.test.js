import { screen } from '@testing-library/react';
import { renderWithAppContext } from '../../utils/renderWithAppContext';
import ExchangeDateInput from '.';

test('ExchangeDateInput should be rendered', () => {
  renderWithAppContext(<ExchangeDateInput />);
  const exchangeDateInput = screen.getByTestId('exchange-date-input');
  expect(exchangeDateInput).toBeInTheDocument();
});

test('ExchangeDateInput should have empty initial value', () => {
  renderWithAppContext(<ExchangeDateInput />);
  const exchangeDateInput = screen.getByTestId('exchange-date-input');
  expect(exchangeDateInput).toHaveValue('');
});
