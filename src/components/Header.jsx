import React from 'react';
import { Link } from 'react-router-dom'; // Importation Link depuis React Router
import logo from '../assets/argentBankLogo.webp';
import '../styleComponents/Header.scss';


function Header() {
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
        Sign In
      </Link>
    </div>
  );
}

export default Header;
