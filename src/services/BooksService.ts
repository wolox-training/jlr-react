import Api from '../config/api';
import { IBooksResponse } from '../utils/types';
import { getHeaders } from '../utils/sessionManagement';

const headers = { headers: getHeaders() };

export const getBooks = () =>
  Api.get<IBooksResponse>('/api/v1/books', {}, headers).then(response => response.data);
