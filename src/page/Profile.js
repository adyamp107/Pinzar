import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import './Profile.css';

import { useState, useEffect, useRef } from 'react';

function Profile() {
    const nameRef = useRef();
    const universityRef = useRef();
    const jobRef = useRef();
    const emailRef = useRef();
    const aboutRef = useRef();
    const passwordRef = useRef();
    const photoRef = useRef();

    useEffect(() => {

    }, []);

    const handleUpdateProfile = () => {
        const user = {
            name: nameRef.current?.value,
            university: universityRef.current?.value,
            job: jobRef.current?.value,
            email: emailRef.current?.value,
            about: aboutRef.current?.value,
            password: passwordRef.current?.value,
            photo: photoRef.current?.value
        }
        console.log(user);
        console.log(process.env.REACT_APP_UPDATE_PROFILE)
        try {
            // fetch api update profile
        } catch (error) {
            alert('Maaf, ada kesalahan saat update profile!');
        }
    };

    return (
        <div className='profile'>
            <Navbar/>
            <div className='profile-content'>
                <div className='profile-header'>
                    <img src='./assets/teacher2.png' />
                    <h1>Hello Adya Muhammad Prawira</h1>
                </div>
                <form onSubmit={(event) => { event.preventDefault(); handleUpdateProfile(); }}>
                    <h2>Data Diri:</h2>
                    <label>
                        <p>
                            Nama:
                        </p>
                        <input type='text' placeholder='Nama' defaultValue={"Adya Muhammad Prawira"} ref={nameRef} required />
                    </label>
                    <label>
                        <p>
                            Universitas:
                        </p>
                        <input type='text' placeholder='Universitas' defaultValue={"Univarsitas Binus Bekasi"} ref={universityRef} />
                    </label>
                    <label>
                        <p>
                            Pekerjaan:
                        </p>
                        <input type='text' placeholder='Pekerjaan' defaultValue={"Mahasiswa S1"} ref={jobRef} />
                    </label>
                    <label>
                        <p>
                            Email:
                        </p>
                        <input type='text' placeholder='Email' defaultValue={"adyamp123@gmail.com"} ref={emailRef} required />
                    </label>
                    <label>
                        <p>
                            Password:
                        </p>
                        <input type='text' placeholder='Password' defaultValue={"adya123"} ref={passwordRef} required />
                    </label>
                    <label>
                        <p>
                            Tentang:
                        </p>
                        <input type='text' placeholder='Tentang' defaultValue={"Bla bla bla"} ref={aboutRef} />
                    </label>
                    <label>
                        <p>
                            Foto:
                        </p>
                        <input type='file' ref={photoRef} />
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
