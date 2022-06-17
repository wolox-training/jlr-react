export interface IFormSignUp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export type InputProps = {
  errors: any;
  type: 'text' | 'email' | 'number' | 'password';
  name: string;
  label: string;
  register: any;
};

export type Nullable<T> = T | null;
