
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout, cartCount, userEmail }) => {
  return (
    <div>
      <h1>Shopping Website</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart ({cartCount})</Link></li>
          {isLoggedIn ? (
            <>
              <li>{userEmail}</li>
              <li><button onClick={onLogout}>Logout</button></li>
            </>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
