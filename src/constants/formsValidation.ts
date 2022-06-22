import { useTranslation } from 'react-i18next';

export const validations = (watch?: any) => {
  // eslint-disable-next-line
  const { t } = useTranslation();

  const validation = {
    required: { required: t('Forms:required') },
    email: {
      required: t('Forms:required'),
      pattern: {
        // eslint-disable-next-line
        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: t('Forms:emailInvalid')
      }
    },
    password: {
      required: t('Forms:required'),
      minLength: { value: 8, message: t('Forms:minLengthPass') },
      validate: {
        letter: (value: string) => /[A-ZÁÉÍÓÚÜÑ]/.test(value) || t('Forms:oneLetter'),
        number: (value: string) => /[0-9]/.test(value) || t('Forms:oneNumber')
      }
    },
    passwordConfirm: {
      required: t('Forms:required'),
      validate: (val: string) => val === watch('password') || t('Forms:passwordConfirm')
    }
  };
  return validation;
};
