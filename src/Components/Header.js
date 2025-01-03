import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../assets/applogo.png'
import STRINGS from '../constants/strings';
function Header() {
  return (
    <header className="header">
      <div className="logo"> <Link to="/">
          <img src={logo} alt="MyWebsite Logo" />
        </Link></div>
      <nav>
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/service">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/portfilio" >Portfilio</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
