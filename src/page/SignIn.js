import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './SignIn.css';

import { useState, useEffect, useRef } from 'react';

function SignIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    
    useEffect(() => {

    }, []);

    const handleSignIn = () => {
        const user = {
            email: emailRef.current?.value,
            password: passwordRef.current?.value
        }
        console.log(user);
        console.log(process.env.REACT_APP_SIGN_IN);
        try {
            // fetch api sign in
        } catch (error) {
            alert('Maaf, ada kelasahan sistem saat sign in!');
        }
    };

    return (
        <div className='sign-in'>
            <Navbar/>
            <div className='sign-in-content'>
                <div>
                    <div className='sign-in-header'>
                        <img src='./assets/header.png' />
                    </div>
                    <form className='sign-in-form' onSubmit={(event) => { event.preventDefault(); handleSignIn(); }}>
                        <h1>Masuk Akun</h1>
                        <label>
                            <p>
                                Email:
                            </p>
                            <input type='text' placeholder='Email' ref={emailRef} required />
                        </label>
                        <label>
                            <p>
                                Kata Sandi:
                            </p>
                            <input type='text' placeholder='Kata Sandi' ref={passwordRef} required />
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
