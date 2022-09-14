import buildAPIURL from '../helpers/buildAPIURL';

const getCurrenciesExchangeRates = async (
  exchangeDateParam: string,
  exchangeRelativeParam: string
) => {
  let exchangeRates = await fetch(
    buildAPIURL(exchangeDateParam, exchangeRelativeParam)
  );
  if (!exchangeRates.ok)
    throw new Error('Error while fetching exchange rates...');
  let exchangeRatesObj: { rates: { [symbol: string]: number } } =
    await exchangeRates.json();
  return exchangeRatesObj.rates;
};

export default getCurrenciesExchangeRates;
