import React from 'react'
import './navbar.css'
import logo from '../../img/prolookautologo.jpg'

export default function Navbar() {
  return (
    <div className='app_navbar-div'>
        <div className='app_navbar-name'>
          <img src={logo} alt='logo' width='150'/>
        </div>
        <ul className='app_navbar-links'>
            <li><a href='#contact'>Contact</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#propos'>À propos</a></li>
        </ul>
        <a className='app_navbar-email' href='mailto:contact@prolookauto.com'>contact@prolookauto.com</a>
    </div>
  )
}
