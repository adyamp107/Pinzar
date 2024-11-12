import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './Profile.css';

import { useState, useEffect, useRef } from 'react';

function Profile() {

    return (
        <div className='profile'>
            <Navbar/>
            <div className='profile-content'>
                <div className='profile-header'>
                    <img src='./assets/teacher2.png' />
                    <h1>Hello Adya Muhammad Prawira</h1>
                </div>
                <form>
                    <h2>Data Diri:</h2>
                    <label>
                        <p>
                            Nama:
                        </p>
                        <input type='text' placeholder='Nama' defaultValue={"Adya Muhammad Prawira"} required />
                    </label>
                    <label>
                        <p>
                            Universitas:
                        </p>
                        <input type='text' placeholder='Universitas' defaultValue={"Univarsitas Binus Bekasi"} />
                    </label>
                    <label>
                        <p>
                            Pekerjaan:
                        </p>
                        <input type='text' placeholder='Pekerjaan' defaultValue={"Mahasiswa S1"} />
                    </label>
                    <label>
                        <p>
                            Email:
                        </p>
                        <input type='text' placeholder='Email' defaultValue={"adyamp123@gmail.com"} required />
                    </label>
                    <label>
                        <p>
                            Tentang:
                        </p>
                        <input type='text' placeholder='Tentang'defaultValue={"Bla bla bla"} />
                    </label>
                    <label>
                        <p>
                            Peringkat:
                        </p>
                        <input type='text' placeholder='Peringkat'defaultValue={"56"} readOnly />
                    </label>
                    <input type='submit' value={"Perbarui Profile"} />
                </form>
                <Footer/>
            </div>
        </div>
    );
}

export default Profile;
