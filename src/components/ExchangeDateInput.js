import React, { useContext } from 'react';

import { AppContext } from '../contexts/appContext';

const ExchangeDateInput = () => {
  const { setAppState } = useContext(AppContext);

  return (
    <input
      type="date"
      onChange={(e) =>
        setAppState((prev) => ({ ...prev, exchangeDateParam: e.target.value }))
      }
    />
  );
};

export default ExchangeDateInput;
