import buildAPIURL from '../helpers/buildAPIURL';

const getCurrencyNames = async () => {
  const currencyNames = await fetch(buildAPIURL('currencies'));
  return currencyNames.json();
};

export default getCurrencyNames;
