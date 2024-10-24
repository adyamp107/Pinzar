import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <Navbar />

      {/* ===== Header ===== */}
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
      
      {/* ===== Class ===== */}
      <div className='class'>
        <div className='left-class'>
            <h1>Temukan Banyak <br/>
            Kelas Berkualitas</h1>
            <p>Tersedia berbagai kelas dari mulai Jenjang SD, SMP, SMA hingga Kuliah</p>
        </div>
        <div className='right-class'>
            <button>
                <img src='./assets/math.png' />
                <div>
                  <img src='./assets/course.png' />
                  <h1>Kelas Matematika</h1>
                </div>
                <div>
                  <img src='./assets/book.png' />
                  <p>SMA 12</p>
                </div>
                <div>
                  <img src='./assets/member.png' />
                  <p>50</p>
                </div>
                <div>
                  <img src='./assets/rate.png' />
                  <p>4.95</p>
                </div>
            </button>
            <button>
                <img src='./assets/math.png' />
                <div>
                  <img src='./assets/course.png' />
                  <h1>Kelas Matematika</h1>
                </div>
                <div>
                  <img src='./assets/book.png' />
                  <p>SMA 12</p>
                </div>
                <div>
                  <img src='./assets/member.png' />
                  <p>50</p>
                </div>
                <div>
                  <img src='./assets/rate.png' />
                  <p>4.95</p>
                </div>
            </button>
            <button>
                <img src='./assets/math.png' />
                <div>
                  <img src='./assets/course.png' />
                  <h1>Kelas Matematika</h1>
                </div>
                <div>
                  <img src='./assets/book.png' />
                  <p>SMA 12</p>
                </div>
                <div>
                  <img src='./assets/member.png' />
                  <p>50</p>
                </div>
                <div>
                  <img src='./assets/rate.png' />
                  <p>4.95</p>
                </div>
            </button>
        </div>
      </div>

      {/* ===== Teacher ===== */}
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

      {/* ===== Quote ===== */}
      <div className='quote'>
        <div>
            <img className='quote-frame' src='./assets/quote_frame_1.png'/>
            <h1>Materi belajar yang lengkap dan bervariatif</h1>
            <img className='quote-hero' src='./assets/quote_1.png'/>
        </div>
        <div style={{ marginTop: '50px' }}>
            <img className='quote-hero' src='./assets/quote_2.png'/>
            <h1 style={{ color: '#6C72CC', paddingLeft: 0, paddingRight: '50px' }}>Belajar bersama dengan  Video Conference</h1>
        </div>
        <div>
            <img className='quote-frame' src='./assets/quote_frame_3.png'/>
            <h1>Dengan Jadwal yang Fleksibel</h1>
            <img className='quote-hero' src='./assets/quote_3.png'/>
        </div>
      </div>

      {/* ===== Testimony ==== */}
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

      <Footer />
    </div>
  );
}

export default Home;
