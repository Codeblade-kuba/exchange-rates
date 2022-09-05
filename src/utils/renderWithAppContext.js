import { render } from '@testing-library/react';
import { AppContext } from '../contexts/appContext';
import { appDefaultSettings } from '../data/appDefaultSettings';

export const renderWithAppContext = (
  component,
  { appState = {}, currencies = [] } = {}
) => {
  const extendedDefaultProps = {
    appState: { ...appDefaultSettings, ...appState },
    currencies: [...currencies],
  };
  return render(
    <AppContext.Provider value={extendedDefaultProps}>
      {component}
    </AppContext.Provider>
  );
};
