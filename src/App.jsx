// src/App.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import Store from './pages/Store';
import Favorite from './pages/Favorite';
import Profile from './pages/Profile';
import WebBuscuits from './pages/WebBuscuits';
import ProtectedRoute from './routes/ProtectedRoute';
import { CartProvider } from './context/CartContext';
import Setting from './pages/Setting';
import AdminDashboard from './pages/AdminDashboard';
import './App.css'; // Custom global styles

function App() {
  const [showScroll, setShowScroll] = useState(false);
  const location = useLocation();

  // Determine whether to hide Navbar (for admin dashboard)
  const hideNavbarForAdmin = location.pathname === '/admin-dashboard';

  // Show scroll button after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <CartProvider>
      <div className="app-container">
        {/* Show Navbar only if NOT admin dashboard */}
        {!hideNavbarForAdmin && <Navbar />}

        <div className="content-wrapper">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/store"
              element={
                <ProtectedRoute>
                  <Store />
                </ProtectedRoute>
              }
            />
            <Route
              path="/fav"
              element={
                <ProtectedRoute>
                  <Favorite />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <CartPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cookies"
              element={
                <ProtectedRoute>
                  <WebBuscuits />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Setting />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>

        {/* Scroll to Top Button */}
        {showScroll && (
          <div className="scroll-to-top" onClick={scrollToTop}>
            ▲
          </div>
        )}
      </div>
    </CartProvider>
  );
}

export default App;
