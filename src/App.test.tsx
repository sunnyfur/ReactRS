import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders App', () => {
  render(<App />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});
