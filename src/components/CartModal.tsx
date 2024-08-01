import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/Product';
import { useCart } from '../contexts/CartContext';  
import '../styles/cart-modal.css';

interface CartModalProps {
  cart: Product[];
  isVisible: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ cart, isVisible, onClose }) => {
  const { removeFromCart } = useCart(); 
  if (!isVisible) return null;

  const calculateTotal = () => {
    return cart.reduce((acc, product) => acc + product.salePrice * (product.quantity || 1), 0).toFixed(2);
  };

  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <div className="cart-modal-header">
          <h2>Shopping Cart</h2>
          <button onClick={onClose} className="close-btn">×</button>
        </div>
        <div className="cart-modal-body">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.images.mainImage} alt={product.title} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-title">{product.title}</p>
                <p className="cart-item-price">{product.quantity} x Rs. {product.salePrice.toFixed(2)}</p>
              </div>
              <button className="delete-btn" onClick={() => removeFromCart(product.id)}>
                x
              </button>
            </div>
          ))}
        </div>
        <div className="cart-modal-footer">
          <p className="cart-total">Subtotal: <span className="cart-total-value">Rs. {calculateTotal()}</span></p>
          <div className="cart-modal-buttons">
            <Link to="/cart" className="cart-modal-btn">Cart</Link>
            <Link to="/checkout" className="cart-modal-btn">Checkout</Link>
            <Link to="/comparison" className="cart-modal-btn">Comparison</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
