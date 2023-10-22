import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; // Importe useSelector pour accéder à l'état Redux
import logo from '../assets/argentBankLogo.webp';
import { logout } from '../reducers/authentificationReducer.jsx'; 
import { setAuthenticated } from '../reducers/userReducer.jsx'; // Import de l'action setAuthenticated

import '../styleComponents/Header.scss';

function Header() {
  // Utilise useSelector pour accéder à l'état Redux
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const userName = useSelector(state => state.user.name); // Ajoutez ceci pour obtenir le prénom de l'utilisateur
  const dispatch = useDispatch();

  const handleSignOut = () => {
    // Déclenche l'action Redux pour mettre à jour l'état d'authentification
    dispatch(logout()); 
    dispatch(setAuthenticated(false));  // Met à jour l'état d'authentification à faux lors de la déconnexion
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

      <Link className="main-nav-item" to="/Login" onClick={isAuthenticated ? handleSignOut : null}>
        <i className="fa fa-user-circle"></i>
        {isAuthenticated ? `Bonjour, ${userName}` : 'Sign In'}
      </Link>
    </div>
  );
}

export default Header;
