import React from 'react';
import Navbar from '../components/Navbar';

import './Dashboard.css';

import { useState, useEffect, useRef } from 'react';

function Dashboard() {
    const [popoutState, setPopoutState] = useState(false);
    const [tabState, setTabState] = useState('jm');

    const jmRef = useRef();
    const jbRef = useRef();
    const jkRef = useRef();

    useEffect(() => {

    }, []);

    useEffect(() => {
        if(jmRef.current) {
            jmRef.current.classList.remove('clicked-1');
        }
        if(jbRef.current) {
            jbRef.current.classList.remove('clicked-1');
        }
        if(jkRef.current) {
            jkRef.current.classList.remove('clicked-1');
        }
        switch(tabState) {
            case 'jm':
                if(jmRef.current) {
                    jmRef.current.classList.add('clicked-1');
                }
                break;
            case 'jb':
                if(jbRef.current) {
                    jbRef.current.classList.add('clicked-1');
                }
                break;
            case 'jk':
                if(jkRef.current) {
                    jkRef.current.classList.add('clicked-1');
                }
                break;
        }
    }, [tabState]);

    
    const HandleYourClass = () => {
        window.location.href = process.env.REACT_APP_URL + '/your-class';
    };

    const HandleClassInfo = () => {
        window.location.href = process.env.REACT_APP_URL + '/class-info';
    };

    const HandleJoinClass = () => {
        window.location.href = process.env.REACT_APP_URL + '/join-class';
    };


    return (
        <div className='dashboard'>
            <Navbar />
            <div className='dashboard-content'>
                <div className='dashboard-sidebar'>
                    <img src='./assets/logo.png' />
                    <button className='tab-button' ref={jmRef} onClick={() => setTabState('jm')} >Jadwal Mengajar</button>
                    <button className='tab-button' ref={jbRef} onClick={() => setTabState('jb')} >Jadwal Belajar</button>
                    <button className='tab-button' ref={jkRef} onClick={() => setTabState('jk')} >Jelajahi Kelas</button>
                </div>
                <div className='dashboard-mainbar'>
                    <div className='dashboard-mainbar-top'>
                        <h1>Selamat Datang di Pinzar</h1>
                        <h2>Mari Wujudkan Impianmu Bersama Kami!</h2>
                    </div>
                    <div className='dashboard-mainbar-bottom'>
                    {
                        tabState === 'jm' ? (
                            <div>
                                <div>
                                    <div className='create-class-button' onClick={() => setPopoutState(true)}>
                                        Buat Kelas Baru
                                    </div>
                                    <div className='class-button' onClick={HandleYourClass}>
                                        <img src='./assets/teacher2.png' />
                                        <input type='text' defaultValue={"Name: Adya Muhammad Prawira"} readOnly />
                                        <input type='text' defaultValue={"Peringkat: 100 Besar"} readOnly />
                                        <input type='text' defaultValue={"Pelajaran: Trigonometri"} readOnly />
                                        <input type='text' defaultValue={"Mulai: 12/11/2024 | 15:20"} readOnly />
                                        <input type='text' defaultValue={"Selesai: 12/11/2024 | 17:20"} readOnly />
                                        <input type='text' defaultValue={"Harga: Rp 20.000,-"} readOnly />
                                    </div>
                                </div>
                            </div>
                        ) : tabState === 'jb' ? (
                            <div>
                                <div>
                                    <div className='find-class-button' onClick={() => setTabState('jk')}>
                                        Jelajahi Kelas
                                    </div>
                                    <div className='class-button' onClick={HandleClassInfo}>
                                        <img src='./assets/teacher2.png' />
                                        <input type='text' defaultValue={"Name: Adya Muhammad Prawira"} readOnly />
                                        <input type='text' defaultValue={"Peringkat: 100 Besar"} readOnly />
                                        <input type='text' defaultValue={"Pelajaran: Trigonometri"} readOnly />
                                        <input type='text' defaultValue={"Mulai: 12/11/2024 | 15:20"} readOnly />
                                        <input type='text' defaultValue={"Selesai: 12/11/2024 | 17:20"} readOnly />
                                        <input type='text' defaultValue={"Harga: Rp 20.000,-"} readOnly />
                                    </div>
                                    <div className='class-button' onClick={HandleClassInfo}>
                                        <img src='./assets/teacher2.png' />
                                        <input type='text' defaultValue={"Name: Adya Muhammad Prawira"} readOnly />
                                        <input type='text' defaultValue={"Peringkat: 100 Besar"} readOnly />
                                        <input type='text' defaultValue={"Pelajaran: Trigonometri"} readOnly />
                                        <input type='text' defaultValue={"Mulai: 12/11/2024 | 15:20"} readOnly />
                                        <input type='text' defaultValue={"Selesai: 12/11/2024 | 17:20"} readOnly />
                                        <input type='text' defaultValue={"Harga: Rp 20.000,-"} readOnly />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <form>
                                    <input type='search' placeholder='Cari Kelas' required />
                                    <input type='submit' value={"Cari"} />
                                </form>
                                <div>
                                    <div className='class-button' onClick={HandleJoinClass}>
                                        <img src='./assets/teacher2.png' />
                                        <input type='text' defaultValue={"Name: Adya Muhammad Prawira"} readOnly />
                                        <input type='text' defaultValue={"Peringkat: 100 Besar"} readOnly />
                                        <input type='text' defaultValue={"Pelajaran: Trigonometri"} readOnly />
                                        <input type='text' defaultValue={"Mulai: 12/11/2024 | 15:20"} readOnly />
                                        <input type='text' defaultValue={"Selesai: 12/11/2024 | 17:20"} readOnly />
                                        <input type='text' defaultValue={"Harga: Rp 20.000,-"} readOnly />
                                    </div>
                                    <div className='class-button' onClick={HandleJoinClass}>
                                        <img src='./assets/teacher2.png' />
                                        <input type='text' defaultValue={"Name: Adya Muhammad Prawira"} readOnly />
                                        <input type='text' defaultValue={"Peringkat: 100 Besar"} readOnly />
                                        <input type='text' defaultValue={"Pelajaran: Trigonometri"} readOnly />
                                        <input type='text' defaultValue={"Mulai: 12/11/2024 | 15:20"} readOnly />
                                        <input type='text' defaultValue={"Selesai: 12/11/2024 | 17:20"} readOnly />
                                        <input type='text' defaultValue={"Harga: Rp 20.000,-"} readOnly />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    </div>
                </div>
            </div>
            {
                popoutState ? (
                    <div className='class-popout'>
                        <form className='class-create' onSubmit={(event) => { event.preventDefault(); setPopoutState(false) }}>
                            <h1>Buat Kelas:</h1>
                            <label>
                                Nama Pelajaran:
                                <input type='text' placeholder='Nama Pelajaran' required />
                            </label>
                            <label>
                                Deskripsi Pelajaran:
                                <input type='text' placeholder='Deskripsi Pelajaran' required />
                            </label>
                            <label>
                                Mulai:
                                <input type='date' required />
                            </label>
                            <label>
                                Selesai:
                                <input type='date' required />
                            </label>
                            <label>
                                Harga:
                                <input type='number' placeholder='Harga' required />
                            </label>
                            <label>
                                Link:
                                <input type='text' placeholder='Link' required />
                            </label>
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

export default Dashboard;
