import React from 'react';
import bannerImage from '../img-front/img-home.gif'; // Asegúrate de ajustar la ruta según tu estructura de directorios
import styles from './HomeComponent.module.css';

const HomeComponent = () => {
  return (
    <div className={styles.homeComponent}>
      <img src={bannerImage} alt="Banner" className={styles.bannerImage} />
      <h2>Para Gaming o para Streaming?</h2>
      <p>Haz realidad tu setup soñado con nuestros <strong>componentes</strong> exclusivos.</p>
    </div>
  );
}

export default HomeComponent;
