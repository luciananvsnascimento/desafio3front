import React from 'react';
import { render, screen } from '@testing-library/react';
import BannerPage from '../components/BannerPage';

describe('BannerPage component', () => {
  const namepage = "Home";
  const breadcrumb = "Home / Page";

  it('renders without crashing', () => {
    render(<BannerPage namepage={namepage} breadcrumb={breadcrumb} />);
  });

  it('renders the namepage prop correctly', () => {
    render(<BannerPage namepage={namepage} breadcrumb={breadcrumb} />);
    expect(screen.getByText(namepage)).toBeInTheDocument();
  });

  it('renders the breadcrumb prop correctly', () => {
    render(<BannerPage namepage={namepage} breadcrumb={breadcrumb} />);
    expect(screen.getByText(breadcrumb)).toBeInTheDocument();
  });

  it('renders the banner image with correct src and alt attributes', () => {
    render(<BannerPage namepage={namepage} breadcrumb={breadcrumb} />);
    const [bannerImage] = screen.getAllByAltText('Banner');
    expect(bannerImage).toBeInTheDocument();
    expect(bannerImage).toHaveAttribute('src', 'https://furniro-img.s3.sa-east-1.amazonaws.com/images/images/assets/bannerpages.png');
  });

  it('renders the logo image with correct src and alt attributes', () => {
    render(<BannerPage namepage={namepage} breadcrumb={breadcrumb} />);
    const [, logoImage] = screen.getAllByAltText('Banner');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', 'https://furniro-img.s3.sa-east-1.amazonaws.com/images/images/assets/bylogo.png');
  });

  it('renders all elements with correct class names', () => {
    render(<BannerPage namepage={namepage} breadcrumb={breadcrumb} />);
    expect(screen.getByText(namepage)).toHaveClass('name_page');
    expect(screen.getByText(breadcrumb)).toHaveClass('breadcrumb');
    const [bannerImage] = screen.getAllByAltText('Banner');
    const [, logoImage] = screen.getAllByAltText('Banner');
    expect(bannerImage).toHaveClass('banner-image');
    expect(logoImage).toHaveClass('by-logo');
  });
});
