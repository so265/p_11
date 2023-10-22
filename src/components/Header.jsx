//header.jsx


import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../assets/argentBankLogo.webp';
import { logout } from '../reducers/authentificationReducer.jsx';
import { setAuthenticated } from '../reducers/userReducer.jsx';

import '../styleComponents/Header.scss';

function Header() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const userName = useSelector((state) => state.user.name);
  const dispatch = useDispatch();

  console.log('isAuthenticated:', isAuthenticated); // Ajout de ces logs pour le débogage
  console.log('userName:', userName); // Ajout de ces logs pour le débogage

  const handleSignOut = () => {
    dispatch(logout());
    dispatch(setAuthenticated(false));
  };

  return (
    <div className="main-nav">
      <Link to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
      </Link>

      <Link
        className="main-nav-item"
        to="/Login"
        onClick={isAuthenticated ? handleSignOut : null}
      >
        <i className="fa fa-user-circle"></i>
        {isAuthenticated ? `Bonjour, ${userName}` : 'Sign In'}
        {isAuthenticated && (
          <span onClick={handleSignOut} className="signout-link">
            Sign Out
          </span>
        )}
      </Link>
    </div>
  );
}

export default Header;
