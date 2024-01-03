import React from 'react';
import '/assets/css/Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <div className='left'>
          <li className='navbar-item'><Link to="/">About</Link></li>
          <li className='navbar-item'><a href="#projects">Projects</a></li>
          <li className='navbar-item'><a href="#contact">Contact</a></li>
        </div>

        <div className='right'>
          <li className='navbar-item'><a href="./assets/CV/Lucas-Beauloi_CV.pdf" download={"Lucas Beauloi CV"}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="white" clip-rule="evenodd"><path d="M11.5 8h1v7.826l2.5-3.076.753.665-3.753 4.585-3.737-4.559.737-.677 2.5 3.064v-7.828zm7 12h-13c-2.481 0-4.5-2.019-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.79c.185-3.447 3.031-6.146 6.48-6.146 3.449 0 6.295 2.699 6.479 6.146l.043.79.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.481-2.019 4.5-4.5 4.5m.979-9.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408"/></svg>My resume</a></li>
        </div>
      </ul>
    </nav>
  );
}
export default Navbar;
