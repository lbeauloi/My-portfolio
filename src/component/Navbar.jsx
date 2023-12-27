import React from 'react';
import '/assets/css/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'><Link to="/">Home</Link></li>
        <li className='navbar-item'>Project 1</li>
        <li className='navbar-item'>Project 2</li>
        <li className='navbar-item'>Project 3</li>
        <li className='navbar-item'>Project 4</li>
      </ul>
    </nav>
  );
}
export default Navbar;