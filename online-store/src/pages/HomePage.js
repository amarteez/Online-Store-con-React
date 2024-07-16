import React from 'react';
import HomeComponent from '../components/HomeComponent';
import whatsappLogo from '../img-front/whatsapp-logo.png'; // Importa el logo de WhatsApp
import styles from './HomePage.module.css'; // Asegúrate de que estás importando desde el archivo correcto

const HomePage = () => {
  const whatsappLink = 'https://wa.me/50762318361'; // Enlace a tu WhatsApp

  return (
    <div className={styles['home-page']}>
      <HomeComponent />
      <div className={styles.whatsappContainer}>
        <br></br>
        <img src={whatsappLogo} alt="WhatsApp" className={styles.whatsappLogo} onClick={() => window.open(whatsappLink, '_blank')} />
      </div>
    </div>
  );
}

export default HomePage;
