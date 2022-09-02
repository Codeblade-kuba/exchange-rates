import React, { useContext } from 'react';

import { AppContext } from '../../contexts/appContext';

const ExchangeDateInput = () => {
  const { appState, setAppState } = useContext(AppContext);

  return (
    <input
      type="date"
      value={appState.exchangeDateParam}
      onChange={(e) =>
        setAppState((prev) => ({ ...prev, exchangeDateParam: e.target.value }))
      }
    />
  );
};

export default ExchangeDateInput;
