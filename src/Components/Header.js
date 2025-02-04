import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../assets/applogo.png';
import STRINGS from '../constants/strings';

function Header() {
  const [isLogin, setLogin] = useState(false);


  const toggleMenu = () => {

    const value = localStorage.getItem('token');
    if (value) {
      console.log('token:', value);
      setLogin(true);
    } else {
      console.log('No token found');
      setLogin(false);
    }

  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="MyWebsite Logo" />
        </Link>
      </div>
  
      <nav className={'nav active'}>
        <ul className="nav-links">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/service">Services</Link></li>
          <li><Link to="/contact" >Contact</Link></li>
          <li><Link to={isLogin?"/":"/login"} >{isLogin?"Login":"Logout"}</Link></li>
          <li><Link to="/portfolio" >Portfolio</Link></li>
          <li><Link to="/form" >Form</Link></li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
