import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './ClassInfo.css';

import { useState, useEffect, useRef } from 'react';

function JoinClass() {
    const [popoutState, setPopoutState] = useState(false);

    return (
        <div className='class'>
            <Navbar/>
            <div className='class-content'>
                <div className='class-header'>
                    <img src='./assets/teacher2.png' />
                    <h1>Hello, Lets Study with Adya Muhammad Prawira</h1>
                </div>
                <form onSubmit={(event) => { event.preventDefault(); setPopoutState(true) }}>
                    <h2>Pelajaran:</h2>
                    <label>
                        <p>
                            Pelajaran:
                        </p>
                        <input type='text' placeholder='Pelajaran' defaultValue={"Trigonometri"} readOnly />
                    </label>
                    <label>
                        <p>
                            Deskripsi:
                        </p>
                        <input type='text' placeholder='Deskripsi' defaultValue={"Belajar penggunaan Sin Cos Tan"} readOnly />
                    </label>
                    <label>
                        <p>
                            Mulai:
                        </p>
                        <input type='text' placeholder='Mulai' defaultValue={"12/11/2024 | 15:20"} readOnly />
                    </label>
                    <label>
                        <p>
                            Selesai:
                        </p>
                        <input type='text' placeholder='Selesai'defaultValue={"12/11/2024 | 17:20"} readOnly />
                    </label>
                    <label>
                        <p>
                            Harga: 
                        </p>
                        <input type='text' placeholder='Harga'defaultValue={"Rp 20.000,-"} readOnly />
                    </label>
                    <label>
                        <p>
                            Peringkat:                            
                        </p>
                        <input type='text' placeholder='Peringkat Pengajar'defaultValue={"56"} readOnly />   
                    </label>
                    <label>
                        <p>
                            Link:
                        </p>
                        <input type='text' placeholder='Link'defaultValue={"https://url.com"} readOnly />
                    </label>
                    <input type='submit' value={"Bergabung"} />
                </form>
                <button onClick={() => { window.location.href = process.env.REACT_APP_URL + '/profile' }} >Lihat Profil Pengajar</button>
                {/* <div className='rating'>
                    <form>
                        Beri Penilaian (1 - 100):
                        <input type='number' placeholder='Nilai' required />
                        <input type='submit' value={'Nilai'} />
                    </form>
                </div> */}
                <Footer/>
            </div>
            {
                popoutState ? (
                    <div className='class-popout'>
                        <form className='class-join' onSubmit={(event) => { event.preventDefault(); setPopoutState(false) }}>
                            <h1>Pembayaran:</h1>
                            <label>
                                <p>
                                    Transfer Rekening: 01234567890                                
                                </p>
                                <p>
                                    Bukti Pembayaran:
                                </p>
                                <input type='file' required />
                            </label>
                            <div>
                                <input type='submit' value={"Kirim Bukti Pembayaran"} />
                                <button onClick={() => setPopoutState(false)}>Batal Pembayaran</button>
                            </div>
                        </form>
                    </div>
                ) : null
            }
        </div>
    );
}

export default JoinClass;
