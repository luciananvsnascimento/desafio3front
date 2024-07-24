import React from 'react';
import '../styles/bannerpage.css'
import bannerpages from '../assets/bannerpages.png';
import bylogo from '../assets/bylogo.png'

interface BannerPageProps {
  namepage: string;
  breadcrumb: string;
}

const BannerPage: React.FC<BannerPageProps> = ({ namepage, breadcrumb }) => {
  return (
    <div className="bannerpg">
      <img src={bannerpages} alt="Banner" className="banner-image" />
      <div className="banner-content">
      <img src={bylogo} alt="Banner" className="by-logo" />
      <h1 className="name_page">{namepage}</h1>
        <div className="breadcrumb">{breadcrumb}</div>
        
      </div>
    </div>
  );
}

export default BannerPage;
