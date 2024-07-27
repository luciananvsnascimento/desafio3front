import React, { useState } from 'react';
import BannerBenefits from '../components/BannerBenefits';
import BannerPage from '../components/BannerPage'; 
import FilterShop from '../components/FilterShop';
import SectionShop from '../components/SectionShop';

const Shop: React.FC = () => {
  const [productsPerPage, setProductsPerPage] = useState<number>(12);
  const [sortOption, setSortOption] = useState<string>('default');

  const handleFilterChange = (sortOption: string) => {
    setSortOption(sortOption);
  };

  const handleProductsPerPageChange = (count: number) => {
    setProductsPerPage(count);
  };

  return (
    <div>
      <BannerPage 
        namepage="Shop" 
        breadcrumb="Home > Shop"
      />
      <FilterShop
        onFilterChange={handleFilterChange}
        onProductsPerPageChange={handleProductsPerPageChange}
      />
      <SectionShop
        productsPerPage={productsPerPage}
        sortOption={sortOption}
      />
      <BannerBenefits />
    </div>
  );
};

export default Shop;
