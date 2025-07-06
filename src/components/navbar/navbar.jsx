import React from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt='' className='logo'/>
      <ul className='navbar-menu'>
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-app</li>
        <li>COntact Us</li>
      </ul>
    </div>
  )
}

export default Navbar
