import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('loggedInUser') === 'true';

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
