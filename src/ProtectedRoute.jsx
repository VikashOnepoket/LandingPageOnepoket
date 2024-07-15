import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Mock authentication function (replace with your actual authentication logic)
const isAuthenticated = () => {
  // Check if the user is authenticated
  // e.g., by checking a token in local storage or context
  return localStorage.getItem('token') !== null;
};

const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
