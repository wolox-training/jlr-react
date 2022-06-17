import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import LogoContainer from '../../components/LogoContainer/index';
import { IFormSignUp } from '../../utils/types';
import Input from '../../components/Input/index';

import styles from './styles.module.scss';

const min = 8;

const schema = yup.object().shape({
  email: yup.string().required('Campo es requerido'),
  firstName: yup.string().required('Campo es requerido'),
  lastName: yup.string().required('Campo es requerido'),
  password: yup
    .string()
    .min(min, 'La contraseña debe tener al menos 8 caracteres')
    .required('Campo es requerido'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('Se requiere confirmar la contraseña')
});

function SignUp() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormSignUp>({ mode: 'onChange', resolver: yupResolver(schema) });

  const onSubmit = (data: IFormSignUp) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <LogoContainer />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={t('SignUp:firstName')}
          name="firstName"
          type="text"
          register={register}
          errors={errors}
        />
        <Input label={t('SignUp:lastName')} name="lastName" type="text" register={register} errors={errors} />
        <Input label={t('SignUp:email')} name="email" type="email" register={register} errors={errors} />
        <Input
          label={t('SignUp:password')}
          name="password"
          type="password"
          register={register}
          errors={errors}
        />
        <Input
          label={t('SignUp:passwordConfirm')}
          name="passwordConfirm"
          type="password"
          register={register}
          errors={errors}
        />
        <button className={styles.btnSignUp} type="submit">
          {t('SignUp:signUp')}
        </button>
      </form>
      <div className={styles.bar} />
      <button className={styles.btnLogin} type="submit">
        {t('SignUp:login')}
      </button>
    </div>
  );
}

export default SignUp;
