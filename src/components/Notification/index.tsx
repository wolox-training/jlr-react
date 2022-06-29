import React from 'react';

import styles from './styles.module.scss';

export type Props = {
  message: string;
  type: 'error' | 'success';
};

function Notification({ message, type }: Props) {
  return <div className={type === 'error' ? styles.msgError : styles.msgSuccess}>{ message }</div>;
}

export default Notification;