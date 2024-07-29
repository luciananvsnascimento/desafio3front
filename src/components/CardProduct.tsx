import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/cardproduct.css';
import { Product } from '../types/Product';

interface CardProductProps {
  product: Product;
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/productpage/${product.id}`);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="card" onClick={handleCardClick}>
      <img className="card-image-product" src={product.images.mainImage} alt={product.title} />
      <div className="card-product_info">
        <h2 className="card-product__title">{product.title}</h2>
        <p className="card-product__description">{product.description.short}</p>
        <p className="card-product__price">${product.salePrice.toFixed(2)}</p>
      </div>

      {isHovered && (
        <div className="card-hover-overlay">
          <div className="card-hover-content">
            <button className="add-to-cart-button">Add to Cart</button>
            <div className="card-action-icons">
              <i className="icon share"></i>
              <i className="icon compare"></i>
              <i className="icon like"></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardProduct;
