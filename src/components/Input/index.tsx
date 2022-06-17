import React from 'react';

import { InputProps } from '../../utils/types';

import styles from './styles.module.scss';

function Input({ label, register, errors, type, name }: InputProps) {
  return (
    <div>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} type={type} {...register(name)} />
      <p className={styles.errors}>{errors[name]?.message}</p>
    </div>
  );
}

export default Input;
