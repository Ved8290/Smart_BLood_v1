import { useState } from 'react';

import './App.css';
import BloodAvailability from './BloodAvailability/page'; 


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/home.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/findBlood" element={<BloodAvailability />}/>             
      </Routes>
    </Router>
  );
};

export default App;

