import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <nav>
    <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/aboutus'>About us</Link>
          </li>
          <li>
            <Link to='/contactus'>Contact us</Link>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar