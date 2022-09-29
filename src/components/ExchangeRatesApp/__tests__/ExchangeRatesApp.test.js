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
import getCurrencyNames from '../../../api/getCurrencyNames';
import getCurrenciesExchangeRates from '../../../api/getCurrenciesExchangeRates';
import getDateString from '../../../helpers/getDateString';
import appDefaultSettings from '../data/appDefaultSettings';

jest.mock('../../../api/getCurrencyNames');
jest.mock('../../../api/getCurrenciesExchangeRates');

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
  EUR: 'Euro',
};

const exchangeRatesTestData = {
  AUD: 1.4748,
  BGN: 1.9558,
  EUR: 1.5155,
};

beforeEach(() => {
  getCurrencyNames.mockImplementation(() => currencyNamesTestData);
  getCurrenciesExchangeRates.mockImplementation(() => exchangeRatesTestData);
});

describe('render', () => {
  it('ExchangeRateCard should be rendered in proper amount', async () => {
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
    const AddToFavoritesButtons = await screen.findAllByTestId(
      'add-to-favorite-button'
    );
    fireEvent.click(AddToFavoritesButtons[0]);
    const exchangeRateCardElements = await screen.findAllByRole('article');
    expect(exchangeRateCardElements[0]).toHaveClass('favorite');
  });

  it('app should show only favorites', async () => {
    renderExchangeRatesApp();

    const AddToFavoritesButtons = await screen.findAllByTestId(
      'add-to-favorite-button'
    );
    fireEvent.click(AddToFavoritesButtons[0]);

    const showFavoritesButton = await screen.findByTitle(/toggle favorites/i);
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
    const decimalPlacesOption = within(decimalPlacesSelect).getByText(
      testedDecimalPlacesAmount
    );
    fireEvent.click(decimalPlacesOption);

    const exchangeRates = await screen.findAllByLabelText(/rate/i);
    exchangeRates.forEach((rate) => {
      if (rate.value === '1.00000') return false;
      const floatingPointNumbers = rate.value.split('.')[1];
      if (!floatingPointNumbers) return false;
      expect(floatingPointNumbers).toHaveLength(testedDecimalPlacesAmount);
    });
  });
});

describe('exchange relative', () => {
  it('should change relative exchange rate', async () => {
    renderExchangeRatesApp();

    const exchangeRelativeSelect = screen.getByLabelText(/base/i);
    await within(exchangeRelativeSelect).findAllByRole('option');

    getCurrenciesExchangeRates.mockImplementation(() => ({
      AUD: null,
      BGN: 1.9558,
    }));

    const AUDExchangeRelativeOption = within(exchangeRelativeSelect).getByText(
      'AUD'
    );
    fireEvent.click(AUDExchangeRelativeOption);

    expect(getCurrenciesExchangeRates).toBeCalledTimes(2);

    let rate = within(screen.getAllByRole('article')[0]).getByLabelText(
      /rate/i
    );

    await waitFor(() => expect(rate).toHaveValue('1'));
  });
});

describe('exchange date', () => {
  it('should change relative exchange date', async () => {
    renderExchangeRatesApp();
    const exchangeRelativeDateInput = screen.getByLabelText(/date/i);

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
    await waitFor(() => expect(rate).toHaveValue('1.6666'));
  });
});

describe('reset', () => {
  it('should not be active initially', async () => {
    renderExchangeRatesApp();

    const resetButton = await screen.findByText(/reset/i);
    await waitFor(() => expect(resetButton).toBeDisabled());
  });
  it('should be active after changed setting', async () => {
    renderExchangeRatesApp();

    const decimalPlaces = screen.getByLabelText(/decimal places/i);
    fireEvent.click(within(decimalPlaces).getByText('3'));

    const resetButton = await screen.findByText(/reset/i);
    await waitFor(() => expect(resetButton).not.toBeDisabled());
  });
  it('should reset all options', async () => {
    renderExchangeRatesApp();

    const exchangeRelativeRateInput = screen.getByLabelText(/base/i);
    fireEvent.click(await within(exchangeRelativeRateInput).findByText('BGN'));

    const exchangeRelativeDateInput = screen.getByLabelText(/date/i);
    fireEvent.change(exchangeRelativeDateInput, {
      target: { value: '2022-01-01' },
    });

    const showFavorites = screen.getByTitle(/toggle favorites/i);
    fireEvent.click(showFavorites);

    const decimalPlaces = screen.getByLabelText(/decimal places/i);
    fireEvent.click(within(decimalPlaces).getByText('3'));

    const sortingMethods = screen.getByLabelText(/sorting/i);
    fireEvent.click(within(sortingMethods).getByText('random'));

    const resetButton = screen.getByText(/reset/i);
    fireEvent.click(resetButton);

    const selectedRateOption = await within(
      exchangeRelativeRateInput
    ).findByRole('option', { selected: true });
    expect(selectedRateOption).toHaveTextContent('EUR');

    expect(exchangeRelativeDateInput).toHaveValue(
      getDateString(appDefaultSettings.exchangeDateParam, '.', true)
    );

    expect(showFavorites).toHaveTextContent(/show favorites/i);

    const selectedDecimalOption = await within(decimalPlaces).findByRole(
      'option',
      { selected: true }
    );
    expect(selectedDecimalOption).toHaveTextContent(5);

    const selectedSortingOption = await within(sortingMethods).findByRole(
      'option',
      { selected: true }
    );
    expect(selectedSortingOption).toHaveTextContent('default');
  });
});
