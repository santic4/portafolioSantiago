import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={isOpen ? 'line open' : 'line'}></div>
          <div className={isOpen ? 'line open' : 'line'}></div>
          <div className={isOpen ? 'line open' : 'line'}></div>
        </div>
        <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
          <li><Link to="portfolio" smooth={true} duration={500} onClick={toggleMenu}>Portafolio</Link></li>
          <li><Link to="services" smooth={true} duration={500} onClick={toggleMenu}>Servicios</Link></li>
          <li><Link to="resume" smooth={true} duration={500} onClick={toggleMenu}>CV</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contacto</Link></li>
          <li><Link to="certifications" smooth={true} duration={500} onClick={toggleMenu}>Certificaciones</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
