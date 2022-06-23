import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';

import LogoContainer from '../../components/LogoContainer/index';
import { IFormSignUp } from '../../utils/types';
import Input from '../../components/Input/index';
import { validations } from '../../constants/formsValidation';
import { signUp } from '../../services/UsersService';
import Loading from '../../components/Spinner/components/loading';
import Notification from '../../components/Notification/index';

import styles from './styles.module.scss';

function SignUp() {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
        navigate('/', { replace: true });
        setUserError(false);
      } else {
        setUserError(true);
      }
    }
  });

  const onSubmit = (data: IFormSignUp) => {
    setUserError(false);
    mutation.reset();
    mutation.mutate(data);
  };

  return (
    <div className={styles.container}>
      <LogoContainer />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={t('FormsLabels:first_name')}
          name="first_name"
          type="text"
          register={register}
          errors={errors}
          validations={validations().required}
        />
        <Input
          label={t('FormsLabels:last_name')}
          name="last_name"
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
          label={t('FormsLabels:password_confirmation')}
          name="password_confirmation"
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
        <button disabled={mutation.isLoading} className="btn-primary" type="submit">
          {mutation.isLoading ? <Loading /> : t('FormsButton:signUp')}
        </button>
        <div className={styles.bar} />
        <Link to="/">
          <button className="btn-secondary" type="button">
            {t('FormsButton:login')}
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
