
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { DataProvider } from './context/DataContext';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Buyer Pages
import Home from './pages/buyer/Home';
import BuyerDashboard from './pages/buyer/Dashboard';
import ProductDetails from './pages/buyer/ProductDetails';
import CartPage from './pages/buyer/Cart';
import Checkout from './pages/buyer/Checkout';
import OrderSuccess from './pages/buyer/OrderSuccess';
import BuyerOrders from './pages/buyer/BuyerOrders';
import Profile from './pages/buyer/Profile';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';

// Seller Pages
import SellerDashboard from './pages/seller/Dashboard';
import SellerProducts from './pages/seller/Products';
import SellerOrders from './pages/seller/Orders';
import SellerStore from './pages/seller/Store';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import AdminUsers from './pages/admin/UserManagement';
import AdminProducts from './pages/admin/ProductManagement';
import AdminOrders from './pages/admin/OrderMonitoring';
import AdminSettings from './pages/admin/Settings';
import AdminResetRequests from './pages/admin/ResetRequests';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <DataProvider>
        <CartProvider>
          <Router>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/cart" element={<CartPage />} />

                  {/* Buyer Routes */}
                  <Route path="/dashboard" element={<ProtectedRoute roles={['BUYER']}><BuyerDashboard /></ProtectedRoute>} />
                  <Route path="/checkout" element={<ProtectedRoute roles={['BUYER']}><Checkout /></ProtectedRoute>} />
                  <Route path="/order-success" element={<ProtectedRoute roles={['BUYER']}><OrderSuccess /></ProtectedRoute>} />
                  <Route path="/orders" element={<ProtectedRoute roles={['BUYER']}><BuyerOrders /></ProtectedRoute>} />
                  <Route path="/profile" element={<ProtectedRoute roles={['BUYER', 'SELLER', 'ADMIN']}><Profile /></ProtectedRoute>} />

                  {/* Seller Routes */}
                  <Route path="/seller/dashboard" element={<ProtectedRoute roles={['SELLER']}><SellerDashboard /></ProtectedRoute>} />
                  <Route path="/seller/products" element={<ProtectedRoute roles={['SELLER']}><SellerProducts /></ProtectedRoute>} />
                  <Route path="/seller/orders" element={<ProtectedRoute roles={['SELLER']}><SellerOrders /></ProtectedRoute>} />
                  <Route path="/seller/store" element={<ProtectedRoute roles={['SELLER']}><SellerStore /></ProtectedRoute>} />

                  {/* Admin Routes */}
                  <Route path="/admin/dashboard" element={<ProtectedRoute roles={['ADMIN']}><AdminDashboard /></ProtectedRoute>} />
                  <Route path="/admin/users" element={<ProtectedRoute roles={['ADMIN']}><AdminUsers /></ProtectedRoute>} />
                  <Route path="/admin/products" element={<ProtectedRoute roles={['ADMIN']}><AdminProducts /></ProtectedRoute>} />
                  <Route path="/admin/orders" element={<ProtectedRoute roles={['ADMIN']}><AdminOrders /></ProtectedRoute>} />
                  <Route path="/admin/settings" element={<ProtectedRoute roles={['ADMIN']}><AdminSettings /></ProtectedRoute>} />
                  <Route path="/admin/security-resets" element={<ProtectedRoute roles={['ADMIN']}><AdminResetRequests /></ProtectedRoute>} />

                  {/* Catch-all */}
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </CartProvider>
      </DataProvider>
    </AuthProvider>
  );
};

export default App;
