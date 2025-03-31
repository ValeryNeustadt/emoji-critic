import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

function NavBar() {
  return (
    <nav className='menu'>
      <NavLink
        className='menu__link'
        activeClassName='menu__link_active'
        exact
        to='/'
      >
        Home
      </NavLink>
      <NavLink
        className='menu__link'
        activeClassName='menu__link_active'
        to='/reviews'
      >
        Emoji
      </NavLink>
      <NavLink
        className='menu__link'
        activeClassName='menu__link_active'
        to='/about-me'
      >
        About
      </NavLink>
    </nav>
  );
}

export default NavBar;
