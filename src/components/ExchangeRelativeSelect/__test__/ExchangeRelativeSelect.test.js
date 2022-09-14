import { within, screen } from '@testing-library/react';
import renderWithExchangeRatesAppContext from '../../../helpers/renderWithExchangeRatesAppContext';
import ExchangeRelativeSelect from '..';

const testCurrencies = [
  { symbol: 'TEST1' },
  { symbol: 'TEST2' },
  { symbol: 'TEST3' },
];

describe('ExchangeRelativeSelect', () => {
  it('should be rendered', () => {
    renderWithExchangeRatesAppContext(<ExchangeRelativeSelect />);
    const exchangeRelativeSelect = screen.getByLabelText(/relative currency/i);
    expect(exchangeRelativeSelect).toBeInTheDocument();
  });

  it('should have proper value', () => {
    renderWithExchangeRatesAppContext(<ExchangeRelativeSelect />, {
      appState: { exchangeRelativeParam: testCurrencies[0].symbol },
      currencies: testCurrencies,
    });
    const exchangeRelativeSelect = screen.getByLabelText(/relative currency/i);
    expect(exchangeRelativeSelect).toHaveValue('TEST1');
  });

  it('should have all currencies options', () => {
    renderWithExchangeRatesAppContext(<ExchangeRelativeSelect />, {
      appState: { exchangeRelativeParam: testCurrencies[0].symbol },
      currencies: testCurrencies,
    });
    const exchangeRelativeSelect = screen.getByLabelText(/relative currency/i);
    const exchangeRelativeSelectOptions = within(
      exchangeRelativeSelect
    ).getAllByRole('option');
    expect(exchangeRelativeSelectOptions).toHaveLength(3);
  });
});
