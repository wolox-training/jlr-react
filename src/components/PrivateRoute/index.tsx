import React from 'react';
import { Navigate } from 'react-router-dom';

import { isAuthenticated } from 'utils/sessionManagement';

function Notification({ children }: any) {
  return isAuthenticated() ? children : <Navigate to="/" />;
}

export default Notification;
