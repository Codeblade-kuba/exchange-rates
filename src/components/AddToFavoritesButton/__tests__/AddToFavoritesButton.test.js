import { screen } from '@testing-library/react';
import renderWithExchangeRatesAppContext from '../../../helpers/renderWithExchangeRatesAppContext';
import AddToFavoritesButton from '..';

describe('AddToFavoritesButton', () => {
  it('should be rendered', () => {
    renderWithExchangeRatesAppContext(<AddToFavoritesButton />);
    const addToFavoritesButton = screen.getByTitle(/add to favorite/i);
    expect(addToFavoritesButton).toBeInTheDocument();
  });
});
