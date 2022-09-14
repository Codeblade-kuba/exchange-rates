import React, { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import ExchangeRateCards from '../ExchangeRateCards';
import ErrorMessage from '../ErrorMessage';

const ExchangeRateCardsContainer = () => {
  const { error } = useContext(ExchangeRatesAppContext);

  if (error && error instanceof Error) {
    return <ErrorMessage message={error.message} />;
  }
  return <ExchangeRateCards />;
};

export default ExchangeRateCardsContainer;
