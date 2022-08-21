import { useContext } from 'react';

import { ExchangeRateCardsContext } from '../contexts/ExchangeRateCardsContext';

const ResetAppButton = () => {
  const { setReset } = useContext(ExchangeRateCardsContext);

  return <button onClick={() => setReset(true)}>Reset</button>;
};

export default ResetAppButton;
