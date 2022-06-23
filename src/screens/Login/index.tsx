import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';

import LogoContainer from '../../components/LogoContainer/index';
import Input from '../../components/Input/index';
import { validations } from '../../constants/formsValidation';
import { IFormLogin } from '../../utils/types';
import { login } from '../../services/UsersService';

import styles from './styles.module.scss';

function Login() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormLogin>({ mode: 'onChange' });

  const mutation = useMutation(login, {
    onSuccess: (data: any) => {
      if (data.ok) {
        console.log({
          uid: data.data.data.uid,
          client: data.headers.client,
          'access-token': data.headers['access-token']
        });
      }
    }
  });

  const onSubmit = (data: IFormLogin) => {
    mutation.mutate(data);
  };

  return (
    <div className={styles.container}>
      <LogoContainer />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
          validations={validations().required}
        />
        <button className="btn-primary" type="submit">
          {t('FormsButton:login')}
        </button>
        <div className={styles.bar} />
        <Link to="/sign_up">
          <button className="btn-secondary" type="button">
            {t("FormsButton:signUp")}
          </button>
        </Link>       
      </form>
    </div>
  );
}

export default Login;
