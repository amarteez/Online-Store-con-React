// src/pages/ProductPage.js
import React from 'react';
import ProductList from '../components/ProductList';
import './ProductPage.css';

const ProductPage = () => {
  return (
    <div className="product-page">
      <h1>Our Products</h1>
      <ProductList />
    </div>
  );
};

export default ProductPage;

