import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './SignUp.css';

import { useState, useEffect, useRef } from 'react';

function SignUp() {
    return (
        <div className='sign-up'>
            <Navbar/>
            <div className='sign-up-content'>
                <div>
                    <div className='sign-up-header'>
                        <img src='./assets/header.png' />
                    </div>
                    <form className='sign-up-form'>
                        <h1>Daftar Akun</h1>
                        <label>
                            <p>
                                Nama Lengkap:
                            </p>
                            <input type='text' placeholder='Nama Lengkap' required />
                        </label>
                        <label>
                            <p>
                                Email:
                            </p>
                            <input type='text' placeholder='Email' required />
                        </label>
                        <label>
                            <p>
                                Kata Sandi:
                            </p>
                            <input type='text' placeholder='Kata Sandi' required />
                        </label>
                        <label>
                            <p>
                                Konfirmasi Kata Sandi:
                            </p>
                            <input type='text' placeholder='Konfirmasi Kata Sandi' required />
                        </label>
                        <label>
                            <input type='submit' value={"Daftar"} />
                        </label>
                    </form>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default SignUp;
