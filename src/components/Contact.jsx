import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Phone from './Phone';
import Email from './Email';

function Contact({ match }) {
  console.log(match);
  return (
    <div className='mt-5'>
      <h3>Contact Us</h3>
      <ul className='nav' style={{ justifyContent: 'center' }}>
        <li className='nav-item'>
          <NavLink to={`${match.path}/phone`} className='nav-link'>
            Phone
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to={`${match.path}/email`} className='nav-link'>
            Email
          </NavLink>
        </li>
      </ul>
      <Route path={`${match.path}/phone`} component={Phone} />
      <Route path={`${match.path}/email`} component={Email} />
    </div>
  );
}

export default Contact;
