import { useContext } from 'react';

import { AppContext } from '../contexts/appContext';

const ResetAppButton = () => {
  const { setAppState } = useContext(AppContext);

  return <button onClick={() => setAppState(true)}>Reset</button>;
};

export default ResetAppButton;
