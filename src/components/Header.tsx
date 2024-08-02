import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import '../styles/header.css';
import '../styles/global.css';
import logo from '/src/assets/furniro_logo.png';
import loginIcon from '/src/assets/perfil.png';
import cartIcon from '/src/assets/carrinho.png';
import CartModal from './CartModal';
import { useCart } from '../contexts/CartContext';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header: React.FC = () => {
  const [isCartVisible, setCartVisible] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const { cart } = useCart();
  const [user] = useAuthState(auth);

  const handleMouseEnter = () => {
    setCartVisible(true);
  };

  const handleMouseLeave = () => {
    setCartVisible(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
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
          <div 
            className="profile-container" 
            onMouseEnter={() => setDropdownVisible(true)} 
            onMouseLeave={() => setDropdownVisible(false)}
            onClick={toggleDropdown}
          >
            <div className={`dropdown-menu ${isDropdownVisible ? 'visible' : ''}`}>
              {user ? (
                <button onClick={handleLogout} className="dropdown-item">Logout</button>
              ) : (
                <Link to="/login" className="dropdown-item">Login</Link>
              )}
            </div>
            <img src={loginIcon} alt="Profile" className="icon" />
          </div>
          <div 
            className="cart-icon-container" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/cart" className="cart-icon-link" onClick={() => setCartVisible(false)}>
              <img src={cartIcon} alt="Cart" className="icon" />
            </Link>
            <CartModal cart={cart} isVisible={isCartVisible} onClose={() => setCartVisible(false)} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
