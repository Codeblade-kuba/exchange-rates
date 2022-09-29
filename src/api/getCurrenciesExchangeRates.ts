import buildAPIURL from '../helpers/buildAPIURL';
import getDateString from '../helpers/getDateString';

const getCurrenciesExchangeRates = async (
  exchangeDateParam: Date,
  exchangeRelativeParam: string
) => {
  let exchangeDateParamString = getDateString(exchangeDateParam);

  let exchangeRates = await fetch(
    buildAPIURL(exchangeDateParamString, exchangeRelativeParam)
  );
  if (!exchangeRates.ok)
    throw new Error('Error while fetching exchange rates...');
  let exchangeRatesObj: { rates: { [symbol: string]: number } } =
    await exchangeRates.json();
  return exchangeRatesObj.rates;
};

export default getCurrenciesExchangeRates;
