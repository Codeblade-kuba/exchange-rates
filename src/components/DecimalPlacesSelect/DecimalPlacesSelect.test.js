import { screen } from '@testing-library/react';
import { renderWithAppContext } from '../../utils/renderWithAppContext';
import DecimalPlacesSelect from '.';
import { appDefaultSettings } from '../../data/appDefaultSettings';

test('DecimalPlacesSelect should be rendered', () => {
  renderWithAppContext(<DecimalPlacesSelect />);
  const decimalPlacesSelect = screen.getByTestId('decimal-places-select');
  expect(decimalPlacesSelect).toBeInTheDocument();
});

test('DecimalPlacesSelect should have proper initial value', () => {
  renderWithAppContext(<DecimalPlacesSelect />);
  const decimalPlacesSelect = screen.getByTestId('decimal-places-select');
  expect(decimalPlacesSelect).toHaveValue(
    appDefaultSettings.decimalPlaces.toString()
  );
});

test('DecimalPlacesSelect should have proper amount of options', () => {
  renderWithAppContext(<DecimalPlacesSelect />);
  const decimalPlacesSelectOptions = screen.getAllByTestId(
    'decimal-places-select-option'
  );
  expect(decimalPlacesSelectOptions).toHaveLength(6);
});
