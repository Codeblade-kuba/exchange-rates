import { screen } from '@testing-library/react';
import { renderWithExchangeRatesAppContext } from '../../utils/renderWithExchangeRatesAppContext';
import ResetAppButton from '.';

test('ResetAppButton should be rendered', () => {
  renderWithExchangeRatesAppContext(<ResetAppButton />);
  const showFavoritesButton = screen.getByTitle('Reset app settings');
  expect(showFavoritesButton).toBeInTheDocument();
});
