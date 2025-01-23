import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../assets/applogo.png';
import STRINGS from '../constants/strings';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="MyWebsite Logo" />
        </Link>
      </div>
  
      <nav className={isMenuOpen ? 'nav active' : 'nav'}>
        <ul className="nav-links">
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About us</Link></li>
          <li><Link to="/service" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link></li>
          <li><Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
