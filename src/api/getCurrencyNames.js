import buildAPIURL from '../helpers/buildAPIURL';

const getCurrencyNames = async () => {
  let currencyNames = await fetch(buildAPIURL('currencies'));
  if (!currencyNames.ok) throw new Error('Error while fetching currencies...');
  currencyNames = await currencyNames.json();
  return currencyNames;
};

export default getCurrencyNames;
