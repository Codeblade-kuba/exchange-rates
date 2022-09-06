import { screen } from '@testing-library/react';
import { renderWithExchangeRatesAppContext } from '../../utils/renderWithExchangeRatesAppContext';
import ExchangeRateCards from '.';

const testCurrencies = [
  {
    name: 'Currency A',
    isFavorite: false,
  },
  {
    name: 'Currency C',
    isFavorite: false,
  },
  {
    name: 'Currency B',
    isFavorite: true,
  },
  {
    name: 'Currency D',
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
  const exchangeRateCardInstances = screen.getAllByTestId(
    'exchange-rate-card-rate'
  );
  expect(exchangeRateCardInstances).toHaveLength(4);
});

test('ExchangeRateCards should render instances default', () => {
  renderWithExchangeRatesAppContext(<ExchangeRateCards />, {
    currencies: testCurrencies,
  });
  const exchangeRateCardInstances = screen.getAllByTestId('exchange-rate-card');
  expect(exchangeRateCardInstances[0]).toHaveTextContent('Currency A');
  expect(exchangeRateCardInstances[1]).toHaveTextContent('Currency C');
  expect(exchangeRateCardInstances[2]).toHaveTextContent('Currency B');
  expect(exchangeRateCardInstances[3]).toHaveTextContent('Currency D');
});

test('ExchangeRateCards should render instances alphabetically', () => {
  renderWithExchangeRatesAppContext(<ExchangeRateCards />, {
    appState: { sortingMethod: 'alphabetically' },
    currencies: testCurrencies,
  });
  const exchangeRateCardInstances = screen.getAllByTestId('exchange-rate-card');
  expect(exchangeRateCardInstances[0]).toHaveTextContent('Currency A');
  expect(exchangeRateCardInstances[1]).toHaveTextContent('Currency B');
  expect(exchangeRateCardInstances[2]).toHaveTextContent('Currency C');
  expect(exchangeRateCardInstances[3]).toHaveTextContent('Currency D');
});

test('ExchangeRateCards should render only favorites', () => {
  renderWithExchangeRatesAppContext(<ExchangeRateCards />, {
    appState: { showFavorites: true },
    currencies: testCurrencies,
  });
  const exchangeRateCardInstances = screen.getAllByTestId('exchange-rate-card');
  expect(exchangeRateCardInstances[0]).toHaveTextContent('Currency B');
});
