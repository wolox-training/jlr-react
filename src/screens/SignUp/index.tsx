import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import LogoContainer from '../../components/LogoContainer/index';
import { IFormSignUp } from '../../utils/types';
import Input from '../../components/Input/index';

import styles from './styles.module.scss';

function SignUp() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<IFormSignUp>({ mode: 'onChange'});

  const validations = {
    email: {required: t('Forms:required')},
    firstName:  {required: t('Forms:required')},
    lastName:  {required: t('Forms:required'),
    pattern: {
      // eslint-disable-next-line
      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: t('Forms:emailInvalid')
    }},
    password:  { required: t('Forms:required') ,
    minLength: { value: 8, message: t('Forms:minLengthPass') },
    validate: {
      letter: (value:string) => /[A-ZÁÉÍÓÚÜÑ]/.test(value) || t('Forms:oneLetter'),
      number: (value:string) => /[0-9]/.test(value) || t('Forms:oneNumber')
    }},
    passwordConfirm:  {
      required: t('Forms:required') as string,
      validate: (val: string) => watch('password') === val || t('Forms:passwordConfirm')
    },
  };

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
          validations={validations.firstName}
        />
        <Input label={t('SignUp:lastName')} name="lastName" type="text" register={register} errors={errors} validations={validations.lastName} />
        <Input label={t('SignUp:email')} name="email" type="email" register={register} errors={errors} validations={validations.email} />
        <Input
          label={t('SignUp:password')}
          name="password"
          type="password"
          register={register}
          errors={errors}
          validations={validations.password}
        />
        <Input
          label={t('SignUp:passwordConfirm')}
          name="passwordConfirm"
          type="password"
          register={register}
          errors={errors}
          validations={validations.passwordConfirm}
        />
        <button className={styles.btnSignUp} type="submit">
          {t('SignUp:signUp')}
        </button>
        <div className={styles.bar} />
        <button className={styles.btnLogin} type="button">
          {t('SignUp:login')}
        </button>
      </form>
    </div>
  );
}

export default SignUp;