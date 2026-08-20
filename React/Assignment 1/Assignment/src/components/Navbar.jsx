import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router'
import { useState } from 'react'
import { ThemeContext } from './Context'
import './navbar.css'

const Navbar = () => {

  let [isOpen, setIsOpen] = useState(false)

  let { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <nav className={`flex flex-wrap justify-between items-center m-4 rounded-2xl p-2 transition-all ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-amber-200 text-black'
        }`}>

        <div className='flex justify-between items-center w-full md:w-auto'>
          <h1 className='font-bold text-lg'> SHOPMART </h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden bg-blue-500 text-white px-3 py-1 rounded'
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>

        </div>

        <ul className={`${isOpen ? 'block' : 'hidden'} md:flex gap-4 items-center`}>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className='bg-blue-500 text-white px-3 py-1 rounded cursor-pointer'
          >
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button>
          <li className='m-2 hover:bg-blue-500 hover:text-white px-1 py-1 rounded'>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className='m-2 hover:bg-blue-500 hover:text-white px-1 py-1 rounded'>
            <NavLink to="/Products">Products</NavLink>
          </li>
          <li className='m-2 hover:bg-blue-500 hover:text-white px-1 py-1 rounded'>
            <NavLink to="/SearchProduct">Search Product</NavLink>
          </li>
          <li className='m-2'>
            <NavLink to="/Auth" className='p-2 bg-blue-500 text-white rounded hover:bg-blue-300 transition-all'> Register Here</NavLink>
          </li>
        </ul>
      </nav>


    </div>
  )
}

export default Navbar

