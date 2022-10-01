import { screen } from '@testing-library/react';

import renderWithExchangeRatesAppContext from '../../helpers/renderWithExchangeRatesAppContext';
import ShowFavoritesButton from '.';

describe('ShowFavoritesButton', () => {
  it('should render', () => {
    renderWithExchangeRatesAppContext(<ShowFavoritesButton />);
    const showFavoritesButton = screen.getByTitle(/toggle favorites/i);
    expect(showFavoritesButton).toBeInTheDocument();
  });

  it('initally should have "Show favorites" text', () => {
    renderWithExchangeRatesAppContext(<ShowFavoritesButton />);
    const showFavoritesButton = screen.getByTitle(/toggle favorites/i);
    expect(showFavoritesButton).toHaveTextContent('Show favorites');
  });

  it('should have "Hide favorites" text', () => {
    renderWithExchangeRatesAppContext(<ShowFavoritesButton />, {
      appState: { showFavorites: true },
    });
    const showFavoritesButton = screen.getByTitle(/toggle favorites/i);
    expect(showFavoritesButton).toHaveTextContent('Hide favorites');
  });
});
