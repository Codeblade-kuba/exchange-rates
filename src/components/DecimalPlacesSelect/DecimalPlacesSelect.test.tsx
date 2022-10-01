import { screen, within } from '@testing-library/react';

import renderWithExchangeRatesAppContext from '../../helpers/renderWithExchangeRatesAppContext';
import DecimalPlacesSelect from '.';
import appDefaultSettings from '../ExchangeRatesApp/data/appDefaultSettings';
import settings from './data/settings';

describe('DecimalPlacesSelect', () => {
  it('should be rendered', () => {
    renderWithExchangeRatesAppContext(<DecimalPlacesSelect />);
    const decimalPlacesSelect = screen.getByLabelText(/decimal places/i);
    expect(decimalPlacesSelect).toBeInTheDocument();
  });

  it('should have proper initial value', () => {
    renderWithExchangeRatesAppContext(<DecimalPlacesSelect />);
    const decimalPlacesSelect = screen.getByLabelText(/decimal places/i);
    const decimalPlacesSelected = within(decimalPlacesSelect).getByRole(
      'option',
      { selected: true }
    );
    expect(decimalPlacesSelected).toHaveTextContent(
      appDefaultSettings.decimalPlaces.toString()
    );
  });

  it('should have proper amount of options', () => {
    renderWithExchangeRatesAppContext(<DecimalPlacesSelect />);
    const decimalPlacesSelectOptions = within(
      screen.getByLabelText(/decimal places/i)
    ).getAllByRole('option');
    expect(decimalPlacesSelectOptions).toHaveLength(settings.options.length);
  });
});
