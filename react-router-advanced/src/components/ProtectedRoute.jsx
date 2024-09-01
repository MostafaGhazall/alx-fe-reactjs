import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import the custom hook

function ProtectedRoute({ element }) {
  const { isAuthenticated } = useAuth(); // Use the hook to get authentication status

  return isAuthenticated ? element : <Navigate to="/login" />;
}

export default ProtectedRoute;