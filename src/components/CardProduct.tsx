import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/cardproduct.css';
import { FaShareAlt, FaExchangeAlt, FaHeart } from 'react-icons/fa';
import { Product } from '../types/Product';
import { useCart } from '../contexts/CartContext';

interface CardProductProps {
  product: Product;
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    navigate(`/productpage/${product.id}`);
  };

  const handleAddToCart = (event: React.MouseEvent) => {
    event.stopPropagation();
    addToCart(product);
  };

  return (
    <div
      className="card"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="card-image-product" src={product.images.mainImage} alt={product.title} />

      {(product.new || product.discountPercentage > 0) && (
        <div
          className={`product-badge ${product.new ? 'new-badge' : 'discount-badge'}`}
        >
          {product.new ? 'New' : `-${product.discountPercentage}%`}
        </div>
      )}

      <div className="card-product_info">
        <h2 className="card-product__title">{product.title}</h2>
        <p className="card-product__description">{product.description.short}</p>
        <p className="card-product__price">${product.salePrice.toFixed(2)}</p>
      </div>

      {isHovered && (
        <div className="card-hover-overlay">
          <div className="card-hover-content">
            <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
            <div className="card-action-icons">
              <p className="actions-card">
                <FaShareAlt className="icon-action" />Share 
              </p>
              <p className="actions-card">
                <FaExchangeAlt className="icon-action" />Compare 
              </p>
              <p className="actions-card">
                <FaHeart className="icon-action" />Like 
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardProduct;
