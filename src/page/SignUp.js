import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './SignUp.css';

import { useState, useEffect, useRef } from 'react';

function SignUp() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    useEffect(() => {

    }, []);

    const handleSignUp = () => {
        const user = {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
            passwordConfirm: passwordConfirmRef.current?.value
        }
        console.log(user);
        console.log(process.env.REACT_APP_SIGN_UP);
        try {
            // fetch api sign up
        } catch (error) {
            alert('Maaf, ada kesalahan saat sign up!');
        }
    };

    return (
        <div className='sign-up'>
            <Navbar/>
            <div className='sign-up-content'>
                <div>
                    <div className='sign-up-header'>
                        <img src='./assets/header.png' />
                    </div>
                    <form className='sign-up-form' onSubmit={(event) => { event.preventDefault(); handleSignUp(); }}>
                        <h1>Daftar Akun</h1>
                        <label>
                            <p>
                                Nama Lengkap:
                            </p>
                            <input type='text' placeholder='Nama Lengkap' ref={nameRef} required />
                        </label>
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
                            <p>
                                Konfirmasi Kata Sandi:
                            </p>
                            <input type='text' placeholder='Konfirmasi Kata Sandi' ref={passwordConfirmRef} required />
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
