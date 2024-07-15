// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/path/to/logo.png" alt="TenkaiTech Logo" />
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/cart">Carrito</Link>
        <Link to="/products">Productos</Link>
      </nav>
    </header>
  );
}

export default Header;

