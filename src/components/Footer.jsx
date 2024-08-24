import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Santiago Cañú. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
