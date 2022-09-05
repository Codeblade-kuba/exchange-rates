import { screen } from '@testing-library/react';
import { renderWithExchangeRatesAppContext } from '../../utils/renderWithExchangeRatesAppContext';
import ExchangeRelativeSelect from '.';

const testCurrencies = [
  { symbol: 'TEST1' },
  { symbol: 'TEST2' },
  { symbol: 'TEST3' },
];

test('ExchangeRelativeSelect should be rendered', () => {
  renderWithExchangeRatesAppContext(<ExchangeRelativeSelect />);
  const exchangeRelativeSelect = screen.getByTestId('exchange-relative-select');
  expect(exchangeRelativeSelect).toBeInTheDocument();
});

test('ExchangeRelativeSelect should have proper value', () => {
  renderWithExchangeRatesAppContext(<ExchangeRelativeSelect />, {
    appState: { exchangeRelativeParam: testCurrencies[0].symbol },
    currencies: testCurrencies,
  });
  const exchangeRelativeSelect = screen.getByTestId('exchange-relative-select');
  expect(exchangeRelativeSelect).toHaveValue('TEST1');
});

test('ExchangeRelativeSelect should have all currencies options', () => {
  renderWithExchangeRatesAppContext(<ExchangeRelativeSelect />, {
    appState: { exchangeRelativeParam: testCurrencies[0].symbol },
    currencies: testCurrencies,
  });
  const exchangeRelativeSelectOptions = screen.getAllByTestId(
    'exchange-relative-select-option'
  );
  expect(exchangeRelativeSelectOptions).toHaveLength(3);
});
