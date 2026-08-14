import React, { useEffect, useContext } from 'react'
import { useState } from 'react'
import { ThemeContext } from '../../components/Context'



const Register = () => {

    let [transition, setTransition] = useState(false)
    let { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        setTransition(true)
    }, [])


    return (
        <div className={`flex flex-col items-center justify-center w-full transition-all duration-800 ease-in-out  rounded-2xl ${transition ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} ${theme === 'dark' ? 'bg-indigo-300 text-black' : 'bg-amber-200 text-black'} 
              `} >
            <div className={`flex flex-col items-center justify-center max-w-md w-full bg-amber-200 m-4 p-4 rounded-2xl gap-6 ${theme === 'dark' ? 'bg-indigo-400 text-black' : 'bg-amber-200 text-black'}`}>
                <h1 className='font-bold text-2xl'>Register</h1>
                <input type="text" placeholder='Enter your Name' className='border-2 border-black rounded-2xl p-2 m-2 bg-white' />
                <input type="email" placeholder='Enter your email' className='border-2 border-black rounded-2xl p-2 m-2 bg-white' />
                <input type="password" placeholder='Enter your password' className='border-2 border-black rounded-2xl p-2 m-2 bg-white' />
                <button className='bg-blue-500 text-white rounded p-2 m-2 hover:bg-blue-300 transition-all'>Register</button>
            </div>
        </div >
    )
}

export default Register
