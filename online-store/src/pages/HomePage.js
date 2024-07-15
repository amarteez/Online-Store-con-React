import React from 'react';
import HomeComponent from '../components/HomeComponent';
import styles from './HomePage.module.css'; // Asegúrate de que estás importando desde el archivo correcto

const HomePage = () => {
  return (
    <div className={styles['home-page']}>
      <HomeComponent />
      <p>HomePageeee</p>
    </div>
  );
}

export default HomePage;