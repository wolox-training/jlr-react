import React from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

import LogoContainer from '../../components/LogoContainer/index';
import { IFormSignUp } from '../../utils/types';
import Input from '../../components/Input/index';
import { validations } from '../../constants/formsValidation';

import styles from './styles.module.scss';

function SignUp() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<IFormSignUp>({ mode: 'onChange' });

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
          validations={validations().required}
        />
        <Input
          label={t('SignUp:lastName')}
          name="lastName"
          type="text"
          register={register}
          errors={errors}
          validations={validations().required}
        />
        <Input
          label={t('SignUp:email')}
          name="email"
          type="email"
          register={register}
          errors={errors}
          validations={validations().email}
        />
        <Input
          label={t('SignUp:password')}
          name="password"
          type="password"
          register={register}
          errors={errors}
          validations={validations().password}
        />
        <Input
          label={t('SignUp:passwordConfirm')}
          name="passwordConfirm"
          type="password"
          register={register}
          errors={errors}
          validations={validations(watch).passwordConfirm}
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
