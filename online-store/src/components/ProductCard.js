// src/components/ProductCard.js
import PropTypes from 'prop-types';
import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <h3 className={styles.productName}>{product.name}</h3>
      {product.image ? (
        <img src={product.image} alt={product.name} className={styles.productImage} />
      ) : (
        <div className={styles.productImagePlaceholder}>No Image Available</div>
      )}
      <p className={styles.productDescription}>{product.description}</p>
      <div className={styles.productFooter}>
        <button className={styles.infoButton}>Info</button>
        <div className={styles.productPrice}>${product.price}</div>
        <button className={styles.addToCartButton}>Add to Cart</button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
