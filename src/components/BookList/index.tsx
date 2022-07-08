import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useDispatch, actionCreators } from 'contexts/cart';

import { getBooks } from '../../services/BooksService';
import Loading from '../Spinner/components/loading';
import { IBook } from '../../utils/types';

import ImgAdd from './assets/Add.png';
import styles from './styles.module.scss';

function NavBar() {
  const { t } = useTranslation();
  const { data, isLoading } = useQuery('book', getBooks);
  const books = data?.page || [];

  const dispatch = useDispatch();

  const addBook = (book: IBook) => {
    const { id, author, title } = book;
    dispatch(actionCreators.addBook({ id, author, title }));
  };

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loading />
      ) : (
        books.map((book: IBook) => (
          <div key={book.id} className={styles.cardBook}>
            <Link to={`/books/${book.id}`}>
              <img className={styles.imgBook} src={book.image_url} alt={t('Images:bookCover')} />
              <span className={styles.titleBook}>{book.title}</span>
              <span className={styles.authorBook}>{book.author}</span>
            </Link>
            <button type="button" onClick={() => addBook(book)}>
              <img className={styles.imgAdd} src={ImgAdd} alt={t('BookList:imgAdd')} />
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default NavBar;
