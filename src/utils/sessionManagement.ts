import LocalStorageService from 'services/LocalStorageService';

export const isAuthenticated = () => LocalStorageService.getValue('access-token');

export const headers = () => {
  const accessToken = LocalStorageService.getValue('access-token');
  const client = LocalStorageService.getValue('client');
  const uid = LocalStorageService.getValue('uid');
  return { headers: { 'access-token': accessToken, client, uid } };
};
