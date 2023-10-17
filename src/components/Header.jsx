import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../reducers/authentificationReducer'; // Importez la fonction logout depuis le bon fichier
import logo from '../assets/argentBankLogo.webp';
import '../styleComponents/Header.scss';



function Header() {
  // Accès à l'état d'authentification depuis Redux
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  const dispatch = useDispatch();

  // Fonction pour gérer la déconnexion
  const handleSignOut = () => {
    dispatch(logout()); // Appeler la fonction de déconnexion
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

      <Link className="main-nav-item" to="/Login">
        <i className="fa fa-user-circle"></i>
        {isAuthenticated ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          'Sign In'
        )}
      </Link>
    </div>
  );
}

export default Header;
