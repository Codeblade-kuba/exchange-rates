import { screen, within } from '@testing-library/react';
import { renderWithExchangeRatesAppContext } from '../../utils/renderWithExchangeRatesAppContext';
import ExchangeRateCards from '.';

const testCurrencies = [
  {
    name: 'A',
    isFavorite: false,
  },
  {
    name: 'C',
    isFavorite: false,
  },
  {
    name: 'B',
    isFavorite: true,
  },
  {
    name: 'D',
    isFavorite: false,
  },
];

test('ExchangeRateCards should be rendered', () => {
  renderWithExchangeRatesAppContext(<ExchangeRateCards />);
  const exchangeRateCards = screen.getByTestId('exchange-rate-cards');
  expect(exchangeRateCards).toBeInTheDocument();
});

test('ExchangeRateCard instances should be rendered in good amount', () => {
  renderWithExchangeRatesAppContext(<ExchangeRateCards />, {
    currencies: testCurrencies,
  });
  const exchangeRateCardInstances = screen.getAllByTestId('exchange-rate-card');
  expect(exchangeRateCardInstances).toHaveLength(4);
});

test('ExchangeRateCards should render instances alphabetically', () => {
  renderWithExchangeRatesAppContext(<ExchangeRateCards />, {
    appState: { sortingMethod: 'alphabetically' },
    currencies: testCurrencies,
  });
  const exchangeRateCardInstances = screen.getAllByTestId('exchange-rate-card');
  expect(exchangeRateCardInstances[0]).toHaveTextContent('A');
  expect(exchangeRateCardInstances[1]).toHaveTextContent('B');
  expect(exchangeRateCardInstances[2]).toHaveTextContent('C');
  expect(exchangeRateCardInstances[3]).toHaveTextContent('D');
});
