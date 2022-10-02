import { screen } from '@testing-library/react';

import renderWithExchangeRatesAppContext from '../../../helpers/renderWithAppContext';
import ErrorMessage from '.';

const testMessage = 'Test message';
describe('ErrorMessage', () => {
  it('should be rendered', () => {
    renderWithExchangeRatesAppContext(<ErrorMessage message={testMessage} />);
    const errorMessage = screen.getByTestId('error-message');
    expect(errorMessage).toBeInTheDocument();
  });
  it('should show given message', () => {
    renderWithExchangeRatesAppContext(<ErrorMessage message={testMessage} />);
    const errorMessage = screen.getByTestId('error-message');
    expect(errorMessage).toHaveTextContent(testMessage);
  });
});
