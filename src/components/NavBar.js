import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }
  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <NavLink exact to='/' className='nav-logo' activeClassName='active'>
          &lt; Dev-Aman /&gt;
        </NavLink>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink
              exact
              to='/'
              className='nav-links'
              activeClassName='active'
            >
              <i
                className='fas fa-home'
                style={{ marginRight: '0.5rem', fontSize: '1.2rem' }}
              ></i>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              to='/about'
              className='nav-links'
              activeClassName='active'
            >
              <i
                className='far fa-user'
                style={{ marginRight: '0.5rem', fontSize: '1.2rem' }}
              ></i>
              About
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              to='/portfolio'
              className='nav-links'
              activeClassName='active'
            >
              <i
                className='fab fa-codepen'
                style={{ marginRight: '0.5rem', fontSize: '1.2rem' }}
              ></i>
              Portfolio
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              to='/contact'
              className='nav-links'
              activeClassName='active'
            >
              <i
                className='fas fa-envelope'
                style={{ marginRight: '0.5rem', fontSize: '1.2rem' }}
              ></i>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className='nav-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
