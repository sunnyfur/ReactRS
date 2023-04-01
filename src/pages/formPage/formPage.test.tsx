import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Form from '../../components/form/Form';
import FormPage from './FormPage';
import { vi } from 'vitest';
import { CardType } from '../../types/types';

const mockAdd = vi.fn((data: CardType) => Promise.resolve({ data }));
window.URL.createObjectURL = vi.fn();

describe('form page testing', () => {
  it('form is viewing', () => {
    render(<FormPage />);
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: /nft/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /art/i })).toBeInTheDocument();
    expect(screen.getByRole('spinbutton', { name: /cost/i })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: /usdt/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: /agree/i })).toBeInTheDocument();
  });
  it('validation all fialds ', async () => {
    render(<Form onSubmit={mockAdd} />);
    fireEvent.submit(screen.getByRole('button'));
    expect(await screen.findAllByRole('alert')).toHaveLength(7);
    expect(mockAdd).not.toBeCalled();
  });
  it('all fields is valid', async () => {
    render(<Form onSubmit={mockAdd} />);
    const file = new File(['test'], 'test.png', { type: 'image/png' });
    fireEvent.input(screen.getByRole('textbox', { name: /name/i }), {
      target: {
        value: 'Valid name',
      },
    });
    fireEvent.input(screen.getByLabelText(/date/i), {
      target: {
        value: '2022-01-01',
      },
    });
    fireEvent.input(screen.getByRole('combobox'), {
      target: {
        value: 'art',
      },
    });
    fireEvent.input(screen.getByRole('spinbutton'), {
      target: {
        value: '10',
      },
    });
    fireEvent.input(screen.getByLabelText('USDT'), {
      target: {
        value: true,
      },
    });
    await waitFor(() =>
      fireEvent.change(screen.getByLabelText('Add file'), { target: { files: [file] } })
    );

    fireEvent.input(screen.getByRole('checkbox'), {
      target: {
        value: true,
      },
    });

    fireEvent.submit(screen.getByRole('button'));
    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
  });
});
