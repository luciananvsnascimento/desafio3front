import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/section-shop.css'
import CardProduct from './CardProduct';
import { Product } from '../types/Product';

interface SectionShopProps {
  productsPerPage: number;
  sortOption: string;
}

const SectionShop: React.FC<SectionShopProps> = ({ productsPerPage, sortOption }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:3001/products');
      let filteredProducts = response.data;

      if (sortOption !== 'default') {
        filteredProducts = filteredProducts.filter((product: Product) => product.category === sortOption);
      }

      setProducts(filteredProducts);
    };
    fetchProducts();
  }, [sortOption]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='section-shop'>
      <div className="cards-area">
        {currentProducts.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.min(3, totalPages) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className="pagination-button"
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SectionShop;
