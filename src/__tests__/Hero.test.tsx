import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';

describe('Hero component', () => {
  it('renders without crashing', () => {
    render(<Hero />);
  });

  it('renders the hero image with correct src and alt', () => {
    render(<Hero />);
    const heroImage = screen.getByAltText('Hero');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', 'https://furniro-img.s3.sa-east-1.amazonaws.com/images/images/assets/hero-img.png');
  });

  it('renders the new arrival text', () => {
    render(<Hero />);
    const newArrivalText = screen.getByText('New Arrival');
    expect(newArrivalText).toBeInTheDocument();
    expect(newArrivalText).toHaveClass('s-hero');
  });

  it('renders the hero title', () => {
    render(<Hero />);
    const heroTitle = screen.getByText(/Discover Our/i);
    expect(heroTitle).toBeInTheDocument();
  });

  it('renders the hero description', () => {
    render(<Hero />);
    const heroDescription = screen.getByText(/New Arrival/i);
    expect(heroDescription).toBeInTheDocument();
  });

  it('renders the buy button with correct text', () => {
    render(<Hero />);
    const buyButton = screen.getByText('BUY NOW');
    expect(buyButton).toBeInTheDocument();
    expect(buyButton).toHaveClass('buy');
  });
});
