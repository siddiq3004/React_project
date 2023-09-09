import React from 'react'
<<<<<<< HEAD
import '../Navbar/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='navigation'>
    <ul className='nav-items'>
        <li className='nav-content'>
          <Link to="/home" className='nav-content'>Home</Link>
        </li>
        <li className='nav-content'>
          <Link to="/applications" className='nav-content'>Applications</Link>
        </li>
        <li className='nav-content'>
          <Link to="/language" className='nav-content'>Programming</Link>
        </li>
        <li className='nav-content'>
          <Link to="/technology" className='nav-content'>Technology</Link>
        </li>
        <li className='nav-content'>
          <Link to="/feedback" className='nav-content'>Feedback</Link>
        </li>
      </ul>

{/* <ul className='nav-items'>
      <li className='nav-content'></li>
      <li className='nav-content'>Applications</li>
      <li className='nav-content'>Programming</li>
      <li className='nav-content'>Technology</li>
      <li className='nav-content'>Feedback</li>
    </ul> */}
    </div>
    </>
=======
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
>>>>>>> 0f4ce9c7d51075d85e3fba87c8454da18dd9416a
  )
}

export default Navbar;