import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className='footer-left-bar'>
        <h1>Pinzar.</h1>
        <p>Belajar Mudah, <br/>
          Pengajaran Berkualitas</p>
      </div>
      <div className='footer-right-bar'>
        <div className='footer-right-top-bar'>
          <div className='image-button-1-wrapper'>
            <img className='image-button-1' src='./assets/ig.png' />
          </div>
          <div className='image-button-1-wrapper'>
            <img className='image-button-1' src='./assets/x.png' />
          </div>
          <div className='image-button-1-wrapper'>
            <img className='image-button-1' src='./assets/yt.png' />
          </div>
          <div className='image-button-1-wrapper'>
            <img className='image-button-1' src='./assets/wa.png' />
          </div>
        </div>
        <p>&copy; Pinzar Copyright 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
