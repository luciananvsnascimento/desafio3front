import { render, screen } from '@testing-library/react';
import BannerBenefits from '../components/BannerBenefits';

describe('BannerBenefits component', () => {
  it('renders without crashing', () => {
    render(<BannerBenefits />);
  });

  it('renders the title and content', () => {
    render(<BannerBenefits />);
    expect(screen.getByText('Warranty Protection')).toBeInTheDocument(); 
    expect(screen.getByText('Free Shipping')).toBeInTheDocument();
    expect(screen.getByText('High Quality')).toBeInTheDocument();
    expect(screen.getByText('24 / 7 Support')).toBeInTheDocument();
  });
});
