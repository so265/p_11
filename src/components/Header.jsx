import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Importez useSelector pour accéder à l'état Redux
import logo from '../assets/argentBankLogo.webp';
import '../styleComponents/Header.scss';

function Header() {
  // Utilisez useSelector pour accéder à l'état Redux
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

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
        {isAuthenticated ? 'Sign Out' : 'Sign In'}
      </Link>
    </div>
  );
}

export default Header;
