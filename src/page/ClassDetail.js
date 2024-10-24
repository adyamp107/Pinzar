import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './ClassDetail.css';

function ClassDetail() {
  return (
    <div className='class-detail'>
      <Navbar />
      
      <div className='cd-header'>
        <img src='./assets/quote_frame_1.png' />
        <h1>Persiapan SBMPTN</h1>
        
      </div>

      <Footer />
    </div>
  );
}

export default ClassDetail;
