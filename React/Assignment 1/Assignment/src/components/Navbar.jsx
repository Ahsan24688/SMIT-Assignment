import React from 'react'
import { Link, NavLink } from 'react-router'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav  className='flex flex-wrap justify-between items-center m-4 bg-amber-200 rounded-2xl'>
        <h1 className='m-2 font-bold text-medium'> SHOPMART </h1>
        <ul className='flex gap-4 m-4 flex-wrap justify-center items-center'>
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

