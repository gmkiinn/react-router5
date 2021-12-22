import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/'>
          Router
        </NavLink>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink to='/home' className='nav-link'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/about' className='nav-link'>
              About
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/projects' className='nav-link'>
              Projects
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/contact-us' className='nav-link'>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
