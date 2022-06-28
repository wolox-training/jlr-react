import LocalStorageService from 'services/LocalStorageService';

export const isAuthenticated = () => LocalStorageService.getValue('access-token');

export const getHeaders = () => {
  const accessToken = LocalStorageService.getValue('access-token');
  const client = LocalStorageService.getValue('client');
  const uid = LocalStorageService.getValue('uid');
  return { 'access-token': accessToken, client, uid };
};
