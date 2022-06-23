import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import LogoContainer from '../../components/LogoContainer/index';
import { IFormSignUp } from '../../utils/types';
import Input from '../../components/Input/index';
import { validations } from '../../constants/formsValidation';
import { signUp } from '../../services/UsersService';
import Loading from '../../components/Spinner/components/loading';
import Notification from '../../components/Notification/index';

import styles from './styles.module.scss';

function SignUp() {
  const { t } = useTranslation();

  const [userSuccess, setUserSuccess] = useState(false);
  const [userError, setUserError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm<IFormSignUp>({ mode: 'onChange' });

  const mutation = useMutation(signUp, {
    onSuccess: data => {
      console.log(data);
      if (data.ok) {
        reset();
        setUserSuccess(true);
        setUserError(false);
      } else {
        setUserSuccess(false);
        setUserError(true);
      }
    }
  });

  const onSubmit = (data: IFormSignUp) => {
    mutation.reset();
    mutation.mutate(data);
  };

  return (
    <div className={styles.container}>
      <LogoContainer />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={t('FormsLabels:firstName')}
          name="firstName"
          type="text"
          register={register}
          errors={errors}
          validations={validations().required}
        />
        <Input
          label={t('FormsLabels:lastName')}
          name="lastName"
          type="text"
          register={register}
          errors={errors}
          validations={validations().required}
        />
        <Input
          label={t('FormsLabels:email')}
          name="email"
          type="email"
          register={register}
          errors={errors}
          validations={validations().email}
        />
        <Input
          label={t('FormsLabels:password')}
          name="password"
          type="password"
          register={register}
          errors={errors}
          validations={validations().password}
        />
        <Input
          label={t('FormsLabels:passwordConfirm')}
          name="passwordConfirm"
          type="password"
          register={register}
          errors={errors}
          validations={validations(watch).passwordConfirm}
        />
        {mutation.error || userError ? (
          <Notification message="Error al registrar usuario" type="error" />
        ) : (
          ''
        )}
        {userSuccess && <Notification message="Usuario Registrado" type="success" />}
        <button disabled={mutation.isLoading} className="btn-primary" type="submit">
          {mutation.isLoading ? <Loading /> : t('FormsButton:signUp')}
        </button>
        <div className={styles.bar} />
        <button className="btn-secondary" type="button">
          {t('FormsButton:login')}
        </button>
      </form>
    </div>
  );
}

export default SignUp;
