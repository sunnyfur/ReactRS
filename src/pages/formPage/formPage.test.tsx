import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';

describe('form page testing', () => {
  it('form is viewing', () => {
    render(<FormPage />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });
});
