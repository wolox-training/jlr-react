import React from 'react';

import logo from '../../assets/logo_full_color.svg';

import styles from './styles.module.scss';

function LogoContainer() {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="logo wolox" />
    </div>
  );
}

export default LogoContainer;
