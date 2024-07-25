import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'
import '../styles/global.css'
import logo from '/src/assets/furniro_logo.png';
import loginIcon from '/src/assets/perfil.png';
import cartIcon from '/src/assets/carrinho.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
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
          <Link to="/cart">
            <img src={cartIcon} alt="Cart" className="icon" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
