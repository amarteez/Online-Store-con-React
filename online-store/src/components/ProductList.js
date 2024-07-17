// src/components/ProductList.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className={styles.productList}>
      <h2>Lista de Productos</h2>
      <div className={styles.productListGrid}>
        {products.map(product => (
          <div key={product.id} className={styles.productListItem}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
