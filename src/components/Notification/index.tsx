import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

export type Props = {
  message: string;
  type: 'error' | 'success';
};

function Notification({ message, type }: Props) {
  const style = clsx({ [styles.msgError]:type === 'error', [styles.msgSuccess]:type === 'success' })
  return <div className={style}>{ message }</div>;
}

export default Notification;
