import React from 'react'
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
  )
}

export default Navbar;