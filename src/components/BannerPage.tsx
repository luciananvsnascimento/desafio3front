import React from 'react';
import '../styles/bannerpage.css'

interface BannerPageProps {
  namepage: string;
  breadcrumb: string;
}

const BannerPage: React.FC<BannerPageProps> = ({ namepage, breadcrumb }) => {
  return (
    <div className="bannerpg">
      <img src='https://furniro-img.s3.sa-east-1.amazonaws.com/images/images/assets/bannerpages.png' alt="Banner" className="banner-image" />
      <div className="banner-content">
      <img src='https://furniro-img.s3.sa-east-1.amazonaws.com/images/images/assets/bylogo.png' alt="Banner" className="by-logo" />
      <h1 className="name_page">{namepage}</h1>
        <div className="breadcrumb">{breadcrumb}</div>
        
      </div>
    </div>
  );
}

export default BannerPage;
