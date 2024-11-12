import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-left-bar">Pinzar.</div>
        <div className='navbar-right-bar'>
          <a href='/' >Beranda</a>
          <a href='/profile' >Profil</a>
          <a href='/sign-in' >Masuk</a>
          <a href='/sign-up' >Daftar</a>
        </div>
    </nav>
  );
}

export default Navbar;
