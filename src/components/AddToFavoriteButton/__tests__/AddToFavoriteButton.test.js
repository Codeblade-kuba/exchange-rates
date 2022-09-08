import { screen } from '@testing-library/react';
import { renderWithExchangeRatesAppContext } from '../../../utils/renderWithExchangeRatesAppContext';
import AddToFavoriteButton from '..';

describe('AddToFavoriteButton', () => {
  it('should be rendered', () => {
    renderWithExchangeRatesAppContext(<AddToFavoriteButton />);
    const addToFavoriteButton = screen.getByTitle(/add to favorite/i);
    expect(addToFavoriteButton).toBeInTheDocument();
  });
});
