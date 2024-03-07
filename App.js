
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Cart from './Cart';
import Login from './Login';
import ProductList from './ProductList;';

const App = () => {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(sessionStorage.getItem('isLoggedIn') === 'true');
  const [userEmail, setUserEmail] = useState('');

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    sessionStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
    sessionStorage.removeItem('isLoggedIn');
  };

  return (
    <div>
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} cartCount={cart.length} userEmail={userEmail} />
    
      <div>
        <h2>Welcome to Shopping</h2>
        
          <Routes>
            <Route path="/" element={<ProductList addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} emptyCart={emptyCart} total={cart.reduce((total, item) => total + item.price * item.quantity, 0)} />} />
            <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
          </Routes>
        
      </div>
      </Router>
    </div>
  );
};

export default App;




