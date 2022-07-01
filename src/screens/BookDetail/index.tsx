import React from 'react';
import { useQuery } from 'react-query';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getBook } from '../../services/BooksService';
import Loading from '../../components/Spinner/components/loading';

import imgBackArrow from './assets/back-arrow.png';
import imgBadge from './assets/badge.png';
import styles from './styles.module.scss';

function BookDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data, isLoading } = useQuery(['book', id], () => getBook(id));
  const book = data?.data;

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Link to="/home" className={styles.btnBack}>
          <img className={styles.imgBackArrow} src={imgBackArrow} />
          <span className={styles.textBack}>{t('BookDetail:back')}</span>
        </Link>
        <div className={styles.cardBook}>
          {isLoading ? (
            <Loading />
          ) : (
            <div className={styles.detailBook}>
              <div className={styles.sectionImg}>
                <img className={styles.imgBook} src={book?.image_url} />
                <img className={styles.imgBadge} src={imgBadge} />
              </div>
              <div className={styles.infoBook}>
                <div>
                  <span className={styles.titleBook}>{book?.title}</span>
                  <span className={styles.textGenre}>{`(${book?.genre})`}</span>
                </div>
                <div className={styles.bar} />
                <div>
                  <span className={styles.labelDetail}>{t('BookDetail:author')}:</span>
                  <span className={styles.textDetail}>{book?.author}</span>
                </div>
                <div>
                  <span className={styles.labelDetail}>{t('BookDetail:editor')}:</span>
                  <span className={styles.textDetail}>{book?.editor}</span>
                </div>
                <div>
                  <span className={styles.labelDetail}>{t('BookDetail:year')}:</span>
                  <span className={styles.textDetail}>{book?.year}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
