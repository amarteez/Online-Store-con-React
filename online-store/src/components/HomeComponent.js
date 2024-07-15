// HomeComponent.js
import React from 'react';
import styles from './HomeComponent.module.css'; // Asegúrate de que estás importando desde el archivo correcto

const HomeComponent = () => {
  return (
    <div className={styles['home-component']}>
      <h2>Componente de Inicio</h2>
      <br></br>
      <br></br>
      <p>Contenido del componente de inicio.</p>
    </div>
  );
}

export default HomeComponent;

