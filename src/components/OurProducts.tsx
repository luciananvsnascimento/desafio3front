import React, { useEffect, useState } from 'react';
import '../styles/our-products.css';
import CardProduct from '../components/CardProduct';
import { getProducts } from '../services/api';

interface Product {
  id: number;
  sku: string;
  title: string;
  category: string;
  tags: string[];
  normalPrice: number;
  salePrice: number;
  discountPercentage: number;
  new: boolean;
  description: {
    short: string;
    long: string;
  };
  colors: { name: string; hex: string }[];
  sizes: string[];
  rating: number;
  images: {
    mainImage: string;
    gallery: string[];
  };
}

const OurProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="our-products">
      <h2>Our Products</h2>
      <div className="cards-area">
        {products.slice(0, 8).map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
