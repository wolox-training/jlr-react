import Api from '../config/api';

// service books

export const getBooks = () => Api.post('https://books-training-rails.herokuapp.com/api/v1');
