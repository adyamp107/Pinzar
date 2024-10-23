import React from 'react';
import './Teacher.css';

function Teacher() {
  return (
    <div className='teacher'>
        <h1>Pengajar Terfavorit</h1>
        <div>
            <button>
                <div className='top-teacher-button'>
                    <img src='./assets/teacher1.png' />
                    <div></div>
                </div>
                <div className='bottom-teacher-button'>
                    <p>Edric was a fantastic mentor for my software engineering journey.</p>
                    <div>
                        <img className='person' src='./assets/teacher1.png' />
                        <p>Robin</p>
                        <img className='rate' src='./assets/5_rate.png' />
                    </div>
                </div>
            </button>
            <button>
                <div className='top-teacher-button'>
                    <img src='./assets/teacher2.png' />
                    <div></div>
                </div>
                <div className='bottom-teacher-button'>
                    <p>Edric was a fantastic mentor for my software engineering journey.</p>
                    <div>
                        <img className='person' src='./assets/teacher2.png' />
                        <p>Robin</p>
                        <img className='rate' src='./assets/5_rate.png' />
                    </div>
                </div>
            </button>
            <button>
                <div className='top-teacher-button'>
                    <img src='./assets/teacher3.png' />
                    <div></div>
                </div>
                <div className='bottom-teacher-button'>
                    <p>Edric was a fantastic mentor for my software engineering journey.</p>
                    <div>
                        <img className='person' src='./assets/teacher3.png' />
                        <p>Robin</p>
                        <img className='rate' src='./assets/5_rate.png' />
                    </div>
                </div>
            </button>
        </div>
    </div>
  );
}

export default Teacher;
