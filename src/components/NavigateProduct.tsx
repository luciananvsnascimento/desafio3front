import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigate.css';

interface NavigateProductProps {
  productName: string;
}

const NavigateProduct: React.FC<NavigateProductProps> = ({ productName }) => {
  return (
    <div className="navpage">
      <Link to="/" className="link">Home</Link>
      <span className="separator">{'>'}</span>
      <Link to="/shop" className="link">Shop</Link>
      <span className="separator">{'>'}</span>
      <p className="product-name">{productName}</p>
    </div>
  );
}

export default NavigateProduct;
