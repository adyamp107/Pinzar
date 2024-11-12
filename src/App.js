import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './page/Dashboard';
import Profile from './page/Profile';
import ClassInfo from './page/ClassInfo';
import JoinClass from './page/JoinClass';
import YourClass from './page/YourClass';
import SignIn from './page/SignIn';
import SignUp from './page/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/class-info" element={<ClassInfo />} />
          <Route path="/join-class" element={<JoinClass />} />
          <Route path="/your-class" element={<YourClass />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
