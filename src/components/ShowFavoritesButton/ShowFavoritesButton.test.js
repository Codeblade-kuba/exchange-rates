import { screen } from '@testing-library/react';

import { renderWithAppContext } from '../../utils/renderWithAppContext';
import ShowFavoritesButton from '.';

test('ShowFavoritesButton should be rendered', () => {
  renderWithAppContext(<ShowFavoritesButton />);
  const showFavoritesButton = screen.getByTestId('show-favorites-button');
  expect(showFavoritesButton).toBeInTheDocument();
});

test('ShowFavoritesButton initally should have "Show favorites" text', () => {
  renderWithAppContext(<ShowFavoritesButton />);
  const showFavoritesButton = screen.getByTestId('show-favorites-button');
  expect(showFavoritesButton).toHaveTextContent('Show favorites');
});

test('ShowFavoritesButton should have "Hide favorites" text', () => {
  renderWithAppContext(<ShowFavoritesButton />, {
    appState: { showFavorites: true },
  });
  const showFavoritesButton = screen.getByTestId('show-favorites-button');
  expect(showFavoritesButton).toHaveTextContent('Hide favorites');
});
