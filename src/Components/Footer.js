import React from 'react';
import '../App.css';
import STRINGS from '../constants/strings';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.iconContainer}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
          <FaLinkedinIn />
        </a>
      </div>
      <p style={styles.text}>© 2025 Girja Digital Solutions. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "10px",
  },
  icon: {
    color: "#fff",
    fontSize: "20px",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  text: {
    fontSize: "14px",
  },
};

export default Footer;