import React from 'react'
import logo from '../assets/argentBankLogo.webp';
import "../styleComponents/Header.scss";

function Header() {
  return (
    <div className="main-nav">
    <a className="main-nav-logo" href="./index.html">
      <img
        className="main-nav-logo-image"
        src={logo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </a>
    
      <a className="main-nav-item" href="./sign-in.html">
        <i className="fa fa-user-circle"></i>
        Sign In
      </a>
    </div>
  )
}

export default Header