import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from 'screens/Home/index';
import SignUp from 'screens/SignUp/index';
import Language from 'components/Translation';
import Login from 'screens/Login/index';

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
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/sign_up"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route path="*" element={<div>No found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
