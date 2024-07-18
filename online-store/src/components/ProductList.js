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

  // Organize products by category
  const categories = products.reduce((acc, product) => {
    const category = product.category.name || 'Others';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div className={styles.productList}>
      {Object.keys(categories).map(category => (
        <div key={category}>
          <h2 className={styles.categoryTitle}>{category}</h2>
          <div className={styles.productListGrid}>
            {categories[category].map(product => (
              <div key={product.id} className={styles.productListItem}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
