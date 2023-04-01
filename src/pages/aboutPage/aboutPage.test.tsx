import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('about page testing', () => {
  it('about is viewing', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: /What is NFT/i })).toBeInTheDocument();
  });
});
