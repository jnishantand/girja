// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Auth/LoginPage';
import SignupPage from './Auth/SignupPage';
import ResetPage from './Auth/ResetPage';
import HomeScreen from './Screen/home';
import Footer from './Components/Footer';

import Slider from './Components/Slider';
import ContactPage from './Components/ContactPage';
import ServicePage from './Components/ServicePage';
import AboutPage from './Components/AboutPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path='/reset' element={<ResetPage />}     />
        <Route path='/login' element={<LoginPage />}     />
        <Route path='/contact' element={<ContactPage />}     />
        <Route path='/service' element={<ServicePage />}     />
        <Route path='/about' element={<AboutPage />}     />

      </Routes>
    </Router>
  );
}

export default App;
