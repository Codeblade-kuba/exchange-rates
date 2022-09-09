import { screen } from '@testing-library/react';
import { renderWithExchangeRatesAppContext } from '../../../helpers/renderWithExchangeRatesAppContext';
import ResetButton from '..';

describe('ResetButton', () => {
  it('should be rendered', () => {
    renderWithExchangeRatesAppContext(<ResetButton />);
    const showFavoritesButton = screen.getByTitle(/reset settings/i);
    expect(showFavoritesButton).toBeInTheDocument();
  });
});
