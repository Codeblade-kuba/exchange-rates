import { screen } from '@testing-library/react';
import { renderWithExchangeRatesAppContext } from '../../utils/renderWithExchangeRatesAppContext';
import AddToFavoriteButton from '.';

test('AddToFavoriteButton should be rendered', () => {
  renderWithExchangeRatesAppContext(<AddToFavoriteButton />);
  const addToFavoriteButton = screen.getByTestId('add-to-favorite-button');
  expect(addToFavoriteButton).toBeInTheDocument();
});
