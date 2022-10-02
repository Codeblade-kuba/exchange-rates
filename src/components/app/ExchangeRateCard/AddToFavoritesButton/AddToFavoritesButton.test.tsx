import { screen } from '@testing-library/react';

import renderWithExchangeRatesAppContext from '../../../../helpers/renderWithExchangeRatesAppContext';
import AddToFavoritesButton from '.';
import CurrencyInterface from '../../ExchangeRatesApp/types/Currency';

const testedCurrency: CurrencyInterface = {
  name: 'Test',
  symbol: 'TST',
  rate: 1.2345,
  isFavorite: false,
};

describe('AddToFavoritesButton', () => {
  it('should be rendered', () => {
    renderWithExchangeRatesAppContext(
      <AddToFavoritesButton currency={testedCurrency} />
    );
    const addToFavoritesButton = screen.getByTitle(/add to favorite/i);
    expect(addToFavoritesButton).toBeInTheDocument();
  });
});
