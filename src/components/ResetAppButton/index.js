import { useContext } from 'react';

import { AppContext } from '../../contexts/appContext';
import { appDefaultSettings } from '../../data/appDefaultSettings';

const ResetAppButton = () => {
  const { setAppState } = useContext(AppContext);

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
