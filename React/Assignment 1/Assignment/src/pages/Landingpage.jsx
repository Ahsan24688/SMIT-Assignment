import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../landingassets/Hero'
import react, { useContext } from 'react'
import { ThemeContext } from '../components/Context'


const Landingpage = () => {

  let { theme, setTheme } = useContext(ThemeContext);

  return (

    <div className={`p-2 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-indigo-500 text-black'
      }`}>
      <Navbar />
      <Hero />



    </div>
  )
}

export default Landingpage


