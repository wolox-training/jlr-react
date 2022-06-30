import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from 'screens/Home/index';
import SignUp from 'screens/SignUp/index';
import Language from 'components/Translation';
import Login from 'screens/Login/index';
import NoFound from 'screens/NoFound/index';

import PrivateRoute from '../PrivateRoute/index';
import PublicRoute from '../PublicRoutes/index';

import 'scss/application.scss';

import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Language />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/sign_up" element={<SignUp />} />
            <Route path="/" element={<Login />} />
          </Route>
          <Route path="*" element={<NoFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
