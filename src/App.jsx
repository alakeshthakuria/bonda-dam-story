// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import ProtectedRoute from './components/ProtectedRoute';

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA2JrmI_bi0mEWD0s_1dON6WbQXZKDhPvo",
  authDomain: "dam-story-react-vite-web-app.firebaseapp.com",
  projectId: "dam-story-react-vite-web-app",
  storageBucket: "dam-story-react-vite-web-app.firebasestorage.app",
  messagingSenderId: "927071312087",
  appId: "1:927071312087:web:d497dd43085979a586b892"
};

// ✅ Initialize Firebase only once
const app = initializeApp(firebaseConfig);
getAuth(app); // Optional to force auth init

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/gallery"
        element={
          <ProtectedRoute>
            <Gallery />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
