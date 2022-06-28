import React from 'react';
import { Navigate } from 'react-router-dom';

import { isAuthenticated } from 'utils/sessionManagement';

function Notification({ children }: any) {
  return isAuthenticated() ? <Navigate to="/home" /> : children;
}

export default Notification;
