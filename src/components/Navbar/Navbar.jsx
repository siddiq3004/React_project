import React from 'react'
import "./Navbar.css"
import { UserButton } from '@clerk/clerk-react'
import logo from '../../assets/images/logo.png'
import { HomeIcon } from '@radix-ui/react-icons'

const Navbar = () => {
  return (
    <div className='nav-bar'>
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
        <div className="nav-menu">
            <Link>
            <HomeIcon/>Home
            </Link>
        </div>
        <UserButton/>
    </div>
  )
}

export default Navbar