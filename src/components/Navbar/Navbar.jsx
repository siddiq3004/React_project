import React from 'react'
import "./Navbar.css"
import { UserButton } from '@clerk/clerk-react'

const Navbar = () => {
  return (
    <div className='nav-bar'>
        <div className="logo">
            <img src="" alt="Logo" />
        </div>
        <div className="nav-menu">
            
        </div>
        <UserButton/>
    </div>
  )
}

export default Navbar