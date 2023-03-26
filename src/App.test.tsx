import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders App', () => {
  const { getByText } = render(<App />, { wrapper: BrowserRouter });
  const linkElement = getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});
