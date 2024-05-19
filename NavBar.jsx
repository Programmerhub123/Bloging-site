import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './logo.png';
import searchIcon from './search.png';

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Write for Us</li>
      </ul>
      <div className="search-container">
        <img src={searchIcon} alt="Search" className='icon'/>
      </div>
    </div>
  );
}

export default NavBar;