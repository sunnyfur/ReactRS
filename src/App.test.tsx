import { screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './utils/test-utils';

test('renders App', () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});
