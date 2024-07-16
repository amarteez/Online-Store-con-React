import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img-front/img-logo.jpg'; // Ajusta la ruta según tu estructura de directorios
import styles from './Header.module.css'; // Importa los estilos CSS

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="TenkaiTech Logo" />
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link to="/" className={styles.navLink}>Inicio</Link>
          </li>
          <li>
            <Link to="/cart" className={styles.navLink}>Carrito</Link>
          </li>
          <li>
            <Link to="/products" className={styles.navLink}>Productos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
