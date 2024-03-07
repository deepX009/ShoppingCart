import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {

    const shouldLogout = window.confirm('Are you sure you want to logout?');

    if (shouldLogout) {

      navigate('/', { replace: true });
    }
  };

  return (
    <>
      <div  className="form">
        <h1>Logout</h1>
        <ul>
          <li>
            <button onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Logout;
