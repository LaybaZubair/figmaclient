import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div className='Nav'>
    <nav className="navbar">
      <div className="navbar-logo">Finesweet</div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li className="nav-item"><a href="#products">Home </a></li>
        <li className="nav-item"><a href="#track-order">Blogs </a></li>
         <li className="nav-item"><a href="#about-us">About Us</a></li>
         <li className="nav-item"><a href="#contact">Contact us</a></li>
         <button className='white'>Subscribe</button>
      </ul>
    </nav>
    </div>
    </>
  );
}

export default Navbar;
