import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCartShopping,
  faGear,
  faStore,
  faHeart
} from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const handleSiteTitleClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const productSection = document.getElementById('store-products');
      if (productSection) {
        productSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-section navbar-left">
        <Link to="/Profile" className="icon-btn" title="Profile">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>

      <div className="navbar-section navbar-center">
        <Link to="/" className="site-title" onClick={handleSiteTitleClick}>
          AnnapurnaBites
        </Link>
      </div>

      <div className="navbar-section navbar-right">
        <Link to="/store" className="icon-btn" title="Store">
          <FontAwesomeIcon icon={faStore} />
        </Link>
        <Link to="/cart" className="icon-btn" title="My Cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
        <Link to="/fav" className="icon-btn" title="Favorites">
          <FontAwesomeIcon icon={faHeart} />
        </Link>
        <Link to="/settings" className="icon-btn" title="Settings">
          <FontAwesomeIcon icon={faGear} />
        </Link>
      </div>
    </nav>
  );
}
