import {
  fireEvent,
  render,
  screen,
  within,
  waitFor,
} from '@testing-library/react';
import ExchangeRatesApp from '..';
import Layout from '../../../layout/Layout';
import ExchangeRateCards from '../../ExchangeRateCards';
import getCurrencyNames from '../api/getCurrencyNames';
import getCurrenciesExchangeRates from '../api/getCurrenciesExchangeRates';

jest.mock('../api/getCurrencyNames');
jest.mock('../api/getCurrenciesExchangeRates');

const renderExchangeRatesApp = () => {
  render(
    <ExchangeRatesApp>
      <Layout>
        <ExchangeRateCards />
      </Layout>
    </ExchangeRatesApp>
  );
};

const currencyNamesTestData = {
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
};

const exchangeRatesTestData = {
  AUD: 1.4748,
  BGN: 1.9558,
};

beforeEach(() => {
  getCurrencyNames.mockImplementation(() => currencyNamesTestData);
  getCurrenciesExchangeRates.mockImplementation(() => exchangeRatesTestData);
});

describe('render', () => {
  test('ExchangeRatesApp should be rendered', () => {
    renderExchangeRatesApp();
    const exchangeRateCards = screen.getByTestId('exchange-rate-app');
    expect(exchangeRateCards).toBeInTheDocument();
  });

  test('ExchangeRateCard should be rendered in proper amount', async () => {
    renderExchangeRatesApp();
    const exchangeRateCardElements = await screen.findAllByRole('article');
    expect(exchangeRateCardElements).toHaveLength(
      Object.keys(currencyNamesTestData).length
    );
  });
});

describe('favorites functionality', () => {
  it('exchangeRateCard should have favorite class', async () => {
    renderExchangeRatesApp();
    const addToFavoriteButtons = await screen.findAllByTestId(
      'add-to-favorite-button'
    );
    fireEvent.click(addToFavoriteButtons[0]);
    const exchangeRateCardElements = await screen.findAllByRole('article');
    expect(exchangeRateCardElements[0]).toHaveClass('favorite');
  });

  it('app should show only favorites', async () => {
    renderExchangeRatesApp();

    const addToFavoriteButtons = await screen.findAllByTestId(
      'add-to-favorite-button'
    );
    fireEvent.click(addToFavoriteButtons[0]);

    const showFavoritesButton = await screen.findByTestId(
      'show-favorites-button'
    );
    fireEvent.click(showFavoritesButton);

    const exchangeRateCardElements = await screen.findAllByRole('article');
    expect(exchangeRateCardElements).toHaveLength(1);
  });
});

describe('decimal places functionality', () => {
  it('should change default amount of decimal places in rates', async () => {
    renderExchangeRatesApp();

    const testedDecimalPlacesAmount = 1;

    const decimalPlacesSelect = await screen.findByLabelText(/decimal places/i);
    fireEvent.change(decimalPlacesSelect, {
      target: { value: testedDecimalPlacesAmount },
    });

    const exchangeRates = await screen.findAllByLabelText(/rate/i);
    exchangeRates.forEach((rate) => {
      if (rate.value === 'Current') return false;
      const floatingPointNumbers = rate.value.split('.')[1];
      expect(floatingPointNumbers).toHaveLength(testedDecimalPlacesAmount);
    });
  });
});

describe('exchange relative', () => {
  it('should change relative exchange rate', async () => {
    renderExchangeRatesApp();

    const exchangeRelativeSelect = screen.getByLabelText(
      'Exchange relative currency'
    );
    await within(exchangeRelativeSelect).findAllByRole('option');

    getCurrenciesExchangeRates.mockImplementation(() => ({
      AUD: null,
      BGN: 1.9558,
    }));

    fireEvent.change(exchangeRelativeSelect, {
      target: { value: 'AUD' },
    });

    expect(getCurrenciesExchangeRates).toBeCalledTimes(2);

    let rate = within(screen.getAllByRole('article')[0]).getByLabelText(
      /rate/i
    );

    await waitFor(() => expect(rate).toHaveValue('Current'));
  });
});

describe('exchange date', () => {
  it('should change relative exchange date', async () => {
    renderExchangeRatesApp();
    const exchangeRelativeDateInput = screen.getByLabelText('Exchange date');

    getCurrenciesExchangeRates.mockImplementation(() => ({
      AUD: 1.6666,
      BGN: 1.7777,
    }));

    fireEvent.change(exchangeRelativeDateInput, {
      target: { value: '2022-01-01' },
    });

    expect(getCurrenciesExchangeRates).toBeCalledTimes(1);

    const exchangeRateCardElements = await screen.findAllByRole('article');
    let rate = within(exchangeRateCardElements[0]).getByLabelText(/rate/i);
    await waitFor(() => expect(rate).toHaveValue('1.66660'));
  });
});

describe('reset', () => {
  it('should reset all options', async () => {
    renderExchangeRatesApp();
    const exchangeRelativeDateInput = screen.getByLabelText(/exchange date/i);

    getCurrenciesExchangeRates.mockImplementation(() => ({
      AUD: 1.6666,
      BGN: 1.7777,
    }));

    fireEvent.change(exchangeRelativeDateInput, {
      target: { value: '2022-01-01' },
    });

    expect(getCurrenciesExchangeRates).toBeCalledTimes(1);

    const exchangeRateCardElements = await screen.findAllByRole('article');
    let rate = within(exchangeRateCardElements[0]).getByLabelText(/rate/i);
    await waitFor(() => expect(rate).toHaveValue('1.66660'));
  });
});
