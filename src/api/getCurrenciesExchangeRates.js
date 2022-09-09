import buildAPIURL from '../helpers/buildAPIURL';

const getCurrenciesExchangeRates = async (
  exchangeDateParam,
  exchangeRelativeParam
) => {
  let exchangeRates = await fetch(
    buildAPIURL(exchangeDateParam, exchangeRelativeParam)
  );
  if (!exchangeRates.ok)
    throw new Error('Error while fetching exchange rates...');
  exchangeRates = await exchangeRates.json();
  return exchangeRates.rates;
};

export default getCurrenciesExchangeRates;
