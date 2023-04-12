import { render, screen } from '@testing-library/react';
import Card from './Card';

const sampleCard = {
  id: 7,
  category: 'art',
  author: '@sanya',
  cost: '420',
  costUSD: '20.35',
  name: 'title 3D',
  likesCount: 24,
  img: 'https://i.pinimg.com/originals/bd/3d/41/bd3d41f78b57f5e262007054d891f5e1.jpg',
};

describe('Card', () => {
  it('render card component', () => {
    render(<Card card={sampleCard} />);
    expect(screen.getByText('@sanya')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
