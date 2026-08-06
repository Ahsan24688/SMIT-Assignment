import React from 'react'
import Navbar from '../components/Navbar'
import { Link, Outlet } from 'react-router'

const Auth = () => {
    return (
        <>
            <Navbar />
            <div className='bg-amber-200 m-4 rounded-2xl flex justify-center gap-8 p-2 flex-wrap'>
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


