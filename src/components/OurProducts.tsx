import React, { useEffect, useState } from 'react';
import '../styles/our-products.css';
import CardProduct from '../components/CardProduct';
import { Product } from '../types/Product';
import { getProducts } from '../services/api';

const OurProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <section className="our-products">
      <h2>Our Products</h2>
      <div className="cards-area">
        {products.slice(0, 8).map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
