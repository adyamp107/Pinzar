import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Header from '../components/Header';
import Class from '../components/Class';
import Teacher from '../components/Teacher'; 
import Quote from '../components/Quote';
import Testimony from '../components/Testimony';

import './Home.css';

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Header />
      <Class />
      <Teacher />
      <Quote />
      <Testimony />
      <Footer />
    </div>
  );
}

export default Home;
