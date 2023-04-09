import MainPage from './MainPage';
import { findByText, fireEvent, render, screen } from '@testing-library/react';

describe('test main page', () => {
  it('viewing cards', async () => {
    render(<MainPage />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    const card = await screen.findByText(/Attack on Titan/i);
    expect(card).toBeInTheDocument();
  });
  it('display modal card', async () => {
    render(<MainPage />);
    const card = await screen.findByText(/Attack on Titan/i);
    fireEvent.click(card);
    expect(await screen.findByText(/genres/i)).toBeInTheDocument();
    expect(await screen.findByText(/Action, Drama, Suspense/i)).toBeInTheDocument();
  });
  it('search card', async () => {
    render(<MainPage />);
    const searchInput = screen.getByRole('textbox');
    fireEvent.change(searchInput, {
      target: {
        value: 'Bleach',
      },
    });
    fireEvent.submit(searchInput);
    const card = await screen.findAllByRole('img');
    expect(card).toHaveLength(13);
  });
});
