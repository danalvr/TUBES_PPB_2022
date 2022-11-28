import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, useMatches } from 'react-router-dom';

import { HiHome } from 'react-icons/hi';
import { BiUserCircle } from 'react-icons/bi';
// import { FaStoreAlt } from 'react-icons/fa';
import { BiJoystickAlt } from 'react-icons/bi';
import { BiCategoryAlt } from 'react-icons/bi';

import Header from './components/header';
import Home from './pages/home';
import Games from './pages/games';
import DetailProducts from './pages/products/detail/detail';
import DetailGames from './pages/games/detail/detail';
import Products from './pages/products';
import Profile from './pages/profile';
import ErrorPage from './pages/error';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-games" element={<Games />} />
        <Route path="/detail-products/:id" element={<DetailProducts />} />
        <Route path="/detail-games/:id" element={<DetailGames />} />
        <Route path="/all-products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <footer>
        <NavLink to="/" className="iconWrapper">
          <HiHome className="icon" />
          Home
        </NavLink>
        <NavLink to="/all-games" className="iconWrapper">
          <BiCategoryAlt className="icon" />
          Games
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
