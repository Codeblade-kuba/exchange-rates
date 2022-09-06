import {
  findByTestId,
  findByText,
  fireEvent,
  render,
  screen,
  within,
  debug,
  waitFor,
} from '@testing-library/react';
import ExchangeRatesApp from '../ExchangeRatesApp';
import ExchangeRateCards from '../ExchangeRateCards';
import Layout from '../../layout/Layout';
import { appDefaultSettings } from '../../data/appDefaultSettings';
import userEvent from '@testing-library/user-event';

const renderExchangeRatesApp = () => {
  render(
    <ExchangeRatesApp>
      <Layout>
        <ExchangeRateCards />
      </Layout>
    </ExchangeRatesApp>
  );
};

test('ExchangeRateCards should be rendered', () => {
  renderExchangeRatesApp();
  const exchangeRateCards = screen.getByTestId('exchange-rate-cards');
  expect(exchangeRateCards).toBeInTheDocument();
});

test('ExchangeRateCard should be rendered', async () => {
  renderExchangeRatesApp();
  const exchangeRateCardElements = await screen.findAllByTestId(
    'exchange-rate-card'
  );
  exchangeRateCardElements.forEach((card) => {
    expect(card).toBeInTheDocument();
  });
});

test('ExchangeRateCard should have favorite class', async () => {
  renderExchangeRatesApp();
  const addToFavoriteButtons = await screen.findAllByTestId(
    'add-to-favorite-button'
  );
  fireEvent.click(addToFavoriteButtons[0]);
  const exchangeRateCardElements = await screen.findAllByTestId(
    'exchange-rate-card'
  );
  expect(exchangeRateCardElements[0]).toHaveClass('favorite');
});

test('App should show only favorites', async () => {
  renderExchangeRatesApp();

  const addToFavoriteButtons = await screen.findAllByTestId(
    'add-to-favorite-button'
  );
  fireEvent.click(addToFavoriteButtons[0]);

  const showFavoritesButton = await screen.findByTestId(
    'show-favorites-button'
  );
  fireEvent.click(showFavoritesButton);

  const exchangeRateCardElements = await screen.findAllByTestId(
    'exchange-rate-card'
  );
  expect(exchangeRateCardElements).toHaveLength(1);
});

test('App should show default amount of decimal places in rates', async () => {
  renderExchangeRatesApp();

  const exchangeRates = await screen.findAllByTestId('exchange-rate-card-rate');

  exchangeRates.forEach((rate) => {
    if (rate.textContent === 'Current') return false;
    const floatingPointNumbers = rate.textContent.split('.')[1];
    expect(floatingPointNumbers).toHaveLength(appDefaultSettings.decimalPlaces);
  });
});

test('App should change default amount of decimal places in rates', async () => {
  renderExchangeRatesApp();

  const testedDecimalPlacesAmount = 1;

  const decimalPlacesSelect = await screen.findByTestId(
    'decimal-places-select'
  );
  fireEvent.change(decimalPlacesSelect, {
    target: { value: testedDecimalPlacesAmount },
  });

  const exchangeRates = await screen.findAllByTestId('exchange-rate-card-rate');
  exchangeRates.forEach((rate) => {
    if (rate.textContent === 'Current') return false;
    const floatingPointNumbers = rate.textContent.split('.')[1];
    expect(floatingPointNumbers).toHaveLength(testedDecimalPlacesAmount);
  });
});

test('App should change relative exchange rate', async () => {
  renderExchangeRatesApp();

  const exchangeRelativeSelect = await screen.findByTestId(
    'exchange-relative-select'
  );
  await within(exchangeRelativeSelect).findAllByRole('option');

  fireEvent.change(exchangeRelativeSelect, {
    target: { value: 'AUD' },
  });

  let rate = within(screen.getAllByTestId('exchange-rate-card')[0]).getByTestId(
    'exchange-rate-card-rate'
  );

  await waitFor(() => expect(rate).toHaveTextContent('Current'));
});

test('App should change relative exchange date', async () => {
  renderExchangeRatesApp();

  const exchangeRelativeDateInput = await screen.findByTestId(
    'exchange-date-input'
  );

  fireEvent.change(exchangeRelativeDateInput, {
    target: { value: '2022-01-01' },
  });

  const exchangeRateCardElements = await screen.findAllByTestId(
    'exchange-rate-card'
  );

  // let rate = within(exchangeRateCardElements[0]).getByTestId(
  //   'exchange-rate-card-rate'
  // );

  await waitFor(() =>
    expect(exchangeRateCardElements[0]).toHaveTextContent('1.56150')
  );
});
