import React from 'react';
import './Quote.css';

function Quote() {
  return (
    <div className='quote'>
        <div>
            <img className='quote-frame' src='./assets/quote_frame_1.png'/>
            <img className='quote-hero' src='./assets/quote_1.png'/>
        </div>
        <div>
            <img className='quote-frame' src='./assets/quote_frame_2.png'/>
            <img className='quote-hero-p' src='./assets/quote_2.png'/>
        </div>
        <div>
            <img className='quote-frame' src='./assets/quote_frame_3.png'/>
            <img className='quote-hero' src='./assets/quote_3.png'/>
        </div>
    </div>
  );
}

export default Quote;
