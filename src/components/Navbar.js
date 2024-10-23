import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-left-bar">Pinzar.</div>
        <div className='navbar-right-bar'>
            <button className="navbar-login-button">Masuk</button>
            <button className="navbar-signup-button">Daftar</button>
        </div>
    </nav>
  );
}

export default Navbar;
