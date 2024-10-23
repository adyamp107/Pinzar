import React from 'react';
import Home from './page/Home';
import ClassDetail from './page/ClassDetail';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/class-detail" element={<ClassDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
