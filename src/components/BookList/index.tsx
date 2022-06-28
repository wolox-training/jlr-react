import React from 'react';
import { useQuery } from 'react-query';

import { getBooks } from '../../services/BooksService';
import Loading from '../Spinner/components/loading';
import { IBook } from '../../utils/types';

import styles from './styles.module.scss';

function NavBar() {
  const { data, isLoading } = useQuery('book', getBooks);
  const books = data?.page || [];
  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        books.map((todo: IBook) => (
          <div key={todo.id} className={styles.cardBook}>
            <img className={styles.imgBook} src={todo.image_url} />
            <span className={styles.titleBook}>{todo.title}</span>
            <span className={styles.authorBook}>{todo.author}</span>
          </div>
        ))
      )}
    </div>
  );
}

export default NavBar;
