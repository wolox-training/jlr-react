import React from 'react';

import styles from './styles.module.scss';

type InputProps = {
  errors: any;
  type: 'text' | 'email' | 'number' | 'password';
  name: string;
  label: string;
  register: any;
  validations: any;
};

function Input({ label, register, errors, type, name, validations }: InputProps) {
  return (
    <>
      <label htmlFor={name} className={errors[name]?.message ? styles.labelFormError : styles.labelForm}>
        {label}
      </label>
      <input
        id={name}
        className={errors[name]?.message ? styles.inputFormError : styles.inputForm}
        type={type}
        {...register(name, validations)}
      />
      {errors[name]?.message && (
        <p role="msgError" className={styles.errorsForm}>
          {errors[name]?.message}
        </p>
      )}
    </>
  );
}

export default Input;
