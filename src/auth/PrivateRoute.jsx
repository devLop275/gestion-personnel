// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ element }) {
  // Check if the user is authenticated (you can implement this logic)
  const isAuthenticated = localStorage.getItem('token') !== null;

  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: window.location.pathname }} />
  );
}

export default PrivateRoute;