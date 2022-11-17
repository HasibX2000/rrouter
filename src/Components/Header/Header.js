import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div className="NavigPart">
      <nav>
        <NavLink className="NavLink" to="/">
          Home
        </NavLink>
        <NavLink className="NavLink" to="/blogs">
          Blogs
        </NavLink>
        <NavLink className="NavLink" to="/about">
          About
        </NavLink>
        <NavLink className="NavLink" to="/contact">
          Contact
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
