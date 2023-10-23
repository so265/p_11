// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../assets/argentBankLogo.webp';
import { logout } from '../reducers/authentificationReducer.jsx';
import { setAuthenticated } from '../reducers/userReducer.jsx';

import '../styleComponents/Header.scss';

function Header() {
  // J'utilise useSelector pour extraire l'état isAuthenticated et le nom de l'utilisateur depuis le store Redux.
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();

// Fonction pour gérer la déconnexion de l'utilisateur.
  const handleSignOut = () => {
    dispatch(logout());   // J'appelle l'action logout pour vider le token d'authentification.
    dispatch(setAuthenticated(false)); // // J'appelle l'action setAuthenticated pour définir l'authentification comme "false".
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
        <span className='username-text-left'>{isAuthenticated ? `${userName}` : 'Sign In'}</span>
        {isAuthenticated && (
          <span onClick={handleSignOut} className="signout-link">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </span>
        )}
      </Link>
    </div>
  );
}

export default Header;
