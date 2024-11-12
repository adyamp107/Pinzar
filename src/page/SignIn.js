import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './SignIn.css';

import { useState, useEffect, useRef } from 'react';

function SignIn() {
    return (
        <div className='sign-in'>
            <Navbar/>
            <div className='sign-in-content'>
                <div>
                    <div className='sign-in-header'>
                        <img src='./assets/header.png' />
                    </div>
                    <form className='sign-in-form'>
                        <h1>Masuk Akun</h1>
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
                            <input type='submit' value={"Masuk"} />
                        </label>
                    </form>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default SignIn;
