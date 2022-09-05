import { screen } from '@testing-library/react';

import { renderWithExchangeRatesAppContext } from '../../utils/renderWithExchangeRatesAppContext';
import ShowFavoritesButton from '.';

test('ShowFavoritesButton should be rendered', () => {
  renderWithExchangeRatesAppContext(<ShowFavoritesButton />);
  const showFavoritesButton = screen.getByTestId('show-favorites-button');
  expect(showFavoritesButton).toBeInTheDocument();
});

test('ShowFavoritesButton initally should have "Show favorites" text', () => {
  renderWithExchangeRatesAppContext(<ShowFavoritesButton />);
  const showFavoritesButton = screen.getByTestId('show-favorites-button');
  expect(showFavoritesButton).toHaveTextContent('Show favorites');
});

test('ShowFavoritesButton should have "Hide favorites" text', () => {
  renderWithExchangeRatesAppContext(<ShowFavoritesButton />, {
    appState: { showFavorites: true },
  });
  const showFavoritesButton = screen.getByTestId('show-favorites-button');
  expect(showFavoritesButton).toHaveTextContent('Hide favorites');
});
