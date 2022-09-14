import buildAPIURL from '../helpers/buildAPIURL';

const getCurrencyNames = async () => {
  let currencyNamesJSON: any = await fetch(buildAPIURL('currencies'));
  if (!currencyNamesJSON.ok)
    throw new Error('Error while fetching currencies...');
  let currencyNames: { [symbol: string]: string } =
    await currencyNamesJSON.json();
  return currencyNames;
};

export default getCurrencyNames;
