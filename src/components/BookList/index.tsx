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
        books.map((book: IBook) => (
          <div key={book.id} className={styles.cardBook}>
            <img className={styles.imgBook} src={book.image_url} />
            <span className={styles.titleBook}>{book.title}</span>
            <span className={styles.authorBook}>{book.author}</span>
          </div>
        ))
      )}
    </div>
  );
}

export default NavBar;
