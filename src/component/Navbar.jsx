import React from 'react';
import '/assets/css/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'><Link to="/">Home</Link></li>
        <li className='navbar-item'><a href="#projects">My projects</a></li>
        <li className='navbar-item'><a href="./assets/CV/Lucas-Beauloi_CV.pdf" download={"Lucas Beauloi CV"}>My resume</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;
