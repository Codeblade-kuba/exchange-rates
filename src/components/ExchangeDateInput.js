import React, { useContext } from 'react';

import { ExchangeRateCardsContext } from '../contexts/ExchangeRateCardsContext';

const ExchangeDateInput = () => {
  const { exchangeDateParam, setExchangeDateParam } = useContext(
    ExchangeRateCardsContext
  );

  return (
    <input
      type="date"
      value={exchangeDateParam}
      onChange={(e) => setExchangeDateParam(e.target.value)}
    />
  );
};

export default ExchangeDateInput;
