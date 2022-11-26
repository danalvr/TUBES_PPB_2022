import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import { HiHome } from 'react-icons/hi';
import { BiUserCircle } from 'react-icons/bi';
// import { FaStoreAlt } from 'react-icons/fa';
import { BiJoystickAlt } from 'react-icons/bi';
import { BiCategoryAlt } from 'react-icons/bi';

import Header from './components/header';
import Home from './pages/home';
import Games from './pages/games';
import Products from './pages/products';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-games" element={<Games />} />
        <Route path="/all-products" element={<Products />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
      <footer>
        <NavLink to="/" className="iconWrapper">
          <HiHome className="icon" />
          Home
        </NavLink>
        <NavLink to="/all-games" className="iconWrapper">
          <BiCategoryAlt className="icon" />
          Information
        </NavLink>
        <NavLink to="/all-products" className="iconWrapper">
          <BiJoystickAlt className="icon" />
          Product
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <BiUserCircle className="icon" />
          Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;
