import React from 'react';
import BannerBenefits from '../components/BannerBenefits';
import SectionCart from '../components/SectionCart';

const Cart: React.FC = () => {
  return (
    <div>
      <SectionCart />
      <BannerBenefits />
    </div>
  );
};

export default Cart;
