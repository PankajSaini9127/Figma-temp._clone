import React from 'react'

import Logo from '../assest/image/Logo.svg'
//CSS
import '../assest/Css/Navbar.css'

export default function Navbar() {
  return (
    <>
      <div className='navbar'>
         <div>
            <img src={Logo} alt="Logo" className='logo'/>
         </div>
         <div className='navList' >
            <ul className='NavItemList'>
                <li className='listItem'>About</li>
                <li className='listItem'>Features</li>
                <li className='listItem'>Pricing</li>
                <li className='listItem'>Testimonials</li>
                <li className='listItem'>Help</li>
            </ul>
         </div>
         <div className='navbuttons'>
            <button className='navButton signIn'>Sign In</button>
            <button className='navButton signUp'>Sign Up</button>
         </div>
      </div>
    </>
  )
}
