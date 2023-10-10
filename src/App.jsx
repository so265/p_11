import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Login from './pages/Login.jsx';

import Header from './components/Header.jsx';
import './App.scss';
import User from './pages/User.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
