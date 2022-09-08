import buildAPIURL from '../helpers/buildAPIURL';

const getCurrenciesExchangeRates = async (
  exchangeDateParam,
  exchangeRelativeParam
) => {
  console.log('called!');
  let exchangeRates = await fetch(
    buildAPIURL(exchangeDateParam, exchangeRelativeParam)
  );
  exchangeRates = await exchangeRates.json();
  return exchangeRates.rates;
};

export default getCurrenciesExchangeRates;
