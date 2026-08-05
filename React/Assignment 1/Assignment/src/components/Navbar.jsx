import React from 'react'
import { Link, NavLink } from 'react-router'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/Products">Products</NavLink>
            </li>
            <li>
                <NavLink to="/SearchProduct">Search Product</NavLink>
            </li>
        </ul>
      </nav>
     

    </div>
  )
}

export default Navbar

