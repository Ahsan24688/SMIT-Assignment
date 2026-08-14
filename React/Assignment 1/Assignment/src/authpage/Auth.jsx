import React, { useEffect, useContext } from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, Outlet } from 'react-router'
import { ThemeContext } from '../components/Context'


const Auth = () => {

    let [transition, setTransition] = useState(false)
    let { theme, setTheme } = useContext(ThemeContext);


    useEffect(() => {
        setTransition(true)
    }, [])


    return (
        <>
            <Navbar />
            <div className={`bg-amber-200 m-4 rounded-2xl flex flex-wrap justify-center gap-8 p-2 transition-all duration-800 ease-in-out  ${transition ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} ${theme === 'dark' ? 'bg-indigo-200 text-black' : 'bg-amber-200 text-black'} `}>
                <Link to="/Auth/Register">
                    <button className='p-2 bg-blue-500 text-white rounded hover:bg-blue-300 transition-all'>Register</button>
                </Link>

                <Link to="/Auth/Login">
                    <button className='p-2 bg-blue-500 text-white rounded hover:bg-blue-300 transition-all'>Login</button>
                </Link>

                <Outlet />

            </div>
        </>
    )
}

export default Auth


