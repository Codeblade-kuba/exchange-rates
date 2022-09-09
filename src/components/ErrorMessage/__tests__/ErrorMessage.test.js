import { screen } from '@testing-library/react';
import { renderWithExchangeRatesAppContext } from '../../../helpers/renderWithExchangeRatesAppContext';
import ErrorMessage from '..';

describe('ErrorMessage', () => {
  it('should be rendered', () => {
    renderWithExchangeRatesAppContext(<ErrorMessage />);
    const errorMessage = screen.getByTestId('error-message');
    expect(errorMessage).toBeInTheDocument();
  });
  it('should show given message', () => {
    const testMessage = 'Test message';
    renderWithExchangeRatesAppContext(<ErrorMessage message={testMessage} />);
    const errorMessage = screen.getByTestId('error-message');
    expect(errorMessage).toHaveTextContent(testMessage);
  });
});
