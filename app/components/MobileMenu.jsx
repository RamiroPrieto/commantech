// MobileMenu.js
"use client";
import { useState } from 'react';
// import styles from './MobileMenu.module.css';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobileMenu">
        {isOpen  ? (
            <button className="menuButton" onClick={toggleMenu}>
            X
          </button>
        ): (
            <button className="menuButton" onClick={toggleMenu}>
                ☰
            </button>
        )}
      {/* <button className="menuButton" onClick={toggleMenu}>
        ☰
      </button> */}
      {isOpen && (
        <div className="menuItems">
          {/* Aquí añade los elementos del menú */}
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
