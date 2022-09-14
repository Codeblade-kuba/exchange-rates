import { screen } from '@testing-library/react';
import renderWithExchangeRatesAppContext from '../../../helpers/renderWithExchangeRatesAppContext';
import ExchangeDateInput from '..';

describe('ExchangeDateInput', () => {
  it('should be rendered', () => {
    renderWithExchangeRatesAppContext(<ExchangeDateInput />);
    const exchangeDateInput = screen.getByLabelText(/exchange date/i);
    expect(exchangeDateInput).toBeInTheDocument();
  });

  it('should have empty initial value', () => {
    renderWithExchangeRatesAppContext(<ExchangeDateInput />);
    const exchangeDateInput = screen.getByLabelText(/exchange date/i);
    expect(exchangeDateInput).toHaveValue('');
  });
});
