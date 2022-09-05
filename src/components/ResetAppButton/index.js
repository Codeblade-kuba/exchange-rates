import { useContext } from 'react';

import { ExchangeRatesAppContext } from '../../contexts/ExchangeRatesAppContext';
import { appDefaultSettings } from '../../data/appDefaultSettings';

const ResetAppButton = () => {
  const { setAppState } = useContext(ExchangeRatesAppContext);

  return (
    <button
      data-testid="reset-app-button"
      onClick={() => setAppState(appDefaultSettings)}
    >
      Reset
    </button>
  );
};

export default ResetAppButton;
