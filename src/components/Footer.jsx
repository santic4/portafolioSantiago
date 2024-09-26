import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/santic4" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/santiagocanu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Santiago Cañú. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
