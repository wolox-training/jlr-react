export interface IFormSignUp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface IFormLogin {
  email: string;
  password: string;
}

export type Nullable<T> = T | null;
