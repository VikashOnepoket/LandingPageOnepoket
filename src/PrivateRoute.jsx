// PrivateRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token);
  
  // Optionally, you can add a loading state to handle the initial state check
  // const loading = useSelector((state) => state.auth.loading);

  // Add logic here to handle loading if needed

  // Redirect to login if not authenticated
  if (!isAuthenticated || !token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
