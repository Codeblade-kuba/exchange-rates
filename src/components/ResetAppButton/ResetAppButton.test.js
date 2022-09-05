import { screen } from '@testing-library/react';
import { renderWithAppContext } from '../../utils/renderWithAppContext';
import ResetAppButton from '.';

test('ResetAppButton should be rendered', () => {
  renderWithAppContext(<ResetAppButton />);
  const showFavoritesButton = screen.getByTestId('reset-app-button');
  expect(showFavoritesButton).toBeInTheDocument();
});
