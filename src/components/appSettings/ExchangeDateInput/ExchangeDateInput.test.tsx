import { screen } from '@testing-library/react';

import renderWithExchangeRatesAppContext from '../../../helpers/renderWithAppContext';
import ExchangeDateInput from '.';
import getDateString from '../../../helpers/getDateString';

describe('ExchangeDateInput', () => {
  it('should be rendered', () => {
    renderWithExchangeRatesAppContext(<ExchangeDateInput />);
    const exchangeDateInput = screen.getByLabelText(/date/i);
    expect(exchangeDateInput).toBeInTheDocument();
  });

  it('should show proper initial value', () => {
    renderWithExchangeRatesAppContext(<ExchangeDateInput />);
    const exchangeDateInput = screen.getByLabelText(/date/i);
    expect(exchangeDateInput).toHaveValue(getDateString(new Date(), '.', true));
  });
});
