import { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import { appDefaultSettings } from '../../data/appDefaultSettings';

const ResetButton = () => {
  const { setAppState } = useContext(ExchangeRatesAppContext);

  return (
    <button
      title="Reset settings"
      onClick={() => setAppState(appDefaultSettings)}
    >
      Reset
    </button>
  );
};

export default ResetButton;
