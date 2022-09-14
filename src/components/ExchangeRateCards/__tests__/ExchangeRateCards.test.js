import { screen } from '@testing-library/react';
import renderWithExchangeRatesAppContext from '../../../helpers/renderWithExchangeRatesAppContext';
import ExchangeRateCards from '..';

const testCurrencies = [
  {
    symbol: 'A',
    name: 'Currency A',
    isFavorite: false,
  },
  {
    symbol: 'C',
    name: 'Currency C',
    isFavorite: false,
  },
  {
    symbol: 'B',
    name: 'Currency B',
    isFavorite: true,
  },
  {
    symbol: 'D',
    name: 'Currency D',
    isFavorite: false,
  },
];

describe('ExchangeRateCards', () => {
  it('should be rendered', () => {
    renderWithExchangeRatesAppContext(<ExchangeRateCards />);
    const exchangeRateCards = screen.getByTestId('exchange-rate-cards');
    expect(exchangeRateCards).toBeInTheDocument();
  });

  it('instances should be rendered in good amount', () => {
    renderWithExchangeRatesAppContext(<ExchangeRateCards />, {
      currencies: testCurrencies,
    });
    const exchangeRateCardInstances = screen.getAllByLabelText(/rate/i);
    expect(exchangeRateCardInstances).toHaveLength(4);
  });

  it('should render instances default', () => {
    renderWithExchangeRatesAppContext(<ExchangeRateCards />, {
      currencies: testCurrencies,
    });
    const exchangeRateCardInstances = screen.getAllByRole('article');
    expect(exchangeRateCardInstances[0]).toHaveTextContent(
      testCurrencies[0].name
    );
    expect(exchangeRateCardInstances[1]).toHaveTextContent(
      testCurrencies[1].name
    );
    expect(exchangeRateCardInstances[2]).toHaveTextContent(
      testCurrencies[2].name
    );
    expect(exchangeRateCardInstances[3]).toHaveTextContent(
      testCurrencies[3].name
    );
  });

  it('should render instances alphabetically', () => {
    renderWithExchangeRatesAppContext(<ExchangeRateCards />, {
      appState: { sortingMethod: 'alphabetically' },
      currencies: testCurrencies,
    });
    const exchangeRateCardInstances = screen.getAllByRole('article');
    expect(exchangeRateCardInstances[0]).toHaveTextContent(
      testCurrencies[0].name
    );
    expect(exchangeRateCardInstances[1]).toHaveTextContent(
      testCurrencies[2].name
    );
    expect(exchangeRateCardInstances[2]).toHaveTextContent(
      testCurrencies[1].name
    );
    expect(exchangeRateCardInstances[3]).toHaveTextContent(
      testCurrencies[3].name
    );
  });

  it('ExchangeRateCards should render only favorites', () => {
    renderWithExchangeRatesAppContext(<ExchangeRateCards />, {
      appState: { showFavorites: true },
      currencies: testCurrencies,
    });
    const exchangeRateCardInstances = screen.getAllByRole('article');
    expect(exchangeRateCardInstances[0]).toHaveTextContent(
      testCurrencies[2].name
    );
  });
});
