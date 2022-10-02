const roundNumber = (number: number, decimalPlaces: number) => {
  const modifier = Math.pow(10, decimalPlaces);
  return Math.round(number * modifier) / modifier;
};

export default roundNumber;
