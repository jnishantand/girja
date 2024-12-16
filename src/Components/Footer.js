import React from 'react';
import '../App.css';
import STRINGS from '../constants/strings';
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()}{STRINGS.COPYRIGHT} </p>
    </footer>
  );
}

export default Footer;
