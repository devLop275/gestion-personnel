import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function AuthGuard({ element }) {
  
  const isLoggedIn = false;

  return isLoggedIn ? (
    element
  ) : (
    <Navigate to="/" state={{ from: window.location.pathname }} />
  );
}

export default AuthGuard;