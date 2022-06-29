import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LocalStorageService from '../../services/LocalStorageService';
import logo from '../../assets/logo_full_color.svg';

import styles from './styles.module.scss';

function NavBar() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const logout = () => {
    LocalStorageService.removeValue('access-token');
    navigate('/', { replace: true });
  };

  return (
    <div className={styles.navBar}>
      <img className={styles.logo} src={logo} />
      <button type="button" onClick={logout} className={styles.btnLogout}>
        {t('NavBar:logout')}
      </button>
    </div>
  );
}

export default NavBar;
