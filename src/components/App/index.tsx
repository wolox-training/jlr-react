import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'scss/application.scss';

import SignUp from 'screens/SignUp/index';
import Language from 'components/Translation';
import Login from 'screens/Login/index';

import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Language />
        <Routes>
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<div>No found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
