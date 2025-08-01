// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children }) => {
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setIsAuthChecked(true);
    });

    return () => unsubscribe();
  }, []);

  if (!isAuthChecked) return <p>Checking authentication...</p>;

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
