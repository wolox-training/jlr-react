import Api from '../config/api';
import { IFormSignUp } from '../utils/types'

// service users

export const signUp = (user:IFormSignUp)=>  Api.post('/api/v1/users', user);
