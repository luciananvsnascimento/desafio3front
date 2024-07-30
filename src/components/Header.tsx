import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/header.css';
import '../styles/global.css';
import logo from '/src/assets/furniro_logo.png';
import loginIcon from '/src/assets/perfil.png';
import cartIcon from '/src/assets/carrinho.png';
import CartModal from './CartModal';
import { useCart } from '../contexts/CartContext';

const Header: React.FC = () => {
  const [isCartVisible, setCartVisible] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setCartVisible(true);
  };

  const handleMouseLeave = () => {
    setCartVisible(false);
  };

  const handleCartIconClick = () => {
    navigate('/cart');
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link to="/">
            <img className='logo-furniro' src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="nav-links">
          <ul className="menu-options">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="nav-link">Shop</Link>
            </li>
            <li>
              <Link to="#" className="nav-link">About</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="icons">
          <Link to="/login">
            <img src={loginIcon} alt="Login" className="icon" />
          </Link>
          <div 
            className="cart-icon-container" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            onClick={handleCartIconClick}
          >
            <img src={cartIcon} alt="Cart" className="icon" />
            <CartModal cart={cart} isVisible={isCartVisible} onClose={() => setCartVisible(false)} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
