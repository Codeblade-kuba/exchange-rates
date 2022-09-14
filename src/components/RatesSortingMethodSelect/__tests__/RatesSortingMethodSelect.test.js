import { screen } from '@testing-library/react';
import renderWithExchangeRatesAppContext from '../../../helpers/renderWithExchangeRatesAppContext';
import RatesSortingMethodSelect from '..';

describe('RatesSortingMethodSelect', () => {
  it('should be rendered', () => {
    renderWithExchangeRatesAppContext(<RatesSortingMethodSelect />);
    const ratesSortingMethodSelect = screen.getByLabelText(/sorting method/i);
    expect(ratesSortingMethodSelect).toBeInTheDocument();
  });

  it('should have proper initial value', () => {
    renderWithExchangeRatesAppContext(<RatesSortingMethodSelect />);
    const ratesSortingMethodSelect = screen.getByLabelText(/sorting method/i);
    expect(ratesSortingMethodSelect).toHaveValue('default');
  });

  it('options should have proper length', () => {
    renderWithExchangeRatesAppContext(<RatesSortingMethodSelect />);
    const ratesSortingMethodSelect = screen.getByLabelText(/sorting method/i);
    expect(ratesSortingMethodSelect).toHaveLength(3);
  });
});
