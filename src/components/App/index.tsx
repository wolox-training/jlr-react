import React from 'react';

import 'scss/application.scss';

import SignUp from 'screens/SignUp/index';
import Language from 'components/Translation';

import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Language />
      <SignUp />
    </div>
  );
}

export default App;
