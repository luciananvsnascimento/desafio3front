import React from 'react';
import '../styles/cardproduct.css';

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

interface CardProductProps {
  product: Product;
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  return (
    <div className='card'>
      <img className='card-image-product' src={product.images.mainImage} alt={product.title} />
      <div className='card-product_info'>
        <h2 className='card-product__title'>{product.title}</h2>
        <p className='card-product__description'>{product.description.short}</p>
        <p className='card-product__price'>R$ {product.salePrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CardProduct;
