import { useState } from 'react';

function useAuth() {
  // This is a simple simulation of authentication
  // Replace this with your actual authentication logic
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to simulate login
  const login = () => setIsAuthenticated(true);

  // Function to simulate logout
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
}

export default useAuth;