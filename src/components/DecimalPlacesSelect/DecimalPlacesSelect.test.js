import { screen } from '@testing-library/react';
import { renderWithExchangeRatesAppContext } from '../../utils/renderWithExchangeRatesAppContext';
import DecimalPlacesSelect from '.';
import { appDefaultSettings } from '../../data/appDefaultSettings';

test('DecimalPlacesSelect should be rendered', () => {
  renderWithExchangeRatesAppContext(<DecimalPlacesSelect />);
  const decimalPlacesSelect = screen.getByTestId('decimal-places-select');
  expect(decimalPlacesSelect).toBeInTheDocument();
});

test('DecimalPlacesSelect should have proper initial value', () => {
  renderWithExchangeRatesAppContext(<DecimalPlacesSelect />);
  const decimalPlacesSelect = screen.getByTestId('decimal-places-select');
  expect(decimalPlacesSelect).toHaveValue(
    appDefaultSettings.decimalPlaces.toString()
  );
});

test('DecimalPlacesSelect should have proper amount of options', () => {
  renderWithExchangeRatesAppContext(<DecimalPlacesSelect />);
  const decimalPlacesSelectOptions = screen.getAllByTestId(
    'decimal-places-select-option'
  );
  expect(decimalPlacesSelectOptions).toHaveLength(6);
});
