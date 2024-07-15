import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productPrice}>${product.price}</p>
      <Link to={`/products/${product.id}`} className={styles.detailsLink}>Ver Detalles</Link>
      <button className={styles.addToCartButton}>Añadir al Carrito</button>
    </div>
  );
}

export default ProductCard;
