import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <div className='left-header'>
            <h1>"Belajar Mudah, <br/>
            Pengajaran Berkualitas"</h1>
            <button>Belajar Sekarang</button>
        </div>
        <div className='right-header'>
            <img src='./assets/header.png' />
        </div>
    </div>
  );
}

export default Header;
