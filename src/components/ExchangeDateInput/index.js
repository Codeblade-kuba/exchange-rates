import React, { useContext } from 'react';

import { AppContext } from '../../contexts/appContext';

const ExchangeDateInput = () => {
  const { appState, setAppState } = useContext(AppContext);

  const changeExchangeDateParam = (e) => {
    setAppState((prev) => ({ ...prev, exchangeDateParam: e.target.value }));
  };

  const getValueIfDateIsValid = (value) => {
    const date = new Date(value);
    if (date instanceof Date && !isNaN(date)) return value;
    return '';
  };

  return (
    <input
      type="date"
      value={getValueIfDateIsValid(appState.exchangeDateParam)}
      onChange={(e) => changeExchangeDateParam(e)}
      data-testid="exchange-date-input"
    />
  );
};

export default ExchangeDateInput;
