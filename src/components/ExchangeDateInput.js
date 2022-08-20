import React, { useContext } from 'react';

import { ExchangeRateCardsContext } from '../contexts/ExchangeRateCardsContext';

const ExchangeDateInput = () => {
  const { setExchangeDateParam } = useContext(ExchangeRateCardsContext);

  return (
    <input type="date" onChange={(e) => setExchangeDateParam(e.target.value)} />
  );
};

export default ExchangeDateInput;
