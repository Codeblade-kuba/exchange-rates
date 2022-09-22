import { screen, within } from '@testing-library/react';
import renderWithExchangeRatesAppContext from '../../../helpers/renderWithExchangeRatesAppContext';
import RatesSortingMethodSelect from '..';

describe('RatesSortingMethodSelect', () => {
  it('should be rendered', () => {
    renderWithExchangeRatesAppContext(<RatesSortingMethodSelect />);
    const ratesSortingMethodSelect = screen.getByLabelText(/sorting/i);
    expect(ratesSortingMethodSelect).toBeInTheDocument();
  });

  it('should have proper initial value', () => {
    renderWithExchangeRatesAppContext(<RatesSortingMethodSelect />);
    const ratesSortingMethodSelect = screen.getByLabelText(/sorting/i);
    const ratesSortingMethodSelectedOption = within(
      ratesSortingMethodSelect
    ).getByRole('option', { selected: true });
    expect(ratesSortingMethodSelectedOption).toHaveTextContent('default');
  });

  it('options should have proper length', () => {
    renderWithExchangeRatesAppContext(<RatesSortingMethodSelect />);
    const ratesSortingMethodSelect = screen.getByLabelText(/sorting/i);
    const ratesSortingMethodOptions = within(
      ratesSortingMethodSelect
    ).getAllByRole('option');
    expect(ratesSortingMethodOptions).toHaveLength(3);
  });
});
