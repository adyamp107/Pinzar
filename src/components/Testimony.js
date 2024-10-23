import React from 'react';
import './Testimony.css';

function Testimony() {
  return (
    <div className='testimony'>
        <h1>Testimoni Belajar</h1>
        <div>
            <img src='./assets/testimony.png'/>
            <div>
                <h1>“Lorem Ipsum Dolor Sit Amet”</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                </p>
                <h2>Andika Gunawan</h2>
                <h3>Mahasiswa</h3>
            </div>
        </div>
    </div>
  );
}

export default Testimony;
